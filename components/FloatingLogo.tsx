'use client'
import { useRef, useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function FloatingLogo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glowX, setGlowX] = useState(50)
  const [glowY, setGlowY] = useState(30)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const px = (e.clientX - cx) / (rect.width / 2)
    const py = (e.clientY - cy) / (rect.height / 2)
    setRotateY(px * 18)
    setRotateX(-py * 12)
    setGlowX(50 + px * 30)
    setGlowY(50 + py * 30)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setRotateX(0)
    setRotateY(0)
    setGlowX(50)
    setGlowY(30)
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <div
      ref={containerRef}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '320px',
        height: '380px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1200px',
      }}
    >
      {/* Orbiting ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <div style={{
          position: 'absolute', top: '-3px', left: '50%', transform: 'translateX(-50%)',
          width: '6px', height: '6px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.3)',
          boxShadow: '0 0 8px rgba(255,255,255,0.2)',
        }} />
      </motion.div>

      {/* Orbiting ring 2 — reverse */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '340px',
          height: '340px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.03)',
        }}
      >
        <div style={{
          position: 'absolute', bottom: '-3px', right: '20%',
          width: '4px', height: '4px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.2)',
          boxShadow: '0 0 6px rgba(255,255,255,0.15)',
        }} />
        <div style={{
          position: 'absolute', top: '30%', left: '-2px',
          width: '4px', height: '4px', borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)',
          boxShadow: '0 0 6px rgba(255,255,255,0.1)',
        }} />
      </motion.div>

      {/* Main logo container with 3D transforms */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out',
          position: 'relative',
        }}
      >
        {/* Outer glow */}
        <div style={{
          position: 'absolute',
          inset: '-20px',
          borderRadius: '50%',
          background: `radial-gradient(ellipse at ${glowX}% ${glowY}%, rgba(255,255,255,0.08) 0%, transparent 60%)`,
          transition: 'background 0.15s ease-out',
          filter: 'blur(8px)',
          pointerEvents: 'none',
        }} />

        {/* Silver ring border */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            inset: '-4px',
            borderRadius: '50%',
            background: `conic-gradient(from 0deg, transparent 0%, rgba(255,255,255,0.15) 10%, transparent 20%, transparent 50%, rgba(255,255,255,0.1) 60%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />

        {/* Logo image */}
        <div style={{
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 25px 60px rgba(0,0,0,0.6), 0 8px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gutmanistudiologo1.png"
            alt="Gutmanis Studio"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />

          {/* Specular highlight that follows mouse */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse 60% 50% at ${glowX}% ${glowY}%, rgba(255,255,255,0.12) 0%, transparent 60%)`,
            transition: 'background 0.15s ease-out',
            pointerEvents: 'none',
          }} />
        </div>
      </motion.div>

      {/* Reflection below */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '0',
          width: '200px',
          height: '120px',
          borderRadius: '50%',
          overflow: 'hidden',
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scaleY(-1)`,
          transition: 'transform 0.15s ease-out',
          opacity: 0.15,
          filter: 'blur(6px)',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/gutmanistudiologo1.png"
          alt=""
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>

      {/* Ground shadow */}
      <motion.div
        animate={{ scale: [1, 0.9, 1], opacity: [0.3, 0.15, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '-10px',
          width: '160px',
          height: '20px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 70%)',
          filter: 'blur(4px)',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
