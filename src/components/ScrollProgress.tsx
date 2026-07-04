'use client';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, { stiffness: 300, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        transformOrigin: '0% 50%',
        background: 'linear-gradient(90deg, var(--accent-yellow) 0%, var(--primary-blue) 100%)',
        zIndex: 1100,
        scaleX: reduce ? scrollYProgress : smoothed,
      }}
    />
  );
}
