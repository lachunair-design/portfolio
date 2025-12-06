'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import ExperienceModal from './ExperienceModal'

const timeline = [
  {
    year: '2013-2016',
    icon: '💻',
    title: 'Started as a Software Engineer',
    description: 'Built systems, wrote code, realized I cared more about the "why" than the "how". Also realized I\'m not patient enough to debug for 8 hours straight.',
  },
  {
    year: '2017-2019',
    icon: '🦘',
    title: 'Joined Deliveroo',
    description: 'Dove into operations and strategy. Learned that scaling businesses is just like debugging, except with humans, and they don\'t come with error messages.',
  },
  {
    year: '2020-2024',
    icon: '📈',
    title: 'Scaled with Talabat',
    description: 'Managed €100M+ budgets across 8 markets. Presented to C-suite. Orchestrated teams. Discovered I\'m good at translating vision into action (and PowerPoint).',
  },
  {
    year: '2024',
    icon: '❤️',
    title: 'Founded GUTSY',
    description: 'Wanted to experience the founder journey myself. Now I understand why sleep is optional and coffee is a food group. Also why every decision feels existential.',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">
            From Code to Strategy (With Detours)
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Photo collage placeholder - inspired by Cat's style */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl aspect-square mb-4 flex items-center justify-center shadow-lg"
              >
                <p className="text-gray-400 text-center px-8">
                  [Your photo here - 600x600px]
                </p>
              </motion.div>
              
              {/* Small decorative speech bubbles */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -left-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                hi bb
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                wyyd
              </motion.div>
            </div>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <div className="text-primary font-bold text-sm mb-1">{item.year}</div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <ExperienceModal />
        </motion.div>
      </div>
    </section>
  )
}
