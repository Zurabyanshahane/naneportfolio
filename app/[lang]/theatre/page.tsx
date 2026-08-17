import type { Metadata } from 'next'
import { requireLang } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'
import { t } from '@/lib/translations'

// Grouped the way the studio folders are organised: the mask collection
// first, then the pieces belonging to each production.
const groups = [
  {
    name: 'Commedia dell’arte',
    images: [
      '/masks/masks-installation.jpg',
      '/masks/harlequin.jpg',
      '/masks/red-mask.jpg',
      '/masks/black-mask.jpg',
      '/masks/green-and-black.jpg',
      '/masks/black-and-red.jpg',
      '/masks/white-masks-group.jpg',
    ],
  },
  {
    name: '',
    images: [
      '/theatre/papik/swan.jpg',
      '/theatre/papik/swan-wings.jpg',
      '/theatre/papik/turtle-head.jpg',
      '/theatre/papik/turtle-head-2.jpg',
      '/theatre/papik/fish-blue.jpg',
      '/theatre/papik/fish-dark.jpg',
      '/theatre/papik/fish-tail.jpg',
    ],
  },
  {
    name: '',
    images: [
      '/theatre/isahakyan/king-with-crown.jpg',
      '/theatre/isahakyan/old-man-in-blue.jpg',
      '/theatre/isahakyan/old-man-in-tartan.jpg',
      '/theatre/isahakyan/woman-with-headscarf.jpg',
      '/theatre/isahakyan/red-haired-head.jpg',
      '/theatre/isahakyan/moustache-man-head.jpg',
      '/theatre/isahakyan/three-heads.jpg',
      '/theatre/isahakyan/seated-boy.jpg',
      '/theatre/isahakyan/gardeners-pair.jpg',
      '/theatre/isahakyan/finger-puppets-set.jpg',
      '/theatre/isahakyan/finger-puppet-single.jpg',
      '/theatre/isahakyan/baby-head.jpg',
    ],
  },
  {
    name: '',
    images: [
      '/theatre/gexeckuhi/old-woman-mask.jpg',
      '/theatre/gexeckuhi/golden-headdress.jpg',
      '/theatre/gexeckuhi/teacup-head.jpg',
      '/theatre/gexeckuhi/teacup-head-2.jpg',
      '/theatre/gexeckuhi/goblin-mask-with-sketches.jpg',
      '/theatre/gexeckuhi/goblin-mask-in-progress.jpg',
    ],
  },
]

const stagePhotos = [
  '/masks/stage-trio.jpg',
  '/masks/stage-scene.jpg',
  '/masks/stage-curtain-call.jpg',
]

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/theatre'>): Promise<Metadata> {
  const lang = await requireLang(params)
  return pageMetadata(lang, '/theatre', t.theatre.title[lang], t.meta.theatre[lang])
}

export default async function TheatrePage({ params }: PageProps<'/[lang]/theatre'>) {
  const lang = await requireLang(params)

  return (
    <>
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-[720px] px-6">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)]">{t.theatre.title[lang]}</h1>
          <p className="mt-6 text-lg text-clay">{t.theatre.intro[lang]}</p>
        </div>
      </section>

      {/* On stage — the masks in performance */}
      <section className="bg-ink py-12 md:py-20">
        <div className="mx-auto max-w-page px-6">
          <h2 className="text-center text-sm tracking-[0.25em] text-cream/60 uppercase">
            {t.masks.onStage[lang]}
          </h2>
          <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-3">
            {stagePhotos.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* The pieces themselves, grouped by production */}
      {groups.map((group) => (
        <section key={group.name} className="py-12 md:py-16">
          <div className="mx-auto max-w-page px-6">
            <h2 className="mb-6 text-sm tracking-[0.25em] text-clay uppercase md:mb-10">
              {group.name}
            </h2>
            <div className="columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
              {group.images.map((src) => (
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
      ))}
    </>
  )
}
