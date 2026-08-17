import type { Metadata } from 'next'
import { requireLang } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'
import { t } from '@/lib/translations'

const gallery = [
  '/dolls/clown-girl.jpg',
  '/dolls/hedgehog-with-net.jpg',
  '/dolls/blue-haired-girl.jpg',
  '/dolls/rabbit-in-velvet.jpg',
  '/dolls/hedgehog-portrait.jpg',
  '/dolls/rabbit-with-baby.jpg',
  '/dolls/red-haired-girl.jpg',
  '/dolls/snow-baby.jpg',
  '/dolls/christmas-elf.jpg',
  '/dolls/unicorn-lavender.jpg',
  '/dolls/balloon-and-rabbit.jpg',
  '/dolls/winter-ornaments.jpg',
]

// One photo per step of the process below.
const stepImages = [
  '/theatre/gexeckuhi/goblin-mask-in-progress.jpg',
  '/masks/white-masks-group.jpg',
  '/dolls/snow-baby.jpg',
  '/dolls/hedgehog-with-net.jpg',
  '/dolls/clown-girl.jpg',
]

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/dolls'>): Promise<Metadata> {
  const lang = await requireLang(params)
  return pageMetadata(lang, '/dolls', t.dolls.title[lang], t.meta.dolls[lang])
}

export default async function DollsPage({ params }: PageProps<'/[lang]/dolls'>) {
  const lang = await requireLang(params)

  return (
    <>
      {/* Intro */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[720px] px-6">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)]">{t.dolls.title[lang]}</h1>
          <p className="mt-6 text-lg text-clay">{t.dolls.intro[lang]}</p>
        </div>
      </section>

      {/* Gallery — masonry, so nothing is cropped */}
      <section className="bg-sand py-12 pt-8 md:py-20 md:pt-12">
        <div className="mx-auto max-w-page px-6">
          <div className="columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
            {gallery.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                className="mb-3 block w-full break-inside-avoid md:mb-4"
              />
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={stepImages[i]}
                  alt={step.title[lang]}
                  loading="lazy"
                  className={`aspect-[4/3] w-full rounded-sm object-cover ${
                    i % 2 === 0 ? '' : 'md:order-1'
                  }`}
                />
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
