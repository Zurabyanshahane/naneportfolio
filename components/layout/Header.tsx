'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LanguageContext'
import { t, languages } from '@/lib/translations'

export default function Header() {
  const { lang, setLang } = useLang()

  const nav = [
    { href: '/dolls', label: t.nav.dolls[lang] },
    { href: '/theatre', label: t.nav.theatre[lang] },
    { href: '/digital-art', label: t.nav.digital[lang] },
    { href: '/about', label: t.nav.about[lang] },
    { href: '/contact', label: t.nav.contact[lang] },
  ]

  return (
    <header
      style={{
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg-light)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4.5rem',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-heading), serif',
            fontSize: '1.5rem',
            letterSpacing: '0.02em',
            textDecoration: 'none',
          }}
        >
          Soul of a Doll
        </Link>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontSize: '0.9rem',
                letterSpacing: '0.03em',
                textDecoration: 'none',
                color: 'var(--text-muted)',
              }}
            >
              {item.label}
            </Link>
          ))}

          <div style={{ display: 'flex', gap: '0.4rem', marginLeft: '0.5rem' }}>
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  letterSpacing: '0.05em',
                  padding: '0.2rem 0.3rem',
                  color: lang === l.code ? 'var(--text-dark)' : 'var(--accent-cool)',
                  fontWeight: lang === l.code ? 600 : 400,
                  borderBottom: lang === l.code ? '1px solid var(--text-dark)' : '1px solid transparent',
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
