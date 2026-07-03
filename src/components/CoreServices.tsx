'use client';

export default function CoreServices() {
  const services = [
    { title: 'Formula Assessment', desc: 'Ingredient compliance, novel ingredients, additives, and safety reviews.' },
    { title: 'Product Development', desc: 'R&D collaboration, stability reviews, and regulatory-friendly formulation.' },
    { title: 'Label & Artwork', desc: 'Nutrition facts, allergen declarations, and Arabic labeling compliance.' },
    { title: 'Claims Review', desc: 'Substantiation for nutrition, health, and disease-risk reduction claims.' },
    { title: 'FSMP Classification', desc: 'Intended use evaluation and clinical evidence review for medical foods.' },
    { title: 'Technical Documentation', desc: 'Finished product specifications, certificates, and stability summaries.' },
    { title: 'Regulatory Dossiers', desc: 'Complete compilation of submission-ready files and gap analyses.' },
    { title: 'Submission Support', desc: 'End-to-end registration across UAE, KSA, Bahrain, Kuwait, Qatar, Oman, and Iraq.' },
    { title: 'Compliance Audits', desc: 'Portfolio reviews, market surveillance, and corrective action plans.' },
    { title: 'Training', desc: 'Workshops on GCC supplement regulations, labeling, and dossiers.' },
    { title: 'Market Entry', desc: 'Regulatory roadmaps, registration timelines, and cost estimation.' },
    { title: 'Scientific Review', desc: 'Deep literature reviews, monographs, and benefit-risk assessments.' },
    { title: 'Regulatory Intelligence', desc: 'Monthly updates, compliance alerts, and product impact assessments.' }
  ];

  return (
    <section id="services" className="bg-blue" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Help When You Need It</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '600px' }}>
              We provide highly specialized scientific and regulatory support tailored for the Middle East market.
            </p>
          </div>
          <a href="#contact" className="btn btn-yellow" style={{ padding: '0.875rem 2rem' }}>Talk to an Expert</a>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {services.map((srv, i) => (
            <div key={i} style={{ 
              background: 'rgba(255, 255, 255, 0.03)', 
              padding: '1.5rem', 
              borderRadius: '8px', 
              border: '1px solid rgba(255,255,255,0.1)',
              transition: 'background 0.2s',
              cursor: 'default'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ color: 'var(--accent-yellow)', fontSize: '1.25rem', marginTop: '-2px' }}>✦</div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 600, marginBottom: '0.5rem' }}>{srv.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, margin: 0 }}>
                    {srv.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
