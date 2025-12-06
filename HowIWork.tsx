'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const capabilities = [
  {
    icon: '📊',
    title: 'Strategic Planning',
    description: 'Annual planning cycles, OKR frameworks, investment cases. I help you figure out where you\'re going and how to get there, without the consultant-speak.',
  },
  {
    icon: '💰',
    title: 'Commercial Strategy',
    description: 'Pricing optimization, revenue modeling, GTM strategy. Making sure you\'re not leaving money on the table while keeping customers happy.',
  },
  {
    icon: '👥',
    title: 'Cross-Functional Leadership',
    description: 'Orchestrating teams across product, ops, sales, marketing. Getting everyone rowing in the same direction (harder than it sounds).',
  },
  {
    icon: '🌍',
    title: 'Market Expansion',
    description: 'New city launches, competitive analysis, localization. I\'ve launched into 5+ cities and learned what works (and what doesn\'t).',
  },
  {
    icon: '📈',
    title: 'Performance Management',
    description: 'WBRs, QBRs, data-driven decision making. Building the dashboards and cadences that keep teams accountable and moving fast.',
  },
  {
    icon: '💡',
    title: 'Founder Advisory',
    description: 'Zero-to-one strategy, business planning, operational setup. I\'ve been on both sides, corporate operator and startup founder, so I get it.',
  },
]

export default function HowIWork() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">How I Work</h2>
          <p className="text-xl text-gray-600">Six core capabilities I bring to every engagement.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{capability.icon}</div>
              <h3 className="text-xl font-bold text-secondary mb-3">{capability.title}</h3>
              <p className="text-gray-600 leading-relaxed">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
