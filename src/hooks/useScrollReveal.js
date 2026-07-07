import { useEffect, useRef } from 'react'

/**
 * Hook para animações de scroll reveal usando IntersectionObserver
 * Retorna uma ref e o estado de visibilidade
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.visible = 'true'
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
