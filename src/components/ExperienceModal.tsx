'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const experienceData = [
  {
    company: 'Talabat',
    period: '2022 — 2025',
    summary: '€100M+ Annual Budgets | 8 Global Markets | C-Suite Advisory',
    roles: [
      {
        title: 'Head of Affordability and Growth',
        period: '12/2024 — 07/2025',
        description: 'Partnered with C-suite to lead the annual strategic planning cycle across 8 markets. Defined the €100M annual budget and commercial strategy while presenting €15M+ investment cases with detailed ROI projections to executive leadership.'
      },
      {
        title: 'Head of Commercial Strategy and Products',
        period: '01/2024 — 11/2024',
        description: 'Built the Account Management Center across 8 markets, delivering 60% adoption and a €1.2M revenue impact. Designed recommendation engines that drove 2x GMV growth for partners through market analysis and competitive intelligence.'
      },
      {
        title: 'Revenue and Growth Lead MENA',
        period: '01/2022 — 01/2024',
        description: 'Co-led multi-year strategic planning identifying a €5M revenue uplift and €10M EBITDA opportunity. Translated regional strategy into scalable operational frameworks like "One Wallet," driving 10% incremental revenue.'
      }
    ],
  },
  {
    company: 'Deliveroo',
    period: '2017 — 2022',
    summary: 'Market Expansion | Pricing Strategy | Operations Excellence',
    roles: [
      {
        title: 'Strategy and Operations Lead',
        period: '01/2020 — 01/2022',
        description: 'Led expansion into 5 new cities generating an AED 1.6M GMV increase. Owned Weekly Business Reviews with executive leadership, maintaining a 90% success rate in surpassing targets through proactive gap analysis.'
      },
      {
        title: 'Senior Business Strategy Associate',
        period: '01/2019 — 01/2020',
        description: 'Managed a cross-functional steering committee that reduced poor delivery outcomes by 30% across 12 markets. Launched a B2B product pilot generating AED 1.5M revenue within 12 months.'
      },
      {
        title: 'Senior Performance and Planning Associate',
        period: '01/2017 — 01/2019',
        description: 'Optimized operational schedules for 2,000+ riders to achieve record-breaking delivery times of <30 minutes. Developed a forecasting model with 90% accuracy, reducing manual workload by 27%.'
      }
    ],
  },
  {
    company: 'Software Engineering',
    period: '2013 — 2016',
    summary: 'Full-Stack Development | Enterprise Systems',
    roles: [
      {
        title: 'Software Engineer',
        period: '2013 — 2016',
        description: 'Built and maintained enterprise software systems. This is where I mastered the "how" before moving into the "why" of business strategy.'
      }
    ],
  }
]

export default function ExperienceDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section className="py-20 bg-cream border-y border-black/5">
        <div className="container-editorial flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-serif font-bold text-black mb-2 italic">
              Want the metrics?
            </h2>
            <p className="text-black/60 font-body text-sm uppercase tracking-widest">
              Detailed career history, €100M+ budgets, and project specs.
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-4 border-b-2 border-burgundy pb-2 font-serif font-black text-2xl hover:text-burgundy transition-all"
          >
            Access Full History
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-xl bg-cream z-50 shadow-2xl overflow-y-auto border-l border-black"
            >
              <div className="p-8 border-b border-black/10 flex justify-between items-end bg-[#F9F7F2]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-burgundy font-bold">Annex 01</span>
                  <h3 className="text-4xl font-serif font-bold text-black mt-2">The CV.</h3>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="font-serif italic text-black/40 hover:text-black transition-colors underline underline-offset-4"
                >
                  [ Close ]
                </button>
              </div>

              <div className="p-8 md:p-12 space-y-16">
                {experienceData.map((company) => (
                  <div key={company.company} className="relative">
                    <div className="flex justify-between items-baseline border-b border-black mb-6">
                      <h4 className="text-2xl font-serif font-bold italic">{company.company}</h4>
                      <span className="text-xs font-bold font-body">{company.period}</span>
                    </div>
                    
                    <p className="text-sm font-body font-bold text-burgundy mb-8 tracking-wide uppercase leading-relaxed">
                      {company.summary}
                    </p>

                    <div className="space-y-10">
                      {company.roles.map((role, idx) => (
                        <div key={idx} className="group">
                          <div className="flex flex-col mb-2">
                            <span className="font-serif font-bold text-lg leading-tight group-hover:text-burgundy transition-colors">
                              {role.title}
                            </span>
                            <span className="text-[10px] font-body text-black/40 uppercase tracking-widest mt-1">
                              {role.period}
                            </span>
                          </div>
                          <p className="text-black/70 font-body text-sm leading-relaxed border-l border-black/10 pl-4 py-1">
                            {role.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-black text-cream">
                <p className="font-serif italic text-lg mb-4 text-cream/60 leading-relaxed">
                  Scaling logic across 8 markets teaches you one thing: 
                  <span className="text-cream block not-italic font-bold">The chaos is the constant.</span>
                </p>
                <a 
                  href="mailto:lachunair@gmail.com" 
                  className="inline-block border-b border-burgundy pb-1 text-sm font-bold uppercase tracking-widest hover:text-burgundy transition-colors"
                >
                  Let's Discuss Strategy
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
