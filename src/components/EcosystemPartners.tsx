import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Award } from 'lucide-react';
import { AnimatedHeadingWords } from './AnimatedText';
import { ALL_PARTNER_LOGOS } from './PartnerLogos';

interface FilterCategory {
  id: string;
  title: string;
  partnerIds: string[];
}

const filterCategories: FilterCategory[] = [
  {
    id: "instituciones",
    title: "Instituciones & Universidades",
    partnerIds: ["barcelona-activa", "mwcapital", "eit-food", "la-salle"]
  },
  {
    id: "aceleradoras",
    title: "Hubs & Aceleradoras",
    partnerIds: ["bcombinator", "seedrocket", "netmentora", "dayone"]
  },
  {
    id: "unicornios",
    title: "Unicornios & Scaleups",
    partnerIds: ["glovo", "typeform", "travelperk", "factorial"]
  },
  {
    id: "corporates",
    title: "Innovación & Corporates",
    partnerIds: ["wallbox", "tradeinn", "bstartup", "bevzero"]
  }
];

const EcosystemPartners: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredLogos = ALL_PARTNER_LOGOS.filter((item) => {
    if (activeTab === "all") return true;
    const cat = filterCategories.find((c) => c.id === activeTab);
    return cat?.partnerIds.includes(item.id);
  });

  return (
    <section className="py-20 bg-slate-50/60 relative overflow-hidden border-b border-slate-200/80">
      {/* Subtle tech background pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0052CC]/10 border border-[#0052CC]/20 text-[#0052CC] text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0052CC]" />
            <span>Alianzas & Red Estratégica</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            <AnimatedHeadingWords
              text="El ecosistema al que accedés"
              highlightText="accedés"
              highlightClassName="text-[#0052CC] font-extrabold"
            />
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Conectamos directamente a tu delegación con las instituciones públicas, aceleradoras, fondos de inversión y unicornios tecnológicos que lideran Barcelona.
          </p>
        </div>

        {/* 16 Logos Grid Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm"
        >
          {/* Top meta bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0052CC]/10 flex items-center justify-center text-[#0052CC]">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
                16 Empresas, Instituciones y Fondos Aliados
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Acceso directo garantizado en nuestras inmersiones
            </div>
          </div>

          {/* Quick Filter Pill Buttons */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === "all"
                  ? "bg-[#0052CC] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Todos ({ALL_PARTNER_LOGOS.length})
            </button>
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeTab === cat.id
                    ? "bg-[#0052CC] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.title}
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
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.25 }}
                    className="bg-slate-50/80 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-[#0052CC]/50 shadow-2xs hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex flex-col items-center justify-center text-center h-32 group"
                  >
                    <div className="w-full flex items-center justify-center h-14">
                      <LogoComp
                        className="max-h-10 max-w-[150px] w-auto transition-transform duration-300 group-hover:scale-105"
                        grayscale={true}
                      />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 group-hover:text-[#0052CC] transition-colors mt-2 tracking-tight line-clamp-1">
                      {item.category}
                    </span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default EcosystemPartners;
