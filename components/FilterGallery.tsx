'use client'

import { useState } from 'react'

export type GalleryItem = {
  src: string
  alt: string
  tags: string[]
}

type Props = {
  items: GalleryItem[]
  /** Filter key → label, in the order they should appear. 'all' comes first. */
  filters: { key: string; label: string }[]
}

export default function FilterGallery({ items, filters }: Props) {
  const [active, setActive] = useState('all')

  const shown =
    active === 'all' ? items : items.filter((item) => item.tags.includes(active))

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 md:gap-3">
        {filters.map((filter) => {
          const isActive = filter.key === active
          return (
            <button
              key={filter.key}
              onClick={() => setActive(filter.key)}
              aria-pressed={isActive}
              className={`cursor-pointer rounded-full border px-4 py-2 text-xs tracking-[0.12em] uppercase transition-colors ${
                isActive
                  ? 'border-ink bg-ink text-cream'
                  : 'border-line text-clay hover:border-ink hover:text-ink'
              }`}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      {/* Masonry via CSS columns, so portrait and landscape shots sit
          together without anyone being cropped */}
      <div className="mt-10 columns-2 gap-3 md:mt-14 md:columns-3 md:gap-4 lg:columns-4">
        {shown.map((item) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={item.src}
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="mb-3 block w-full break-inside-avoid md:mb-4"
          />
        ))}
      </div>
    </>
  )
}
