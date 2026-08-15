import type { Metadata } from 'next'
import type { Lang } from './translations'

export const SITE_URL = 'https://soulofadoll.art'

const ogLocale: Record<Lang, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  hy: 'hy_AM',
}

// Shared per-page metadata: canonical + hreflang alternates + Open Graph.
// `path` is the page path without the locale prefix, e.g. '' or '/dolls'.
export function pageMetadata(
  lang: Lang,
  path: string,
  title: string,
  description: string
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}${path}`,
      languages: {
        en: `/en${path}`,
        ru: `/ru${path}`,
        hy: `/hy${path}`,
        'x-default': `/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `/${lang}${path}`,
      siteName: 'Soul of a Doll',
      type: 'website',
      locale: ogLocale[lang],
    },
  }
}
