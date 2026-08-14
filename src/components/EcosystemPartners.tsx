import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Building2, Layers, TrendingUp, Handshake } from 'lucide-react';
import { AnimatedHeadingWords } from './AnimatedText';

interface PartnerCategory {
  title: string;
  badge: string;
  icon: React.ElementType;
  items: string[];
}

const partnerCategories: PartnerCategory[] = [
  {
    title: "Instituciones",
    badge: "Gobierno & Apoyo Público",
    icon: Building2,
    items: ["ACCIÓ", "Barcelona Activa", "IRTA", "INCAVI"]
  },
  {
    title: "Ecosistema",
    badge: "Hubs & Aceleradoras",
    icon: Layers,
    items: ["The Collider", "Netmentora", "AticcoLab", "La Salle Technova"]
  },
  {
    title: "Inversores",
    badge: "Venture Capital & Fondos",
    icon: TrendingUp,
    items: ["EIT Food", "SeedRocket", "Bcombinator"]
  },
  {
    title: "Contrapartes",
    badge: "Empresas & Clústers Líderes",
    icon: Handshake,
    items: ["Familia Torres", "INNOVI", "Bionet"]
  }
];

const EcosystemPartners: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Subtle tech background pattern */}
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
            <span>Alianzas & Red Estratégica</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            <AnimatedHeadingWords
              text="El ecosistema al que accedés"
              highlightText="accedés"
              highlightClassName="text-[#0052CC] font-extrabold"
            />
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Conectamos directamente a tu delegación con los principales actores institucionales, fondos de inversión y polos de innovación de Catalunya.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerCategories.map((cat, catIdx) => {
            const IconComp = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200/80 hover:border-[#0052CC]/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0052CC]/10 border border-[#0052CC]/20 flex items-center justify-center text-[#0052CC]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-none">
                        {cat.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        {cat.badge}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5 mt-6">
                    {cat.items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ x: 4 }}
                        className="bg-white rounded-xl px-4 py-3 border border-slate-200/70 hover:border-[#0052CC]/30 hover:bg-blue-50/40 transition-all flex items-center justify-between group shadow-2xs"
                      >
                        <span className="text-sm font-bold text-slate-800 group-hover:text-[#0052CC] transition-colors">
                          {item}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#0052CC] transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EcosystemPartners;
