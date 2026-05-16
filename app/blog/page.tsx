import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { listPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — Gutmanis Studio · Web & AI',
  description: 'Case studies, build notes, and lessons from shipping websites and AI systems fast.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndexPage() {
  const items = listPosts()

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>
          <p style={{
            fontFamily: 'var(--font-ui), sans-serif', fontSize: '12px', fontWeight: 500,
            letterSpacing: '0.5em', textTransform: 'uppercase', color: 'var(--ink-faint)',
            marginBottom: '1rem', paddingLeft: '0.5em',
          }}>Blog</p>

          <h1 style={{
            fontFamily: 'var(--font-ui), sans-serif',
            fontSize: 'clamp(2.4rem, 5vw, 4rem)',
            fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05,
            color: 'var(--ink)', marginBottom: '1rem',
          }}>
            Notes from the build.
          </h1>

          <p style={{
            fontFamily: 'var(--font-ui), sans-serif', fontSize: '1rem',
            color: 'var(--ink-mute)', lineHeight: 1.7, maxWidth: '620px',
            marginBottom: '3.5rem',
          }}>
            Case studies, workflows, and what actually moved the needle on real projects.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {items.map((p, i) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                style={{
                  display: 'block',
                  padding: '2rem 0',
                  borderTop: '1px solid var(--line)',
                  borderBottom: i === items.length - 1 ? '1px solid var(--line)' : 'none',
                  textDecoration: 'none',
                }}
                className="blog-row"
              >
                <div style={{
                  display: 'flex', gap: '2rem', alignItems: 'baseline',
                  fontFamily: 'var(--font-ui), sans-serif',
                  fontSize: '0.72rem', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: 'var(--ink-faint)',
                  marginBottom: '0.8rem',
                }}>
                  <span>{formatDate(p.date)}</span>
                  <span>{p.readingTime}</span>
                </div>

                <h2 style={{
                  fontFamily: 'var(--font-ui), sans-serif',
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
                  fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.15,
                  color: 'var(--ink)', marginBottom: '0.6rem',
                }}>{p.title}</h2>

                <p style={{
                  fontFamily: 'var(--font-ui), sans-serif',
                  fontSize: '0.95rem', color: 'var(--ink-mute)', lineHeight: 1.7,
                  maxWidth: '720px', marginBottom: '0.8rem',
                }}>{p.excerpt}</p>

                <span style={{
                  fontFamily: 'var(--font-ui), sans-serif', fontSize: '0.72rem',
                  fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--crimson)',
                }}>Read →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .blog-row { transition: background 0.2s ease; }
        .blog-row:hover { background: rgba(255,255,255,0.015); }
      `}</style>
    </>
  )
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}
