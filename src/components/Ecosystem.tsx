import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Building, Rocket, Cpu, Landmark } from 'lucide-react';
import { AnimatedHeadingWords, AnimatedCounter } from './AnimatedText';

const Ecosystem = () => {
  const items = [
    { label: "Universidades & Centros I+D", count: "15+", icon: Building },
    { label: "Startups de Alto Impacto", count: "1.900+", icon: Rocket },
    { label: "Hubs Tecnológicos Globales", count: "100+", icon: Cpu },
    { label: "Venture Capital & Inversión", count: "€1.5B+", icon: Landmark },
  ];

  return (
    <section className="py-24 bg-[#050D1A] text-white relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-30 pointer-events-none" />

      {/* Ambient Glows in BCN Brand Blue */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[#0052CC]/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#00D2FF]/15 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#00D2FF]/30 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>Métricas del Hub Barcelona</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            <AnimatedHeadingWords
              text="Un ecosistema en constante expansión"
              highlightText="expansión"
              highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] to-[#0052CC]"
            />
          </h2>

          <p className="text-lg text-slate-300">
            Barcelona se consolida como el hub tecnológico más activo del sur de Europa, atrayendo talento internacional e inversión multinacional.
          </p>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -6, borderColor: "rgba(0, 210, 255, 0.5)" }}
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 text-center border border-white/10 hover:bg-white/10 transition-all duration-300 relative group overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0052CC] to-[#00D2FF] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 mx-auto mb-6 rounded-2xl bg-[#0052CC]/20 border border-[#0052CC]/40 flex items-center justify-center text-[#00D2FF] group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight">
                  <AnimatedCounter target={item.count} className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#00D2FF]" />
                </div>

                <div className="text-slate-300 font-semibold text-sm">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Ecosystem;
