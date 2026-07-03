'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-blue wave-bg" style={{ padding: 'clamp(4.5rem, 12vw, 8rem) 0', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <div style={{
        position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)',
        width: '900px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,204,0,0.12) 0%, rgba(255,204,0,0) 70%)',
        pointerEvents: 'none'
      }} />
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
      >

        <h1 style={{ fontSize: 'clamp(2.25rem, 7vw, 4rem)', lineHeight: 1.15, marginBottom: '1.5rem', maxWidth: '900px' }}>
          Consulting for the Food, Beverage & Supplement Industries
        </h1>

        <h3 style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)', fontFamily: 'var(--font-sans)', fontWeight: 700, marginBottom: '2rem', maxWidth: '800px', color: 'var(--accent-yellow)' }}>
          Global industry experts in Regulatory & Scientific Affairs and Market Access
        </h3>

        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.15rem)', marginBottom: '3rem', maxWidth: '700px', color: 'rgba(255,255,255,0.9)' }}>
          Expertise when your team needs added capacity, deeper technical guidance or structured support to reduce risk and keep critical work moving.
        </p>

        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="#contact" className="btn btn-yellow" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            Get Started Now
          </Link>
          <Link href="#services" className="btn btn-outline-white" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            Explore Services
          </Link>
        </div>

      </motion.div>
    </section>
  );
}
