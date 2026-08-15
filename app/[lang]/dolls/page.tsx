import type { Metadata } from 'next'
import { requireLang } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'
import { t } from '@/lib/translations'

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/dolls'>): Promise<Metadata> {
  const lang = await requireLang(params)
  return pageMetadata(lang, '/dolls', t.dolls.title[lang], t.meta.dolls[lang])
}

export default async function DollsPage({ params }: PageProps<'/[lang]/dolls'>) {
  const lang = await requireLang(params)

  // Placeholder gallery — add real images later
  const gallery = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {/* Intro */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[720px] px-6">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)]">{t.dolls.title[lang]}</h1>
          <p className="mt-6 text-lg text-clay">{t.dolls.intro[lang]}</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-sand py-12 pt-8 md:py-20 md:pt-12">
        <div className="mx-auto max-w-page px-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {gallery.map((n) => (
              <div
                key={n}
                className="flex aspect-[3/4] items-center justify-center rounded-lg border border-line bg-cream text-xs text-mist"
              >
                [ doll {n} ]
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process journey */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[760px] px-6">
          <h2 className="mb-8 text-center text-3xl md:mb-12">
            {t.dolls.processTitle[lang]}
          </h2>

          <div className="flex flex-col gap-10 md:gap-12">
            {t.dolls.steps.map((step, i) => (
              <div key={i} className="grid items-center gap-4 md:grid-cols-2 md:gap-8">
                {/* Placeholder image for this step */}
                <div
                  className={`flex aspect-[4/3] items-center justify-center rounded-lg bg-sand text-xs text-mist ${
                    i % 2 === 0 ? '' : 'md:order-1'
                  }`}
                >
                  [ step {i + 1} ]
                </div>
                <div>
                  <div className="text-xs tracking-[0.1em] text-bordeaux uppercase">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-2 text-2xl">{step.title[lang]}</h3>
                  <p className="mt-2 text-clay">{step.text[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
