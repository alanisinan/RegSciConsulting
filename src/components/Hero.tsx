import Link from 'next/link';

export default function Hero() {
  return (
    <section style={{ paddingTop: '12rem', paddingBottom: '6rem', minHeight: '90vh', display: 'flex', flexDirection: 'column' }}>
      <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="grid grid-cols-1 grid-cols-md-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
          
          <div className="reveal">
            <h4 style={{ fontFamily: 'var(--font-sans)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', color: 'var(--accent-gold)', marginBottom: '2rem' }}>
              GCC & Middle East
            </h4>
            <h1 style={{ marginBottom: '2.5rem', maxWidth: '800px' }}>
              Turning Regulatory Complexity Into Market Access.
            </h1>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link href="#expertise" className="btn btn-primary">
                View Expertise
              </Link>
              <Link href="#contact" className="btn btn-outline">
                Book Consultation
              </Link>
            </div>
          </div>

          <div className="reveal reveal-delay-1" style={{ paddingTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '1px solid var(--border-color)', paddingLeft: '3rem' }}>
            <p style={{ fontSize: '1.25rem', color: 'var(--primary-color)' }}>
              We provide authoritative technical consultancy for Food Supplements, FSMP, and FSDU. Our precision ensures your products meet strict compliance standards seamlessly.
            </p>
            <div className="divider"></div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              <div>
                <span style={{ display: 'block', fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', lineHeight: 1 }}>07</span>
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary-color)', marginTop: '0.5rem', display: 'block' }}>Key Markets</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '2.5rem', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', lineHeight: 1 }}>14+</span>
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--secondary-color)', marginTop: '0.5rem', display: 'block' }}>Service Areas</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
