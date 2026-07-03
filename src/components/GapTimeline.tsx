export default function GapTimeline() {
  const steps = [
    { step: 'Step 1', title: 'Identify the gaps', desc: 'Staff cannot keep up with new GCC regulations, scientific questions or dossier reviews.' },
    { step: 'Step 2', title: 'Evaluate business impact and risks', desc: 'Launch delay, compliance issues, reputation damage, customer expectations.' },
    { step: 'Step 3', title: 'Assess internal capabilities', desc: 'Look at existing deadlines, technical coverage, regional Middle East knowledge.' },
    { step: 'Step 4', title: 'Estimate cost of delay', desc: 'Cost of rework or compliance exposure vs. cost of consulting support.' },
    { step: 'Step 5', title: 'Scope needs based on success parameters', desc: 'Plan for defensible claims, audit-ready documentation, deadlines achieved.' },
  ];

  return (
    <section id="gap-analysis" style={{ padding: '6rem 0', background: '#fff' }}>
      <div className="container" style={{ background: '#00509E', borderRadius: '16px', padding: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '4rem' }}>Evaluate Your Food & Supplement Expertise Gap</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '10px', left: '10%', right: '10%', height: '4px', background: 'var(--bg-cyan)' }}></div>
          
          {steps.map((s, i) => (
            <div key={i} style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--accent-yellow)', border: '4px solid var(--bg-cyan)', margin: '0 auto 1.5rem auto' }}></div>
              <div style={{ color: 'var(--accent-yellow)', fontWeight: 700, fontFamily: 'var(--font-sans)', marginBottom: '1rem', fontSize: '1.1rem' }}>{s.step}</div>
              <h4 style={{ color: '#fff', fontSize: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 600, marginBottom: '1rem' }}>{s.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', lineHeight: 1.4 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
