'use client'

import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(5,10,15,0.92)] backdrop-blur-xl border-b border-[rgba(0,255,178,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          {/* Code icon */}
          <span
            className="font-mono text-base text-[var(--acid-400)] group-hover:scale-110 transition-transform"
            style={{ letterSpacing: '0.05em' }}
          >
            &lt;/&gt;
          </span>

          {/* Name */}
          <span
            className="font-display font-bold text-[var(--slate-light)] group-hover:text-[var(--acid-400)] transition-colors"
            style={{ letterSpacing: '0.04em' }}
          >
            Divyashree
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-widest text-[var(--slate-steel)] hover:text-[var(--acid-400)] transition-colors duration-200 uppercase"
            >
              <span className="text-[var(--acid-400)] opacity-50 mr-1">{String(i + 1).padStart(2, '0')}.</span>
              {link.label}
            </a>
          ))}
          <a
            href="https://mail.google.com/mail/?view=cm&to=divya29shreetc@gmail.com&subject=Hiring%20Opportunity&body=Hi%20Divya,"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest px-4 py-2 border border-[var(--acid-400)] text-[var(--acid-400)] hover:bg-[var(--acid-400)] hover:text-[var(--ink-950)] transition-all duration-200 uppercase"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[var(--slate-light)] transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-4 h-px bg-[var(--acid-400)] transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[var(--slate-light)] transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[rgba(5,10,15,0.97)] border-t border-[rgba(0,255,178,0.1)] px-6 py-6 flex flex-col gap-4">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm tracking-widest text-[var(--slate-steel)] hover:text-[var(--acid-400)] transition-colors uppercase"
            >
              <span className="text-[var(--acid-400)] mr-2">{String(i + 1).padStart(2, '0')}.</span>
              {link.label}
            </a>
          ))}
          <a
            href="mailto:divya29shreetc@gmail.com?subject=Hiring Opportunity&body=Hi Divya,"
            className="mt-2 font-mono text-sm text-center py-3 border border-[var(--acid-400)] text-[var(--acid-400)] hover:bg-[var(--acid-400)] hover:text-[var(--ink-950)] transition-all uppercase tracking-widest"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
