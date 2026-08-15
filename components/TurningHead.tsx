'use client'

import { useEffect, useRef, useState } from 'react'

/*
  Three photographs of the same head, taken from different angles. As the
  cursor moves left to right across the window we cross-fade between them,
  so the head appears to turn and follow you.

  The images should be cut out (transparent PNG, no background, no hand) —
  otherwise the backgrounds cross-fade too and the illusion breaks.
*/
type Props = {
  /** Left-facing, front-facing, right-facing — in that order. */
  images: [string, string, string]
  alt: string
  className?: string
}

export default function TurningHead({ images, alt, className = '' }: Props) {
  // 0 = fully left, 0.5 = straight on, 1 = fully right
  const [turn, setTurn] = useState(0.5)
  const frame = useRef<number | null>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const onMove = (e: PointerEvent) => {
      if (frame.current !== null) return
      frame.current = requestAnimationFrame(() => {
        frame.current = null
        setTurn(Math.min(1, Math.max(0, e.clientX / window.innerWidth)))
      })
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame.current !== null) cancelAnimationFrame(frame.current)
    }
  }, [])

  // Cross-fade: left→front over the first half, front→right over the second
  const opacities =
    turn < 0.5
      ? [1 - turn * 2, turn * 2, 0]
      : [0, 1 - (turn - 0.5) * 2, (turn - 0.5) * 2]

  return (
    <div className={`relative ${className}`}>
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={i === 1 ? alt : ''}
          aria-hidden={i === 1 ? undefined : true}
          className={
            i === 0
              ? 'h-auto w-full'
              : 'absolute inset-0 h-full w-full object-contain'
          }
          style={{
            opacity: opacities[i],
            // A touch of drift, so it reads as movement and not just a fade
            transform: `translateX(${(turn - 0.5) * 10}px)`,
            transition: 'opacity 120ms linear, transform 200ms ease-out',
          }}
        />
      ))}
    </div>
  )
}
