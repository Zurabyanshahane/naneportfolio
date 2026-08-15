import Link from 'next/link'
import { t, type Lang } from '@/lib/translations'

export default function Footer({ lang }: { lang: Lang }) {
  return (
    <footer className="border-t border-line bg-sand py-12">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-6 px-6">
        <div>
          <div className="font-heading text-xl">Soul of a Doll</div>
          <div className="mt-1 text-sm text-clay">{t.footer.tagline[lang]}</div>
        </div>

        <div className="flex flex-wrap gap-6 text-sm text-clay">
          <a
            href="https://www.instagram.com/soul_of_a_doll/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            Instagram
          </a>
          <Link href={`/${lang}/imprint`} className="transition-colors hover:text-ink">
            {t.footer.imprint[lang]}
          </Link>
          <Link href={`/${lang}/privacy`} className="transition-colors hover:text-ink">
            {t.footer.privacy[lang]}
          </Link>
        </div>
      </div>
    </footer>
  )
}
