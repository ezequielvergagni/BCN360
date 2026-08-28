import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Quote, Award, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { AnimatedHeadingWords } from './AnimatedText';
import { BookingModal } from './BookingModal';
import { ProposalModal } from './ProposalModal';

interface Testimonial {
  name: string;
  role: string;
  organization: string;
  techFocus: string;
  country: string;
  flag: string;
  quote: string;
  result: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Juan Carlos Ortega",
    role: "Fundador",
    organization: "Verdana",
    techFocus: "Desalcoholización de vinos por osmodiálisis",
    country: "Chile",
    flag: "🇨🇱",
    quote: "Para nosotros, poder reunirnos con bodegas y con el sistema científico del vino en Cataluña fue un antes y un después. BCN360 preparó cada encuentro pensando en nuestra tecnología, y eso se notó: fueron conversaciones concretas, no visitas de cortesía. Nos fuimos con contactos que hoy siguen activos y con una claridad enorme sobre cómo entrar al mercado europeo.",
    result: "Alianzas con bodegas y centros científicos en Cataluña",
    avatar: "/fotos/Juan Carlos Ortega-perfil.png"
  },
  {
    name: "Jairo Pereira",
    role: "Co-Fundador",
    organization: "Flux Biofactories",
    techFocus: "Biotecnología para salud animal acuícola",
    country: "Chile",
    flag: "🇨🇱",
    quote: "Somos una startup de biotecnología en pleno escalado, y necesitábamos aprender de quienes ya recorrieron ese camino. BCN360 nos conectó con centros de investigación y empresas del sector que nos dieron respuestas que buscábamos hacía meses. La semana fue intensa, pero cada reunión sumó. Es la forma más rápida que conozco de meterse de lleno en el ecosistema de Barcelona.",
    result: "Conexión directa con centros de I+D y líderes del sector",
    avatar: "/fotos/Jairo-perfil.jpeg"
  },
  {
    name: "Erwin Uribe",
    role: "Fundador",
    organization: "GreenBricks",
    techFocus: "Construcción sostenible a partir de residuos",
    country: "Chile",
    flag: "🇨🇱",
    quote: "Llegamos a Barcelona sin saber por dónde empezar y en cinco días nos sentamos con constructoras, arquitectos y clusters que jamás habríamos alcanzado por nuestra cuenta. El equipo de BCN360 no armó una agenda genérica: entendió que GreenBricks necesitaba pilotos reales y nos conectó exactamente con quienes podían dárnoslos. Volvimos a Chile con puertas abiertas en Europa.",
    result: "Reuniones con constructoras, arquitectos y clusters",
    avatar: "/fotos/Erwin-perfil.png"
  }
];

const Delegations: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  return (
    <section id="testimonios" className="py-28 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200/80">
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
            <span>PRUEBA & RESULTADOS COMPROBADOS</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            <AnimatedHeadingWords
              text="Lo que dicen los líderes que ya viajaron con nosotros"
              highlightText="ya viajaron con nosotros"
              highlightClassName="text-[#0052CC] font-extrabold"
            />
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Delegaciones de empresas, fondos, universidades y gobiernos de toda Latinoamérica confían en BCN360 para su conexión con Europa.
          </p>
        </div>

        {/* Highlighted Mission Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 bg-gradient-to-r from-[#050D1A] via-[#00388A] to-[#0052CC] rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-blue-900/15 border border-white/15 relative overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-[#00D2FF] shrink-0">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00D2FF] mb-1">
                  Misión Destacada de Transferencia Tecnológica
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                  Universidad de La Frontera (Chile) — GreenBricks · Verdana · Flux Biofactories
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/15 text-blue-100 shrink-0">
              <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
              <span>Inmersión 22@ & Matchmaking B2B</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 hover:border-[#0052CC]/50 shadow-lg shadow-slate-100 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {t.flag} {t.country}
                  </span>
                </div>

                {/* Tangible Result Tag */}
                <div className="mb-4 inline-block px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold">
                  ✓ {t.result}
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-start gap-3.5 pt-5 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-13 h-13 rounded-full object-cover border-2 border-[#0052CC]/30 shrink-0 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0 flex-1">
                  <h4 className="text-base font-extrabold text-slate-900 leading-tight group-hover:text-[#0052CC] transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs font-semibold text-slate-600 mt-0.5">
                    {t.role} de <span className="font-bold text-[#0052CC]">{t.organization}</span>
                  </p>
                  <p className="text-[11px] text-slate-500 font-medium italic mt-1 leading-snug">
                    ({t.techFocus})
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Schedule Call Conversion Prompt */}
        <div className="text-center">
          <button
            onClick={() => setIsBookingOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0052CC] hover:bg-[#0042A3] text-white font-extrabold rounded-full transition-all shadow-xl shadow-[#0052CC]/30 text-base"
          >
            <span>Conversa con nosotros y conoce más casos de éxito</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
      <ProposalModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />
    </section>
  );
};

export default Delegations;
