import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass } from 'lucide-react';
import { AnimatedHeadingWords } from './AnimatedText';

const Hero = () => {
  return (
    <div className="relative bg-[#050D1A] min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* High-Tech Animated Ambient Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      {/* Background Image with Deep BCN Blue Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Barcelona Innovation District"
          className="w-full h-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050D1A]/90 via-[#050D1A]/75 to-[#050D1A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0052CC]/25 via-transparent to-[#00D2FF]/15" />
      </div>

      {/* Dynamic Animated Glowing Light Orbs in BCN Brand Blue */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.25, 1],
            x: [-30, 30, -30],
            y: [-20, 20, -20]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#0052CC]/30 rounded-full blur-[130px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [40, -20, 40],
            y: [30, -30, 30]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 -right-32 w-[550px] h-[550px] bg-[#00D2FF]/20 rounded-full blur-[140px]"
        />
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [0.9, 1.1, 0.9]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#003399]/35 rounded-full blur-[160px]"
        />
      </div>

      {/* Floating Animated Futuristic Circuit Lines / Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <motion.div
          animate={{ y: [0, -400] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute left-[15%] bottom-0 w-1 h-32 bg-gradient-to-t from-transparent via-[#00D2FF] to-transparent"
        />
        <motion.div
          animate={{ y: [0, -500] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear", delay: 4 }}
          className="absolute right-[20%] bottom-0 w-1 h-40 bg-gradient-to-t from-transparent via-[#0052CC] to-transparent"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Main Headline with Letter/Word Stagger Animation */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-10 leading-[1.12] max-w-5xl font-inter">
          <AnimatedHeadingWords
            text="Conectamos líderes de Latam con la innovación de Barcelona."
            highlightText="Barcelona"
            highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#3B82F6] to-[#0052CC] drop-shadow-[0_0_25px_rgba(0,130,255,0.4)] font-extrabold"
            delay={0.1}
          />
        </h1>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto"
        >
          <motion.a 
            whileHover={{ scale: 1.05, boxShadow: "0 0 35px rgba(0,82,204,0.6)" }}
            whileTap={{ scale: 0.98 }}
            href="#contacto" 
            className="w-full sm:w-auto px-8 py-4 bg-[#0052CC] hover:bg-[#0042A3] text-white font-bold rounded-full transition-all shadow-xl shadow-[#0052CC]/30 flex items-center justify-center gap-2 group text-base"
          >
            <span>Empieza tu viaje</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.98 }}
            href="#enfoque" 
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#00D2FF]/50 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 text-base"
          >
            <Compass className="w-5 h-5 text-[#00D2FF]" />
            <span>Explorar Enfoque</span>
          </motion.a>
        </motion.div>

      </div>
      
      {/* Scroll Down Bounce Arrow */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] tracking-widest text-slate-400 uppercase font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5 text-[#00D2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
