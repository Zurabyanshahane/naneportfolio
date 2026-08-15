'use client'

import { useLang } from '@/lib/LanguageContext'
import { t } from '@/lib/translations'

export default function ContactPage() {
  const { lang } = useLang()

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    background: 'var(--bg-light)',
    fontFamily: 'inherit',
    fontSize: '1rem',
    color: 'var(--text-dark)',
    marginTop: '0.5rem',
  }

  const labelStyle: React.CSSProperties = {
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.03em',
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '620px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{t.contact.title[lang]}</h1>
        <p style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
          {t.contact.intro[lang]}
        </p>

        {/*
          Netlify Forms: data-netlify="true" + hidden form-name.
          Works automatically once the site is live on Netlify.
        */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          <input type="hidden" name="form-name" value="contact" />

          <label style={labelStyle}>
            {t.contact.name[lang]}
            <input type="text" name="name" required style={inputStyle} />
          </label>

          <label style={labelStyle}>
            {t.contact.email[lang]}
            <input type="email" name="email" required style={inputStyle} />
          </label>

          <label style={labelStyle}>
            {t.contact.message[lang]}
            <textarea name="message" rows={5} required style={inputStyle} />
          </label>

          <div>
            <button type="submit" className="btn">
              {t.contact.send[lang]}
            </button>
          </div>
        </form>

        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          {t.contact.orDm[lang]}{' '}
          <a
            href="https://www.instagram.com/soul_of_a_doll/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent-warm)' }}
          >
            @soul_of_a_doll
          </a>
        </p>
      </div>
    </section>
  )
}
