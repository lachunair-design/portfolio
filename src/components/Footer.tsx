'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-cream pt-24 pb-12 px-6 border-t border-cream/10">
      <div className="container-editorial">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          
          {/* Large Sign-off */}
          <div className="md:col-span-8">
            <h2 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter leading-none mb-8">
              Welcome to <br />
              <span className="text-burgundy italic">the chaos.</span>
            </h2>
            <p className="font-body text-xl text-cream/40 max-w-md">
              Software engineer by trade. AI geek by choice. Builder by necessity. 
              Currently redefining gut health and human productivity from Dubai.
            </p>
          </div>

          {/* Detailed Links */}
          <div className="md:col-span-4 flex flex-col justify-end gap-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-cream/30 font-bold">Connect</span>
                <a href="https://www.linkedin.com/in/lakshmicnair" className="font-serif hover:text-burgundy transition-colors">LinkedIn</a>
                <a href="https://www.instagram.com/lakshmiirl" className="font-serif hover:text-burgundy transition-colors">Instagram</a>
                <a href="mailto:lachunair@gmail.com" className="font-serif hover:text-burgundy transition-colors">Email</a>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] uppercase tracking-[0.3em] text-cream/30 font-bold">Projects</span>
                <a href="#building" className="font-serif hover:text-burgundy transition-colors">GUTSY</a>
                <a href="#building" className="font-serif hover:text-burgundy transition-colors">Current State</a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal/Copyright Bar */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-cream/30">
          <div className="flex gap-8">
            <span>Dubai, UAE</span>
            <span>{currentYear} © Lakshmi Nair</span>
          </div>
          <div className="italic font-serif normal-case tracking-normal text-sm">
            Built with AI and excessive caffeine.
          </div>
        </div>
      </div>
    </footer>
  )
}
