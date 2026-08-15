'use client'

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '720px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Privacy</h1>
        <div style={{ marginTop: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
          <p>[Placeholder — add your privacy note here.]</p>
          <p style={{ marginTop: '1rem' }}>
            [Since you use a contact form, this page should explain what data (name, email,
            message) you collect and why. A free privacy-policy generator can help you write it.]
          </p>
        </div>
      </div>
    </section>
  )
}
