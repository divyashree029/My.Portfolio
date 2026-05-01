'use client'

const projects = [
  {
    number: '01',
    featured: true,
    title: 'Payment Gateway Simulator',
    tagline: 'Production-grade transaction flow engine with full OAuth 2.0 security',
    description:
      'A scalable simulator replicating real-world payment flows — authorizations, captures, failures, and refunds — without external dependencies. Designed to enable safe integration testing at enterprise scale.',
    highlights: [
      'Engineered transaction state machines for success, failure, timeout, and refund scenarios',
      'Secured REST endpoints with OAuth 2.0 + client credentials flow, mirroring production payment security',
      'Containerized all services with Docker Compose; CI/CD pipeline deploys to AWS EC2 via GitHub Actions',
      'Optimized MySQL schema with indexed transaction tables for sub-10ms lookup on historical records',
    ],
    tech: ['Spring Boot', 'OAuth 2.0', 'MySQL', 'Docker', 'AWS EC2', 'GitHub Actions', 'CI/CD'],
    links: {
      github: 'https://github.com/divyashree029/Payment-gateway-Simulator-Application.git',
    },
    badge: 'April 2026',
    color: 'acid',
  },
  {
    number: '02',
    featured: true,
    title: 'AI PDF Interaction Bot',
    tagline: 'Conversational RAG system over arbitrary PDF documents using LLM embeddings',
    description:
      'A generative AI chatbot enabling natural language Q&A over uploaded PDF documents. Built with a retrieval-augmented generation (RAG) pipeline to deliver context-aware, history-sensitive responses.',
    highlights: [
      'Implemented RAG pipeline using LangChain with FAISS vector store for semantic document retrieval',
      'Powered by Google PaLM-2 embeddings for high-fidelity language understanding across diverse documents',
      'Maintains conversation history for multi-turn, context-aware dialogue without losing earlier context',
      'Streamlit frontend enables instant PDF upload and real-time chat with no infrastructure overhead',
    ],
    tech: ['Python', 'LangChain', 'FAISS', 'Google PaLM-2', 'Streamlit', 'Generative AI'],
    links: {
      github: 'https://github.com/divyashree029/AI-Powered-PDF-Interaction-Bot-main.git',
    },
    badge: 'Oct 2024',
    color: 'blue',
  },
  {
    number: '03',
    featured: false,
    title: 'Expense Tracker — Full Stack',
    tagline: 'Containerized full-stack finance tracker with JWT auth',
    description:
      'End-to-end personal finance application built to demonstrate full-stack engineering depth — from JWT-secured Spring Boot APIs to a responsive React frontend, all orchestrated with Docker.',
    highlights: [
      'Spring Boot REST API with Spring Security JWT authentication and role-based endpoint protection',
      'React.js frontend with category-level breakdowns, monthly trend charts, and budget alerts',
      'Docker Compose orchestrates API, database, and frontend in a single-command local setup',
    ],
    tech: ['Spring Boot', 'React.js', 'JWT', 'MySQL', 'Docker Compose'],
    links: {
      github: 'https://github.com/divyashree29',
    },
    badge: 'Personal Project',
    color: 'steel',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-6 reveal">
        <span className="font-mono text-xs text-[var(--acid-400)] tracking-widest uppercase">03. Projects</span>
        <div className="accent-line flex-1 max-w-32" />
      </div>

      <div className="mb-16 reveal">
        <h2
          className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-700 text-[var(--slate-light)]"
          style={{ fontWeight: 700, letterSpacing: '-0.02em' }}
        >
          Things I've{' '}
          <span className="text-[var(--acid-400)]">built.</span>
        </h2>
      </div>

      {/* Featured projects */}
      <div className="space-y-8 mb-12">
        {projects
          .filter((p) => p.featured)
          .map((project, idx) => (
            <div
              key={project.title}
              className={`reveal delay-${idx * 200} p-7 border border-[rgba(0,255,178,0.12)] bg-[rgba(10,22,40,0.5)] card-hover relative overflow-hidden`}
            >
              {/* BG number watermark */}
              <div
                className="absolute right-6 top-4 font-display text-[6rem] font-800 text-[rgba(0,255,178,0.03)] leading-none pointer-events-none select-none"
                style={{ fontWeight: 800 }}
                aria-hidden="true"
              >
                {project.number}
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span className="font-mono text-xs text-[var(--acid-400)] opacity-50">{project.number}</span>
                      <span className="tag text-[10px]">Featured</span>
                      <span className="font-mono text-[10px] text-[var(--slate-steel)]">{project.badge}</span>
                    </div>
                    <h3
                      className="font-display text-xl md:text-2xl font-700 text-[var(--slate-light)]"
                      style={{ fontWeight: 700 }}
                    >
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[var(--acid-400)] mt-1 opacity-70">{project.tagline}</p>
                  </div>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 font-mono text-xs px-4 py-2 border border-[rgba(0,255,178,0.25)] text-[var(--slate-steel)] hover:border-[var(--acid-400)] hover:text-[var(--acid-400)] transition-all uppercase tracking-widest"
                  >
                    GitHub ↗
                  </a>
                </div>

                <div className="h-px bg-[rgba(0,255,178,0.07)] mb-4" />

                <p className="font-body text-sm text-[var(--slate-steel)] leading-relaxed mb-5" style={{ fontWeight: 300 }}>
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--slate-steel)] leading-relaxed" style={{ fontWeight: 300 }}>
                      <span className="text-[var(--acid-400)] shrink-0 font-mono text-xs mt-0.5">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Other projects */}
      <div className="reveal">
        <h3 className="font-mono text-xs text-[var(--slate-steel)] uppercase tracking-widest mb-6">Other Notable Work</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects
            .filter((p) => !p.featured)
            .map((project) => (
              <div
                key={project.title}
                className="p-5 border border-[rgba(136,153,170,0.1)] bg-[rgba(10,22,40,0.3)] card-hover"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="font-mono text-xs text-[var(--slate-steel)] opacity-50">{project.number}</span>
                    <h3
                      className="font-display text-base font-600 text-[var(--slate-light)] mt-0.5"
                      style={{ fontWeight: 600 }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-[var(--slate-steel)] hover:text-[var(--acid-400)] transition-colors"
                  >
                    ↗
                  </a>
                </div>
                <p className="font-body text-xs text-[var(--slate-steel)] leading-relaxed mb-4" style={{ fontWeight: 300 }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag text-[10px]">{t}</span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
