import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-color)', padding: '6rem 0 3rem 0', background: 'var(--bg-color)' }}>
      <div className="container">
        <div className="grid grid-cols-1 grid-cols-md-2" style={{ marginBottom: '4rem', gap: '4rem' }}>
          <div>
            <h3 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', fontSize: '2rem' }}>
              RegSci Consulting
            </h3>
            <p style={{ maxWidth: '400px' }}>
              Authority and precision in Regulatory and Technical Consultancy for the Middle East market.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '4rem' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Navigation</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li><Link href="#expertise" style={{ color: 'var(--secondary-color)', fontSize: '0.9rem' }}>Expertise</Link></li>
                <li><Link href="#contact" style={{ color: 'var(--secondary-color)', fontSize: '0.9rem' }}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="divider" style={{ marginBottom: '2rem' }}></div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--secondary-color)', fontSize: '0.85rem' }}>
          <span>&copy; {new Date().getFullYear()} RegSci Consulting. All rights reserved.</span>
          <span>Designed with Intent.</span>
        </div>
      </div>
    </footer>
  );
}
