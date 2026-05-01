'use client'

const jobs = [
  {
    company: 'LG Soft India (LGSI)',
    role: 'Software Engineer',
    period: 'Jul 2024 — Mar 2026',
    duration: '1 yr 9 mos',
    location: 'Bengaluru',
    type: 'Full-time',
    accent: true,
    bullets: [
      'Architected 6+ production microservices using Java and Spring Boot, decomposing a monolithic data collection system into independently deployable, domain-scoped services.',
      'Implemented Apache Kafka for asynchronous inter-service messaging, enabling real-time credit tracking and cutting end-to-end system latency by ~40%.',
      'Configured Spring Cloud Gateway as the centralized edge server, unifying request routing, rate limiting, and auth enforcement across all microservices.',
      'Secured all REST endpoints with OAuth 2.0 + JWT and enforced role-based access control (RBAC), achieving zero unauthorized access incidents in production.',
      'Designed and indexed relational MySQL schemas for high-volume records and tamper-proof audit logs, improving query response time by 48%.',
      'Automated CI/CD pipelines with Jenkins and Docker, reducing manual deployment cycles by ~60% and maintaining 99.9% API uptime.',
      'Implemented centralized observability with Splunk and Log4j2 for real-time alerting, reducing MTTR for production incidents.',
    ],
    tags: ['Java', 'Spring Boot', 'Kafka', 'OAuth 2.0', 'JWT', 'MySQL', 'Docker', 'Jenkins', 'Kubernetes'],
  },
  {
    company: 'Ahana Systems & Solutions',
    role: 'Data Analyst Intern',
    period: 'Feb 2024 — Apr 2024',
    duration: '3 mos',
    location: 'Bengaluru',
    type: 'Internship',
    accent: false,
    bullets: [
      'Performed end-to-end data cleaning and exploratory analysis on business datasets to surface actionable insights for stakeholders.',
      'Built and evaluated ML classification models, reporting precision/recall tradeoffs to inform model selection decisions.',
      'Created data visualizations in Python (matplotlib, seaborn) to communicate findings clearly to non-technical audiences.',
    ],
    tags: ['Python', 'pandas', 'scikit-learn', 'matplotlib', 'EDA'],
  },
  {
    company: 'Oasis Infobyte',
    role: 'Web Development Intern',
    period: 'Apr 2024',
    duration: '1 mo',
    location: 'Remote',
    type: 'Internship',
    accent: false,
    bullets: [
      'Built a fully responsive static website applying HTML, CSS, and JavaScript best practices in a time-boxed startup environment.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-16 reveal">
        <span className="font-mono text-xs text-[var(--acid-400)] tracking-widest uppercase">02. Experience</span>
        <div className="accent-line flex-1 max-w-32" />
      </div>

      <div className="relative">
        {/* Timeline spine */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-[rgba(0,255,178,0.12)] hidden md:block" />

        <div className="space-y-12">
          {jobs.map((job, idx) => (
            <div key={job.company} className={`reveal delay-${idx * 100} relative`}>
              {/* Timeline dot */}
              <div
                className={`absolute -left-1 top-6 w-3 h-3 border-2 hidden md:block ${
                  job.accent
                    ? 'border-[var(--acid-400)] bg-[var(--acid-400)]'
                    : 'border-[rgba(0,255,178,0.4)] bg-[var(--ink-950)]'
                }`}
                style={{ borderRadius: '1px', transform: 'rotate(45deg)' }}
              />

              <div className={`md:ml-12 p-6 border ${job.accent ? 'border-[rgba(0,255,178,0.2)]' : 'border-[rgba(136,153,170,0.1)]'} bg-[rgba(10,22,40,0.4)] card-hover`}>
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3
                        className="font-display text-lg font-600 text-[var(--slate-light)]"
                        style={{ fontWeight: 600 }}
                      >
                        {job.role}
                      </h3>

                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-sm text-[var(--acid-400)]">{job.company}</span>
                      <span className="text-[var(--slate-steel)] text-xs">·</span>
                      <span className="font-mono text-xs text-[var(--slate-steel)]">{job.location}</span>
                      <span className="text-[var(--slate-steel)] text-xs">·</span>
                      <span className="font-mono text-xs text-[var(--slate-steel)]">{job.type}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-xs text-[var(--slate-steel)]">{job.period}</div>
                    <div className="font-mono text-xs text-[var(--acid-400)] opacity-70">{job.duration}</div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(0,255,178,0.07)] mb-4" />

                {/* Bullets */}
                <ul className="space-y-2 mb-5">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--slate-steel)] leading-relaxed" style={{ fontWeight: 300 }}>
                      <span className="text-[var(--acid-400)] mt-0.5 shrink-0 font-mono text-xs">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-16 reveal">
        <h3 className="font-mono text-xs text-[var(--slate-steel)] uppercase tracking-widest mb-6">Certifications & Awards</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { org: 'JP Morgan Chase & Co.', name: 'REST API Integration & Controllers', icon: '◆' },
            { org: 'Google Cloud', name: 'Introduction to Generative AI', icon: '◆' },
            { org: 'Deloitte Australia', name: 'Data Analytics Job Simulation', icon: '◆' },
          ].map((cert) => (
            <div
              key={cert.name}
              className="p-4 border border-[rgba(0,255,178,0.08)] bg-[rgba(10,22,40,0.3)] hover:border-[rgba(0,255,178,0.2)] transition-colors"
            >
              <span className="text-[var(--acid-400)] text-xs mb-2 block">{cert.icon}</span>
              <p className="font-body text-sm text-[var(--slate-light)] mb-1" style={{ fontWeight: 400 }}>{cert.name}</p>
              <p className="font-mono text-xs text-[var(--slate-steel)]">{cert.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
