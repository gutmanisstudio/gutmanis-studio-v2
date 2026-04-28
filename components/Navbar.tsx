'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/lib/useLang'
import { t } from '@/lib/i18n'
import type { Lang } from '@/lib/i18n'
import { NeonButton } from '@/components/NeonButton'

const links = [
  { key: 'work' as const, href: '/work' },
  { key: 'about' as const, href: '/#about' },
  { key: 'contact' as const, href: '/contact' },
]

export default function Navbar() {
  const { lang, changeLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div style={{
        position: 'fixed',
        top: '20px',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          padding: '0.5rem 1.5rem',
          maxWidth: '820px',
          width: 'auto',
          background: 'rgba(20,20,20,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '999px',
          pointerEvents: 'auto',
        }}
        className="nav-pill"
      >
        {/* Logo */}
        <a href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <span style={{ fontFamily: "var(--font-body), sans-serif", fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', whiteSpace: 'nowrap' }}>
            Gutmanis <span style={{ color: 'rgba(255,255,255,0.4)' }}>Studio</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="hidden-mobile">
          {links.map(l => (
            <a key={l.key} href={l.href} style={{
              fontFamily: "var(--font-body), sans-serif", fontSize: '0.72rem', fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.2s',
              whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
            >{t.nav[l.key][lang]}</a>
          ))}
        </div>

        {/* Lang toggle */}
        <div style={{ display: 'flex', gap: '0.15rem', flexShrink: 0 }} className="hidden-mobile">
          {(['EN', 'LV', 'RU'] as Lang[]).map(l => (
            <button key={l} onClick={() => changeLang(l)} style={{
              fontFamily: "var(--font-body), sans-serif", fontSize: '0.62rem', fontWeight: 700,
              letterSpacing: '0.1em', background: 'none', border: 'none', cursor: 'pointer',
              color: lang === l ? '#fff' : 'rgba(255,255,255,0.3)',
              padding: '0.2rem 0.35rem', transition: 'color 0.2s',
            }}>{l}</button>
          ))}
        </div>

        {/* CTA */}
        <span className="hidden-mobile">
          <NeonButton href="/contact" style={{ fontSize: '0.68rem', padding: '0.5rem 1.2rem' }}>{t.nav.cta[lang]}</NeonButton>
        </span>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#fff', padding: '0.3rem', display: 'none', flexShrink: 0,
        }} className="show-mobile">
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </motion.nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', top: '80px', left: 0, right: 0, bottom: 0,
              zIndex: 999, background: 'rgba(20,20,20,0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '2rem',
            }}>
            {links.map(l => (
              <a key={l.key} href={l.href} onClick={() => setMenuOpen(false)} style={{
                fontFamily: "var(--font-body), sans-serif", fontSize: '2rem', fontWeight: 700,
                letterSpacing: '0.05em', color: '#fff', textDecoration: 'none',
              }}>{t.nav[l.key][lang]}</a>
            ))}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              {(['EN', 'LV', 'RU'] as Lang[]).map(l => (
                <button key={l} onClick={() => changeLang(l)} style={{
                  fontFamily: "var(--font-body), sans-serif", fontSize: '0.8rem', fontWeight: 700,
                  background: 'none', border: '1px solid rgba(255,255,255,0.2)',
                  color: lang === l ? '#fff' : 'rgba(255,255,255,0.4)',
                  padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer',
                }}>{l}</button>
              ))}
            </div>
            <NeonButton href="/contact" onClick={() => setMenuOpen(false)} style={{ marginTop: '0.5rem' }}>{t.nav.cta[lang]}</NeonButton>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .nav-pill { gap: 1rem !important; padding: 0.5rem 1.2rem !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
