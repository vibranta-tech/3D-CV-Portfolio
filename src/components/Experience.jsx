import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: 'Chief Operating Officer (COO)',
    company: 'Vibranta',
    period: 'Aug 2025 — Aug 2026',
    badge: 'Promoted from HR to COO',
    description: [
      'Led a 90+ member team and managed coordinators across organizational operations and event execution.',
      'Managed recruitment and hiring processes while contributing to technical and operational activities.',
      'Coordinated major events including GraveYard Season 2, HACK-ADHYAY and Astitwa, along with speaker sessions and smaller events.',
    ],
    color: '#6c5ce7',
  },
]

const achievements = [
  {
    title: 'Leadership — Vibranta',
    description: 'Progressed from HR to Chief Operating Officer while leading teams, coordinators and organizational operations.',
    period: '2025 — 2026',
    icon: '👑',
  },
  {
    title: 'Event Operations & Coordination',
    description: 'Contributed to the execution of technical events, hackathons, speaker sessions and community activities.',
    period: '2025 — 2026',
    icon: '🎯',
  },
  {
    title: 'Creative Skills',
    description: 'Developed intermediate-level video editing and graphic designing capabilities alongside technical studies.',
    period: '2025 — Present',
    icon: '🎨',
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">03</span>
          <h2 className="section-title">Experience & Achievements</h2>
          <div className="section-line"></div>
        </motion.div>

        {/* Work Experience */}
        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8 }}
            >
              <div className="timeline-dot" style={{ backgroundColor: exp.color, boxShadow: `0 0 20px ${exp.color}60` }}></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <span className="timeline-company">{exp.company}</span>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                {exp.badge && (
                  <span className="timeline-badge">{exp.badge}</span>
                )}
                <ul className="timeline-list">
                  {exp.description.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + j * 0.1, duration: 0.5 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.h3
          className="sub-section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          🏆 Key Achievements
        </motion.h3>

        <div className="achievements-grid">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              className="achievement-card"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 40px rgba(108, 92, 231, 0.2)' }}
            >
              <span className="achievement-icon">{ach.icon}</span>
              <h4 className="achievement-title">{ach.title}</h4>
              <p className="achievement-desc">{ach.description}</p>
              <span className="achievement-period">{ach.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
