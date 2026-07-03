export default function Footer() {
  return (
    <footer className="bg-blue" style={{ padding: '2rem 0', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem 1.5rem', flexWrap: 'wrap', textAlign: 'center' }}>
        <span>&copy; {new Date().getFullYear()} RegSci Consulting. All rights reserved. Regulatory & Scientific Affairs Middle East.</span>
        <a href="mailto:contact@regsci-consulting.com" style={{ color: 'var(--accent-yellow)', textDecoration: 'none', fontWeight: 600 }}>
          contact@regsci-consulting.com
        </a>
      </div>
    </footer>
  );
}
