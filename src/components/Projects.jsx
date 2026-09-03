import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'Vibranta — HR Recruitment & Interview Management System',
    role: 'Backend Developer',
    year: '2026',
    description: [
      'Developed the backend for an internal HR recruitment management panel to streamline interview scheduling and coordination.',
      'Implemented an interviewer scheduling system for assigning and managing interview slots.',
      'Built interview rescheduling functionality to handle changes in interviewer availability and candidate schedules.',
      'Managed recruitment and interview data through backend APIs and database operations.',
    ],
    tags: ['Backend', 'APIs', 'Database', 'Management System'],
    color: '#6c5ce7',
    gradient: 'linear-gradient(135deg, rgba(108, 92, 231, 0.1), rgba(162, 155, 254, 0.05))',
  },
  {
    title: 'LPU Campus Hub',
    role: 'Full-Stack Developer',
    year: '2026',
    description: [
      'A central hub for all LPU campus updates, event promotions, resources, and community contributions.',
      'Repository keeps everything organized for students, clubs, event organizers, and volunteers.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Community'],
    color: '#00f5d4',
    gradient: 'linear-gradient(135deg, rgba(0, 245, 212, 0.1), rgba(0, 245, 212, 0.02))',
    link: 'https://github.com/gameofliesandtruth-lgtm/Project-',
  },
  {
    title: 'Neon Campus Website',
    role: 'Frontend Developer',
    year: '2026',
    description: [
      'A futuristic, neon-themed single-page website built in a single HTML file with integrated CSS & JavaScript.',
      'Designed for campus communities to showcase events, resources, certificates, and creative content.',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    color: '#ff006e',
    gradient: 'linear-gradient(135deg, rgba(255, 0, 110, 0.1), rgba(255, 0, 110, 0.02))',
    link: 'https://github.com/gameofliesandtruth-lgtm/Project-2',
  },
]

const certificates = [
  { name: 'Python Programming', issuer: 'Infosys Springboard', year: '2025', color: '#00f5d4' },
  { name: 'Java Programming', issuer: 'CodeWithHarry', year: '2023', color: '#ff006e' },
  { name: 'Time Management & Productivity', issuer: 'Coursera', year: '2025', color: '#ffd60a' },
  { name: 'Cyber Security Fundamentals', issuer: 'edX', year: '2025', color: '#6c5ce7' },
]

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">04</span>
          <h2 className="section-title">Projects & Certifications</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="project-card"
              style={{ background: project.gradient, borderColor: `${project.color}30` }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              whileHover={{
                y: -10,
                boxShadow: `0 20px 40px ${project.color}20`,
                borderColor: `${project.color}60`,
              }}
            >
              <div className="project-header">
                <div className="project-folder">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={project.color} strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                )}
              </div>

              <h3 className="project-title">
                {project.title.startsWith('Vibranta') ? (
                  <><a href="https://vibranta.in" target="_blank" rel="noopener noreferrer" className="vibranta-link">Vibranta</a> — HR Recruitment & Interview Management System</>
                ) : project.title}
              </h3>
              <span className="project-role" style={{ color: project.color }}>{project.role} • {project.year}</span>

              <ul className="project-desc-list">
                {project.description.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>

              <div className="project-tags">
                {project.tags.map((tag, j) => (
                  <span key={j} className="project-tag" style={{ borderColor: `${project.color}40`, color: project.color }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificates */}
        <motion.h3
          className="sub-section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          📜 Certifications
        </motion.h3>

        <div className="certificates-grid">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              className="cert-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, boxShadow: `0 10px 30px ${cert.color}20` }}
            >
              <div className="cert-accent" style={{ backgroundColor: cert.color }}></div>
              <div className="cert-content">
                <h4 className="cert-name">{cert.name}</h4>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
              <span className="cert-year" style={{ color: cert.color }}>{cert.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
