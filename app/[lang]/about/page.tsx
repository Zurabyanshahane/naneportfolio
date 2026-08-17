import type { Metadata } from 'next'
import Link from 'next/link'
import { requireLang } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'
import { t } from '@/lib/translations'

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/about'>): Promise<Metadata> {
  const lang = await requireLang(params)
  return pageMetadata(lang, '/about', t.about.title[lang], t.meta.about[lang])
}

export default async function AboutPage({ params }: PageProps<'/[lang]/about'>) {
  const lang = await requireLang(params)

  return (
    <>
      <section className="py-12 md:py-20">
        <div className="mx-auto grid max-w-[900px] items-start gap-8 px-6 md:grid-cols-[minmax(220px,1fr)_2fr] md:gap-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/portrait.jpg"
            alt="Nane"
            width={1122}
            height={1402}
            className="mx-auto h-auto w-full max-w-xs grayscale md:mx-0 md:max-w-none"
          />

          <div>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)]">{t.about.title[lang]}</h1>
            <p className="mt-6 text-lg text-clay">{t.about.body[lang]}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`/${lang}/contact`} className="btn">
                {t.nav.contact[lang]}
              </Link>
              <a
                href="https://www.instagram.com/soul_of_a_doll/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* A glimpse of each of the three worlds named in the text */}
      <section className="bg-sand py-12 md:py-16">
        <div className="mx-auto grid max-w-page gap-4 px-6 md:grid-cols-3">
          {[
            { src: '/dolls/clown-girl.jpg', href: `/${lang}/dolls`, label: t.nav.dolls[lang] },
            { src: '/masks/harlequin.jpg', href: `/${lang}/theatre`, label: t.nav.theatre[lang] },
            { src: '/art/jay.jpg', href: `/${lang}/digital-art`, label: t.nav.digital[lang] },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="group block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="mt-3 text-xs tracking-[0.2em] text-clay uppercase transition-colors group-hover:text-ink">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
