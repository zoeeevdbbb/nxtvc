'use client'

import { useEffect } from 'react'

export default function ClientScripts() {
  useEffect(() => {
    // Kern the pixel wordmark: even out X·T·V spacing
    function kern(el: Element) {
      const t = (el.textContent || '').trim()
      if (t !== 'NXTVC' || (el as HTMLElement).dataset.kerned) return
      ;(el as HTMLElement).dataset.kerned = '1'
      el.innerHTML = t
        .split('')
        .map((ch, i) => {
          const ml = i === 2 ? '-0.12em' : i === 3 ? '-0.01em' : i === 4 ? '-0.02em' : '0'
          return `<span style="margin-left:${ml}">${ch}</span>`
        })
        .join('')
    }
    document.querySelectorAll('.wm').forEach(kern)

    // Scroll reveals via IntersectionObserver
    const reduce =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const els = document.querySelectorAll<Element>('.reveal')

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('in'))
      return
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add('in')
            io.unobserve(en.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach(e => io.observe(e))

    return () => io.disconnect()
  }, [])

  return null
}
