'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-10 px-6 border-t border-[rgba(0,255,178,0.07)]">

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2 group">
          <span className="font-mono text-sm text-[var(--acid-400)] opacity-60 group-hover:scale-110 transition-transform">
            {"</>"}
          </span>

          <span className="font-display text-sm font-semibold text-[var(--slate-light)] group-hover:text-[var(--acid-400)] transition-colors">
            Divyashree
          </span>
        </div>

        {/* Text */}
        <p className="font-mono text-xs text-[var(--slate-steel)] opacity-50">
          · {year} ·
        </p>

        {/* Links */}
        <div className="flex items-center gap-5">
          {[
            { label: 'GitHub', href: 'https://github.com/divyashree029' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tcdivyashree/' },
            {
              label: 'Email',
              href: 'https://mail.google.com/mail/?view=cm&to=divya29shreetc@gmail.com'
            },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[var(--slate-steel)] hover:text-[var(--acid-400)] transition-colors uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
        </div>

      </div>

    </footer>
  )
}