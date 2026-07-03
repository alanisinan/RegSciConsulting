'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

function AnimatedCounter({ value, suffix = '' }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <div ref={ref} style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--accent-yellow)', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>
      {displayValue}{suffix}
    </div>
  );
}

export default function ByTheNumbers() {
  return (
    <section className="bg-blue" style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div>
            <AnimatedCounter value={14} suffix="+" />
            <div style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>GCC Markets</div>
          </div>
          <div>
            <AnimatedCounter value={100} suffix="+" />
            <div style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>Dossiers Submitted</div>
          </div>
          <div>
            <AnimatedCounter value={15} suffix="+" />
            <div style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>Years Experience</div>
          </div>
          <div>
            <AnimatedCounter value={0} />
            <div style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>Regulatory Rejections</div>
          </div>
        </div>
      </div>
    </section>
  );
}
