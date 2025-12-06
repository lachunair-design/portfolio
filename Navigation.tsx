'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-secondary cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Lakshmi Nair
        </motion.div>

        <div className="hidden md:flex gap-8 items-center">
          {['Works', 'About', 'GUTSY', 'Blog'].map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.1, color: '#FF5A5F' }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-secondary font-medium transition-colors"
            >
              {item}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#ff4348' }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="bg-primary text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            Contact
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}
