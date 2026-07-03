'use client';
import { useState } from 'react';

const faqs = [
  { q: 'What is important when a food or supplement company is looking for outside consulting expertise?', a: 'Finding a partner with deep regional knowledge of the GCC (UAE, Saudi Arabia, Oman, etc.) and specific technical experience in your product category.' },
  { q: 'What is most important when considering food or supplement regulatory consulting services?', a: 'Ensuring that the consultancy has a proven track record in successful dossier approvals and technical file preparation.' },
  { q: 'How can consulting support product development and regulatory approval in the supplement industry?', a: 'We review formulations for ingredient compliance, perform gap analysis, and prepare submission-ready dossiers to ensure rapid market access.' },
  { q: 'What is required to classify a product as an FSMP (Food for Special Medical Purposes) in the Middle East?', a: 'FSMP classification requires a specialized assessment of intended use, patient populations, medical supervision requirements, and a rigorous review of clinical evidence to scientifically justify the classification.' },
  { q: 'Do you review labeling and artwork for GCC compliance?', a: 'Yes, label and artwork review is one of our most requested services. We ensure your nutrition facts, ingredient lists, allergen declarations, mandatory statements, and Arabic translations are fully compliant.' },
  { q: 'Can you help substantiate health or medical claims on our products?', a: 'Absolutely. We provide deep scientific substantiation and compliance reviews for nutrition, health, medical, and disease-risk reduction claims to ensure they meet local authority standards.' },
  { q: 'What does the market entry process look like for overseas manufacturers?', a: 'We build a complete regulatory roadmap outlining country-specific requirements across the GCC, estimated registration timelines, necessary technical documents, and cost estimations so you can launch predictably.' },
  { q: 'How do regulatory consulting services help manage post-market compliance?', a: 'We provide ongoing regulatory intelligence, market surveillance reviews, portfolio compliance audits, and custom training workshops for your team.' }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: '8rem 0', background: 'var(--bg-cyan-light)' }}>
      <div className="container">
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>
          
          <div style={{ flex: '1 1 350px', position: 'sticky', top: '120px' }}>
             <h4 style={{ color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '1rem', fontWeight: 700 }}>Got Questions?</h4>
             <h2 style={{ fontSize: '3rem', color: 'var(--primary-blue-dark)', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', lineHeight: 1.1 }}>
               Frequently Asked Questions
             </h2>
             <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
               Everything you need to know about working with RegSci Consulting and navigating the GCC regulatory landscape.
             </p>
             <a href="#contact" style={{ 
               display: 'inline-block', padding: '1rem 2rem', border: '2px solid var(--primary-blue)', 
               color: 'var(--primary-blue)', fontWeight: 600, borderRadius: '8px', textDecoration: 'none',
               transition: 'background 0.2s',
             }}>
               Ask a Custom Question
             </a>
          </div>

          <div style={{ flex: '2 1 500px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => {
              const isOpen = openIdx === i;
              return (
                <div key={i} style={{ 
                  background: '#fff', 
                  borderRadius: '16px', 
                  boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)', 
                  border: isOpen ? '1px solid var(--primary-blue)' : '1px solid transparent',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}>
                  <button 
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    style={{ 
                      width: '100%', padding: '1.5rem 2rem', 
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                      background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', 
                      fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.1rem', 
                      color: isOpen ? 'var(--primary-blue)' : 'var(--primary-blue-dark)' 
                    }}
                  >
                    <span style={{ paddingRight: '2rem', lineHeight: 1.4 }}>{faq.q}</span>
                    <span style={{ 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                      width: '36px', height: '36px', borderRadius: '50%',
                      background: isOpen ? 'var(--primary-blue)' : 'var(--bg-cyan-light)',
                      color: isOpen ? '#fff' : 'var(--primary-blue)',
                      fontSize: '1.5rem', lineHeight: 1,
                      transform: isOpen ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.3s ease, background 0.3s ease'
                    }}>+</span>
                  </button>
                  
                  <div style={{ 
                    maxHeight: isOpen ? '500px' : '0', 
                    opacity: isOpen ? 1 : 0,
                    transition: 'all 0.3s ease',
                    padding: isOpen ? '0 2rem 1.5rem 2rem' : '0 2rem'
                  }}>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
        
      </div>
    </section>
  );
}
