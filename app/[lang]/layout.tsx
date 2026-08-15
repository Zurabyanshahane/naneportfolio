import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  Cormorant_Garamond,
  Inter,
  Noto_Serif_Armenian,
  Noto_Sans_Armenian,
} from 'next/font/google'
import '../globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { hasLocale, locales, t } from '@/lib/translations'
import { SITE_URL } from '@/lib/seo'

// Headline serif — covers Latin + Cyrillic
const heading = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-heading-latin',
})

// Armenian headline serif
const headingArm = Noto_Serif_Armenian({
  subsets: ['armenian'],
  weight: ['400', '500', '600'],
  variable: '--font-heading-arm',
})

// Body text — Latin + Cyrillic
const body = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body-latin',
})

// Armenian body text
const bodyArm = Noto_Sans_Armenian({
  subsets: ['armenian'],
  variable: '--font-body-arm',
})

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({
  params,
}: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: 'Soul of a Doll',
      template: '%s · Soul of a Doll',
    },
    description: t.meta.site[lang],
  }
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  return (
    <html
      lang={lang}
      className={`${heading.variable} ${headingArm.variable} ${body.variable} ${bodyArm.variable}`}
    >
      <body>
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  )
}
