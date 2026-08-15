import type { Metadata } from 'next'
import Link from 'next/link'
import { requireLang } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'
import { t } from '@/lib/translations'

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
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[760px] px-6 text-center">
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)]">{t.home.heroTitle[lang]}</h1>
          <p className="mt-4 text-xl text-clay italic">{t.home.heroSubtitle[lang]}</p>
          <p className="mt-6 text-clay">{t.home.heroText[lang]}</p>
          <div className="mt-10">
            <Link href={`/${lang}/dolls`} className="btn">
              {t.home.viewWork[lang]}
            </Link>
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
