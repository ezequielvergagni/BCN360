import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Landmark, Rocket, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { AnimatedHeadingWords } from './AnimatedText';
import { BookingModal } from './BookingModal';
import { ProposalModal } from './ProposalModal';
import { useLanguage } from '../context/LanguageContext';

interface ProfileCardConfig {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badgeBg: string;
}

const profileConfigs: ProfileCardConfig[] = [
  {
    id: 'empresas',
    icon: Building2,
    accentColor: '#0052CC',
    badgeBg: 'bg-blue-50 text-[#0052CC] border-blue-200'
  },
  {
    id: 'instituciones',
    icon: Landmark,
    accentColor: '#00388A',
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-200'
  },
  {
    id: 'scaleups',
    icon: Rocket,
    accentColor: '#0088FF',
    badgeBg: 'bg-sky-50 text-sky-700 border-sky-200'
  }
];

const ProfileSegmentation: React.FC = () => {
  const [selectedProfile, setSelectedProfile] = useState<string>('Empresa');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const { t, language } = useLanguage();

  const handleCardCta = (profileTitle: string) => {
    setSelectedProfile(profileTitle);
    setIsProposalOpen(true);
  };

  return (
    <section id="segmentacion" className="py-24 bg-slate-50/80 relative overflow-hidden border-b border-slate-200/80">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

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
            <span>{t('profileSegmentation.badge')}</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            <AnimatedHeadingWords
              text={t('profileSegmentation.title')}
              highlightText={t('profileSegmentation.highlight')}
              highlightClassName="text-[#0052CC] font-extrabold"
            />
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t('profileSegmentation.description')}
          </p>
        </div>

        {/* 3 Profile Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {profileConfigs.map((cfg, idx) => {
            const cardData = t(`profileSegmentation.profiles.${cfg.id}`) || {};
            const IconComp = cfg.icon;
            const benefits: string[] = Array.isArray(cardData.benefits) ? cardData.benefits : [];

            return (
              <motion.div
                key={cfg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-[#0052CC]/50 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between relative group"
              >
                {/* Top Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0052CC] to-[#00D2FF] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl" />

                <div>
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider border ${cfg.badgeBg}`}>
                      {cardData.tag}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#0052CC]/10 text-[#0052CC] flex items-center justify-center group-hover:bg-[#0052CC] group-hover:text-white transition-all shadow-sm">
                      <IconComp className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  {/* Profile Title */}
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2 group-hover:text-[#0052CC] transition-colors">
                    {cardData.title}
                  </h3>

                  {/* Core Value Promise */}
                  <div className="p-3.5 bg-blue-50/60 rounded-2xl border border-blue-100 mb-5">
                    <p className="text-sm font-bold text-[#0052CC] leading-snug">
                      "{cardData.promise}"
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {cardData.description}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      {language === 'en' ? 'What you will receive:' : 'Lo que obtendrás:'}
                    </span>
                    {benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#0052CC] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Profile Card CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCardCta(cardData.title || cfg.id)}
                    className="w-full py-3.5 px-5 bg-slate-900 hover:bg-[#0052CC] text-white font-extrabold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm group/btn"
                  >
                    <span>{cardData.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 text-[#00D2FF] group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Diagnostic Call Bar beneath Cards */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-[#050D1A] to-[#0B1E38] rounded-3xl border border-white/15 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0052CC]/30 border border-[#00D2FF]/40 text-[#00D2FF] flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-extrabold text-white">
                {language === 'en' 
                  ? 'Not sure which pathway is right for your delegation?' 
                  : '¿No estás seguro de cuál es la ruta adecuada para tu delegación?'}
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                {language === 'en'
                  ? 'In 20 minutes we analyze your priorities and draft a preliminary agenda at no cost.'
                  : 'En 20 minutos analizamos tus prioridades y te pre-armamos una propuesta de agenda sin costo.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsBookingOpen(true)}
            className="px-6 py-3.5 bg-[#0052CC] hover:bg-[#0042A3] text-white font-bold rounded-xl text-sm transition-all whitespace-nowrap shadow-lg shadow-[#0052CC]/30 shrink-0 flex items-center gap-2"
          >
            <span>{language === 'en' ? 'Book 20-min diagnostic' : 'Agendar diagnóstico 20 min'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialProfile={selectedProfile}
      />
      <ProposalModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
        defaultProfile={selectedProfile}
      />
    </section>
  );
};

export default ProfileSegmentation;
