import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-blue wave-bg" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <h1 style={{ fontSize: '4rem', lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '900px' }}>
          Consulting for the Food, Beverage & Supplement Industries
        </h1>
        
        <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-sans)', fontWeight: 700, marginBottom: '2rem', maxWidth: '800px', color: 'var(--accent-yellow)' }}>
          Global industry experts in Regulatory & Scientific Affairs and Market Access
        </h3>
        
        <p style={{ fontSize: '1.15rem', marginBottom: '3rem', maxWidth: '700px', color: 'rgba(255,255,255,0.9)' }}>
          Expertise when your team needs added capacity, deeper technical guidance or structured support to reduce risk and keep critical work moving.
        </p>
        
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
          <Link href="#contact" className="btn btn-yellow" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            Get Started Now
          </Link>
          <Link href="#services" className="btn btn-outline-white" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            Explore Services
          </Link>
        </div>
        
      </div>
    </section>
  );
}
