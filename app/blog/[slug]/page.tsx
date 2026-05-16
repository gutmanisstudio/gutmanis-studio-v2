import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getPost, listPosts } from '@/lib/blog'

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return listPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Not found — Gutmanis Studio' }
  return {
    title: `${post.title} — Gutmanis Studio`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <article style={{ maxWidth: '720px', margin: '0 auto', padding: '0 1.5rem 6rem' }}>
          <Link href="/blog" style={{
            fontFamily: 'var(--font-ui), sans-serif', fontSize: '0.72rem',
            fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--ink-mute)', textDecoration: 'none',
          }}>← Blog</Link>

          <div style={{
            display: 'flex', gap: '1.4rem', alignItems: 'baseline',
            fontFamily: 'var(--font-ui), sans-serif', fontSize: '0.72rem',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--ink-faint)', margin: '3rem 0 1rem',
          }}>
            <span>{formatDate(post.date)}</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-ui), sans-serif',
            fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
            fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.06,
            color: 'var(--ink)', marginBottom: '1.6rem',
          }}>{post.title}</h1>

          <p style={{
            fontFamily: 'var(--font-ui), sans-serif',
            fontSize: '1.05rem', color: 'var(--ink-mute)', lineHeight: 1.7,
            marginBottom: '3rem',
          }}>{post.excerpt}</p>

          <div style={{ width: '60px', height: '1px', background: 'var(--crimson)', marginBottom: '3rem' }} />

          <PostBody body={post.body} />

          <div style={{
            marginTop: '4rem', padding: '2rem', borderRadius: '12px',
            border: '1px solid var(--line-strong)',
            background: 'rgba(255,255,255,0.02)',
          }}>
            <p style={{
              fontFamily: 'var(--font-ui), sans-serif', fontSize: '0.95rem',
              color: 'var(--ink-mute)', lineHeight: 1.7, marginBottom: '1rem',
            }}>
              Got a brand that needs to ship fast and look real? That&apos;s what I do.
            </p>
            <Link href="/contact" style={{
              fontFamily: 'var(--font-ui), sans-serif', fontSize: '0.78rem',
              fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--ink)', textDecoration: 'none',
              borderBottom: '1px solid var(--crimson)', paddingBottom: '2px',
            }}>Start a project →</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

function PostBody({ body }: { body: string }) {
  const blocks = body.split(/\n\n+/).map(b => b.trim()).filter(Boolean)
  return (
    <div style={{ fontFamily: 'var(--font-ui), sans-serif' }}>
      {blocks.map((block, i) => {
        if (block.startsWith('## ')) {
          return (
            <h2 key={i} style={{
              fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.01em',
              color: 'var(--ink)', margin: '2.6rem 0 1rem', lineHeight: 1.2,
            }}>{block.slice(3)}</h2>
          )
        }
        if (block.startsWith('- ')) {
          const items = block.split('\n').map(l => l.replace(/^- /, ''))
          return (
            <ul key={i} style={{ paddingLeft: '1.2rem', marginBottom: '1.4rem' }}>
              {items.map((it, j) => (
                <li key={j} style={{
                  fontSize: '1rem', lineHeight: 1.8, color: 'var(--ink-mute)',
                  marginBottom: '0.3rem',
                }} dangerouslySetInnerHTML={{ __html: renderInline(it) }} />
              ))}
            </ul>
          )
        }
        return (
          <p key={i} style={{
            fontSize: '1rem', lineHeight: 1.8, color: 'var(--ink-mute)',
            marginBottom: '1.4rem',
          }} dangerouslySetInnerHTML={{ __html: renderInline(block) }} />
        )
      })}
    </div>
  )
}

// Tiny inline renderer: **bold**, *italic*, [text](url). Trusted source (our own posts).
function renderInline(text: string): string {
  const esc = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  return esc
    .replace(/\*\*([^*]+)\*\*/g, '<strong style="color:var(--ink);font-weight:600">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em style="font-style:italic">$1</em>')
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" style="color:var(--ink);text-decoration:underline;text-decoration-color:var(--crimson);text-underline-offset:3px">$1</a>'
    )
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}
