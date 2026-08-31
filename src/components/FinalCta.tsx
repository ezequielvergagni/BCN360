import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import { AnimatedHeadingWords } from './AnimatedText';
import { BookingModal } from './BookingModal';
import { ProposalModal } from './ProposalModal';
import { useLanguage } from '../context/LanguageContext';

const FinalCta: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-[#050D1A] via-[#002255] to-[#050D1A] text-white relative overflow-hidden">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-35 pointer-events-none" />

      {/* Dynamic Glowing Brand Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0052CC]/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
          <span>{t('finalCta.badge')}</span>
        </motion.div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
          <AnimatedHeadingWords
            text={t('finalCta.title')}
            highlightText={language === 'en' ? 'Barcelona ecosystem' : 'ecosistema de Barcelona'}
            highlightClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#0052CC]"
          />
        </h2>

        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {t('finalCta.subtitle')}
        </p>

        {/* Dual Conversion Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto mb-10">
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(0,82,204,0.8)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsBookingOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-[#0052CC] hover:bg-[#0042A3] text-white font-extrabold rounded-full transition-all shadow-xl shadow-[#0052CC]/40 flex items-center justify-center gap-2.5 text-base group"
          >
            <Calendar className="w-5 h-5 text-[#00D2FF] group-hover:rotate-6 transition-transform" />
            <span>{t('finalCta.bookBtn')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsProposalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#00D2FF]/60 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 text-base"
          >
            <FileText className="w-5 h-5 text-[#00D2FF]" />
            <span>{t('finalCta.proposalBtn')}</span>
          </motion.button>
        </div>

        {/* Guarantee Micro Badges */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300 font-medium pt-6 border-t border-white/10">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
            {t('finalCta.guarantee1')}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
            {t('finalCta.guarantee2')}
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#00D2FF]" />
            {t('finalCta.guarantee3')}
          </span>
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

export default FinalCta;
