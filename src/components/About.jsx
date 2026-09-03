import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
        >
          <span className="section-number">01</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-text"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={1}
          >
            <p className="about-intro">
              I'm a disciplined <span className="text-highlight">Computer Science student</span> driven
              by the spirit of continuous improvement. Based in <span className="text-highlight">Punjab, India</span>,
              I specialize in architecting software solutions with precision and tactical problem-solving.
            </p>
            <p>
              As the <span className="text-accent-neon">Chief Operating Officer</span> at Vibranta, I led a 90+ member
              team, managing coordinators across organizational operations and event execution. I progressed from
              HR to COO, demonstrating strong leadership and organizational capabilities.
            </p>
            <p>
              My focus lies in developing robust applications, backend systems, and fostering technical
              excellence in every project I undertake. I'm passionate about Data Structures & Algorithms,
              Object-Oriented Programming, and building scalable solutions.
            </p>
          </motion.div>

          <motion.div
            className="about-details"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={2}
          >
            <div className="about-detail-card">
              <div className="detail-icon">📍</div>
              <div>
                <span className="detail-label">Location</span>
                <span className="detail-value">Punjab, India</span>
              </div>
            </div>
            <div className="about-detail-card">
              <div className="detail-icon">🎓</div>
              <div>
                <span className="detail-label">University</span>
                <span className="detail-value">Lovely Professional University</span>
              </div>
            </div>
            <div className="about-detail-card">
              <div className="detail-icon">💼</div>
              <div>
                <span className="detail-label">Role</span>
                <span className="detail-value">COO @ Vibranta</span>
              </div>
            </div>
            <div className="about-detail-card">
              <div className="detail-icon">📧</div>
              <div>
                <span className="detail-label">Email</span>
                <span className="detail-value">gameofliesandtruth@gmail.com</span>
              </div>
            </div>
            <div className="about-detail-card">
              <div className="detail-icon">📱</div>
              <div>
                <span className="detail-label">Phone</span>
                <span className="detail-value">+91 9007519143</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
