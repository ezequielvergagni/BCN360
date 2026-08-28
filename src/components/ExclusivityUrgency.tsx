import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, Calendar, ShieldCheck, ArrowRight, CheckCircle2, AlertCircle, Clock } from 'lucide-react';
import { AnimatedHeadingWords } from './AnimatedText';
import { BookingModal } from './BookingModal';
import { ProposalModal } from './ProposalModal';

const upcomingMissions = [
  {
    period: "Otoño 2026",
    dates: "Octubre - Noviembre 2026",
    focus: "Misión Multisectorial: IA, Biotech & Sostenibilidad",
    status: "Últimos 4 cupos disponibles",
    statusColor: "text-amber-600 bg-amber-50 border-amber-200"
  },
  {
    period: "Invierno / Primavera 2027",
    dates: "Febrero - Marzo 2027 (Coincide con MWC / 4YFN)",
    focus: "Misión Tech Global, Telecomunicaciones & DeepTech",
    status: "Convocatoria Abierta",
    statusColor: "text-emerald-600 bg-emerald-50 border-emerald-200"
  },
  {
    period: "A Medida / Fechas Privadas",
    dates: "Todo el año (previa coordinación con 8 semanas de antelación)",
    focus: "Exclusiva para una sola empresa, gobierno o gremio",
    status: "Bajo Solicitud Directa",
    statusColor: "text-blue-600 bg-blue-50 border-blue-200"
  }
];

const ExclusivityUrgency: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052CC]/10 border border-[#0052CC]/20 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Clock className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>EXCLUSIVIDAD & CALENDARIO 2026/2027</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            <AnimatedHeadingWords
              text="Cupos limitados para garantizar reuniones de alto nivel"
              highlightText="Cupos limitados"
              highlightClassName="text-[#0052CC] font-extrabold"
            />
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Para asegurar que cada participante tenga acceso directo a C-levels y directores de centros tecnológicos sin masificación, limitamos estrictamente el número de delegados por cohorte.
          </p>
        </div>

        {/* 2-Column Layout: Admission Criteria & Upcoming Cohorts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Criteria & Exclusivity Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#050D1A] text-white rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0052CC]/25 rounded-full blur-[100px] pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00D2FF] mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Política de Calificación</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                Máximo 12 organizaciones por cohorte
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                No organizamos viajes turísticos masivos. Cada misión BCN360 es un programa de inmersión ejecutiva de alto impacto diseñado para tomadores de decisiones.
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span><strong>Filtro previo:</strong> Evaluamos el encaje bilateral en una llamada de diagnóstico de 20 min.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span><strong>Presupuesto transparente:</strong> Programas a medida estructurados según el alcance y tamaño del equipo.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span><strong>Preparación previa:</strong> 4 a 6 semanas de curaduría y coordinación de agendas antes del viaje.</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full py-4 px-6 bg-gradient-to-r from-[#0052CC] to-[#0070E0] hover:from-[#0042A3] hover:to-[#0052CC] text-white font-extrabold rounded-xl transition-all shadow-lg shadow-[#0052CC]/40 flex items-center justify-center gap-2 text-sm group"
            >
              <span>Verificar disponibilidad para tu delegación</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column: Upcoming Cohort Dates & Availability (7 cols) */}
          <div className="lg:col-span-7 space-y-4 flex flex-col justify-between">
            {upcomingMissions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-[#0052CC]/50 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0052CC]">
                      {item.period}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.dates}
                    </span>
                  </div>

                  <h4 className="text-lg font-extrabold text-slate-900 group-hover:text-[#0052CC] transition-colors">
                    {item.focus}
                  </h4>

                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-extrabold border ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>

                <button
                  onClick={() => setIsProposalOpen(true)}
                  className="px-5 py-3 bg-white hover:bg-[#0052CC] hover:text-white text-slate-800 font-bold rounded-xl text-xs border border-slate-200 shadow-sm transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
                >
                  <span>Postular cupo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}

            {/* Note banner */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center gap-3 text-xs text-[#0052CC] font-medium">
              <Sparkles className="w-4 h-4 shrink-0 text-[#0052CC]" />
              <span>¿Necesitas una fecha específica fuera del calendario regular? Diseñamos misiones privadas a medida durante todo el año.</span>
            </div>
          </div>

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

export default ExclusivityUrgency;
