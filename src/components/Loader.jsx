import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const loaderMessages = [
  'INITIALIZING SYSTEM...',
  'LOADING MODULES...',
  'COMPILING EXPERIENCE...',
  'RENDERING PORTFOLIO...',
  'DEPLOYING RITURAJ.EXE...',
]

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [messageIndex, setMessageIndex] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsExiting(true)
            setTimeout(onComplete, 1200)
          }, 400)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [onComplete])

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMessageIndex(prev => (prev + 1) % loaderMessages.length)
    }, 600)
    return () => clearInterval(msgInterval)
  }, [])

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="loader-grid-bg"></div>
          
          <div className="loader-content">
            <motion.div
              className="loader-logo"
              initial={{ scale: 0, rotateZ: -180 }}
              animate={{ scale: 1, rotateZ: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="loader-hex">
                <span>RK</span>
              </div>
            </motion.div>

            <motion.h1
              className="loader-name"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              RITURAJ KUMAR SINGH
            </motion.h1>

            <motion.div
              className="loader-bar-container"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '300px', opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="loader-bar">
                <motion.div
                  className="loader-bar-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="loader-percentage">{progress}%</div>
            </motion.div>

            <motion.div
              className="loader-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="loader-cursor">▸</span>
              {loaderMessages[messageIndex]}
            </motion.div>
          </div>

          {/* Corner decorations */}
          <div className="loader-corner loader-corner-tl"></div>
          <div className="loader-corner loader-corner-tr"></div>
          <div className="loader-corner loader-corner-bl"></div>
          <div className="loader-corner loader-corner-br"></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
