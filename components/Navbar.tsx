'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '@/lib/useLang'
import { t } from '@/lib/i18n'
import type { Lang } from '@/lib/i18n'

const links = [
  { key: 'work' as const, href: '/work' },
  { key: 'about' as const, href: '/about' },
  { key: 'blog' as const, href: '/blog' },
  { key: 'contact' as const, href: '/contact' },
]

const LANGS: Lang[] = ['EN', 'LV', 'RU']

export default function Navbar() {
  const { lang, changeLang } = useLang()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div style={{
        position: 'fixed',
        top: '28px',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
        padding: '0 18px',
      }}>
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          aria-label="primary"
          className="nav-pill"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 8px 8px 28px',
            borderRadius: '999px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))',
            border: '1px solid var(--line-strong)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            pointerEvents: 'auto',
          }}
        >
          {/* Brand */}
          <a href="/" className="brand" style={{
            fontFamily: 'var(--font-ui), sans-serif',
            fontWeight: 800,
            fontSize: '14px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            paddingRight: '22px',
            marginRight: '6px',
            borderRight: '1px solid var(--line-strong)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}>
            GUTMANIS <span style={{ color: 'var(--crimson)', fontWeight: 500, letterSpacing: '0.22em' }}>STUDIO</span>
          </a>

          {/* Links */}
          <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
            {links.map(l => (
              <a
                key={l.key}
                href={l.href}
                style={{
                  fontFamily: 'var(--font-ui), sans-serif',
                  color: 'var(--ink-mute)',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 500,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  padding: '12px 16px',
                  borderRadius: '999px',
                  transition: 'color .2s, background .2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--ink-mute)'; e.currentTarget.style.background = 'transparent' }}
              >{t.nav[l.key][lang]}</a>
            ))}
          </div>

          {/* Lang switch */}
          <div className="nav-langs" style={{ display: 'flex', gap: '4px', padding: '0 8px' }}>
            {LANGS.map(l => {
              const active = lang === l
              return (
                <button
                  key={l}
                  onClick={() => changeLang(l)}
                  style={{
                    fontFamily: 'var(--font-ui), sans-serif',
                    color: active ? 'var(--ink)' : 'var(--ink-mute)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 500,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    padding: '12px 8px',
                    transition: 'color .2s',
                    display: 'inline-flex',
                    alignItems: 'center',
                  }}
                >
                  {active && <span style={{ color: 'var(--available)', marginRight: 4 }}>•</span>}
                  {l}
                </button>
              )
            })}
          </div>

          {/* CTA — silver/chrome pill */}
          <a
            href="/contact"
            className="nav-cta"
            style={{
              marginLeft: '8px',
              padding: '13px 22px',
              borderRadius: '999px',
              background: 'linear-gradient(180deg, #ffffff 0%, #e8e8e8 55%, #b8b8b8 100%)',
              color: '#0a0a0b',
              fontFamily: 'var(--font-ui), sans-serif',
              fontWeight: 700,
              letterSpacing: '0.16em',
              fontSize: '12.5px',
              textTransform: 'uppercase',
              border: '1px solid rgba(255,255,255,0.6)',
              boxShadow: '0 6px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.9)',
              textDecoration: 'none',
              transition: 'transform .15s ease, box-shadow .2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.95)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.9)'
            }}
          >{t.nav.cta[lang]}</a>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="nav-burger"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--ink)', padding: '0.3rem', display: 'none',
              marginLeft: '4px',
            }}
          >
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
              position: 'fixed', top: '92px', left: 0, right: 0, bottom: 0,
              zIndex: 999, background: 'rgba(10,5,8,0.98)',
              backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '2rem',
            }}>
            {links.map(l => (
              <a key={l.key} href={l.href} onClick={() => setMenuOpen(false)} style={{
                fontFamily: 'var(--font-ui), sans-serif', fontSize: '2rem', fontWeight: 700,
                letterSpacing: '0.05em', color: 'var(--ink)', textDecoration: 'none',
                textTransform: 'uppercase',
              }}>{t.nav[l.key][lang]}</a>
            ))}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              {LANGS.map(l => (
                <button key={l} onClick={() => changeLang(l)} style={{
                  fontFamily: 'var(--font-ui), sans-serif', fontSize: '0.8rem', fontWeight: 700,
                  background: 'none', border: '1px solid var(--line-strong)',
                  color: lang === l ? 'var(--ink)' : 'var(--ink-mute)',
                  padding: '0.4rem 0.8rem', borderRadius: '999px', cursor: 'pointer',
                  letterSpacing: '0.16em',
                }}>{l}</button>
              ))}
            </div>
            <a href="/contact" onClick={() => setMenuOpen(false)} style={{
              padding: '14px 28px',
              borderRadius: '999px',
              background: 'linear-gradient(180deg, #ffffff 0%, #e8e8e8 55%, #b8b8b8 100%)',
              color: '#0a0a0b', fontFamily: 'var(--font-ui), sans-serif',
              fontWeight: 700, letterSpacing: '0.18em', fontSize: '13px',
              textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.6)',
              textDecoration: 'none', marginTop: '0.5rem',
              boxShadow: '0 6px 18px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.9)',
            }}>{t.nav.cta[lang]}</a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .nav-pill { padding: 6px 6px 6px 18px !important; gap: 0 !important; }
          .nav-pill .brand { padding-right: 14px !important; margin-right: 4px !important; font-size: 12px !important; }
          .nav-links, .nav-langs { display: none !important; }
          .nav-burger { display: inline-flex !important; }
          .nav-cta { padding: 10px 14px !important; font-size: 10.5px !important; margin-left: 4px !important; letter-spacing: 0.12em !important; }
        }
        @media (max-width: 520px) {
          .nav-pill { padding: 6px 10px 6px 14px !important; }
          .nav-pill .brand { padding-right: 0 !important; margin-right: 0 !important; border-right: none !important; font-size: 11.5px !important; letter-spacing: 0.14em !important; }
          .nav-cta { display: none !important; }
          .nav-burger { margin-left: 8px !important; }
        }
      `}</style>
    </>
  )
}
