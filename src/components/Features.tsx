import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Users, MapPin, Briefcase, TrendingUp, Globe, Sparkles } from 'lucide-react';
import { AnimatedHeadingWords } from './AnimatedText';

const features = [
  {
    title: "Innovación Sectorial",
    description: "Conoce a fondo las innovaciones de tu sector, conversa con partners y clientes potenciales y conecta con el Clúster catalán.",
    icon: Lightbulb,
    badge: "Ecosistema"
  },
  {
    title: "Liderazgo Gaudí",
    description: "Desarrolla tus habilidades de liderazgo a partir del revolucionario enfoque con el que Antoni Gaudí abordaba sus obras.",
    icon: Users,
    badge: "Metodología"
  },
  {
    title: "Identidad Cultural",
    description: "La ciudad condal posee una identidad propia; comprender su dinámica cultural y social es clave para crear negocios sostenibles.",
    icon: MapPin,
    badge: "Cultura BCN"
  },
  {
    title: "Casos Reales",
    description: "Análisis y contacto directo con casos de éxito reales que te permitirán extrapolar aprendizajes estratégicos a tu mercado.",
    icon: Briefcase,
    badge: "Práctica"
  },
  {
    title: "Estrategia Internacional",
    description: "Descubre cómo Barcelona es elegida globalmente por corporaciones en su expansión estratégica hacia el mercado europeo.",
    icon: TrendingUp,
    badge: "Global"
  },
  {
    title: "Visitas Exclusivas",
    description: "Acceso privado y agendas directas con emprendedores, aceleradoras, instituciones gubernamentales y referentes de la ciudad.",
    icon: Globe,
    badge: "Networking"
  },
];

const Features = () => {
  return (
    <section id="enfoque" className="py-28 bg-[#F4F7FC] relative overflow-hidden">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      
      {/* Ambient Blue Blur Glow */}
      <div className="absolute top-1/4 -left-40 w-[450px] h-[450px] bg-[#0052CC]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-[450px] h-[450px] bg-[#00D2FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Staggered Word Animation */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052CC]/10 border border-[#0052CC]/20 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>Nuestro Enfoque de Valor</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            <AnimatedHeadingWords
              text="Estamos orgullosos de nuestro ecosistema"
              highlightText="ecosistema"
              highlightClassName="text-[#0052CC] font-extrabold"
            />
          </h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Gobierno, corporaciones líderes, universidades y startups unidas en Barcelona para crear un entorno dinámico e inigualable de colaboración internacional.
          </motion.p>
        </div>

        {/* High-Tech Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white/90 backdrop-blur-md rounded-3xl p-8 border border-slate-200/80 hover:border-[#0052CC]/40 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-[#0052CC]/15 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Hover Glow Sweep */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0052CC] via-[#0088FF] to-[#00D2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="flex items-center justify-between mb-8">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-4 bg-gradient-to-br from-[#0052CC] to-[#00388A] text-white rounded-2xl shadow-lg shadow-[#0052CC]/25 group-hover:shadow-[#0052CC]/40 transition-all"
                  >
                    <feature.icon className="h-6 w-6 stroke-[2]" />
                  </motion.div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0052CC] bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#0052CC] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0052CC] opacity-80 group-hover:opacity-100 transition-opacity">
                <span>Conoce la experiencia BCN360</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
