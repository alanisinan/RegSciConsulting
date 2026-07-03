'use client';
export default function ContactForm() {
  return (
    <section id="contact" style={{ padding: '8rem 0', borderTop: '1px solid var(--border-color)', background: 'var(--surface-color)' }}>
      <div className="container">
        <div className="grid grid-cols-1 grid-cols-md-2" style={{ gap: '6rem' }}>
          
          <div className="reveal">
            <h2 style={{ marginBottom: '2rem' }}>Initiate a Project.</h2>
            <p style={{ marginBottom: '3rem', fontSize: '1.1rem' }}>
              Partner with RegSci Consulting to navigate the complex regulatory landscape of the GCC and ensure your products reach the market smoothly.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Location</h4>
                <p style={{ color: 'var(--primary-color)' }}>Dubai, United Arab Emirates<br/>Serving UAE, KSA, Oman, Qatar, Kuwait, Bahrain, Iraq</p>
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Direct Inquiry</h4>
                <p style={{ color: 'var(--primary-color)' }}>info@regsciconsulting.com</p>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>First Name</label>
                  <input type="text" style={{ padding: '1rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'var(--primary-color)', outline: 'none', fontSize: '1rem', transition: 'var(--transition)' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Last Name</label>
                  <input type="text" style={{ padding: '1rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'var(--primary-color)', outline: 'none', fontSize: '1rem', transition: 'var(--transition)' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Email Address</label>
                <input type="email" style={{ padding: '1rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'var(--primary-color)', outline: 'none', fontSize: '1rem', transition: 'var(--transition)' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Project Details</label>
                <textarea rows={4} style={{ padding: '1rem 0', background: 'transparent', border: 'none', borderBottom: '1px solid var(--border-color)', color: 'var(--primary-color)', outline: 'none', fontSize: '1rem', resize: 'vertical', transition: 'var(--transition)' }} onFocus={(e) => e.target.style.borderColor = 'var(--accent-gold)'} onBlur={(e) => e.target.style.borderColor = 'var(--border-color)'}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>Submit Inquiry</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
