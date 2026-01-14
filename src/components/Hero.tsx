'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Subtle parallax - image moves slower than content
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen relative overflow-hidden bg-cream"
    >
      <motion.div
        style={{ opacity }}
        className="min-h-screen flex items-center"
      >
        <div className="container-editorial w-full px-6 md:px-12 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              style={!isMobile ? { y: contentY } : {}}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="burgundy-line mb-8"
              />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-black mb-8 leading-[1.1]"
              >
                Hi, I'm Lakshmi.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-black/80 mb-10 leading-relaxed font-body max-w-xl"
              >
                Started as a software engineer, discovered I cared more about the
                "why" than the "how". Scaled operations at Talabat across 8
                markets. Now building{' '}
                <span className="text-burgundy font-semibold">GUTSY</span> (gut
                health) and{' '}
                <span className="text-burgundy font-semibold">Current State</span>{' '}
                (realistic productivity). Welcome to the chaos.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <button
                  onClick={() => scrollToSection('connect')}
                  className="btn-primary"
                >
                  Work With Me
                </button>
                <button
                  onClick={() => scrollToSection('building')}
                  className="btn-secondary"
                >
                  Explore GUTSY
                </button>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              style={!isMobile ? { y: imageY } : {}}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none img-zoom">
                <Image
                  src="/Lakshmi_personal_brandi...-023.jpg"
                  alt="Lakshmi Nair"
                  fill
                  className="object-cover img-editorial"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Decorative border */}
                <div className="absolute -inset-3 border border-black/10 -z-10" />

                {/* Accent corner */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-burgundy/10 -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-black/40 font-body">
            Scroll
          </span>
          <div className="w-px h-8 bg-black/20" />
        </motion.div>
      </motion.div>
    </section>
  )
}
