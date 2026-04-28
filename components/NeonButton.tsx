'use client'
import { useState } from 'react'

interface NeonButtonProps {
  href?: string
  type?: 'button' | 'submit'
  children: React.ReactNode
  style?: React.CSSProperties
  target?: string
  rel?: string
  onClick?: () => void
  fullWidth?: boolean
}

export function NeonButton({ href, type, children, style, target, rel, onClick, fullWidth }: NeonButtonProps) {
  const [hovered, setHovered] = useState(false)

  const baseStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    fontFamily: "var(--font-body), sans-serif",
    fontSize: '0.82rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#000',
    background: 'linear-gradient(135deg, #d0d0d0 0%, #f5f5f5 40%, #c8c8c8 60%, #e8e8e8 100%)',
    padding: '0.9rem 2.2rem',
    borderRadius: '999px',
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'all 0.2s',
    overflow: 'hidden',
    transform: hovered ? 'scale(1.03)' : 'scale(1)',
    width: fullWidth ? '100%' : undefined,
    ...style,
  }

  const glowTop: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: '12.5%',
    width: '75%',
    height: '1px',
    background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent)',
    opacity: hovered ? 1 : 0,
    transition: 'opacity 0.4s ease-in-out',
    pointerEvents: 'none',
  }

  const glowBottom: React.CSSProperties = {
    position: 'absolute',
    bottom: '-1px',
    left: '12.5%',
    width: '75%',
    height: '1px',
    background: 'linear-gradient(to right, transparent, rgba(200,200,200,0.7), transparent)',
    opacity: hovered ? 0.5 : 0,
    transition: 'opacity 0.4s ease-in-out',
    pointerEvents: 'none',
  }

  const glowBlur: React.CSSProperties = {
    position: 'absolute',
    top: '-4px',
    left: '20%',
    width: '60%',
    height: '8px',
    background: 'radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, transparent 70%)',
    opacity: hovered ? 1 : 0,
    transition: 'opacity 0.4s ease-in-out',
    pointerEvents: 'none',
    filter: 'blur(4px)',
  }

  const inner = (
    <>
      <span style={glowTop} />
      <span style={glowBlur} />
      {children}
      <span style={glowBottom} />
    </>
  )

  if (href) {
    return (
      <a href={href} target={target} rel={rel} style={baseStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={onClick}
      >{inner}</a>
    )
  }

  return (
    <button type={type || 'button'} style={baseStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >{inner}</button>
  )
}
