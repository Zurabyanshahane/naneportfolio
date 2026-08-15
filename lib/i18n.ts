import { notFound } from 'next/navigation'
import { hasLocale, type Lang } from './translations'

// Resolve and validate the [lang] route param.
export async function requireLang(
  params: Promise<{ lang: string }>
): Promise<Lang> {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return lang
}
