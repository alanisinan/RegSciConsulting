import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" style={{ padding: '8rem 0 4rem 0', minHeight: '90vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Glowing Orbs */}
      <div className="glow-orb" style={{ top: '-10%', left: '-10%', width: '500px', height: '500px', background: 'rgba(59, 130, 246, 0.2)' }}></div>
      <div className="glow-orb" style={{ bottom: '-10%', right: '-5%', width: '600px', height: '600px', background: 'rgba(16, 185, 129, 0.15)' }}></div>

      <div className="container grid grid-cols-1 grid-cols-md-2" style={{ alignItems: 'center', gap: '4rem', zIndex: 1, position: 'relative' }}>
        <div className="animate-fade-in">
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '50px', color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.5rem', letterSpacing: '1px' }}>
            PREMIER MIDDLE EAST CONSULTANCY
          </div>
          <h1 style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Elevate Your <br />
            <span className="animated-gradient-text" style={{ fontSize: '1.1em' }}>Regulatory & Scientific</span><br />
            Strategy
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', maxWidth: '500px', color: '#D1D5DB' }}>
            Expert consultancy for Food Supplements, FSMP, and FSDU across the GCC. We turn regulatory complexity into market access.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="#services" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', animation: 'pulse-glow 2s infinite' }}>
              Explore Services
            </Link>
            <Link href="#contact" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Book Consultation
            </Link>
          </div>
        </div>
        
        <div className="animate-fade-in floating" style={{ animationDelay: '0.2s', position: 'relative', display: 'flex', justifyContent: 'center' }}>
          {/* Eye-catchy Abstract Graphic */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '450px', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            
            {/* Outer rotating ring */}
            <div style={{ position: 'absolute', inset: 0, border: '2px dashed rgba(16, 185, 129, 0.3)', borderRadius: '50%', animation: 'spin-slow 20s linear infinite' }}></div>
            
            {/* Inner rotating ring */}
            <div style={{ position: 'absolute', inset: '40px', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '50%', animation: 'spin-reverse-slow 15s linear infinite' }}></div>
            
            {/* Center glass panel */}
            <div className="glass-panel" style={{ 
              position: 'relative', 
              width: '200px', 
              height: '200px', 
              borderRadius: '50%', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center', 
              background: 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(11,19,43,0.8) 100%)', 
              border: '1px solid rgba(16, 185, 129, 0.4)',
              boxShadow: '0 0 40px rgba(16, 185, 129, 0.3)'
            }}>
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '1rem' }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <p style={{ color: '#fff', fontWeight: 700, letterSpacing: '2px', fontSize: '1.2rem', margin: 0 }}>RegSci</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
