'use client'
import { useRef, useState, useCallback, useEffect } from 'react'

interface TiltCardProps {
  tiltLimit?: number
  scale?: number
  perspective?: number
  effect?: 'gravitate' | 'evade'
  spotlight?: boolean
  style?: React.CSSProperties
  children?: React.ReactNode
}

export function TiltCard({
  tiltLimit = 15,
  scale = 1.05,
  perspective = 1200,
  effect = 'evade',
  spotlight = true,
  style,
  children,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState(
    `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
  )
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)
  const rafRef = useRef<number | null>(null)
  const pendingRef = useRef<{ px: number; py: number } | null>(null)

  const dir = effect === 'evade' ? -1 : 1

  useEffect(() => () => { if (rafRef.current != null) cancelAnimationFrame(rafRef.current) }, [])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      const el = cardRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      pendingRef.current = {
        px: (e.clientX - rect.left) / rect.width,
        py: (e.clientY - rect.top) / rect.height,
      }
      if (rafRef.current != null) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        const p = pendingRef.current
        if (!p) return
        const xRot = (p.py - 0.5) * (tiltLimit * 2) * dir
        const yRot = (p.px - 0.5) * -(tiltLimit * 2) * dir
        setTransform(
          `perspective(${perspective}px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale3d(${scale}, ${scale}, ${scale})`
        )
        if (spotlight) setSpotlightPos({ x: p.px * 100, y: p.py * 100 })
      })
    },
    [tiltLimit, scale, perspective, dir, spotlight]
  )

  // crimson ring + outer glow on hover. ring sits just outside the existing border for a layered silver+crimson edge.
  const hoverShadow = isHovered
    ? '0 0 0 1px var(--c-crimson-hot), 0 0 28px rgba(200,16,31,0.32), 0 0 80px rgba(200,16,31,0.12), inset 0 1px 0 rgba(255,255,255,0.06)'
    : 'none'

  return (
    <div
      ref={cardRef}
      onPointerEnter={() => setIsHovered(true)}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`)
        setIsHovered(false)
      }}
      style={{
        transform,
        transition: 'transform 0.2s ease-out, box-shadow 0.35s ease',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: hoverShadow,
        ...style,
      }}
    >
      {children}
      {spotlight && (
        <div style={{
          position: 'absolute', inset: 0, zIndex: 10,
          overflow: 'hidden', pointerEvents: 'none',
          opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s',
        }}>
          <div style={{
            position: 'absolute',
            width: '200%', height: '200%',
            borderRadius: '50%',
            left: `${spotlightPos.x}%`,
            top: `${spotlightPos.y}%`,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(200,16,31,0.22) 0%, rgba(200,200,200,0.08) 25%, transparent 50%)',
          }} />
        </div>
      )}
    </div>
  )
}
