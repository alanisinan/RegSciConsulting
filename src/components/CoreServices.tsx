'use client';
export default function CoreServices() {
  const services = [
    {
      title: 'Formula Assessment',
      desc: 'Review formulations for ingredient compliance, novel ingredients, additives, safety, and maximum daily intakes before manufacturing.'
    },
    {
      title: 'Product Development Support',
      desc: 'Work alongside R&D teams to recommend ingredient substitutions, review stability, and advise on regulatory-friendly formulations.'
    },
    {
      title: 'Label & Artwork Review',
      desc: 'Ensure complete compliance for nutrition facts, ingredient and allergen declarations, mandatory statements, and Arabic labeling.'
    },
    {
      title: 'Claims Review',
      desc: 'Scientific substantiation and compliance for nutrition, health, medical, and disease-risk reduction claims.'
    },
    {
      title: 'FSMP Classification & Assessment',
      desc: 'Specialized evaluation of intended use, patient populations, and clinical evidence for Foods for Special Medical Purposes.'
    },
    {
      title: 'Technical Documentation',
      desc: 'Prepare and review finished product and raw material specifications, certificates, and stability summaries.'
    },
    {
      title: 'Regulatory Dossier Preparation',
      desc: 'Comprehensive compilation of submission-ready files, technical summaries, and gap analysis documentation.'
    },
    {
      title: 'Regulatory Submission Support',
      desc: 'End-to-end registration support and authority follow-up across UAE, Saudi Arabia, Bahrain, Kuwait, Qatar, Oman, and Iraq.'
    },
    {
      title: 'Compliance Audits',
      desc: 'Review existing portfolios, conduct market surveillance, assess non-compliance risks, and build corrective action plans.'
    },
    {
      title: 'Training',
      desc: 'Workshops for manufacturers on GCC supplement regulations, FSMP, labeling requirements, and dossier preparation.'
    },
    {
      title: 'Market Entry Consulting',
      desc: 'Build regulatory roadmaps for overseas manufacturers, detailing country-specific requirements, timelines, and costs.'
    },
    {
      title: 'Scientific & Medical Review',
      desc: 'Deep literature reviews, clinical data evaluation, ingredient monographs, and benefit-risk assessments.'
    },
    {
      title: 'Regulatory Intelligence',
      desc: 'Stay ahead with monthly regulatory updates, compliance alerts, and product impact assessments for new regulations.'
    }
  ];

  return (
    <section id="services" className="bg-blue" style={{ padding: '6rem 0 0 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Help When You Need It</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', marginBottom: '4rem', maxWidth: '700px' }}>
          Comprehensive scientific and regulatory affairs consulting designed to meet your evolving business needs across the Middle East.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {services.map((srv, i) => (
            <div key={i} style={{ 
              background: 'var(--primary-blue-dark)', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              color: '#fff', 
              border: '1px solid rgba(255,255,255,0.05)', 
              display: 'flex', 
              flexDirection: 'column',
              boxShadow: 'var(--shadow-md)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
            }}
            >
              <div style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid var(--accent-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-yellow)', fontSize: '1.1rem' }}>✓</div>
              <h3 style={{ fontSize: '1.35rem', fontFamily: 'var(--font-sans)', fontWeight: 700, marginBottom: '1rem' }}>{srv.title}</h3>
              <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', flex: 1, lineHeight: 1.6 }}>
                {srv.desc}
              </p>
              <a href="#contact" style={{ color: 'var(--accent-yellow)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, display: 'inline-block', textTransform: 'uppercase', letterSpacing: '1px' }}>Talk to an Expert →</a>
            </div>
          ))}

        </div>
      </div>
      
      <div style={{ width: '100%', height: '300px', marginTop: '6rem', background: 'url("https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80") center/cover', borderTop: '4px solid var(--accent-yellow)' }}></div>
    </section>
  );
}
