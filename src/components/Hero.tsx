import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass } from 'lucide-react';
import { BookingModal } from './BookingModal';
import { ProposalModal } from './ProposalModal';

const Hero: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [isProposalOpen, setIsProposalOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="inicio" className="relative w-full min-h-screen flex flex-col justify-between items-center bg-[#050C1A] text-white overflow-hidden select-none">
        
        {/* Background Aerial Barcelona Image with Cinematic Deep Dark Blue Atmosphere */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=85"
            alt="Vista aérea de Barcelona y la Sagrada Família"
            className="w-full h-full object-cover object-center brightness-[0.70] contrast-[1.10]"
          />
          {/* Deep Navy/Blue Subtle Gradient Overlays to keep text legible while showing the city */}
          <div className="absolute inset-0 bg-[#061126]/50 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050C1A]/75 via-[#06132D]/35 to-[#050C1A]/90" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050C1A]/20 to-[#050C1A]/80" />
          {/* Ambient Radial Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#0052CC]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[350px] bg-[#00D2FF]/15 rounded-full blur-[100px] pointer-events-none" />
        </div>

        {/* Decorative Subtle Lateral Accent Lines (as seen in screenshot) */}
        <div className="absolute left-10 md:left-24 top-1/2 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#00D2FF]/40 to-transparent pointer-events-none hidden lg:block" />
        <div className="absolute right-10 md:right-24 bottom-1/4 w-[1px] h-36 bg-gradient-to-b from-transparent via-[#00D2FF]/30 to-transparent pointer-events-none hidden lg:block" />

        {/* Top spacer for navbar */}
        <div className="w-full h-24 sm:h-28" />

        {/* Main Content Centered */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center my-auto py-10">
          
          {/* Main Headline with refined, slightly smaller typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl md:text-[3.5rem] lg:text-[4.15rem] font-extrabold text-white tracking-tight leading-[1.16] max-w-3xl mx-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
          >
            Conectamos líderes de<br className="hidden sm:inline" />{' '}
            Latam con la innovación de<br className="hidden sm:inline" />{' '}
            <span className="text-[#00D2FF] drop-shadow-[0_0_25px_rgba(0,210,255,0.5)]">
              Barcelona.
            </span>
          </motion.h1>

          {/* Action Buttons exact to screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mt-10 sm:mt-12 w-full sm:w-auto"
          >
            {/* Primary Blue Button: "Empieza tu viaje ->" */}
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 35px rgba(0,102,255,0.6)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-[#0055D4] hover:bg-[#0062EA] text-white font-bold rounded-full transition-all shadow-[0_8px_25px_rgba(0,85,212,0.45)] flex items-center justify-center gap-2.5 text-base sm:text-lg group border border-blue-400/20"
            >
              <span>Empieza tu viaje</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary Dark/Translucent Button: "Explorar Enfoque" with Compass icon */}
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(30, 41, 59, 0.85)', borderColor: 'rgba(0, 210, 255, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('segmentacion')}
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-[#182338]/80 hover:bg-[#1E2B45] text-white font-medium rounded-full transition-all border border-slate-700/80 backdrop-blur-md flex items-center justify-center gap-2.5 text-base sm:text-lg"
            >
              <Compass className="w-5 h-5 text-[#00D2FF]" />
              <span>Explorar Enfoque</span>
            </motion.button>
          </motion.div>

        </div>

        {/* Scroll Indicator exact to screenshot */}
        <div className="relative z-10 pb-8 pt-4 flex flex-col items-center">
          <button
            onClick={() => scrollToSection('segmentacion')}
            className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-slate-400/80 hover:text-white uppercase transition-colors flex flex-col items-center gap-2"
          >
            <span>SCROLL</span>
          </button>
        </div>

      </section>

      {/* Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <ProposalModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />
    </>
  );
};

export default Hero;

