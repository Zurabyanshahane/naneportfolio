'use client'

import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function AboutPage() {
  const { lang } = useLang()

  return (
    <section className="section">
      <div
        className="container"
        style={{
          maxWidth: '900px',
          display: 'grid',
          gridTemplateColumns: 'minmax(220px, 1fr) 2fr',
          gap: '3rem',
          alignItems: 'start',
        }}
      >
        {/* Placeholder portrait */}
        <div
          style={{
            aspectRatio: '3 / 4',
            background: 'var(--bg-section)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-cool)',
            fontSize: '0.8rem',
          }}
        >
          [ portrait ]
        </div>

        <div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{t.about.title[lang]}</h1>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            {t.about.body[lang]}
          </p>
        </div>
      </div>
    </section>
  )
}
