'use client';
import { motion, useReducedMotion } from 'framer-motion';

export default function AboutUs() {
  const reduce = useReducedMotion();
  return (
    <section id="about" style={{ padding: '8rem 0', background: '#fff' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h4 style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', marginBottom: '1rem' }}>About Us</h4>
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: 'var(--primary-blue-dark)', marginBottom: '2rem', lineHeight: 1.2, fontFamily: 'var(--font-serif)' }}>
              Bridging global innovation with Middle East compliance.
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              RegSci Consulting was founded by specialized scientists and regulatory experts with a singular mission: to simplify the complex regulatory landscape of the GCC for global food, beverage, and supplement brands.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              We don't just fill out forms. We provide deep technical guidance, clinical evidence reviews, and strategic market entry roadmaps to ensure your product not only enters the market, but thrives securely.
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            style={{ background: 'var(--bg-cyan-light)', padding: '3.5rem', borderRadius: '16px', boxShadow: 'var(--shadow-md)' }}
          >
             <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-blue)', marginBottom: '2rem', fontFamily: 'var(--font-sans)', fontWeight: 700 }}>Our Regional Focus</h3>
             <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
               {['UAE', 'Saudi Arabia', 'Oman', 'Qatar', 'Kuwait', 'Bahrain', 'Iraq'].map(country => (
                 <li key={country} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-dark)', fontWeight: 600, fontSize: '1.1rem' }}>
                   <span style={{ color: 'var(--accent-yellow)', fontSize: '1.5rem', lineHeight: 1 }}>★</span> {country}
                 </li>
               ))}
             </ul>
             <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#fff', borderRadius: '8px', borderLeft: '4px solid var(--primary-blue)' }}>
               <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                 "Navigating the nuances of local health authorities requires on-the-ground expertise. We are your local partners in the GCC."
               </p>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
