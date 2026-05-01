'use client'

import { useEffect, useState } from 'react'

const TYPED_STRINGS = [
  'Building Digital Solutions',
  'Backend Engineer',
  'API Performance Optimizer',
  'Backend Systems Builder',
  'Creating scalable web apps',
]

export default function Hero() {
  const [typedText, setTypedText] = useState('')
  const [stringIndex, setStringIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const current = TYPED_STRINGS[stringIndex]
    const timeout = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setTypedText(current.slice(0, charIndex + 1))
        setCharIndex((c) => c + 1)
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1800)
      } else if (deleting && charIndex > 0) {
        setTypedText(current.slice(0, charIndex - 1))
        setCharIndex((c) => c - 1)
      } else {
        setDeleting(false)
        setStringIndex((s) => (s + 1) % TYPED_STRINGS.length)
      }
    }, deleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [mounted, charIndex, deleting, stringIndex])

  const stats = [
    { value: '6+', label: 'Microservices Built' },
    { value: '40%', label: 'Latency Reduction' },
    { value: '99.9%', label: 'API Uptime' },
    { value: '500+', label: 'Concurrent Users' },
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden">
      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,255,178,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Side decoration lines */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(0,255,178,0.15)] to-transparent hidden lg:block" />
      <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(0,255,178,0.08)] to-transparent hidden lg:block" />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 relative z-10">
        {/* Terminal badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 border border-[rgba(0,255,178,0.2)] bg-[rgba(0,255,178,0.04)]"
          style={{ borderRadius: '2px' }}
        >
          <span className="w-2 h-2 rounded-full bg-[var(--acid-400)] animate-pulse" />
          <span className="font-mono text-xs text-[var(--acid-400)] tracking-widest uppercase">
            Available for new roles · Bengaluru
          </span>
        </div>

        {/* Name */}
        <h1
          className="font-display text-[clamp(3rem,8vw,7rem)] leading-none font-800 text-[var(--slate-light)] mb-4"
          style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
        >
          T C{' '}
          <span className="text-[var(--acid-400)] glow-acid-text relative">
            Divyashree
            <span
              className="absolute -bottom-2 left-0 h-0.5 w-full"
              style={{ background: 'linear-gradient(90deg, var(--acid-400), transparent)' }}
            />
          </span>
        </h1>

        {/* Typewriter */}
        <div className="flex items-center gap-2 mb-6 h-10">
          <span className="font-mono text-[clamp(1rem,2.5vw,1.5rem)] text-[var(--slate-steel)]">
            {mounted ? typedText : TYPED_STRINGS[0]}
          </span>
          <span className="w-0.5 h-6 bg-[var(--acid-400)] cursor-blink inline-block" />
        </div>

        {/* Tagline */}
        <p
          className="font-body text-[var(--slate-steel)] text-base md:text-lg max-w-xl leading-relaxed mb-10"
          style={{ fontWeight: 300 }}
        >
          Java backend engineer who turns complex business logic into{' '}
          <em style={{ color: 'var(--slate-light)', fontStyle: 'normal', fontWeight: 400 }}>
            clean, scalable microservices
          </em>
          . 2+ years shipping production systems at LG Soft India that serve thousands of users at enterprise-grade reliability.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-20">
          <a
            href="#projects"
            className="font-mono text-sm tracking-widest px-8 py-3.5 border border-[var(--acid-400)] text-[var(--acid-400)] hover:bg-[var(--acid-400)] hover:text-[var(--ink-950)] transition-all duration-200 uppercase"
          >
            View Projects
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=divya29shreetc@gmail.com&subject=Lets%20Connect&body=Hi%20Divya,"
            target="_blank"
            className="font-mono text-sm tracking-widest px-8 py-3.5 border border-[var(--acid-400)] text-[var(--acid-400)] hover:bg-[var(--acid-400)] hover:text-[var(--ink-950)] transition-all duration-200 uppercase"
          >
            Get in Touch →
          </a>

          <a
            href="/TC Divyashree_Software_Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm tracking-widest px-8 py-3.5 border border-[var(--acid-400)] text-[var(--acid-400)] hover:bg-[var(--acid-400)] hover:text-[var(--ink-950)] transition-all duration-200 uppercase"
          >
            Resume ↗
          </a>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[rgba(0,255,178,0.1)]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-6 py-5 ${i < stats.length - 1 ? 'border-r border-[rgba(0,255,178,0.1)]' : ''} hover:bg-[rgba(0,255,178,0.03)] transition-colors`}
            >
              <div
                className="font-display text-2xl md:text-3xl font-700 text-[var(--acid-400)] mb-1"
                style={{ fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div className="font-mono text-xs text-[var(--slate-steel)] uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-[var(--slate-steel)] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--acid-400)] to-transparent" />
      </div>
    </section>
  )
}
