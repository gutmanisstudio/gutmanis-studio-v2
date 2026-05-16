export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string // ISO yyyy-mm-dd
  readingTime: string
  tags: string[]
  /** Plain string paragraphs; rendered as <p>. Headings are written as `## H` lines. */
  body: string
}

export const posts: BlogPost[] = [
  {
    slug: 'stryk-3-day-build-20k-views',
    title: 'How I shipped Stryk in 3 days and got 20k organic Instagram views from 3 AI posts',
    excerpt:
      'A fighting-supplement brand from blank Figma to live store in 72 hours — plus the AI content workflow that pulled 20,000 organic views on the first three posts.',
    date: '2026-04-16',
    readingTime: '4 min read',
    tags: ['case-study', 'ai', 'ecommerce'],
    body: `
The brief was simple: a fighting-supplement brand needed an online home and an Instagram presence — fast. No team, no agency budget, no months-long brand sprint. Just speed.

Three days later, [strykclub.com](https://strykclub.com) was live. The first three AI-generated Instagram posts hit 20,000 organic views.

Here is how it actually happened.

## Day 1 — Strip the idea to one promise

Most "fast" projects fail because they try to be everything on day one. We did the opposite. One sentence, one audience, one CTA: supplements for fighters who train like they mean it.

Everything that did not serve that sentence got cut from the design — no "About" essay, no five-tier pricing, no email gate. The homepage is the offer. The product page is the offer with a button. That is the whole site.

## Day 2 — Build with the LLM as a pair, not a vending machine

The site itself was built with an AI assistant working alongside me — but with strict guardrails. Brand tone, color tokens, copy length, layout constraints all lived in a system prompt. The model had to write *within* those rules, not around them.

That changed the workflow:

- I shipped sections in 10-minute loops instead of 10-hour ones.
- The AI never got to "improvise" on brand. It only got to execute taste I had already encoded.
- When it drifted, I corrected the guardrails, not the output. One fix, every future request benefits.

This is the part most "vibe-coded" sites miss. Without rails an LLM averages everything toward beige. With rails it becomes a fast, opinionated collaborator.

## Day 3 — Launch, then aim the content at one feeling

Launch day was the easy part. The interesting work was the content engine.

Instead of "post about the product," I wrote a single prompt that captured one feeling: the moment a fighter decides nobody is going to outwork them this week. Every image and caption had to ladder back to that one moment.

Three posts went up. Same feeling, different angles. Zero ad spend.

- Post 1: ~6k organic views
- Post 2: ~8k organic views
- Post 3: ~6k organic views

Total: just over 20,000 views in the first week, fully organic, no boosted reach.

## Why it worked (the boring version)

It was not magic and it was not "AI." It was three things stacked:

1. **A site that says one thing.** One headline, one button, one promise. No friction between attention and action.
2. **An AI workflow that respects taste.** The model is a multiplier on whatever rules you give it. Bad rules → fast bad work. Good rules → fast good work.
3. **Content that points at a feeling, not a product.** Fighters do not scroll past identity. They scroll past advertising.

## What I would tell the next founder

If you are sitting on a brand idea and you are waiting for the perfect partner, perfect agency, perfect Notion doc — you are losing. Three days is enough to get a real, paying, indexable, on-brand site live. The bar is not "great". The bar is "real and getting better every week".

Reach out if you want the same treatment for your brand. I do this every day.
`.trim(),
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug)
}

export function listPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
}
