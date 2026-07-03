import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', background: '#fff', zIndex: 1000, boxShadow: '0 2px 4px rgba(0,0,0,0.05)', padding: '0.75rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-blue)', fontWeight: 700, fontSize: '1.5rem', fontFamily: 'var(--font-sans)' }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', border: '3px solid var(--primary-blue)', position: 'relative' }}>
             <div style={{ position: 'absolute', top: 4, left: 4, width: 8, height: 8, background: 'var(--accent-yellow)', borderRadius: '50%' }}></div>
          </div>
          RegSci <span style={{ fontWeight: 400 }}>Consulting</span>
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
