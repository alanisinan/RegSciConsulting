'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link href="/" className="navbar-brand">
          <div style={{ width: 32, height: 32, background: 'var(--accent-color)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
          </div>
          RegSci <span style={{ fontWeight: 300, color: 'var(--text-secondary)' }}>Consulting</span>
        </Link>
        <div className="nav-links">
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
