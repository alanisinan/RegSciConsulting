export default function ByTheNumbers() {
  return (
    <section className="bg-blue" style={{ padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--accent-yellow)', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>14+</div>
            <div style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>GCC Markets</div>
          </div>
          <div>
            <div style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--accent-yellow)', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>100+</div>
            <div style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>Dossiers Submitted</div>
          </div>
          <div>
            <div style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--accent-yellow)', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>15+</div>
            <div style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>Years Experience</div>
          </div>
          <div>
            <div style={{ fontSize: '3.5rem', fontWeight: 700, color: 'var(--accent-yellow)', fontFamily: 'var(--font-serif)', lineHeight: 1 }}>0</div>
            <div style={{ color: '#fff', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem' }}>Regulatory Rejections</div>
          </div>
        </div>
      </div>
    </section>
  );
}
