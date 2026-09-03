import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const education = [
  {
    school: 'Lovely Professional University',
    degree: 'B.Tech — Computer Science & Engineering (CSE Core)',
    location: 'Punjab, India',
    period: 'Aug 2025 — Apr 2029',
    grade: 'CGPA: 7.7',
    icon: '🎓',
    color: '#6c5ce7',
    current: true,
  },
  {
    school: "St. Peter's School",
    degree: 'Senior Secondary (Class XII)',
    location: 'Durgapur, West Bengal',
    period: '2025',
    grade: '80%',
    icon: '📚',
    color: '#00f5d4',
    current: false,
  },
  {
    school: 'A.G. Church School',
    degree: 'Matriculation (Class X)',
    location: 'Kolkata, West Bengal',
    period: '2023',
    grade: '87%',
    icon: '🏫',
    color: '#ff006e',
    current: false,
  },
]

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section" id="education" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">05</span>
          <h2 className="section-title">Education</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="education-timeline">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className={`edu-card ${edu.current ? 'edu-card-current' : ''}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ 
                y: -5,
                boxShadow: `0 15px 40px ${edu.color}15`,
              }}
            >
              <div className="edu-card-accent" style={{ backgroundColor: edu.color }}></div>
              
              <div className="edu-card-header">
                <span className="edu-icon">{edu.icon}</span>
                <div className="edu-card-info">
                  <h3 className="edu-school">{edu.school}</h3>
                  <span className="edu-degree">{edu.degree}</span>
                </div>
                {edu.current && <span className="edu-current-badge">Current</span>}
              </div>

              <div className="edu-card-meta">
                <span className="edu-location">📍 {edu.location}</span>
                <span className="edu-period">🗓️ {edu.period}</span>
              </div>

              <div className="edu-grade" style={{ color: edu.color }}>
                <span className="edu-grade-label">Grade:</span>
                <span className="edu-grade-value">{edu.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
