'use client'

import Link from 'next/link'
import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function Footer() {
  const { lang } = useLang()

  return (
    <footer
      className="section-alt"
      style={{ borderTop: '1px solid var(--border)', padding: '3rem 0' }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1.5rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontFamily: 'var(--font-heading), serif', fontSize: '1.25rem' }}>
            Soul of a Doll
          </div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            {t.footer.tagline[lang]}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <a
            href="https://www.instagram.com/soul_of_a_doll/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            Instagram
          </a>
          <Link href="/imprint" style={{ textDecoration: 'none' }}>
            {t.footer.imprint[lang]}
          </Link>
          <Link href="/privacy" style={{ textDecoration: 'none' }}>
            {t.footer.privacy[lang]}
          </Link>
        </div>
      </div>
    </footer>
  )
}
