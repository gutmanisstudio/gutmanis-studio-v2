'use client'
import { useEffect, useRef } from 'react'

// Slow-drifting crimson dot field. Lightweight rAF loop, ~40 particles,
// respects prefers-reduced-motion.
export default function HeroParticles() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = 0, h = 0
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      w = rect.width; h = rect.height
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()

    const COUNT = Math.round((w * h) / 28000) // density tuned to viewport
    const particles = Array.from({ length: Math.max(24, Math.min(70, COUNT)) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.6 + Math.random() * 1.6,
      vx: (Math.random() - 0.5) * 0.12,
      vy: -0.05 - Math.random() * 0.15,
      a: 0.08 + Math.random() * 0.22,
      tw: Math.random() * Math.PI * 2,
    }))

    let raf = 0
    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.tw += 0.012
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w }
        if (p.x < -10) p.x = w + 10
        if (p.x > w + 10) p.x = -10
        const alpha = p.a * (0.7 + 0.3 * Math.sin(p.tw))
        ctx.beginPath()
        ctx.fillStyle = `rgba(200, 16, 31, ${alpha.toFixed(3)})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onResize = () => resize()
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize) }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        zIndex: 2,
        pointerEvents: 'none',
        filter: 'blur(0.6px)',
        mixBlendMode: 'screen',
      }}
    />
  )
}
