'use client';
export default function ContactForm() {
  return (
    <section id="contact" className="bg-cyan" style={{ padding: '6rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '3rem', color: '#111', lineHeight: 1.1, marginBottom: '1rem' }}>Ready to support your team<br/>and meet deadlines?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Our experts will reach out to schedule a discussion.</p>
        </div>
        
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>First Name *</label>
              <input type="text" placeholder="Enter your first name*" style={{ width: '100%', padding: '0.875rem', borderRadius: '8px', border: '1px solid #fff', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Last Name *</label>
              <input type="text" placeholder="Enter your last name*" style={{ width: '100%', padding: '0.875rem', borderRadius: '8px', border: '1px solid #fff', outline: 'none' }} />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Email *</label>
            <input type="email" placeholder="Enter your company email*" style={{ width: '100%', padding: '0.875rem', borderRadius: '8px', border: '1px solid #fff', outline: 'none' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Company *</label>
              <input type="text" placeholder="Your company name" style={{ width: '100%', padding: '0.875rem', borderRadius: '8px', border: '1px solid #fff', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Phone</label>
              <input type="tel" placeholder="Phone number" style={{ width: '100%', padding: '0.875rem', borderRadius: '8px', border: '1px solid #fff', outline: 'none' }} />
            </div>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.5rem' }}>Write us a message *</label>
            <textarea rows={5} placeholder="Type your message here..." style={{ width: '100%', padding: '0.875rem', borderRadius: '8px', border: '1px solid #fff', outline: 'none', resize: 'vertical' }}></textarea>
          </div>
          <button type="submit" className="btn btn-yellow" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}>Contact Us</button>
        </form>
      </div>
    </section>
  );
}
