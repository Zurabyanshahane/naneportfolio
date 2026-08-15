import type { Metadata } from 'next'
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
    <section className="py-12 md:py-20">
      <div className="mx-auto grid max-w-[900px] items-start gap-8 px-6 md:grid-cols-[minmax(220px,1fr)_2fr] md:gap-12">
        {/* Placeholder portrait */}
        <div className="mx-auto flex aspect-[3/4] w-full max-w-xs items-center justify-center rounded-lg bg-sand text-xs text-mist md:mx-0 md:max-w-none">
          [ portrait ]
        </div>

        <div>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)]">{t.about.title[lang]}</h1>
          <p className="mt-6 text-lg text-clay">{t.about.body[lang]}</p>
        </div>
      </div>
    </section>
  )
}
