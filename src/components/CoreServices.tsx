'use client';
import { motion, useReducedMotion } from 'framer-motion';

export default function CoreServices() {
  const reduce = useReducedMotion();
  const services = [
    { title: 'Formula & Claims Assessment', desc: 'Ingredient compliance, novel foods, safety, and claim substantiation.' },
    { title: 'Product Development', desc: 'R&D collaboration, stability reviews, and regulatory-friendly formulation.' },
    { title: 'Label & Artwork', desc: 'Nutrition facts, allergen declarations, and Arabic labeling compliance.' },
    { title: 'FSMP Classification', desc: 'Intended use evaluation and clinical evidence review for medical foods.' },
    { title: 'Technical Documentation', desc: 'Finished product specifications, certificates, and stability summaries.' },
    { title: 'Regulatory Dossiers', desc: 'Complete compilation of submission-ready files and gap analyses.' },
    { title: 'Submission Support', desc: 'End-to-end registration across UAE, KSA, Bahrain, Kuwait, Qatar, Oman, and Iraq.' },
    { title: 'Compliance Audits', desc: 'Portfolio reviews, market surveillance, and corrective action plans.' },
    { title: 'Market Entry Strategy', desc: 'Regulatory roadmaps, registration timelines, and cost estimation.' },
    { title: 'Scientific & Medical Review', desc: 'Deep literature reviews, monographs, and benefit-risk assessments.' },
    { title: 'Regulatory Intelligence', desc: 'Monthly updates, compliance alerts, and product impact assessments.' },
    { title: 'Corporate Training', desc: 'Custom workshops on GCC supplement regulations, labeling, and dossiers.' }
  ];

  return (
    <section id="services" className="bg-blue wave-bg" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', color: '#fff', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>Help When You Need It</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '600px' }}>
              We provide highly specialized scientific and regulatory support tailored for the Middle East market.
            </p>
          </div>
          <a href="#contact" className="btn btn-yellow" style={{ padding: '0.875rem 2rem' }}>Talk to an Expert</a>
        </div>

        <div style={{ columns: '280px 3', columnGap: '1rem' }}>
          {services.map((srv, i) => {
            const featured = i < 3;
            return (
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: Math.min(i * 0.05, 0.4), duration: 0.4 }}
                key={i}
                style={{
                breakInside: 'avoid',
                marginBottom: '1rem',
                background: featured ? 'rgba(255, 204, 0, 0.06)' : 'rgba(255, 255, 255, 0.03)',
                padding: featured ? '1.85rem' : '1.5rem',
                borderRadius: '8px',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderRight: '1px solid rgba(255,255,255,0.1)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                borderLeft: featured ? '3px solid var(--accent-yellow)' : '1px solid rgba(255,255,255,0.1)',
                transition: 'background 0.2s, transform 0.2s, box-shadow 0.2s',
                cursor: 'default'
              }}
              onMouseEnter={(e: any) => {
                e.currentTarget.style.background = featured ? 'rgba(255, 204, 0, 0.12)' : 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 24px -8px rgba(0,0,0,0.35)';
              }}
              onMouseLeave={(e: any) => {
                e.currentTarget.style.background = featured ? 'rgba(255, 204, 0, 0.06)' : 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ color: 'var(--accent-yellow)', fontSize: '0.85rem', fontFamily: 'var(--font-sans)', fontWeight: 700, marginTop: '2px' }}>{(i + 1).toString().padStart(2, '0')}</div>
                  <div>
                    <h3 style={{ fontSize: featured ? '1.2rem' : '1.1rem', color: '#fff', fontFamily: 'var(--font-sans)', fontWeight: 600, marginBottom: '0.5rem' }}>{srv.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, margin: 0 }}>
                      {srv.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
