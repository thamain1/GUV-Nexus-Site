import { useEffect, useRef } from 'react'

/**
 * Scroll-driven parallax: translates the element on the Y axis
 * proportional to its distance from viewport center.
 * Uses translate3d + rAF for GPU-accelerated motion.
 */
export function useParallax<T extends HTMLElement>(speed = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    let ticking = false

    const update = () => {
      ticking = false
      const rect = el.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const elementCenter = rect.top + rect.height / 2
      const delta = (elementCenter - viewportCenter) * speed
      el.style.transform = `translate3d(0, ${delta.toFixed(1)}px, 0)`
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        raf = requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [speed])

  return ref
}
