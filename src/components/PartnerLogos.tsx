import React from 'react';

interface LogoProps {
  className?: string;
  grayscale?: boolean;
}

// 1. B combinator
export const BCombinatorLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 240 68" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="52" height="52" rx="6" fill="#202DF5" />
    <path d="M22 21H34C37.5 21 40 23 40 26C40 28 38.5 29.5 36.5 30.2C39 31 41 33 41 36.5C41 40.5 38 43 33.5 43H22V21ZM27.5 25.5V30H33C35 30 36 29 36 27.8C36 26.5 35 25.5 33 25.5H27.5ZM27.5 34.5V38.5H33.5C35.5 38.5 36.5 37.5 36.5 36.5C36.5 35.5 35.5 34.5 33.5 34.5H27.5Z" fill="white" />
    <text x="68" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontSize="33" fontWeight="800" fill="#202DF5" letterSpacing="-0.8">combinator</text>
  </svg>
);

// 2. Barcelona Activa
export const BarcelonaActivaLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 220 60" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="30" r="24" fill="#005A7A" />
    <path d="M28 14L16 46H22.5L25 39H31L33.5 46H40L28 14ZM26.5 34L28 28.5L29.5 34H26.5Z" fill="white" />
    <text x="60" y="27" fontFamily="system-ui, -apple-system, sans-serif" fontSize="21" fontWeight="600" fill="#005A7A" letterSpacing="-0.3">Barcelona</text>
    <text x="60" y="47" fontFamily="system-ui, -apple-system, sans-serif" fontSize="22" fontWeight="800" fill="#005A7A" letterSpacing="-0.3">Activa</text>
  </svg>
);

// 3. BevZero
export const BevZeroLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 240 60" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="24" stroke="#0A4237" strokeWidth="4" fill="none" />
    <path d="M20 18H28C32 18 35 20.5 35 24C35 26.5 33.5 28.5 31 29.5C34 30.5 36 33 36 36.5C36 40.5 32.5 43 28 43H20V18ZM24 23V28H28C30 28 31 27 31 25.5C31 24 30 23 28 23H24ZM24 32V38H28.5C30.5 38 32 37 32 35C32 33 30.5 32 28.5 32H24Z" fill="#0A4237" />
    <path d="M20 30Q28 26 34 38Q26 44 20 30Z" fill="#6B9E78" />
    <text x="66" y="39" fontFamily="system-ui, -apple-system, sans-serif" fontSize="31" fontWeight="800" fill="#0A4237" letterSpacing="-0.5">BevZero</text>
  </svg>
);

// 4. DayOne CaixaBank
export const DayOneCaixaBankLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 240 60" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* CaixaBank Star Icon */}
    <g transform="translate(4, 8) scale(0.65)">
      <path d="M30 4C31 16 38 28 58 28C42 34 36 44 38 60C30 46 22 42 6 48C18 38 20 26 12 10C20 18 24 16 30 4Z" fill="#0085CA" />
      <circle cx="21" cy="40" r="5" fill="#F5A623" />
      <ellipse cx="18" cy="56" rx="7" ry="9" fill="#E84820" />
    </g>
    <text x="56" y="29" fontFamily="system-ui, -apple-system, sans-serif" fontSize="21" fontWeight="800" fill="#0085CA" letterSpacing="-0.3">dayOne</text>
    <text x="56" y="46" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="700" fill="#64748B" letterSpacing="0.2">CaixaBank</text>
  </svg>
);

// 5. EIT Food
export const EITFoodLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 160 80" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(42, 2)">
      {/* Outer Blue Arc */}
      <path d="M38 10C53 10 65 22 65 37C65 52 53 64 38 64" stroke="#004B87" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      {/* Inner Green Arc */}
      <path d="M38 18C48 18 56 26 56 37C56 48 48 56 38 56" stroke="#62B33C" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      {/* Left blue segment */}
      <path d="M12 37C12 24 22 14 36 12" stroke="#004B87" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      {/* Center 'eit' */}
      <text x="38" y="42" fontFamily="system-ui, -apple-system, sans-serif" fontSize="19" fontWeight="700" fill="#004B87" textAnchor="middle">eit</text>
    </g>
    <text x="80" y="74" fontFamily="system-ui, -apple-system, sans-serif" fontSize="22" fontWeight="700" fill="#004B87" textAnchor="middle" letterSpacing="1">Food</text>
  </svg>
);

// 6. Factorial
export const FactorialLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 240 60" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="30" r="23" stroke="#2B2A3D" strokeWidth="6" fill="none" />
    <circle cx="28" cy="23" r="6" fill="#2B2A3D" />
    <path d="M16 38C16 32 21 29 28 29C35 29 40 32 40 38" fill="#2B2A3D" />
    <text x="64" y="40" fontFamily="system-ui, -apple-system, sans-serif" fontSize="33" fontWeight="800" fill="#2B2A3D" letterSpacing="-0.8">factorial</text>
  </svg>
);

// 7. Glovo
export const GlovoLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 200 64" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="8" y="46" fontFamily="system-ui, -apple-system, sans-serif" fontSize="44" fontWeight="800" fill="#349377" letterSpacing="-1">Glovo</text>
    <g transform="translate(142, 8)">
      {/* Pin / Exclamation mark */}
      <path d="M14 6C8 6 4 11 4 17C4 24 14 36 14 36C14 36 24 24 24 17C24 11 20 6 14 6Z" fill="#F9BC28" />
      <circle cx="14" cy="44" r="3.5" fill="#F9BC28" />
    </g>
  </svg>
);

// 8. La Salle Ramon Llull
export const LaSalleLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 220 64" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="6" y="34" fontFamily="system-ui, -apple-system, sans-serif" fontSize="38" fontWeight="600" fill="#3E4042" letterSpacing="-0.5">laSalle</text>
    <rect x="6" y="43" width="206" height="15" fill="#636466" rx="2" />
    <text x="109" y="54.5" fontFamily="system-ui, -apple-system, sans-serif" fontSize="9" fontWeight="800" fill="white" textAnchor="middle" letterSpacing="0.8">RAMON LLULL UNIVERSITY</text>
  </svg>
);

// 9. Mobile World Capital Barcelona
export const MobileWorldCapitalLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 260 64" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 7 Soundwave / Equalizer bars */}
    <g transform="translate(6, 10)">
      <rect x="0" y="18" width="5" height="12" rx="2.5" fill="#111111" />
      <rect x="8" y="10" width="6" height="28" rx="3" fill="#111111" />
      <rect x="17" y="4" width="6" height="40" rx="3" fill="#111111" />
      <rect x="26" y="0" width="7" height="48" rx="3.5" fill="#111111" />
      <rect x="36" y="4" width="6" height="40" rx="3" fill="#111111" />
      <rect x="45" y="10" width="6" height="28" rx="3" fill="#111111" />
      <rect x="54" y="18" width="5" height="12" rx="2.5" fill="#111111" />
    </g>
    <text x="76" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="700" fill="#111111">Mobile</text>
    <text x="76" y="38" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="700" fill="#111111">WorldCapital</text>
    <text x="76" y="55" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="700" fill="#111111">Barcelona</text>
  </svg>
);

// 10. Netmentora
export const NetmentoraLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 220 64" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Stacked smooth stones */}
    <g transform="translate(10, 8)">
      <ellipse cx="44" cy="5" rx="5" ry="3.5" fill="#27183E" />
      <ellipse cx="36" cy="15" rx="14" ry="7" fill="#027495" />
      <ellipse cx="28" cy="27" rx="20" ry="8" fill="#C81D25" />
      <ellipse cx="34" cy="42" rx="28" ry="11" fill="#F39C12" />
    </g>
    <text x="78" y="40" fontFamily="system-ui, -apple-system, sans-serif" fontSize="23" fontWeight="700" fill="#2C3E50" letterSpacing="-0.4">netmentora</text>
  </svg>
);

// 11. Sabadell BStartup
export const SabadellBStartupLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 240 60" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="30" r="23" fill="#0066FF" />
    <path d="M20 18H28C32 18 35 20.5 35 24C35 26.5 33.5 28.5 31 29.5C34 30.5 36 33 36 36.5C36 40.5 32.5 43 28 43H20V18ZM24.5 22.5V27.5H28C30 27.5 31 26.5 31 25C31 23.5 30 22.5 28 22.5H24.5ZM24.5 31.5V37.5H28.5C30.5 37.5 32 36.5 32 34.5C32 32.5 30.5 31.5 28.5 31.5H24.5Z" fill="white" />
    <text x="62" y="29" fontFamily="system-ui, -apple-system, sans-serif" fontSize="22" fontWeight="800" fill="#0066FF" letterSpacing="-0.4">BStartup</text>
    <text x="62" y="46" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="600" fill="#64748B" letterSpacing="0.2">Banco Sabadell</text>
  </svg>
);

// 12. SeedRocket
export const SeedRocketLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 240 60" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="6" y="38" fontFamily="system-ui, -apple-system, sans-serif" fontSize="33" fontWeight="700" fill="#6CA84C" letterSpacing="-0.5">seedr</text>
    {/* Rocket/Seed O Icon */}
    <circle cx="108" cy="27" r="11" stroke="#6CA84C" strokeWidth="4.5" fill="none" />
    <path d="M108 36C108 42 101 45 97 44C97 40 100 36 108 36Z" fill="#6CA84C" />
    <text x="123" y="38" fontFamily="system-ui, -apple-system, sans-serif" fontSize="33" fontWeight="700" fill="#6CA84C" letterSpacing="-0.5">cket</text>
  </svg>
);

// 13. Tradeinn
export const TradeinnLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 240 64" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="6" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontSize="38" fontWeight="900" fontStyle="italic" fill="#111111" letterSpacing="-1">trade</text>
    <g transform="translate(132, 12)">
      <rect x="0" y="4" width="76" height="38" rx="7" fill="#111111" transform="skewX(-10)" />
      <text x="35" y="31" fontFamily="system-ui, -apple-system, sans-serif" fontSize="26" fontWeight="900" fontStyle="italic" fill="white" textAnchor="middle" letterSpacing="0.5">INN</text>
    </g>
  </svg>
);

// 14. TravelPerk
export const TravelPerkLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 240 64" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="6" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontSize="36" fontWeight="800" fill="#000000" letterSpacing="-0.8">travelperk</text>
    {/* 4-pointed Star Sparkle */}
    <path d="M214 8C214 18 206 22 196 22C206 22 214 26 214 36C214 26 222 22 232 22C222 22 214 18 214 8Z" fill="#000000" />
  </svg>
);

// 15. Typeform
export const TypeformLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 240 60" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="14" width="14" height="32" rx="7" fill="#262626" />
    <rect x="28" y="14" width="34" height="32" rx="10" fill="#262626" />
    <text x="76" y="41" fontFamily="system-ui, -apple-system, sans-serif" fontSize="35" fontWeight="700" fill="#262626" letterSpacing="-0.8">Typeform</text>
  </svg>
);

// 16. Wallbox
export const WallboxLogo: React.FC<LogoProps> = ({ className = "h-8", grayscale = false }) => (
  <svg viewBox="0 0 240 64" className={`${className} ${grayscale ? 'filter grayscale group-hover:grayscale-0 transition-all duration-300' : ''}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="6" y="42" fontFamily="system-ui, -apple-system, sans-serif" fontSize="36" fontWeight="900" fill="#172233" letterSpacing="-1">wallbox</text>
    {/* Wallbox EV Plug Icon */}
    <g transform="translate(180, 8)">
      <path d="M22 2C13 2 6 9 6 18V24H38V18C38 9 31 2 22 2Z" fill="#172233" />
      <rect x="12" y="26" width="4.5" height="12" rx="2" fill="#172233" />
      <rect x="27.5" y="26" width="4.5" height="12" rx="2" fill="#172233" />
      <path d="M6 34C6 43 13 48 22 48C31 48 38 43 38 34" fill="#172233" />
    </g>
  </svg>
);

export const ALL_PARTNER_LOGOS = [
  { id: 'bcombinator', name: 'B combinator', category: 'Hub & Aceleradora', component: BCombinatorLogo },
  { id: 'barcelona-activa', name: 'Barcelona Activa', category: 'Agencia de Desarrollo BCN', component: BarcelonaActivaLogo },
  { id: 'bevzero', name: 'BevZero', category: 'Innovación Agroalimentaria', component: BevZeroLogo },
  { id: 'dayone', name: 'DayOne (CaixaBank)', category: 'Banca & Financiación Tech', component: DayOneCaixaBankLogo },
  { id: 'eit-food', name: 'EIT Food', category: 'Fondo Europeo de Innovación', component: EITFoodLogo },
  { id: 'factorial', name: 'Factorial', category: 'Unicornio HR Tech', component: FactorialLogo },
  { id: 'glovo', name: 'Glovo', category: 'Unicornio Tech & Logística', component: GlovoLogo },
  { id: 'la-salle', name: 'La Salle (Ramon Llull)', category: 'Universidad & Technova', component: LaSalleLogo },
  { id: 'mwcapital', name: 'Mobile World Capital', category: 'Hub Global de Innovación', component: MobileWorldCapitalLogo },
  { id: 'netmentora', name: 'Netmentora', category: 'Red Líder de Mentores', component: NetmentoraLogo },
  { id: 'bstartup', name: 'Sabadell BStartup', category: 'Venture & Inversión Seed', component: SabadellBStartupLogo },
  { id: 'seedrocket', name: 'SeedRocket', category: 'Aceleradora de Startups', component: SeedRocketLogo },
  { id: 'tradeinn', name: 'Tradeinn', category: 'Líder E-commerce Global', component: TradeinnLogo },
  { id: 'travelperk', name: 'TravelPerk', category: 'Unicornio Business Travel', component: TravelPerkLogo },
  { id: 'typeform', name: 'Typeform', category: 'Unicornio SaaS & Data', component: TypeformLogo },
  { id: 'wallbox', name: 'Wallbox', category: 'Unicornio Smart Charging', component: WallboxLogo },
];
