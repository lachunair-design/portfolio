'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface Experience {
  company: string
  logo: string
  roles: {
    title: string
    period: string
    description: string
    expanded?: string
  }[]
}

const experiences: Experience[] = [
  {
    company: 'Talabat',
    logo: '🍽️',
    roles: [
      {
        title: 'Head of Affordability and Growth',
        period: 'Dec 2024 - Jul 2025',
        description: 'Led annual strategic planning across 8 markets with €100M budget, presenting investment cases to C-suite and orchestrating OKR alignment across 70+ stakeholders.',
      },
      {
        title: 'Head of Commercial Strategy and Products',
        period: 'Jan 2024 - Nov 2024',
        description: 'Built Account Management Center across 8 markets achieving 60% adoption and €1.2M revenue impact while serving as commercial thought partner to regional and global leadership.',
      },
      {
        title: 'Revenue and Growth Lead MENA',
        period: 'Jan 2022 - Jan 2024',
        description: 'Co-led multi-year strategic planning identifying €5M revenue uplift and €10M EBITDA opportunity while designing scalable operational frameworks across multiple markets.',
      },
    ],
  },
  {
    company: 'Deliveroo',
    logo: '🦘',
    roles: [
      {
        title: 'Strategy and Operations Lead',
        period: 'Jan 2020 - Jan 2022',
        description: 'Led strategic expansion into 5 new cities generating AED 1.6M GMV increase with 90% success rate in surpassing GMV targets through Weekly Business Reviews.',
      },
      {
        title: 'Senior Business Strategy Associate',
        period: 'Jan 2019 - Jan 2020',
        description: 'Reduced poor delivery outcomes by 30% across 12 markets and launched B2B product pilot generating AED 1.5M revenue within 12 months.',
      },
    ],
  },
]

export default function ExperienceModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedRole, setExpandedRole] = useState<string | null>(null)

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: '#1B2838' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="bg-secondary text-white px-8 py-3 rounded-full font-medium text-lg"
      >
        View Full Experience
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed inset-4 md:inset-10 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
            >
              <div className="bg-gradient-to-r from-primary to-accent p-6 flex justify-between items-center">
                <h2 className="text-3xl font-black text-white">Professional Experience</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-10">
                <div className="max-w-4xl mx-auto space-y-8">
                  {experiences.map((exp, expIndex) => (
                    <motion.div
                      key={expIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: expIndex * 0.1 }}
                      className="border-l-4 border-primary pl-6"
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-4xl">{exp.logo}</div>
                        <h3 className="text-2xl font-bold text-secondary">{exp.company}</h3>
                      </div>

                      <div className="space-y-4">
                        {exp.roles.map((role, roleIndex) => (
                          <motion.div
                            key={roleIndex}
                            whileHover={{ x: 5 }}
                            className="bg-gray-50 rounded-xl p-5 cursor-pointer"
                            onClick={() => setExpandedRole(expandedRole === `${expIndex}-${roleIndex}` ? null : `${expIndex}-${roleIndex}`)}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-lg font-bold text-secondary">{role.title}</h4>
                              <motion.span
                                animate={{ rotate: expandedRole === `${expIndex}-${roleIndex}` ? 180 : 0 }}
                                className="text-primary"
                              >
                                ▼
                              </motion.span>
                            </div>
                            <p className="text-sm text-gray-500 mb-3">{role.period}</p>
                            <p className="text-gray-700">{role.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
