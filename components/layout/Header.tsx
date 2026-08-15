'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { t, languages, type Lang } from '@/lib/translations'

function LangSwitcher({ lang, onNavigate }: { lang: Lang; onNavigate: () => void }) {
  // Link to the same page in the other language: swap the locale prefix
  const pathname = usePathname()
  const rest = pathname.replace(/^\/(en|ru|hy)(?=\/|$)/, '')

  return (
    <div className="flex gap-1.5">
      {languages.map((l) => (
        <Link
          key={l.code}
          href={`/${l.code}${rest}`}
          onClick={onNavigate}
          aria-current={lang === l.code ? 'true' : undefined}
          className={`px-1 py-0.5 text-xs tracking-widest ${
            lang === l.code
              ? 'border-b border-ink font-semibold text-ink'
              : 'border-b border-transparent text-mist'
          }`}
        >
          {l.label}
        </Link>
      ))}
    </div>
  )
}

export default function Header({ lang }: { lang: Lang }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const nav = [
    { href: `/${lang}/dolls`, label: t.nav.dolls[lang] },
    { href: `/${lang}/theatre`, label: t.nav.theatre[lang] },
    { href: `/${lang}/digital-art`, label: t.nav.digital[lang] },
    { href: `/${lang}/about`, label: t.nav.about[lang] },
    { href: `/${lang}/contact`, label: t.nav.contact[lang] },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream">
      <div className="mx-auto flex h-18 max-w-page items-center justify-between px-6">
        <Link
          href={`/${lang}`}
          onClick={closeMenu}
          className="font-heading text-2xl tracking-wide"
        >
          Soul of a Doll
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm tracking-wide text-clay transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2">
            <LangSwitcher lang={lang} onNavigate={closeMenu} />
          </div>
        </nav>

        {/* Mobile: language switcher stays visible, nav collapses behind a burger */}
        <div className="flex items-center gap-4 lg:hidden">
          <LangSwitcher lang={lang} onNavigate={closeMenu} />
          <button
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Menu"
            className="-mr-2 cursor-pointer p-2 text-ink"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" />
                  <line x1="18" y1="4" x2="4" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" />
                  <line x1="3" y1="11" x2="19" y2="11" />
                  <line x1="3" y1="16" x2="19" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-cream lg:hidden">
          <div className="mx-auto flex max-w-page flex-col px-6 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-line py-3 text-sm tracking-wide text-clay last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
