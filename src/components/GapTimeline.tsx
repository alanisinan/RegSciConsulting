'use client';
import { motion, useReducedMotion } from 'framer-motion';

export default function GapTimeline() {
  const reduce = useReducedMotion();
  const steps = [
    { 
      title: 'Concept & Feasibility', 
      desc: 'We analyze your product formula and claims against strict GCC standards before you invest heavily in production.' 
    },
    { 
      title: 'Scientific Gap Analysis', 
      desc: 'Identifying non-compliant ingredients, novel food classifications, and missing clinical evidence for FSMP.' 
    },
    { 
      title: 'Dossier Compilation', 
      desc: 'Building robust, submission-ready technical files and specifications tailored for UAE, KSA, and regional authorities.' 
    },
    { 
      title: 'Regulatory Submission', 
      desc: 'Navigating the complex, multi-layered registration processes directly with local health ministries.' 
    },
    { 
      title: 'Market Access & Beyond', 
      desc: 'Securing your product\'s legal status and providing ongoing surveillance to ensure continuous post-market compliance.' 
    },
  ];

  return (
    <section id="gap-analysis" style={{ padding: '8rem 0', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', top: '10%', right: '-10%',
        width: '700px', height: '700px', borderRadius: '50%',
        background: 'radial-gradient(circle, var(--bg-cyan) 0%, rgba(208,244,247,0) 70%)',
        opacity: 0.6, pointerEvents: 'none'
      }} />
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: 'var(--primary-blue-dark)', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
            The Path to GCC Market Access
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            A structured, risk-mitigated approach to bringing your food and supplement products to the Middle East quickly and compliantly.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
          {steps.map((s, i) => (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              key={i} 
              style={{ 
              background: '#fff', 
              borderRadius: '16px', 
              padding: '2rem', 
              boxShadow: 'var(--shadow-md)',
              position: 'relative',
              borderTop: '6px solid var(--accent-yellow)',
              marginTop: i % 2 !== 0 ? '3rem' : '0',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e: any) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e: any) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <motion.div
                initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1 + 0.15, type: 'spring', stiffness: 260, damping: 18 }}
                style={{
                width: '40px', height: '40px',
                background: 'var(--primary-blue)', color: '#fff',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1.5rem',
                fontFamily: 'var(--font-serif)'
              }}>
                {i + 1}
              </motion.div>
              <h4 style={{ color: 'var(--primary-blue-dark)', fontSize: '1.1rem', fontFamily: 'var(--font-sans)', fontWeight: 700, marginBottom: '1rem' }}>
                {s.title}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
