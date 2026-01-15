'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'The Founder', href: '#about' },
  { label: 'The Ventures', href: '#building' },
  { label: 'Connect', href: '#connect' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-cream/80 backdrop-blur-md py-4 border-b border-black/10' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="container-editorial flex justify-between items-center px-6">
          {/* Logo / Name */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex flex-col items-start"
          >
            <span className="font-serif text-2xl font-black tracking-tighter text-black">
              L. Nair
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-burgundy font-bold overflow-hidden h-0 group-hover:h-3 transition-all duration-300">
              Dubai — 2026
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-12 items-center">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="relative font-serif text-sm font-bold text-black/60 hover:text-black transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-burgundy transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#connect')}
              className="px-6 py-2 border-2 border-black font-serif font-bold text-sm hover:bg-black hover:text-cream transition-all duration-300"
            >
              Get in touch
            </button>
          </div>

          {/* Mobile Menu Toggle (Simplified) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden font-serif font-bold text-sm uppercase tracking-widest text-black"
          >
            {isMobileMenuOpen ? 'Close —' : 'Menu +'}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu: Full Screen Editorial Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-cream flex flex-col p-8 md:hidden"
          >
            <div className="mt-24 space-y-8">
              <span className="text-burgundy font-serif italic text-xl">Directory</span>
              <div className="flex flex-col gap-8">
                {navItems.map((item, index) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="font-serif text-6xl font-bold text-black text-left tracking-tighter"
                  >
                    0{index + 1}. {item.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mt-auto border-t border-black/10 pt-8 flex justify-between items-end">
               <div>
                 <p className="text-xs font-bold uppercase tracking-widest text-black/40">Status</p>
                 <p className="font-serif italic text-lg">Geeking out on AI.</p>
               </div>
               <button onClick={() => scrollToSection('#connect')} className="text-burgundy font-serif font-bold text-2xl underline">
                 Connect
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
