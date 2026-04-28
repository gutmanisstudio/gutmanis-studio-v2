'use client'
import { useRef, useState, useCallback } from 'react'

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

  const dir = effect === 'evade' ? -1 : 1

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      const el = cardRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      const xRot = (py - 0.5) * (tiltLimit * 2) * dir
      const yRot = (px - 0.5) * -(tiltLimit * 2) * dir
      setTransform(
        `perspective(${perspective}px) rotateX(${xRot}deg) rotateY(${yRot}deg) scale3d(${scale}, ${scale}, ${scale})`
      )
      if (spotlight) {
        setSpotlightPos({ x: px * 100, y: py * 100 })
      }
    },
    [tiltLimit, scale, perspective, dir, spotlight]
  )

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
        transition: 'transform 0.2s ease-out',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        position: 'relative',
        overflow: 'hidden',
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
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 40%)',
          }} />
        </div>
      )}
    </div>
  )
}
