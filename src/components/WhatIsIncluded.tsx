import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  Users2, 
  GraduationCap, 
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
import { useLanguage } from '../context/LanguageContext';

const inclusionIcons = [
  CalendarCheck,
  Compass,
  Users2,
  GraduationCap,
  Briefcase,
  FileCheck2
];

const WhatIsIncluded: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const { t, language } = useLanguage();

  const items: any[] = t('whatIsIncluded.items') || [];

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
            <span>{t('whatIsIncluded.badge')}</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            <AnimatedHeadingWords
              text={t('whatIsIncluded.title')}
              highlightText={language === 'en' ? 'immersive mission' : 'misión inmersiva'}
              highlightClassName="text-[#0052CC] font-extrabold"
            />
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t('whatIsIncluded.subtitle')}
          </p>
        </div>

        {/* 6 Tangible Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const IconComponent = inclusionIcons[idx % inclusionIcons.length];
            const details: string[] = Array.isArray(item.details) ? item.details : [];

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
                    {details.map((d, i) => (
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
              <div className="text-xs font-bold uppercase tracking-widest text-[#00D2FF]">
                {language === 'en' ? 'BCN360 Curation Guarantee' : 'Garantía de Curaduría BCN360'}
              </div>
              <div className="text-sm sm:text-base font-bold text-white">
                {language === 'en'
                  ? 'Every meeting on the agenda is approved by your team prior to travel.'
                  : 'Cada reunión de la agenda es aprobada por tu equipo antes de viajar.'}
              </div>
            </div>
            <button
              onClick={() => setIsProposalOpen(true)}
              className="px-6 py-2.5 bg-[#0052CC] hover:bg-[#0042A3] text-white font-bold rounded-xl text-xs sm:text-sm transition-all whitespace-nowrap shadow-md flex items-center gap-2"
            >
              <span>{language === 'en' ? 'Request detailed proposal' : 'Solicitar propuesta detallada'}</span>
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
