import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  { name: 'C', level: 85, category: 'language', color: '#6c5ce7' },
  { name: 'C++', level: 80, category: 'language', color: '#a29bfe' },
  { name: 'Java', level: 82, category: 'language', color: '#ff006e' },
  { name: 'Python', level: 88, category: 'language', color: '#00f5d4' },
  { name: 'HTML', level: 75, category: 'web', color: '#ff6b35' },
  { name: 'MySQL', level: 70, category: 'database', color: '#ffd60a' },
  { name: 'DBMS', level: 75, category: 'database', color: '#ffd60a' },
  { name: 'DSA', level: 80, category: 'core', color: '#6c5ce7' },
  { name: 'OOP', level: 85, category: 'core', color: '#a29bfe' },
  { name: 'Computer Networks', level: 72, category: 'core', color: '#00f5d4' },
  { name: 'Video Editing', level: 65, category: 'creative', color: '#ff006e' },
  { name: 'Graphic Design', level: 60, category: 'creative', color: '#ff6b35' },
  { name: 'Team Leadership', level: 90, category: 'soft', color: '#ffd60a' },
  { name: 'Communication', level: 88, category: 'soft', color: '#00f5d4' },
  { name: 'Problem Solving', level: 85, category: 'soft', color: '#6c5ce7' },
]

const categories = [
  { key: 'language', label: 'Languages', icon: '⚡' },
  { key: 'web', label: 'Web Tech', icon: '🌐' },
  { key: 'database', label: 'Database', icon: '🗄️' },
  { key: 'core', label: 'Core CS', icon: '🧠' },
  { key: 'creative', label: 'Creative', icon: '🎨' },
  { key: 'soft', label: 'Soft Skills', icon: '🤝' },
]

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">02</span>
          <h2 className="section-title">Skills & Arsenal</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="skills-container">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.key}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.1, duration: 0.6 }}
            >
              <h3 className="skill-category-title">
                <span className="skill-category-icon">{cat.icon}</span>
                {cat.label}
              </h3>
              <div className="skill-bars">
                {skills
                  .filter(s => s.category === cat.key)
                  .map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      className="skill-bar-item"
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: catIndex * 0.1 + i * 0.08, duration: 0.5 }}
                    >
                      <div className="skill-bar-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent" style={{ color: skill.color }}>{skill.level}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <motion.div
                          className="skill-bar-fill"
                          style={{ backgroundColor: skill.color, boxShadow: `0 0 15px ${skill.color}40` }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ delay: catIndex * 0.1 + i * 0.08 + 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
