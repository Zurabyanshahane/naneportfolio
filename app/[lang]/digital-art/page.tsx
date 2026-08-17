import type { Metadata } from 'next'
import { requireLang } from '@/lib/i18n'
import { pageMetadata } from '@/lib/seo'
import { t } from '@/lib/translations'

/*
  The gallery. To add a work:
  1. Drop the image into public/art/  (e.g. public/art/red-fox.jpg)
  2. Add an entry here with src: '/art/red-fox.jpg'

  Images render at their natural aspect ratio (artwork is never cropped).
  `cols` places the work on the desktop 12-column grid — col-span/col-start
  plus optional mt-* for the staggered editorial rhythm.
*/
type Work = {
  src: string
  title: string
  year: string
  cols: string
}

/*
  Row logic (desktop):
  1. small left (1-4)        + large right (8-12), staggered
  2. tight pair (1-3, 4-6)   + medium right (9-12), middle one staggered
  3. large left (1-5) + tall narrow accent (7-8) + small right (10-12)
  One stagger height everywhere: mt-16.
*/
const works: Work[] = [
  { src: '/art/jay.jpg', title: 'Jay', year: '2026', cols: 'md:col-span-4' },
  { src: '/art/kingfisher.jpg', title: 'Kingfisher', year: '2026', cols: 'md:col-span-5 md:col-start-8 md:mt-16' },
  { src: '/art/blue-tit.jpg', title: 'Blue Tit', year: '2026', cols: 'md:col-span-3 md:col-start-1' },
  { src: '/art/oropendola.jpg', title: 'Oropendola', year: '2026', cols: 'md:col-span-3 md:col-start-4 md:mt-16' },
  { src: '/art/raccoon.jpg', title: 'Raccoon', year: '2026', cols: 'md:col-span-4 md:col-start-9' },
  { src: '/art/flying-fox.jpg', title: 'Flying Fox', year: '2026', cols: 'md:col-span-5 md:col-start-1' },
  { src: '/art/red-fox.jpg', title: 'Red Fox', year: '2026', cols: 'md:col-span-5 md:col-start-8' },
  { src: '/art/girl-with-swallows.jpg', title: 'Girl with Swallows', year: '2026', cols: 'md:col-span-3 md:col-start-5 md:mt-16 max-md:mx-auto max-md:max-w-56' },
]

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

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-page px-6">
        {/* Heading row: title left, intro right (editorial style) */}
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)]">
            {t.digital.title[lang]}
            <sup className="ml-3 font-body text-sm tracking-wide text-clay">
              ( {works.length} )
            </sup>
          </h1>
          <p className="text-sm leading-relaxed text-clay md:max-w-xs md:justify-self-end">
            {t.digital.intro[lang]}
          </p>
        </div>

        {/* Editorial gallery grid */}
        <div className="mt-12 grid items-start gap-x-6 gap-y-12 md:mt-20 md:grid-cols-12 md:gap-y-24">
          {works.map((work) => (
            <figure key={work.src} className={work.cols}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={work.src}
                alt={`${work.title} — watercolor illustration`}
                loading="lazy"
                className="w-full"
              />
              <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                <span className="text-xs font-medium tracking-[0.08em] uppercase">
                  {work.title}
                </span>
                <span className="text-xs text-clay">( {work.year} )</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
