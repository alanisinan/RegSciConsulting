export default function Footer() {
  return (
    <footer className="bg-blue" style={{ padding: '2rem 0', textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
      <div className="container">
        &copy; {new Date().getFullYear()} RegSci Consulting. All rights reserved. Regulatory & Scientific Affairs Middle East.
      </div>
    </footer>
  );
}
