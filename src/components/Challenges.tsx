'use client';
import { motion } from 'framer-motion';

const cards = [
  {
    quote: 'Our teams do not have enough bandwidth for the complexity and volume of Middle East regulations.',
    solution: 'RegSci Consulting can supplement your team for short- or long-term needs caused by regulatory complexity, new product launches or shifting science in the GCC.',
  },
  {
    quote: 'We need a critical review of our FSMP clinical evidence and technical dossiers before submission.',
    solution: 'RegSci Consulting seamlessly integrates deep scientific evaluation and clinical data review to reduce friction with authorities and avoid costly rework.',
  },
];

export default function Challenges() {
  return (
    <section style={{ padding: '6rem 0', background: '#fff' }}>
      <div className="container">
        <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)' }}>We understand the food and supplement industries.</p>
        <h2 style={{ fontSize: '3rem', maxWidth: '800px', marginBottom: '4rem', color: '#111' }}>Your Work Capacity and Expertise Challenges Solved</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                background: 'var(--bg-cyan-light)',
                borderRadius: '16px',
                padding: '3rem',
                boxShadow: 'var(--shadow-sm)',
                borderTop: '4px solid var(--primary-blue)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e: any) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={(e: any) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div style={{ color: 'var(--primary-blue)', opacity: 0.35, fontSize: '4rem', lineHeight: 0.8, fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>&ldquo;</div>
              <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', fontWeight: 700, marginBottom: '2rem' }}>
                {card.quote}
              </h3>
              <div style={{ background: '#fff', borderRadius: '10px', borderLeft: '3px solid var(--primary-blue)', padding: '1.5rem 1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--primary-blue)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  <h4 style={{ color: 'var(--primary-blue)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, margin: 0 }}>Our Solution</h4>
                </div>
                <p style={{ color: 'var(--text-dark)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  {card.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="#contact" className="btn btn-yellow" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Overcome Your Regulatory Challenges Today
          </a>
        </div>
      </div>
    </section>
  );
}
