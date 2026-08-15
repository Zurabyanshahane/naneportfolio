'use client'

import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function DollsPage() {
  const { lang } = useLang()

  // Placeholder gallery — add real images later
  const gallery = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {/* Intro */}
      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{t.dolls.title[lang]}</h1>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            {t.dolls.intro[lang]}
          </p>
        </div>
      </section>

      {/* Galerie */}
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
                  aspectRatio: '3 / 4',
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
                [ doll {n} ]
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prozess-Reise */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>
            {t.dolls.processTitle[lang]}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {t.dolls.steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2rem',
                  alignItems: 'center',
                }}
              >
                {/* Placeholder image for this step */}
                <div
                  style={{
                    aspectRatio: '4 / 3',
                    background: 'var(--bg-section)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cool)',
                    fontSize: '0.8rem',
                    order: i % 2 === 0 ? 0 : 1,
                  }}
                >
                  [ step {i + 1} ]
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--accent-warm)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', marginTop: '0.5rem' }}>{step.title[lang]}</h3>
                  <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>{step.text[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
