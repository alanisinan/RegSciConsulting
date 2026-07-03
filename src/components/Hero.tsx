import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-blue wave-bg" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ display: 'flex', position: 'relative', zIndex: 1 }}>
        <div style={{ flex: 1, paddingRight: '2rem', paddingBottom: '4rem' }}>
          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', color: 'rgba(255,255,255,0.8)' }}>
            Home &gt; Consulting
          </div>
          <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '1.5rem', maxWidth: '600px' }}>
            Consulting for the Food, Beverage & Supplement Industries
          </h1>
          <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-sans)', fontWeight: 700, marginBottom: '1.5rem', maxWidth: '600px' }}>
            Global industry experts in Regulatory & Scientific Affairs and Market Access
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '500px', color: 'rgba(255,255,255,0.9)' }}>
            Expertise when your team needs added capacity, deeper technical guidance or structured support to reduce risk and keep critical work moving.
          </p>
          <Link href="#contact" className="btn btn-yellow" style={{ fontSize: '1.1rem', padding: '0.875rem 2rem' }}>
            Get Started Now
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <div style={{ 
            position: 'absolute', right: '-10%', top: '-20%', width: '120%', height: '140%', 
            background: 'url("https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80") center/cover',
            borderBottomLeftRadius: '50%', borderTopLeftRadius: '50%',
            boxShadow: '-10px 0 30px rgba(0,0,0,0.2)'
          }}></div>
        </div>
      </div>
    </section>
  );
}
