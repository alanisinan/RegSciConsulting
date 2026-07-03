export default function CoreServices() {
  return (
    <section id="services" className="bg-blue" style={{ padding: '4rem 0 0 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem' }}>Help When You Need It</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginBottom: '3rem' }}>
          Specialized experts in the food, beverage and supplement industries
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div style={{ background: 'var(--primary-blue-dark)', padding: '2.5rem', borderRadius: '8px', color: '#fff' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>✓</div>
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600, marginBottom: '1rem' }}>Food & Beverage Regulatory & Scientific Affairs Consulting</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
              On-demand scientific and regulatory affairs consulting to meet evolving business needs. Product concept and feasibility across GCC.
            </p>
            <a href="#contact" style={{ color: 'var(--accent-yellow)', textDecoration: 'underline', fontSize: '0.9rem', fontWeight: 600 }}>Talk to an Expert</a>
          </div>

          <div style={{ background: 'var(--primary-blue-dark)', padding: '2.5rem', borderRadius: '8px', color: '#fff' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>✓</div>
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600, marginBottom: '1rem' }}>Supplements Scientific & Regulatory Affairs Consulting</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
              Expert support across novel foods, formulation, clinical studies, FSMP classification, and technical dossiers.
            </p>
            <a href="#contact" style={{ color: 'var(--accent-yellow)', textDecoration: 'underline', fontSize: '0.9rem', fontWeight: 600 }}>Talk to an Expert</a>
          </div>

          <div style={{ background: 'var(--primary-blue-dark)', padding: '2.5rem', borderRadius: '8px', color: '#fff' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>✓</div>
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600, marginBottom: '1rem' }}>Market Entry & Compliance Audits</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
              Regulatory roadmap, registration timelines, existing product review, and corrective action plans for the Middle East.
            </p>
            <a href="#contact" style={{ color: 'var(--accent-yellow)', textDecoration: 'underline', fontSize: '0.9rem', fontWeight: 600 }}>Talk to an Expert</a>
          </div>

        </div>
      </div>
      
      <div style={{ width: '100%', height: '200px', marginTop: '4rem', background: 'url("https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80") center/cover' }}></div>
    </section>
  );
}
