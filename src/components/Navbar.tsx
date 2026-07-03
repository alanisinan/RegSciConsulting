'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <div style={{ width: 12, height: 12, background: 'var(--accent-gold)' }}></div>
          RegSci Consulting
        </Link>
        <div className="nav-links">
          <Link href="#expertise">Expertise</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
