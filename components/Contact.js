'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-16 reveal">
        <span className="font-mono text-xs text-[var(--acid-400)] tracking-widest uppercase">05. Contact</span>
        <div className="accent-line flex-1 max-w-32" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: CTA copy */}
        <div className="reveal">
          <h2
            className="font-display text-[clamp(2rem,4vw,3.5rem)] font-700 text-[var(--slate-light)] leading-tight mb-6"
            style={{ fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Let's build something{' '}
            <span className="text-[var(--acid-400)]">remarkable.</span>
          </h2>
          <p className="font-body text-[var(--slate-steel)] leading-relaxed mb-8" style={{ fontWeight: 300 }}>
            I'm actively exploring Java backend and software engineering roles in Bengaluru (8–12 LPA range).
            Whether you have a role to discuss, a system to architect, or just want to connect — my inbox is open.
          </p>

          {/* Role indicators */}
          <div className="space-y-3 mb-8">
            {[
              'Java Backend Engineer',
              'Spring Boot / Microservices Developer',
              'API & Platform Engineer',
              'Full-Stack Java Developer',
            ].map((role) => (
              <div key={role} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[var(--acid-400)] rotate-45 block shrink-0" />
                <span className="font-body text-sm text-[var(--slate-steel)]">{role}</span>
              </div>
            ))}
          </div>

          <a
            href="https://mail.google.com/mail/?view=cm&to=divya29shreetc@gmail.com&subject=Opportunity%20Discussion&body=Hi%20Divya,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-mono text-sm tracking-widest px-8 py-4 bg-[var(--acid-400)] text-[var(--ink-950)] font-500 hover:bg-[var(--acid-500)] transition-all duration-200 uppercase"
            style={{ fontWeight: 500 }}
          >
            Say Hello
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right: Contact card */}
        <div className="reveal delay-200">
          <div className="p-8 border border-[rgba(0,255,178,0.15)] bg-[rgba(10,22,40,0.5)]">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[rgba(0,255,178,0.08)]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="font-mono text-xs text-[var(--slate-steel)] ml-2">contact.sh</span>
            </div>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                {
                  label: 'EMAIL',
                  value: 'divya29shreetc@gmail.com',
                  href: 'mailto:divya29shreetc@gmail.com',
                },
                {
                  label: 'PHONE',
                  value: '+91 70199 40365',
                  href: 'tel:+917019940365',
                },
                {
                  label: 'LINKEDIN',
                  value: 'linkedin.com/in/tcdivyashree',
                  href: 'https://www.linkedin.com/in/tcdivyashree/',
                },
                {
                  label: 'GITHUB',
                  value: 'github.com/divyashree029',
                  href: 'https://github.com/divyashree029',
                },
                {
                  label: 'LOCATION',
                  value: 'Bengaluru, India',
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="group">
                  <span className="font-mono text-[10px] text-[var(--acid-400)] opacity-60 uppercase tracking-widest block mb-0.5">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-mono text-sm text-[var(--slate-light)] group-hover:text-[var(--acid-400)] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-mono text-sm text-[var(--slate-light)]">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Status badge */}
            <div className="mt-8 pt-5 border-t border-[rgba(0,255,178,0.08)] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--acid-400)] animate-pulse" />
              <span className="font-mono text-xs text-[var(--slate-steel)]">
                Open to roles · Response within 24hrs
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
