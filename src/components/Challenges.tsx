export default function Challenges() {
  return (
    <section className="bg-cyan-light" style={{ padding: '6rem 0' }}>
      <div className="container">
        <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: 'var(--font-sans)' }}>We understand the food and supplement industries.</p>
        <h2 style={{ fontSize: '3rem', maxWidth: '800px', marginBottom: '4rem', color: '#111' }}>Your Work Capacity and Expertise Challenges Solved</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '3rem', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ color: 'var(--bg-cyan)', fontSize: '4rem', lineHeight: 0.8, fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>&ldquo;</div>
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', fontWeight: 700, marginBottom: '2rem' }}>
              Our teams do not have enough bandwidth for the complexity and volume of Middle East regulations.
            </h3>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Solution</h4>
            <p style={{ color: 'var(--text-dark)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              RegSci Consulting can supplement your team for short- or long-term needs caused by regulatory complexity, new product launches or shifting science in the GCC.
            </p>
          </div>

          <div style={{ background: '#fff', borderRadius: '16px', padding: '3rem', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ color: 'var(--bg-cyan)', fontSize: '4rem', lineHeight: 0.8, fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>&ldquo;</div>
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', fontWeight: 700, marginBottom: '2rem' }}>
              We need a critical review of our FSMP clinical evidence and technical dossiers before submission.
            </h3>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Solution</h4>
            <p style={{ color: 'var(--text-dark)', fontSize: '0.95rem', marginBottom: '2rem' }}>
              RegSci Consulting seamlessly integrates deep scientific evaluation and clinical data review to reduce friction with authorities and avoid costly rework.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="#contact" className="btn btn-yellow" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
            Overcome Your Regulatory Challenges Today
          </a>
        </div>
      </div>
    </section>
  );
}
