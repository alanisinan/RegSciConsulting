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
  const stats = [
    { value: 14, suffix: '+', label: 'GCC Markets' },
    { value: 100, suffix: '+', label: 'Dossiers Submitted' },
    { value: 15, suffix: '+', label: 'Years Experience' },
    { value: 0, suffix: '', label: 'Regulatory Rejections' },
  ];

  return (
    <section style={{
      padding: '4rem 0',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      background: 'linear-gradient(180deg, var(--primary-blue) 0%, var(--primary-blue-dark) 100%)'
    }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div style={{ width: '32px', height: '3px', borderRadius: '2px', background: 'var(--accent-yellow)', margin: '0.9rem auto 0.7rem', opacity: 0.8 }} />
              <div style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
