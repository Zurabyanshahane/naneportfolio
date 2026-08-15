'use client'

import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function DigitalArtPage() {
  const { lang } = useLang()
  const gallery = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{t.digital.title[lang]}</h1>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            {t.digital.intro[lang]}
          </p>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {gallery.map((n) => (
              <div
                key={n}
                style={{
                  aspectRatio: '1 / 1',
                  background: 'var(--bg-light)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-cool)',
                  fontSize: '0.8rem',
                }}
              >
                [ art {n} ]
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
