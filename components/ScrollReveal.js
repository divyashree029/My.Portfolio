'use client'

import { useEffect, useRef } from 'react'

export default function ScrollReveal({ children, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.reveal')
            reveals.forEach((el) => el.classList.add('visible'))
            // Also reveal the wrapper itself if it has the class
            if (entry.target.classList.contains('reveal')) {
              entry.target.classList.add('visible')
            }
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
