import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { ALL_PARTNER_LOGOS } from './PartnerLogos';
import { useLanguage } from '../context/LanguageContext';

interface FilterCategory {
  id: string;
  count: number;
  partnerIds: string[];
}

const filterCategories: FilterCategory[] = [
  {
    id: "instituciones",
    count: 4,
    partnerIds: ["barcelona-activa", "mwcapital", "eit-food", "la-salle"]
  },
  {
    id: "aceleradoras",
    count: 4,
    partnerIds: ["bcombinator", "seedrocket", "netmentora", "dayone"]
  },
  {
    id: "unicornios",
    count: 4,
    partnerIds: ["glovo", "typeform", "travelperk", "factorial"]
  },
  {
    id: "corporates",
    count: 4,
    partnerIds: ["wallbox", "tradeinn", "bstartup", "bevzero"]
  }
];

const EcosystemPartners: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const { t, language } = useLanguage();

  const filteredLogos = ALL_PARTNER_LOGOS.filter((item) => {
    if (activeTab === "all") return true;
    const cat = filterCategories.find((c) => c.id === activeTab);
    return cat?.partnerIds.includes(item.id);
  });

  const getCategoryTitle = (id: string) => {
    switch (id) {
      case 'instituciones':
        return language === 'en' ? 'Institutions & Universities' : 'Instituciones & Universidades';
      case 'aceleradoras':
        return language === 'en' ? 'Hubs & VC Funds' : 'Hubs & Fondos de Inversión';
      case 'unicornios':
        return language === 'en' ? 'Tech Unicorns' : 'Unicornios Tecnológicos';
      case 'corporates':
        return language === 'en' ? 'Corporates & Scaleups' : 'Corporativos & Scaleups';
      default:
        return id;
    }
  };

  return (
    <section id="ecosistema" className="py-24 bg-white relative overflow-hidden border-b border-slate-200/80">
      {/* Ambient background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/70 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0052CC]/10 border border-[#0052CC]/20 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>{t('ecosystemPartners.badge')}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5"
          >
            {t('ecosystemPartners.title')}{' '}
            <span className="text-[#0052CC] font-extrabold underline decoration-[#00D2FF]/60 decoration-4 underline-offset-8">
              {t('ecosystemPartners.highlight')}
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            {t('ecosystemPartners.subtitle')}
          </motion.p>
        </div>

        {/* 16 Logos Grid Gallery Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm relative"
        >
          {/* Quick Filter Pill Buttons */}
          <div className="flex flex-wrap gap-2.5 mb-8 justify-center items-center">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === "all"
                  ? "bg-[#0052CC] text-white shadow-md shadow-blue-900/20"
                  : "bg-slate-100/90 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {language === 'en' ? 'All Partners' : 'Todos los Aliados'} ({ALL_PARTNER_LOGOS.length})
            </button>
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeTab === cat.id
                    ? "bg-[#0052CC] text-white shadow-md shadow-blue-900/20"
                    : "bg-slate-100/90 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {getCategoryTitle(cat.id)}
              </button>
            ))}
          </div>

          {/* Logos Display Grid */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 items-center">
            <AnimatePresence mode="popLayout">
              {filteredLogos.map((item) => {
                const LogoComp = item.component;
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-slate-50/70 hover:bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-[#0052CC]/50 shadow-2xs hover:shadow-xl hover:shadow-blue-900/8 transition-all duration-300 flex flex-col items-center justify-between h-36 group cursor-default"
                  >
                    <div className="w-full flex items-center justify-center h-16">
                      <LogoComp
                        className="max-h-12 max-w-[155px] w-auto transition-all duration-300 group-hover:scale-105"
                        grayscale={true}
                      />
                    </div>
                    <div className="w-full pt-2 border-t border-slate-200/60 flex items-center justify-center">
                      <span className="text-[11px] font-semibold text-slate-500 group-hover:text-[#0052CC] transition-colors tracking-tight line-clamp-1 text-center">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Trust Micro-bar */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{t('ecosystemPartners.trustDirect')}</span>
            </div>
            <span className="font-semibold text-slate-700">
              {t('ecosystemPartners.customNotice')}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EcosystemPartners;

