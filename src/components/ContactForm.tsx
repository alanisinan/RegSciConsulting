'use client';
import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <section id="contact" style={{ padding: '8rem 0', background: 'var(--bg-cyan-light)', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 10 }}>

        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--primary-blue-dark)', lineHeight: 1.1, marginBottom: '1.5rem', fontFamily: 'var(--font-serif)' }}>Ready to overcome your regulatory hurdles?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>Speak with our senior scientists and regulatory experts to build your compliance roadmap today.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ background: '#fff', borderRadius: '24px', padding: '4rem', boxShadow: 'var(--shadow-lg)' }}>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-blue-dark)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>First Name *</label>
                <input type="text" placeholder="John" style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', background: '#f8fafc', fontSize: '1rem', transition: 'border-color 0.2s' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-blue-dark)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Last Name *</label>
                <input type="text" placeholder="Doe" style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', background: '#f8fafc', fontSize: '1rem', transition: 'border-color 0.2s' }} />
              </div>
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-blue-dark)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Company Email *</label>
              <input type="email" placeholder="john@company.com" style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', background: '#f8fafc', fontSize: '1rem', transition: 'border-color 0.2s' }} />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-blue-dark)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Company Name *</label>
                <input type="text" placeholder="Your Company" style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', background: '#f8fafc', fontSize: '1rem', transition: 'border-color 0.2s' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-blue-dark)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Target Market</label>
                <select style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', background: '#f8fafc', fontSize: '1rem', color: 'var(--text-dark)', cursor: 'pointer' }}>
                  <option>UAE</option>
                  <option>Saudi Arabia</option>
                  <option>Multiple GCC Markets</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-blue-dark)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>How can we help? *</label>
              <textarea rows={4} placeholder="Briefly describe your product and regulatory needs..." style={{ width: '100%', padding: '1.2rem', borderRadius: '12px', border: '1px solid var(--border-color)', outline: 'none', background: '#f8fafc', fontSize: '1rem', resize: 'vertical', transition: 'border-color 0.2s' }}></textarea>
            </div>
            
            <button type="submit" className="btn btn-yellow" style={{ width: '100%', padding: '1.5rem', fontSize: '1.2rem', marginTop: '1rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              Request Consultation <span>→</span>
            </button>
            <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', margin: 0 }}>
              Your data is strictly confidential. We never share your information.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
