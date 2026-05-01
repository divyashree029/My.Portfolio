'use client'

export default function About() {
  const highlights = [
    {
      icon: '⬡',
      title: 'Distributed Systems',
      desc: 'Designed event-driven architectures with Apache Kafka to decouple services and enable real-time data flows at scale.',
    },
    {
      icon: '⬡',
      title: 'Secure API Engineering',
      desc: 'Implemented OAuth 2.0 and JWT-based RBAC achieving zero unauthorized incidents across production APIs.',
    },
    {
      icon: '⬡',
      title: 'Performance Optimization',
      desc: 'Tuned MySQL schemas and query plans to cut response latency by 48%, scaling for 500+ concurrent users.',
    },
    {
      icon: '⬡',
      title: 'Cloud & DevOps',
      desc: 'Automated CI/CD pipelines with Jenkins and Docker, cutting deployment overhead by 60% and maintaining 99.9% uptime.',
    },
  ]

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-16 reveal">
        <span className="font-mono text-xs text-[var(--acid-400)] tracking-widest uppercase">01. About</span>
        <div className="accent-line flex-1 max-w-32" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Bio */}
        <div className="reveal">
          <h2
            className="font-display text-[clamp(2rem,4vw,3.5rem)] font-700 text-[var(--slate-light)] leading-tight mb-6"
            style={{ fontWeight: 700, letterSpacing: '-0.02em' }}
          >
            Systems-first<br />
            <span className="text-[var(--acid-400)]">backend thinking.</span>
          </h2>
          <div className="space-y-4 font-body text-[var(--slate-steel)] leading-relaxed" style={{ fontWeight: 300 }}>
            <p>
              I'm a backend engineer who spent nearly two years at LG Soft India building the microservices infrastructure
              that powers enterprise-grade data collection and workflow systems. My work touched everything from
              low-latency Kafka pipelines to Spring Cloud Gateway routing.
            </p>
            <p>
               I specialize in building scalable microservices and high-performance APIs using Java and Spring Boot,
               with a strong focus on security, efficiency, and clean system architecture.
            </p>
            <p>
              Outside of work, I build side projects that explore generative AI, payment systems, and developer tooling.
              I believe the best engineers ship clean abstractions that make their team faster.
            </p>
          </div>

          {/* Quick facts */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              ['Location', 'Bengaluru, India'],
              ['Education', 'B.E. ECE — NHCE, 8.9 CGPA'],
              ['Experience', '2+ Years Production'],
              ['Focus', 'Java · Spring Boot · APIs'],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-0.5">
                <span className="font-mono text-[10px] text-[var(--acid-400)] uppercase tracking-widest">{k}</span>
                <span className="font-body text-sm text-[var(--slate-light)]" style={{ fontWeight: 400 }}>{v}</span>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 mt-8">
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tcdivyashree/' },
              { label: 'GitHub', href: 'https://github.com/divyashree029' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest text-[var(--slate-steel)] hover:text-[var(--acid-400)] transition-colors uppercase border-b border-transparent hover:border-[var(--acid-400)] pb-0.5"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Right: Capability grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal delay-200">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="card-hover p-5 border border-[rgba(0,255,178,0.1)] bg-[rgba(10,22,40,0.5)]"
              style={{ borderRadius: '2px' }}
            >
              <div className="text-[var(--acid-400)] text-xl mb-3">{item.icon}</div>
              <h3
                className="font-display text-sm font-600 text-[var(--slate-light)] mb-2 uppercase tracking-wide"
                style={{ fontWeight: 600 }}
              >
                {item.title}
              </h3>
              <p className="font-body text-xs text-[var(--slate-steel)] leading-relaxed" style={{ fontWeight: 300 }}>
                {item.desc}
              </p>
            </div>
          ))}

          {/* IEEE badge */}
          <div
            className="sm:col-span-2 p-5 border border-[rgba(0,255,178,0.15)] bg-[rgba(0,255,178,0.03)]"
            style={{ borderRadius: '2px' }}
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 border border-[var(--acid-400)] flex items-center justify-center">
                <span className="font-mono text-xs font-500 text-[var(--acid-400)]">IEEE</span>
              </div>
              <div>
                <h3 className="font-display text-sm font-600 text-[var(--slate-light)] mb-1" style={{ fontWeight: 600 }}>
                  Published Research — IEEE MRTM 2023
                </h3>
                <p className="font-body text-xs text-[var(--slate-steel)]" style={{ fontWeight: 300 }}>
                  "Digital Notice Board using Wi-Fi Module" — peer-reviewed research at an international conference demonstrating IoT and embedded systems expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
