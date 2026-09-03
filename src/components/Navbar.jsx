import { motion } from 'framer-motion'

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => scrollTo('hero')}>
          <span className="nav-logo-bracket">&lt;</span>
          RK
          <span className="nav-logo-bracket">/&gt;</span>
        </div>
        
        <div className="nav-links">
          {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item, i) => (
            <motion.button
              key={item}
              className="nav-link"
              onClick={() => scrollTo(item)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="nav-link-index">0{i + 1}.</span>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.button>
          ))}
        </div>

        <motion.a
          href="https://linkedin.com/in/rituraj-kumar-rajput"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 245, 212, 0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Connect
        </motion.a>
      </div>
    </motion.nav>
  )
}
