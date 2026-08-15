import type { Metadata } from 'next'
import Link from 'next/link'
import { requireLang } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'
import { t } from '@/lib/translations'

// Hero image. To swap it, point src at another file in public/art or public/dolls
// and update w/h to that file's pixel size (keeps the layout from jumping).
const heroImage = { src: '/art/red-fox.jpg', label: 'Red Fox', w: 874, h: 1280 }

export async function generateMetadata({
  params,
}: PageProps<'/[lang]'>): Promise<Metadata> {
  const lang = await requireLang(params)
  const meta = pageMetadata(lang, '', 'Soul of a Doll', t.meta.site[lang])
  // Avoid "Soul of a Doll · Soul of a Doll" from the title template
  return { ...meta, title: { absolute: 'Soul of a Doll' } }
}

export default async function Home({ params }: PageProps<'/[lang]'>) {
  const lang = await requireLang(params)

  const areas = [
    { href: `/${lang}/dolls`, title: t.nav.dolls[lang], intro: t.home.dollsIntro[lang] },
    { href: `/${lang}/theatre`, title: t.nav.theatre[lang], intro: t.home.theatreIntro[lang] },
    { href: `/${lang}/digital-art`, title: t.nav.digital[lang], intro: t.home.digitalIntro[lang] },
  ]

  return (
    <>
      {/* Hero */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-page px-6">
          <div className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
            {/* Text side */}
            <div className="md:col-span-5">
              <p className="flex items-center gap-2 text-xs tracking-[0.18em] text-clay uppercase">
                <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-bordeaux" />
                {t.home.eyebrow[lang]}
              </p>

              <h1 className="mt-6 text-[clamp(2.75rem,7vw,5rem)] leading-[1.05]">
                {t.home.greeting[lang]}
              </h1>

              <p className="mt-5 text-sm tracking-[0.12em] text-bordeaux uppercase">
                {t.home.roles[lang]}
              </p>

              <p className="mt-6 max-w-md text-clay">{t.home.heroText[lang]}</p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href={`/${lang}/dolls`} className="btn">
                  {t.home.viewWork[lang]}
                </Link>
                <Link
                  href={`/${lang}/about`}
                  className="text-sm tracking-wide text-clay underline underline-offset-4 transition-colors hover:text-ink"
                >
                  {t.home.aboutMe[lang]}
                </Link>
              </div>
            </div>

            {/* Single artwork, given room to carry the hero on its own */}
            <div className="md:col-span-5 md:col-start-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={heroImage.src}
                alt={heroImage.label}
                width={heroImage.w}
                height={heroImage.h}
                className="mx-auto h-auto w-full max-w-sm md:max-w-none"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The three areas */}
      <section className="bg-sand py-12 md:py-20">
        <div className="mx-auto max-w-page px-6">
          <div className="grid gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {areas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="block overflow-hidden rounded-xl border border-line bg-cream"
              >
                {/* Placeholder image — replace with a real photo later */}
                <div className="flex aspect-[4/3] items-center justify-center bg-sand text-xs text-mist">
                  [ {area.title} ]
                </div>
                <div className="p-6">
                  <h3 className="text-2xl">{area.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-clay">{area.intro}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
