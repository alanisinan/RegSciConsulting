'use client';

export default function ContactForm() {
  return (
    <section id="contact" style={{ padding: '6rem 0', background: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        <div className="grid grid-cols-1 grid-cols-md-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div>
            <h2 className="text-gradient">Ready to Market Your Product?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              Partner with RegSci Consulting to navigate the complex regulatory landscape of the GCC and ensure your products reach the market smoothly.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--surface-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>📍</div>
                <span style={{ fontSize: '1.05rem' }}>Serving UAE, KSA, Oman, Qatar, Kuwait, Bahrain, Iraq</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--surface-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>✉️</div>
                <span style={{ fontSize: '1.05rem' }}>info@regsciconsulting.com</span>
              </li>
            </ul>
          </div>
          <div className="glass-panel" style={{ padding: '3rem' }}>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Name</label>
                <input type="text" style={{ width: '100%', padding: '0.875rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.2)', color: 'var(--text-primary)', outline: 'none', fontSize: '1rem' }} placeholder="Your Name" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Email</label>
                <input type="email" style={{ width: '100%', padding: '0.875rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.2)', color: 'var(--text-primary)', outline: 'none', fontSize: '1rem' }} placeholder="you@company.com" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Message</label>
                <textarea rows={4} style={{ width: '100%', padding: '0.875rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.2)', color: 'var(--text-primary)', outline: 'none', resize: 'vertical', fontSize: '1rem' }} placeholder="Tell us about your product or regulatory needs..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', fontSize: '1.05rem', padding: '1rem' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
