'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Home() {
  const { lang } = useLang()

  const areas = [
    { href: '/dolls', title: t.nav.dolls[lang], intro: t.home.dollsIntro[lang] },
    { href: '/theatre', title: t.nav.theatre[lang], intro: t.home.theatreIntro[lang] },
    { href: '/digital-art', title: t.nav.digital[lang], intro: t.home.digitalIntro[lang] },
  ]

  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            {t.home.heroTitle[lang]}
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: 'var(--text-muted)',
              marginTop: '1rem',
              fontStyle: 'italic',
            }}
          >
            {t.home.heroSubtitle[lang]}
          </p>
          <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)' }}>
            {t.home.heroText[lang]}
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <Link href="/dolls" className="btn">
              {t.home.viewWork[lang]}
            </Link>
          </div>
        </div>
      </section>

      {/* Drei Bereiche */}
      <section className="section section-alt">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem',
            }}
          >
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  background: 'var(--bg-light)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                {/* Placeholder image — replace with a real photo later */}
                <div
                  style={{
                    aspectRatio: '4 / 3',
                    background: 'var(--bg-section)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cool)',
                    fontSize: '0.8rem',
                  }}
                >
                  [ {area.title} ]
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem' }}>{area.title}</h3>
                  <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                    {area.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
