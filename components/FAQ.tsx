'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '@/lib/useLang'
import { t } from '@/lib/i18n'

const faqKeys = [
  { q: 'q1' as const, a: 'a1' as const },
  { q: 'q2' as const, a: 'a2' as const },
  { q: 'q3' as const, a: 'a3' as const },
  { q: 'q4' as const, a: 'a4' as const },
  { q: 'q5' as const, a: 'a5' as const },
]

export default function FAQ() {
  const { lang } = useLang()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.015)' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '100px 60px' }} className="faq-container">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '52px' }}
        >
          <p style={{
            fontFamily: 'var(--font-body), sans-serif', fontSize: '0.58rem',
            letterSpacing: '0.35em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)', marginBottom: '16px',
          }}>
            {t.faq.eyebrow[lang]}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-heading), sans-serif',
            fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 300,
            color: '#fff', lineHeight: 1.08, letterSpacing: '-0.02em',
          }}>
            FAQ
          </h2>
        </motion.div>

        {/* Questions */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqKeys.map((fk, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{ borderBottom: i < faqKeys.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left', background: 'none', border: 'none',
                    padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    cursor: 'pointer', fontFamily: 'var(--font-body), sans-serif',
                    fontSize: '0.92rem', color: '#fff', fontWeight: 300,
                    transition: 'color 0.2s', letterSpacing: '0.02em', gap: '20px',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                  onMouseLeave={e => e.currentTarget.style.color = '#fff'}
                >
                  {t.faq[fk.q][lang]}
                  <span style={{
                    color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem',
                    transition: 'transform 0.3s', flexShrink: 0, width: '20px', textAlign: 'center',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: isOpen ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s ease, padding 0.4s ease',
                  paddingBottom: isOpen ? '22px' : '0',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-body), sans-serif', fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.45)', lineHeight: 1.88, maxWidth: '680px',
                  }}>
                    {t.faq[fk.a][lang]}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .faq-container { padding: 48px 14px !important; }
          .faq-container button { font-size: 0.82rem !important; padding: 18px 0 !important; gap: 14px !important; }
          .faq-container p { font-size: 0.78rem !important; line-height: 1.8 !important; }
        }
      `}</style>
    </section>
  )
}
