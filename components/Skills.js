'use client'

import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    category: 'Core Languages & Frameworks',
    icon: '{ }',
    skills: [
      { name: 'Java', level: 95 },
      { name: 'Spring Boot', level: 92 },
      { name: 'Spring Security (JWT/OAuth)', level: 88 },
      { name: 'Spring Data JPA', level: 85 },
      { name: 'REST API Design', level: 93 },
    ],
  },
  {
    category: 'Data & Messaging',
    icon: '≡',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'Apache Kafka', level: 80 },
      { name: 'Schema Design & Indexing', level: 85 },
      { name: 'Query Optimization', level: 82 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '⬢',
    skills: [
      { name: 'Docker', level: 85 },
      { name: 'AWS (EC2, S3, RDS, Lambda)', level: 75 },
      { name: 'Jenkins / CI/CD', level: 80 },
      { name: 'Kubernetes', level: 65 },
    ],
  },
  {
    category: 'Architecture & Practices',
    icon: '◈',
    skills: [
      { name: 'Microservices Architecture', level: 90 },
      { name: 'System Design (LLD/HLD)', level: 82 },
      { name: 'JUnit & Mockito', level: 80 },
      { name: 'Agile / Scrum', level: 88 },
    ],
  },
]

const techBadges = [
  'Java', 'Spring Boot', 'Spring Security', 'Spring Cloud Gateway',
  'Apache Kafka', 'MySQL', 'JPA/Hibernate', 'OAuth 2.0', 'JWT',
  'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Git', 'Maven',
  'JUnit', 'Mockito', 'Postman', 'Swagger', 'Log4j2', 'Splunk',
  'React.js', 'Python', 'LangChain', 'FAISS', 'Generative AI',
]

function SkillBar({ name, level }) {
  const [animated, setAnimated] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm text-[var(--slate-light)]" style={{ fontWeight: 400 }}>{name}</span>
        <span className="font-mono text-xs text-[var(--acid-400)]">{level}%</span>
      </div>
      <div className="h-0.5 bg-[rgba(136,153,170,0.1)] w-full">
        <div
          className="h-full bg-gradient-to-r from-[var(--acid-400)] to-[rgba(0,255,178,0.4)] transition-all duration-1000 ease-out"
          style={{ width: animated ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-6 reveal">
        <span className="font-mono text-xs text-[var(--acid-400)] tracking-widest uppercase">04. Skills</span>
        <div className="accent-line flex-1 max-w-32" />
      </div>

      <div className="mb-16 reveal">
        <h2
          className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-700 text-[var(--slate-light)]"
          style={{ fontWeight: 700, letterSpacing: '-0.02em' }}
        >
          Technical{' '}
          <span className="text-[var(--acid-400)]">arsenal.</span>
        </h2>
      </div>

      {/* Skill bars grid */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {skillGroups.map((group, idx) => (
          <div key={group.category} className={`reveal delay-${idx * 100}`}>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-sm text-[var(--acid-400)]">{group.icon}</span>
              <h3 className="font-display text-sm font-600 text-[var(--slate-light)] uppercase tracking-wide" style={{ fontWeight: 600 }}>
                {group.category}
              </h3>
            </div>
            {group.skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        ))}
      </div>

      {/* All technologies word cloud */}
      <div className="reveal">
        <h3 className="font-mono text-xs text-[var(--slate-steel)] uppercase tracking-widest mb-6">All Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-3 py-1.5 border border-[rgba(136,153,170,0.1)] text-[var(--slate-steel)] hover:border-[rgba(0,255,178,0.3)] hover:text-[var(--acid-400)] transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
