import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Quote, Award, CheckCircle2, Building, ExternalLink } from 'lucide-react';
import { AnimatedHeadingWords } from './AnimatedText';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Felipe Obregón",
    role: "Co-Founder & CEO",
    company: "GreenBricks (Chile)",
    quote: "La agenda que armaron abrió puertas que jamás habríamos alcanzado por nuestra cuenta. Conectamos con inversores y centros tecnológicos con una precisión increíble.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Constanza Morales",
    role: "Directora de Innovación",
    company: "Verdana Biotech",
    quote: "La inmersión en el distrito 22@ y el contacto con clústers especializados nos permitió redefinir nuestra estrategia de entrada a Europa en tiempo récord.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Rodrigo Silva",
    role: "Líder de Transferencia Tecnológica",
    company: "Flux Biofactories",
    quote: "El equipo de BCN360 no solo coordina reuniones, entiende el trasfondo de tu negocio y te prepara para la dinámica de negociación del ecosistema catalán.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];

const Delegations: React.FC = () => {
  return (
    <section className="py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-100">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
      
      {/* Blue brand ambient blur */}
      <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-[#0052CC]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[450px] h-[450px] bg-[#00D2FF]/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052CC]/10 border border-[#0052CC]/20 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>CASOS DE ÉXITO</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            <AnimatedHeadingWords
              text="Proyectos que vivieron la experiencia BCN360"
              highlightText="BCN360"
              highlightClassName="text-[#0052CC] font-extrabold"
            />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Cada año acompañamos delegaciones de toda Latinoamérica en su inmersión en el ecosistema de Barcelona.
          </motion.p>
        </div>

        {/* Highlighted Banner - Delegación 2026 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-gradient-to-r from-[#0052CC] via-[#0042A3] to-[#050D1A] rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-blue-900/15 border border-blue-400/20 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-[#00D2FF] shrink-0">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00D2FF] mb-1">
                  Misión Destacada 2026
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  Universidad de La Frontera (Chile) — GreenBricks · Verdana · Flux Biofactories
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/15 text-blue-100 shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Inmersión 22@ & Ecosistema Catalán</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-[#0052CC]/40 shadow-lg shadow-slate-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="absolute top-6 right-6 text-[#0052CC]/15 group-hover:text-[#0052CC]/30 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div className="relative z-10 mb-8">
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 relative z-10">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#0052CC]/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-base font-bold text-slate-900 leading-tight group-hover:text-[#0052CC] transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {t.role} • <span className="text-[#0052CC] font-bold">{t.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Delegations;
