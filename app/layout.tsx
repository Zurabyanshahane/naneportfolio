import type { Metadata } from 'next'
import {
  Cormorant_Garamond,
  Inter,
  Noto_Serif_Armenian,
  Noto_Sans_Armenian,
} from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

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

export const metadata: Metadata = {
  title: 'Soul of a Doll',
  description: 'Handmade dolls with soul — one of a kind. Dolls, theatre and digital art.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${headingArm.variable} ${body.variable} ${bodyArm.variable}`}
      style={{
        // Fallback chain: the Armenian font kicks in automatically for Armenian characters
        ['--font-heading' as string]: 'var(--font-heading-latin), var(--font-heading-arm)',
        ['--font-body' as string]: 'var(--font-body-latin), var(--font-body-arm)',
      }}
    >
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
