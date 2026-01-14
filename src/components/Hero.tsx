'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen relative overflow-hidden bg-navy"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#1a2744] opacity-100" />

      {/* Grain texture */}
      <div className="absolute inset-0 grain-overlay opacity-20" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-cream mb-8 leading-tight"
            >
              Hi, I'm Lakshmi.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-cream/80 mb-10 leading-relaxed font-sans"
            >
              Started as a software engineer, discovered I cared more about the
              "why" than the "how". Scaled operations at Talabat across 8
              markets. Now building{' '}
              <span className="text-terracotta font-semibold">GUTSY</span> (gut
              health) and{' '}
              <span className="text-terracotta font-semibold">Current State</span>{' '}
              (realistic productivity). Welcome to the chaos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: '#E07A5F' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('connect')}
                className="bg-cream text-navy px-8 py-4 font-sans font-medium text-base transition-all duration-300"
              >
                Work With Me
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.02,
                  borderColor: '#E07A5F',
                  color: '#E07A5F',
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection('building')}
                className="border-2 border-cream text-cream px-8 py-4 font-sans font-medium text-base transition-all duration-300 bg-transparent"
              >
                Explore GUTSY
              </motion.button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Image placeholder - replace with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-cream/10 to-terracotta/20 rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-cream/40 text-center p-8 font-sans">
                  <div>
                    <p className="text-sm uppercase tracking-wider mb-2">Hero Image</p>
                    <p className="text-xs">800 x 1000px</p>
                  </div>
                </div>
              </div>

              {/* Decorative frame */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -inset-3 border border-cream/20 rounded-sm -z-10"
              />

              {/* Accent shape */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta/30 rounded-full blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream/40 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-cream/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
