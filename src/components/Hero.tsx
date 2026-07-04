'use client';
import Link from 'next/link';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-blue wave-bg" style={{ paddingTop: 'clamp(3.5rem, 7vw, 6rem)', paddingBottom: 'clamp(4.5rem, 9vw, 7.5rem)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <motion.div
        animate={reduce ? undefined : { scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={reduce ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', top: '-20%', left: '50%', translate: '-50% 0',
          width: '900px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,204,0,0.12) 0%, rgba(255,204,0,0) 70%)',
          pointerEvents: 'none'
        }}
      />
      <motion.div
        className="container"
        variants={reduce ? undefined : containerVariants}
        initial={reduce ? false : 'hidden'}
        animate="show"
        style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
      >

        <motion.h1 variants={reduce ? undefined : itemVariants} style={{ fontSize: 'clamp(2.1rem, 5.4vw, 3.4rem)', lineHeight: 1.15, marginBottom: '1.5rem', maxWidth: '1080px' }}>
          Consulting for the Food, Beverage & Supplement Industries
        </motion.h1>

        <motion.p variants={reduce ? undefined : itemVariants} style={{ fontSize: 'clamp(1.05rem, 3vw, 1.2rem)', fontWeight: 600, marginBottom: '3rem', maxWidth: '720px', color: 'var(--accent-yellow)' }}>
          Global regulatory and scientific affairs experts helping food, beverage &amp; supplement teams reduce risk and reach GCC market access faster.
        </motion.p>

        <motion.div variants={reduce ? undefined : itemVariants} style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <motion.span whileHover={{ scale: 1.045, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }} style={{ display: 'inline-block' }}>
            <Link href="#contact" className="btn btn-yellow" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              Get Started Now
            </Link>
          </motion.span>
          <motion.span whileHover={{ scale: 1.045, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }} style={{ display: 'inline-block' }}>
            <Link href="#services" className="btn btn-outline-white" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              Explore Services
            </Link>
          </motion.span>
        </motion.div>

      </motion.div>
    </section>
  );
}
