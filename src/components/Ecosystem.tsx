import React from 'react';
import { motion } from 'motion/react';
import { Building2, Rocket, Cpu, Landmark } from 'lucide-react';
import { AnimatedCounter } from './AnimatedText';

const metrics = [
  { 
    label: "Universidades & Centros I+D", 
    count: "15+", 
    icon: Building2,
    highlight: true
  },
  { 
    label: "Startups de Alto Impacto", 
    count: "1900+", 
    icon: Rocket,
    highlight: false
  },
  { 
    label: "Hubs Tecnológicos Globales", 
    count: "100+", 
    icon: Cpu,
    highlight: false
  },
  { 
    label: "Venture Capital & Inversión", 
    count: "€1.5B+", 
    icon: Landmark,
    highlight: false
  },
];

const Ecosystem: React.FC = () => {
  return (
    <section className="py-24 bg-[#050C1A] text-white relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#0052CC]/15 blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#00D2FF]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header exact to screenshot */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            Un ecosistema en constante{' '}
            <span className="text-[#00D2FF] drop-shadow-[0_0_25px_rgba(0,210,255,0.35)] block sm:inline">
              expansión
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Barcelona se consolida como el hub tecnológico más activo del sur de Europa, atrayendo talento internacional e inversión multinacional.
          </motion.p>
        </div>

        {/* Metric Cards Grid exact to screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {metrics.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, borderColor: "rgba(0, 210, 255, 0.6)" }}
                className={`bg-[#0C1629]/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-8 text-center border transition-all duration-300 relative group overflow-hidden shadow-2xl flex flex-col items-center justify-center min-h-[230px] ${
                  item.highlight
                    ? 'border-[#0091FF] shadow-[0_0_30px_rgba(0,145,255,0.2)]'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Icon badge */}
                <div className="w-12 h-12 mb-6 rounded-xl bg-[#112344] border border-[#00D2FF]/20 flex items-center justify-center text-[#00D2FF] group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Number */}
                <div className="text-4xl sm:text-5xl font-extrabold text-white mb-3 tracking-tight">
                  <AnimatedCounter target={item.count} className="text-white" />
                </div>

                {/* Label */}
                <div className="text-slate-200 font-semibold text-sm sm:text-base">
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

