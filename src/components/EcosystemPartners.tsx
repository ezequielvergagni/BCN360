import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Building2, Rocket, TrendingUp, Cpu, Award } from 'lucide-react';
import { AnimatedHeadingWords } from './AnimatedText';
import {
  BCombinatorLogo,
  BarcelonaActivaLogo,
  BevZeroLogo,
  DayOneCaixaBankLogo,
  EITFoodLogo,
  FactorialLogo,
  GlovoLogo,
  LaSalleLogo,
  MobileWorldCapitalLogo,
  NetmentoraLogo,
  SabadellBStartupLogo,
  SeedRocketLogo,
  TradeinnLogo,
  TravelPerkLogo,
  TypeformLogo,
  WallboxLogo,
  ALL_PARTNER_LOGOS
} from './PartnerLogos';

interface PartnerItem {
  id: string;
  name: string;
  role: string;
  tag: string;
  LogoComponent: React.ComponentType<{ className?: string; grayscale?: boolean }>;
}

interface PartnerCategory {
  id: string;
  title: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  items: PartnerItem[];
}

const partnerCategories: PartnerCategory[] = [
  {
    id: "instituciones",
    title: "Instituciones & Universidades",
    badge: "Gobierno, I+D & Academia",
    icon: Building2,
    description: "Entidades públicas y académicas que lideran las políticas de innovación y transferencia de conocimiento.",
    items: [
      {
        id: "barcelona-activa",
        name: "Barcelona Activa",
        role: "Agencia de desarrollo económico de Barcelona",
        tag: "Desarrollo Urbano & Talento",
        LogoComponent: BarcelonaActivaLogo
      },
      {
        id: "mwcapital",
        name: "Mobile World Capital",
        role: "Hub global de digitalización e innovación",
        tag: "Innovación & MWC",
        LogoComponent: MobileWorldCapitalLogo
      },
      {
        id: "eit-food",
        name: "EIT Food",
        role: "Comunidad de innovación alimentaria europea",
        tag: "Agrotech & Foodtech",
        LogoComponent: EITFoodLogo
      },
      {
        id: "la-salle",
        name: "La Salle (Ramon Llull)",
        role: "Campus de ingeniería, negocios e incubación",
        tag: "Universidad & Technova",
        LogoComponent: LaSalleLogo
      }
    ]
  },
  {
    id: "aceleradoras",
    title: "Hubs & Aceleradoras",
    badge: "Incubación & Redes de Mentores",
    icon: Rocket,
    description: "Programas líderes en aceleración de negocio, conexión internacional y mentoría de primer nivel.",
    items: [
      {
        id: "bcombinator",
        name: "B combinator",
        role: "Hub de aceleración, inversión y coworking",
        tag: "Aceleradora & Coworking",
        LogoComponent: BCombinatorLogo
      },
      {
        id: "seedrocket",
        name: "SeedRocket",
        role: "Aceleradora pionera de startups tecnológicas",
        tag: "Inversión Semilla & Mentoría",
        LogoComponent: SeedRocketLogo
      },
      {
        id: "netmentora",
        name: "Netmentora",
        role: "Red empresarial sin ánimo de lucro de mentores",
        tag: "Red de Líderes Empresariales",
        LogoComponent: NetmentoraLogo
      },
      {
        id: "dayone",
        name: "DayOne (CaixaBank)",
        role: "División de CaixaBank para empresas tech y startups",
        tag: "Banca Tech & Financiación",
        LogoComponent: DayOneCaixaBankLogo
      }
    ]
  },
  {
    id: "unicornios",
    title: "Unicornios & Scaleups",
    badge: "Líderes Tecnológicos de BCN",
    icon: TrendingUp,
    description: "Empresas nacidas o desarrolladas en Barcelona que han alcanzado escala global y liderazgo mundial.",
    items: [
      {
        id: "glovo",
        name: "Glovo",
        role: "Unicornio de tecnología logística y delivery on-demand",
        tag: "Logística & Quick Commerce",
        LogoComponent: GlovoLogo
      },
      {
        id: "typeform",
        name: "Typeform",
        role: "Plataforma global de formularios interactivos y data",
        tag: "SaaS & Interactive UX",
        LogoComponent: TypeformLogo
      },
      {
        id: "travelperk",
        name: "TravelPerk",
        role: "Líder en gestión de viajes corporativos de última generación",
        tag: "TravelTech & SaaS",
        LogoComponent: TravelPerkLogo
      },
      {
        id: "factorial",
        name: "Factorial",
        role: "Unicornio en software de gestión de RRHH para empresas",
        tag: "HR Tech & Automatización",
        LogoComponent: FactorialLogo
      }
    ]
  },
  {
    id: "corporates",
    title: "Innovación & Corporates",
    badge: "E-Commerce, Cleantech & Finanzas",
    icon: Cpu,
    description: "Grandes referentes corporativos y de base tecnológica que transforman sus industrias a nivel internacional.",
    items: [
      {
        id: "wallbox",
        name: "Wallbox",
        role: "Sistemas inteligentes de carga de vehículos eléctricos",
        tag: "Smart Charging & Cleantech",
        LogoComponent: WallboxLogo
      },
      {
        id: "tradeinn",
        name: "Tradeinn",
        role: "Grupo de comercio electrónico deportivo líder mundial",
        tag: "Global E-commerce Leader",
        LogoComponent: TradeinnLogo
      },
      {
        id: "bstartup",
        name: "Sabadell BStartup",
        role: "Dirección de startups y capital riesgo de Banco Sabadell",
        tag: "Venture Debt & Equity",
        LogoComponent: SabadellBStartupLogo
      },
      {
        id: "bevzero",
        name: "BevZero",
        role: "Pioneros globales en dealcoholización y bebidas innovadoras",
        tag: "Food & Beverage Innovation",
        LogoComponent: BevZeroLogo
      }
    ]
  }
];

const EcosystemPartners: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden border-b border-slate-200/80">
      {/* Subtle tech background pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14 max-w-3xl mx-auto">
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
            Conectamos directamente a tu delegación con las instituciones públicas, aceleradoras, fondos de inversión y unicornios tecnológicos que lideran Barcelona.
          </p>
        </div>

        {/* 16 Logos Live Wall / Grid Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0052CC]/10 flex items-center justify-center text-[#0052CC]">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                16 Empresas, Instituciones y Fondos Aliados
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Acceso directo garantizado en nuestras inmersiones
            </div>
          </div>

          {/* Quick Filter Pill Buttons */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "all"
                  ? "bg-[#0052CC] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Todos ({ALL_PARTNER_LOGOS.length})
            </button>
            {partnerCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
            {ALL_PARTNER_LOGOS.filter((item) => {
              if (activeTab === "all") return true;
              const cat = partnerCategories.find(c => c.id === activeTab);
              return cat?.items.some(catItem => catItem.id === item.id);
            }).map((item) => {
              const LogoComp = item.component;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-slate-50/70 hover:bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 hover:border-[#0052CC]/50 shadow-2xs hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex flex-col items-center justify-center text-center h-28 group"
                >
                  <div className="w-full flex items-center justify-center h-12">
                    <LogoComp className="max-h-9 max-w-[140px] w-auto transition-transform duration-300 group-hover:scale-105" grayscale={true} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 group-hover:text-[#0052CC] transition-colors mt-2 tracking-tight line-clamp-1">
                    {item.category}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 4 Categorized Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerCategories.map((cat, catIdx) => {
            const IconComp = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#0052CC]/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0052CC]/10 border border-[#0052CC]/20 flex items-center justify-center text-[#0052CC] shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-tight">
                        {cat.title}
                      </h3>
                      <span className="text-[10px] font-bold text-[#0052CC] uppercase tracking-wider">
                        {cat.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-3">
                    {cat.items.map((item) => {
                      const LogoComponent = item.LogoComponent;
                      return (
                        <motion.div
                          key={item.id}
                          whileHover={{ x: 3 }}
                          className="bg-slate-50/80 hover:bg-blue-50/50 rounded-xl p-3 border border-slate-200/70 hover:border-[#0052CC]/30 transition-all group"
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <div className="h-6 flex items-center">
                              <LogoComponent className="max-h-5 max-w-[100px] w-auto" grayscale={true} />
                            </div>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200/80 text-slate-600 group-hover:text-[#0052CC] group-hover:border-[#0052CC]/30 transition-colors shrink-0">
                              {item.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-snug">
                            {item.role}
                          </p>
                        </motion.div>
                      );
                    })}
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
