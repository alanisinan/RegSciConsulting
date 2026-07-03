import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ borderTop: 'var(--glass-border)', padding: '4rem 0 2rem 0', marginTop: '4rem', background: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        <div className="grid grid-cols-1 grid-cols-md-2" style={{ marginBottom: '3rem' }}>
          <div>
            <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: 24, height: 24, background: 'var(--accent-color)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              RegSci Consulting
            </h3>
            <p style={{ maxWidth: '400px' }}>
              Regulatory and Technical Consultancy for Food Supplements, FSMP, and FSDU across the GCC and Middle East.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap' }}>
            <div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Services</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><Link href="#services" style={{ color: 'var(--text-secondary)' }}>Product Concept</Link></li>
                <li><Link href="#services" style={{ color: 'var(--text-secondary)' }}>Formula Assessment</Link></li>
                <li><Link href="#services" style={{ color: 'var(--text-secondary)' }}>Dossier Preparation</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Contact</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ color: 'var(--text-secondary)' }}>Dubai, UAE</li>
                <li style={{ color: 'var(--text-secondary)' }}>info@regsciconsulting.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', borderTop: 'var(--glass-border)', paddingTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} RegSci Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
