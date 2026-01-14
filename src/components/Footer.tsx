'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-cream py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="font-serif text-xl font-bold"
          >
            Lakshmi Nair
          </motion.div>

          {/* Quick Links */}
          <div className="flex gap-8 text-sm">
            {['About', 'Building', 'Connect'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ color: '#E07A5F' }}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase())
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-cream/70 hover:text-terracotta transition-colors"
              >
                {item}
              </motion.button>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-cream/50 text-sm">
            © {currentYear} Lakshmi Nair
          </p>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-cream/30 text-sm mt-8"
        >
          Building GUTSY & Current State from Dubai
        </motion.p>
      </div>
    </footer>
  )
}
