import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Compass, 
  Users2, 
  GraduationCap, 
  MapPin, 
  LineChart, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Briefcase,
  FileCheck2,
  CalendarCheck
} from 'lucide-react';
import { AnimatedHeadingWords } from './AnimatedText';
import { BookingModal } from './BookingModal';
import { ProposalModal } from './ProposalModal';

interface InclusionItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  shortText: string;
  tag: string;
  details: string[];
}

const inclusionItems: InclusionItem[] = [
  {
    icon: CalendarCheck,
    tag: "ACCESO DIRECTO C-LEVEL",
    title: "Agenda con Corporativos, Startups y Fondos",
    shortText: "Reuniones 1-a-1 confirmadas con directores de innovación, fundadores de scaleups y gestores de fondos europeos.",
    details: [
      "Mesas redondas privadas según tu sector",
      "Reuniones bilaterales sin intermediarios",
      "Conexión con tomadores de decisiones reales"
    ]
  },
  {
    icon: Compass,
    tag: "INMERSIÓN TERRITORIAL",
    title: "Visitas Guiadas a Hubs de Excelencia",
    shortText: "Acceso exclusivo al distrito 22@, Tech Barcelona (Pier01), Barcelona Supercomputing Center y aceleradoras de punta.",
    details: [
      "Tours técnicos y estratégicos en el 22@",
      "Acceso a laboratorios de I+D y clústeres",
      "Conocimiento in situ de infraestructuras pioneras"
    ]
  },
  {
    icon: Users2,
    tag: "FILTRO & CONVERSIÓN",
    title: "Matchmaking Curado y Calificado",
    shortText: "Filtramos previamente a cada interlocutor local para garantizar que comparta intereses comerciales o de innovación con tu delegación.",
    details: [
      "Diagnóstico exhaustivo de objetivos previos",
      "Interlocutores con capacidad de decisión",
      "Cero tiempo perdido en reuniones irrelevantes"
    ]
  },
  {
    icon: GraduationCap,
    tag: "TRANSFERENCIA & MENTORÍA",
    title: "Mentorías Estratégicas y Pitch Sessions",
    shortText: "Sesiones de preparación con fundadores y consultores de Barcelona para adaptar tu propuesta de valor al estándar europeo.",
    details: [
      "Adaptación del pitch para inversores de la UE",
      "Feedback honesto de referentes locales",
      "Talleres de cultura de negocios en España"
    ]
  },
  {
    icon: Briefcase,
    tag: "FACILITACIÓN IN SITU",
    title: "Acompañamiento y Moderación en Barcelona",
    shortText: "Un equipo local senior te acompaña durante todas las jornadas, facilitando la dinámica de cada sesión y gestionando la logística.",
    details: [
      "Coordinación integral de traslados y accesos",
      "Moderación bilingüe y contextualización",
      "Resolución de imprevistos en tiempo real"
    ]
  },
  {
    icon: FileCheck2,
    tag: "RESULTADOS CONCRETOS",
    title: "Seguimiento Post-Misión y Acuerdos",
    shortText: "La misión no termina al volver a casa. Entregamos un reporte ejecutivo de acuerdos y te apoyamos en los siguientes pasos.",
    details: [
      "Minutas y acuerdos estructurados post-viaje",
      "Hoja de ruta para cerrar alianzas y pilotos",
      "Soporte de seguimiento durante 90 días"
    ]
  }
];

const WhatIsIncluded: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  return (
    <section id="servicios" className="py-28 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052CC]/10 border border-[#0052CC]/20 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>ALCANCE TANGIBLE DEL SERVICIO</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            <AnimatedHeadingWords
              text="¿Qué incluye una misión inmersiva BCN360?"
              highlightText="misión inmersiva"
              highlightClassName="text-[#0052CC] font-extrabold"
            />
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Un servicio llave en mano donde tu única tarea es asistir a las reuniones y cerrar alianzas. Nosotros nos encargamos del diseño, la curaduría y la ejecución.
          </p>
        </div>

        {/* 6 Tangible Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {inclusionItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200/80 hover:border-[#0052CC]/40 shadow-sm hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0052CC]/10 border border-[#0052CC]/20 text-[#0052CC] flex items-center justify-center group-hover:bg-[#0052CC] group-hover:text-white transition-all shadow-sm">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0052CC] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#0052CC] transition-colors leading-tight">
                    {item.title}
                  </h3>

                  {/* Short text */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {item.shortText}
                  </p>

                  {/* Checklist details */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-200/60">
                    {item.details.map((d, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0052CC] shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Value Guarantee & Fast Booking Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-3xl shadow-xl border border-white/10">
            <div className="text-left">
              <div className="text-xs font-bold uppercase tracking-widest text-[#00D2FF]">Garantía de Curaduría BCN360</div>
              <div className="text-sm sm:text-base font-bold text-white">Cada reunión de la agenda es aprobada por tu equipo antes de viajar.</div>
            </div>
            <button
              onClick={() => setIsProposalOpen(true)}
              className="px-6 py-2.5 bg-[#0052CC] hover:bg-[#0042A3] text-white font-bold rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap shadow-md flex items-center gap-2"
            >
              <span>Solicitar propuesta detallada</span>
              <ArrowRight className="w-4 h-4" />
            </button>
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

export default WhatIsIncluded;
