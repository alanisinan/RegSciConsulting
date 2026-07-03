import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', background: '#fff', zIndex: 1000, boxShadow: '0 2px 4px rgba(0,0,0,0.05)', padding: '0.75rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-blue)', textDecoration: 'none' }}>
          <img src="/logo.png" alt="RegSci Consulting Logo" style={{ height: '64px', objectFit: 'contain' }} />
          <div style={{ height: '36px', width: '1px', background: 'var(--border-color)', margin: '0 0.75rem' }}></div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-blue-dark)', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: 1.4 }}>
              Regulatory & Scientific Affairs
            </span>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Consulting Company
            </span>
          </div>
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="#services" style={{ color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>Services</Link>
          <Link href="#gap-analysis" style={{ color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>Gap Analysis</Link>
          <Link href="#faq" style={{ color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>FAQ</Link>
          <Link href="#contact" className="btn btn-yellow" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
