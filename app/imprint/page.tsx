'use client'

export default function ImprintPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '720px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Imprint</h1>
        <div style={{ marginTop: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
          <p>[Placeholder — add your contact details here:]</p>
          <p style={{ marginTop: '1rem' }}>
            [Name]<br />
            [City, Country]<br />
            [Email address]
          </p>
        </div>
      </div>
    </section>
  )
}
