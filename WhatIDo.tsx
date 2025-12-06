'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '💼',
    title: 'Strategic Consulting',
    description: 'For companies navigating growth, market expansion, or commercial transformation. Annual planning, go-to-market strategy, pricing optimization, and making sure your teams actually work together.',
    cta: 'Explore Consulting',
  },
  {
    icon: '🧠',
    title: 'Coaching & Mentorship',
    description: 'For founders and operators who need a thought partner. Monthly or project-based sessions available to work through your toughest challenges—from org design to strategy to product decisions that keep you up at 3am.',
    cta: 'Book a Session',
  },
  {
    icon: '❤️',
    title: 'Building GUTSY',
    description: 'My own venture into gut health. Because I wanted to experience the zero-to-one journey myself, the sleepless nights, the failed experiments, the whole beautiful mess. Currently pre-launch and building in public.',
    cta: 'Follow the Journey',
  },
]

export default function WhatIDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="works" ref={ref} className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">What I Do</h2>
          <p className="text-xl text-gray-600">Three ways I can help you build something that lasts.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 border-t-4 border-primary shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.05, color: '#FF5A5F' }}
                className="text-primary font-medium flex items-center gap-2 group"
              >
                {service.cta}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
