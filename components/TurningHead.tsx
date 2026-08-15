'use client'

import { useEffect, useRef, useState } from 'react'

/*
  Cut-out views of the same head. As the cursor moves left to right across
  the window we cross-fade between them, so the head turns to follow you.

  Only two clean cut-outs exist (front and three-quarter), so the
  three-quarter view is mirrored to stand in for the opposite direction.
*/
type View = { src: string; mirrored?: boolean }

type Props = {
  /** Turned left, facing front, turned right — in that order. */
  views: [View, View, View]
  alt: string
  className?: string
}

export default function TurningHead({ views, alt, className = '' }: Props) {
  // 0 = fully left, 0.5 = straight on, 1 = fully right
  const [turn, setTurn] = useState(0.5)
  const frame = useRef<number | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

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
            opacity: opacities[i],
            // A touch of drift, so it reads as movement and not just a fade
            transform: `translateX(${(turn - 0.5) * 12}px) scaleX(${
              view.mirrored ? -1 : 1
            })`,
            transition: 'opacity 120ms linear, transform 200ms ease-out',
          }}
        />
      ))}
    </div>
  )
}
