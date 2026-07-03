const services = [
  { title: 'Product Concept & Feasibility', desc: 'Regulatory classification, target market assessment, and gap analysis against GCC regulations.' },
  { title: 'Formula Assessment', desc: 'Review formulations for ingredient compliance, safety, novel ingredients, and permitted vitamins.' },
  { title: 'Product Development Support', desc: 'R&D collaboration for regulatory-friendly formulations, stability, and packaging.' },
  { title: 'Label & Artwork Review', desc: 'Ensure label compliance, Arabic requirements, allergen declarations, and nutrition facts.' },
  { title: 'Claims Review', desc: 'Nutrition, health, and medical claims review with scientific substantiation and compliance.' },
  { title: 'FSMP Classification', desc: 'Intended use assessment and clinical evidence review for Foods for Special Medical Purposes.' },
  { title: 'Technical Documentation', desc: 'Preparation of product specifications, stability summaries, and technical reports.' },
  { title: 'Regulatory Dossier', desc: 'Complete registration dossier compilation and submission-ready files.' },
  { title: 'Submission Support', desc: 'Support for UAE, Saudi Arabia, Bahrain, Kuwait, Qatar, Oman, and Iraq registrations.' },
  { title: 'Compliance Audits', desc: 'Existing product review, market surveillance, and corrective action plans.' },
  { title: 'Training', desc: 'Workshops on GCC food supplement regulations, FSMP, labeling, and technical dossiers.' },
  { title: 'Market Entry Consulting', desc: 'Regulatory roadmap, timelines, cost estimation, and distributor support.' },
  { title: 'Scientific & Medical Review', desc: 'Literature review, clinical data evaluation, and benefit-risk assessments.' },
  { title: 'Regulatory Intelligence', desc: 'Ongoing updates on changing regulations, compliance alerts, and product impact.' }
];

export default function ServicesGrid() {
  return (
    <section id="services" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="text-gradient" style={{ display: 'inline-block' }}>Our Expertise</h2>
          <p style={{ maxWidth: '600px', margin: '1rem auto', fontSize: '1.1rem' }}>
            Comprehensive regulatory and technical consultancy tailored for the Middle East market.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3" style={{ gap: '1.5rem' }}>
          {services.map((service, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ width: 48, height: 48, background: 'rgba(16,185,129,0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--accent-color)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ fontSize: '0.95rem', marginBottom: 0, flex: 1 }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
