'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const experienceData = [
  {
    company: 'Talabat',
    period: '2020-2024',
    summary: '€100M+ Annual Budgets Managed | 8 Global Markets',
    roles: [
      {
        title: 'Head of Affordability and Growth',
        period: 'Dec 2021 - Jul 2025',
        description:
          'Led annual strategic planning across 8 markets with €100M budgets, presenting investment cases to C-suite and orchestrating OKR alignment across 70+ stakeholders.',
      },
      {
        title: 'Head of Commercial Strategy and Products',
        period: 'Jan 2024 - Nov 2024',
        description:
          'Built Account Management Center achieving 60% adoption and €1.1M revenue impact while serving as commercial thought partner to regional and global leadership.',
      },
      {
        title: 'Revenue and Growth Lead MENA',
        period: 'Jan 2023 - Jan 2024',
        description:
          'Co-led multi-year strategic planning identifying €3M revenue uplift and €100M EBITDA opportunity while designing scalable operational frameworks across multiple markets.',
      },
    ],
  },
  {
    company: 'Deliveroo',
    period: '2017-2019',
    summary: 'Operations & Strategy | UK & Middle East',
    roles: [
      {
        title: 'Operations Strategy Manager',
        period: '2018 - 2019',
        description:
          'Developed operational frameworks for market expansion, optimizing delivery logistics and partner relationships across multiple territories.',
      },
      {
        title: 'Operations Analyst',
        period: '2017 - 2018',
        description:
          'Built data-driven insights for operational decision-making, identifying efficiency improvements that reduced costs by 15% across key markets.',
      },
    ],
  },
  {
    company: 'Software Engineering',
    period: '2013-2016',
    summary: 'Full-Stack Development | Enterprise Systems',
    roles: [
      {
        title: 'Software Engineer',
        period: '2013 - 2016',
        description:
          'Built and maintained enterprise software systems, developing both frontend and backend solutions. Realized passion for business strategy over technical debugging.',
      },
    ],
  },
]

export default function ExperienceModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedCompany, setExpandedCompany] = useState<string | null>(null)

  return (
    <>
      {/* Trigger Section */}
      <section className="section-padding bg-cream border-t border-black/10">
        <div className="container-editorial text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-black mb-4">
              Want the Full Story?
            </h2>
            <p className="text-black/60 font-body mb-8 max-w-lg mx-auto">
              Detailed career history with metrics, projects, and all the nerdy details.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="btn-secondary"
            >
              Read the Detailed Version
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70" />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-cream w-full max-w-3xl max-h-[85vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-cream border-b border-black/10 p-6 flex justify-between items-center">
                <h3 className="text-2xl font-serif font-bold text-black">
                  Professional Experience
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-black/5 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                {experienceData.map((company) => (
                  <div key={company.company} className="border border-black/10">
                    {/* Company Header */}
                    <button
                      onClick={() =>
                        setExpandedCompany(
                          expandedCompany === company.company ? null : company.company
                        )
                      }
                      className="w-full p-6 text-left hover:bg-black/5 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-xl font-serif font-bold text-black mb-1">
                            {company.company}
                          </h4>
                          <p className="text-sm text-burgundy font-body font-medium">
                            {company.period}
                          </p>
                          <p className="text-sm text-black/60 font-body mt-2">
                            {company.summary}
                          </p>
                        </div>
                        <motion.svg
                          animate={{
                            rotate: expandedCompany === company.company ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="w-5 h-5 text-black/40 flex-shrink-0 mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </div>
                    </button>

                    {/* Expanded Roles */}
                    <AnimatePresence>
                      {expandedCompany === company.company && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 space-y-4 border-t border-black/10 pt-4">
                            {company.roles.map((role, index) => (
                              <div
                                key={index}
                                className="pl-4 border-l-2 border-burgundy"
                              >
                                <h5 className="font-body font-semibold text-black">
                                  {role.title}
                                </h5>
                                <p className="text-xs text-burgundy font-body mb-2">
                                  {role.period}
                                </p>
                                <p className="text-sm text-black/70 font-body leading-relaxed">
                                  {role.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-cream border-t border-black/10 p-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
