'use client'

import { useEffect, useRef, useState } from 'react'

/*
  Cut-out views of the same head, switched on a timer so the head looks
  around by itself: front, left, front, right — the rhythm of someone
  idly glancing about. It snaps between the three positions rather than
  blending, so it reads as turning rather than dissolving.
*/
type View = { src: string; mirrored?: boolean }

type Props = {
  /** Turned left, facing front, turned right — in that order. */
  views: [View, View, View]
  alt: string
  className?: string
}

// Indices into `views`. Front recurs, so the head always returns to centre.
const SEQUENCE = [1, 0, 1, 2]
const STEP_MS = 1600

export default function TurningHead({ views, alt, className = '' }: Props) {
  const [index, setIndex] = useState(1)
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const node = container.current
    if (!node) return

    let step = 0
    let timer: ReturnType<typeof setInterval> | null = null

    const start = () => {
      if (timer !== null) return
      timer = setInterval(() => {
        step = (step + 1) % SEQUENCE.length
        setIndex(SEQUENCE[step])
      }, STEP_MS)
    }

    const stop = () => {
      if (timer === null) return
      clearInterval(timer)
      timer = null
    }

    // Turning is the default, so the head still works if the observer
    // below never reports anything; the observer only pauses it while
    // scrolled out of sight.
    start()

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.2 }
    )
    observer.observe(node)

    return () => {
      observer.disconnect()
      stop()
    }
  }, [])

  return (
    <div ref={container} className={`relative ${className}`}>
      {views.map((view, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={view.src}
          alt={i === 1 ? alt : ''}
          aria-hidden={i === 1 ? undefined : true}
          className={
            i === 0
              ? 'h-auto w-full'
              : 'absolute inset-0 h-full w-full object-contain'
          }
          style={{
            visibility: i === index ? 'visible' : 'hidden',
            transform: view.mirrored ? 'scaleX(-1)' : undefined,
          }}
        />
      ))}
    </div>
  )
}
