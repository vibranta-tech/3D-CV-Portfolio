import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">06</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3 className="contact-heading">Let's Build Something Amazing Together</h3>
          <p className="contact-text">
            I'm currently open to internship opportunities, collaborative projects, and tech discussions.
            Whether you have a question or just want to say hi — my inbox is always open!
          </p>

          <div className="contact-links">
            <motion.a
              href="mailto:gameofliesandtruth@gmail.com"
              className="contact-link-card"
              whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(108, 92, 231, 0.2)' }}
            >
              <span className="contact-link-icon">📧</span>
              <span className="contact-link-label">Email</span>
              <span className="contact-link-value">gameofliesandtruth@gmail.com</span>
            </motion.a>

            <motion.a
              href="tel:+919007519143"
              className="contact-link-card"
              whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 245, 212, 0.2)' }}
            >
              <span className="contact-link-icon">📱</span>
              <span className="contact-link-label">Phone</span>
              <span className="contact-link-value">+91 9007519143</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/rituraj-kumar-rajput"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
              whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 119, 181, 0.2)' }}
            >
              <span className="contact-link-icon">💼</span>
              <span className="contact-link-label">LinkedIn</span>
              <span className="contact-link-value">rituraj-kumar-rajput</span>
            </motion.a>

            <motion.a
              href="https://github.com/gameofliesandtruth-lgtm"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-card"
              whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(255, 0, 110, 0.2)' }}
            >
              <span className="contact-link-icon">🐙</span>
              <span className="contact-link-label">GitHub</span>
              <span className="contact-link-value">gameofliesandtruth-lgtm</span>
            </motion.a>
          </div>

          <motion.a
            href="mailto:gameofliesandtruth@gmail.com"
            className="contact-cta"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(108, 92, 231, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello 👋
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
