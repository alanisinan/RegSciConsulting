import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ borderTop: 'var(--glass-border)', padding: '4rem 0 2rem 0', marginTop: '4rem', background: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        <div className="grid grid-cols-1 grid-cols-md-2" style={{ marginBottom: '3rem' }}>
          <div>
            <h3 style={{ marginBottom: '1rem' }}>RegSci Consulting</h3>
            <p style={{ maxWidth: '400px' }}>
              Regulatory and Technical Consultancy for Food Supplements, FSMP, and FSDU across the GCC and Middle East.
              <br /><br />
              <span style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>مختصر</span>
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
