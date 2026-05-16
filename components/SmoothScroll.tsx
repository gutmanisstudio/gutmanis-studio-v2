'use client'
// Native browser scrolling — far smoother on trackpads than any JS-driven
// smooth-scroll library. Anchor links still ease via `scroll-behavior: smooth`
// in globals.css.
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
