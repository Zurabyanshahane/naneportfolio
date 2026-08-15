'use client'

import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function TheatrePage() {
  const { lang } = useLang()
  const gallery = [1, 2, 3, 4]

  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{t.theatre.title[lang]}</h1>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            {t.theatre.intro[lang]}
          </p>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: '3rem' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {gallery.map((n) => (
              <div
                key={n}
                style={{
                  aspectRatio: '4 / 3',
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
                [ theatre {n} ]
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
