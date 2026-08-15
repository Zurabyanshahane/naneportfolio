import type { Metadata } from 'next'
import { requireLang } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'
import { t } from '@/lib/translations'

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/digital-art'>): Promise<Metadata> {
  const lang = await requireLang(params)
  return pageMetadata(lang, '/digital-art', t.digital.title[lang], t.meta.digital[lang])
}

export default async function DigitalArtPage({
  params,
}: PageProps<'/[lang]/digital-art'>) {
  const lang = await requireLang(params)
  const gallery = [1, 2, 3, 4, 5, 6]

  return (
    <>
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[720px] px-6">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)]">{t.digital.title[lang]}</h1>
          <p className="mt-6 text-lg text-clay">{t.digital.intro[lang]}</p>
        </div>
      </section>

      <section className="bg-sand py-12 pt-8 md:py-20 md:pt-12">
        <div className="mx-auto max-w-page px-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {gallery.map((n) => (
              <div
                key={n}
                className="flex aspect-square items-center justify-center rounded-lg border border-line bg-cream text-xs text-mist"
              >
                [ art {n} ]
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
