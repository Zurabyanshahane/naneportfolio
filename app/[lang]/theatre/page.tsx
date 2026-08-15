import type { Metadata } from 'next'
import { requireLang } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'
import { t } from '@/lib/translations'

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/theatre'>): Promise<Metadata> {
  const lang = await requireLang(params)
  return pageMetadata(lang, '/theatre', t.theatre.title[lang], t.meta.theatre[lang])
}

export default async function TheatrePage({ params }: PageProps<'/[lang]/theatre'>) {
  const lang = await requireLang(params)
  const gallery = [1, 2, 3, 4]

  return (
    <>
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[720px] px-6">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)]">{t.theatre.title[lang]}</h1>
          <p className="mt-6 text-lg text-clay">{t.theatre.intro[lang]}</p>
        </div>
      </section>

      <section className="bg-sand py-12 pt-8 md:py-20 md:pt-12">
        <div className="mx-auto max-w-page px-6">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {gallery.map((n) => (
              <div
                key={n}
                className="flex aspect-[4/3] items-center justify-center rounded-lg border border-line bg-cream text-xs text-mist"
              >
                [ theatre {n} ]
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
