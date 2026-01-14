'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-20 pb-16 bg-navy relative overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy/90" />

      {/* Decorative elements with parallax */}
      <motion.div
        style={{
          x: mousePosition.x * 0.5,
          y: mousePosition.y * 0.5,
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{
          x: mousePosition.x * -0.3,
          y: mousePosition.y * -0.3,
        }}
        className="absolute bottom-20 left-20 w-64 h-64 bg-cream/5 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-8 leading-tight"
            >
              Hi, I'm Lakshmi.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-cream/80 mb-10 leading-relaxed max-w-xl"
            >
              Started as a software engineer, discovered I cared more about the "why" than the "how".
              Scaled operations at Talabat across 8 markets. Now building{' '}
              <span className="text-terracotta font-semibold">GUTSY</span> (gut health) and{' '}
              <span className="text-terracotta font-semibold">Current State</span> (realistic productivity).
              Welcome to the chaos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: '#c9634e' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('connect')}
                className="bg-terracotta text-cream px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg shadow-terracotta/20"
              >
                Work With Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, borderColor: '#E07A5F', color: '#E07A5F' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('building')}
                className="border-2 border-cream/40 text-cream px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:border-terracotta hover:text-terracotta"
              >
                Explore GUTSY
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              style={{
                x: mousePosition.x * 0.2,
                y: mousePosition.y * 0.2,
              }}
              className="relative z-10"
            >
              {/* Image placeholder with editorial styling */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-cream/10 to-terracotta/10 shadow-2xl">
                {/* Grain texture overlay */}
                <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <p className="text-cream/50 text-sm uppercase tracking-widest mb-2">Hero Photo</p>
                    <p className="text-cream/30 text-xs">Add your professional photo here</p>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-terracotta/20" />
              </div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-terracotta/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                y: [0, 15, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-cream/10 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-cream/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
