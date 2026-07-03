'use client';

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
    <section id="expertise" style={{ padding: '8rem 0', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        
        <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <h2 style={{ margin: 0, maxWidth: '600px' }}>Our Expertise</h2>
          <p style={{ maxWidth: '400px', margin: 0 }}>
            Comprehensive regulatory and technical consultancy tailored for the Middle East market.
          </p>
        </div>
        
        <div className="divider" style={{ marginBottom: '0' }}></div>

        <div className="grid grid-cols-1 grid-cols-md-2" style={{ gap: '0' }}>
          {services.map((service, idx) => {
            const num = (idx + 1).toString().padStart(2, '0');
            const isRightColumn = idx % 2 !== 0;
            const isBottomRow = idx >= services.length - 2;

            return (
              <div 
                key={idx} 
                className="reveal"
                style={{ 
                  padding: '3rem', 
                  borderRight: isRightColumn ? 'none' : '1px solid var(--border-color)',
                  borderBottom: isBottomRow ? 'none' : '1px solid var(--border-color)',
                  position: 'relative',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--surface-color)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem', maxWidth: '80%' }}>{service.title}</h3>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', color: 'var(--accent-gold)' }}>{num}</span>
                </div>
                <p style={{ fontSize: '0.95rem', margin: 0 }}>{service.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
