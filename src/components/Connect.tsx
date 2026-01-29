'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function Connect() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _gotcha: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('submitting')
    if (formData._gotcha) { setFormStatus('success'); return }

    try {
      const response = await fetch('https://formspree.io/f/mbddlonq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, message: formData.message }),
      })
      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '', _gotcha: '' })
      } else { setFormStatus('error') }
    } catch { setFormStatus('error') }
  }

  return (
    <section id="connect" ref={ref} className="py-24 bg-cream border-t border-black/10">
      <div className="container-editorial max-w-5xl">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left: The Brief */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <span className="text-burgundy font-serif italic text-xl mb-4 block">Correspondence</span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tighter text-black mb-8">
              Let's build <br />something.
            </h2>
            <div className="space-y-6 text-black/60 font-body text-lg leading-relaxed">
              <p>
                Currently split between scaling <span className="text-black font-bold">GUTSY</span> and 
                refining <span className="text-black font-bold">Current State</span>.
              </p>
              <p>
                I help founders with strategic operations and geek out on AI implementation. 
                If you have a project that requires both logic and chaos, reach out.
              </p>
            </div>

            {/* Asymmetrical Social Links */}
            <div className="mt-12 flex flex-col gap-4 border-t border-black/5 pt-8">
               <a href="https://www.linkedin.com/in/tlakshminair/" className="font-serif font-bold text-lg hover:text-burgundy transition-colors flex justify-between w-full max-w-xs border-b border-black/5 pb-2">
                 LinkedIn <span>→</span>
               </a>
               <a href="mailto:lachunair@gmail.com" className="font-serif font-bold text-lg hover:text-burgundy transition-colors flex justify-between w-full max-w-xs">
                 Direct Email <span>→</span>
               </a>
            </div>
          </motion.div>

          {/* Right: The Ledger Form */}
          <motion.div 
            className="lg:col-span-7 bg-white p-8 md:p-12 border border-black/5 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.02)]"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            {formStatus === 'success' ? (
              <div className="py-20 text-center">
                <h3 className="text-3xl font-serif font-bold mb-4 italic">Sent.</h3>
                <p className="text-black/50 font-body">I'll get back to you amidst the chaos.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <input type="text" name="_gotcha" value={formData._gotcha} onChange={handleChange} className="hidden" />
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border-b border-black/10 focus-within:border-burgundy transition-colors pb-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/30 mb-1 block">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent font-serif text-xl outline-none placeholder:text-black/10"
                      placeholder="e.g. Alan Turing"
                    />
                  </div>
                  <div className="border-b border-black/10 focus-within:border-burgundy transition-colors pb-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/30 mb-1 block">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent font-serif text-xl outline-none placeholder:text-black/10"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="border-b border-black/10 focus-within:border-burgundy transition-colors pb-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/30 mb-1 block">The Project / The Inquiry</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent font-serif text-xl outline-none placeholder:text-black/10 resize-none"
                    placeholder="Tell me what you're working on..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-black text-cream py-6 font-serif font-black text-2xl hover:bg-burgundy transition-all duration-500 disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? 'Dispatching...' : 'Dispatch Message'}
                </button>

                {formStatus === 'error' && (
                  <p className="text-burgundy font-serif italic text-sm">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
