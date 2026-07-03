'use client';
import { useState } from 'react';

const faqs = [
  { q: 'What is important when a food or supplement company is looking for outside consulting expertise?', a: 'Finding a partner with deep regional knowledge of the GCC (UAE, Saudi Arabia, Oman, etc.) and specific technical experience in your product category.' },
  { q: 'What is most important when considering food or supplement regulatory consulting services?', a: 'Ensuring that the consultancy has a proven track record in successful dossier approvals and technical file preparation.' },
  { q: 'How can consulting support product development and regulatory approval in the supplement industry?', a: 'We review formulations for ingredient compliance, perform gap analysis, and prepare submission-ready dossiers to ensure rapid market access.' },
  { q: 'How do regulatory consulting services help manage global compliance requirements?', a: 'We provide regulatory intelligence, market surveillance, and compliance audits to keep your portfolio up-to-date with changing regulations.' },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" style={{ padding: '6rem 0', background: '#fff' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem', color: '#111' }}>FAQs</h2>
        <div style={{ borderTop: '1px solid var(--border-color)' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
              <button 
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                style={{ width: '100%', padding: '1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-dark)' }}
              >
                {faq.q}
                <span style={{ color: '#ccc' }}>{openIdx === i ? '−' : '›'}</span>
              </button>
              {openIdx === i && (
                <div style={{ paddingBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
