'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', background: '#fff', zIndex: 1000, boxShadow: '0 2px 4px rgba(0,0,0,0.05)', padding: '0.75rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-blue)', textDecoration: 'none', minWidth: 0 }}>
          <img src="/logo.png" alt="RegSci Consulting Logo" style={{ height: '56px', objectFit: 'contain', flexShrink: 0 }} />
          <div className="navbar-tagline" style={{ height: '36px', width: '1px', background: 'var(--border-color)', margin: '0 0.75rem', flexShrink: 0 }}></div>
          <div className="navbar-tagline" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary-blue-dark)', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: 1.4, whiteSpace: 'nowrap' }}>
              Regulatory & Scientific Affairs
            </span>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', whiteSpace: 'nowrap' }}>
              Consulting Company
            </span>
          </div>
        </Link>

        <div className="navbar-links" style={{ display: 'flex', gap: '2.25rem', alignItems: 'center' }}>
          <Link href="#services" className="nav-link">Services</Link>
          <Link href="#gap-analysis" className="nav-link">Gap Analysis</Link>
          <Link href="#faq" className="nav-link">FAQ</Link>
          <Link href="#contact" className="btn btn-yellow" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
            Contact Us
          </Link>
        </div>

        <button
          className="navbar-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>

      {open && (
        <div className="navbar-mobile-menu">
          <Link href="#services" className="nav-link" onClick={() => setOpen(false)}>Services</Link>
          <Link href="#gap-analysis" className="nav-link" onClick={() => setOpen(false)}>Gap Analysis</Link>
          <Link href="#faq" className="nav-link" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="#contact" className="btn btn-yellow" style={{ textAlign: 'center', marginTop: '0.5rem' }} onClick={() => setOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
