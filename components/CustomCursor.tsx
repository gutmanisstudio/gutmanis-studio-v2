'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setHovered(!!(t.closest('a') || t.closest('button')))
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        animate={{
          x: pos.x - (hovered ? 24 : 16),
          y: pos.y - (hovered ? 24 : 16),
          width: hovered ? 48 : 32,
          height: hovered ? 48 : 32,
          opacity: hidden ? 0 : 1,
          backgroundColor: hovered ? 'rgba(255,255,255,0.08)' : 'transparent',
          borderColor: hovered ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 28, mass: 0.5 }}
        style={{
          position: 'fixed', zIndex: 9999, pointerEvents: 'none',
          borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.4)',
        }}
      />
      {/* Dot */}
      <motion.div
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          opacity: hidden ? 0 : 1,
          scale: hovered ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        style={{
          position: 'fixed', zIndex: 9999, pointerEvents: 'none',
          width: 6, height: 6, borderRadius: '50%', background: '#fff',
        }}
      />
      <style>{`* { cursor: none !important; }`}</style>
    </>
  )
}
