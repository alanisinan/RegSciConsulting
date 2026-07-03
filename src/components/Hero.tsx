export default function Hero() {
  return (
    <section className="hero" style={{ padding: '8rem 0 4rem 0', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container grid grid-cols-1 grid-cols-md-2" style={{ alignItems: 'center', gap: '4rem' }}>
        <div className="animate-fade-in">
          <h1 style={{ marginBottom: '1.5rem' }}>
            Elevate Your <span className="text-gradient">Regulatory & Scientific</span> Strategy
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '500px' }}>
            Expert consultancy for Food Supplements, FSMP, and FSDU across the GCC and Middle East. From product concept to market access.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#services" className="btn btn-primary">Explore Services</a>
            <a href="#contact" className="btn btn-secondary">Book Consultation</a>
          </div>
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.2s', position: 'relative' }}>
          {/* Abstract graphic representation */}
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', borderRadius: '50%', width: '100%', maxWidth: '400px', margin: '0 auto', aspectRatio: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(11,19,43,0) 70%)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
            <h2 style={{ fontSize: '4rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>مختصر</h2>
            <p style={{ color: 'var(--accent-color)', fontWeight: 600, letterSpacing: '4px', textTransform: 'uppercase', fontSize: '1.2rem', margin: 0 }}>RegSci</p>
          </div>
        </div>
      </div>
    </section>
  );
}
