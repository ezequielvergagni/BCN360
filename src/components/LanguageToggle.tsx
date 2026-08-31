import React from 'react';
import { motion } from 'motion/react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

interface LanguageToggleProps {
  variant?: 'navbar' | 'mobile' | 'footer';
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ variant = 'navbar', className = '' }) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'mobile') {
    return (
      <div className={`flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10 ${className}`}>
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <Globe className="w-4 h-4 text-[#00D2FF]" />
          <span>Idioma / Language</span>
        </div>
        <div className="flex items-center bg-[#0C1629] p-1 rounded-xl border border-white/10">
          <button
            type="button"
            onClick={() => setLanguage('es')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              language === 'es'
                ? 'bg-[#0052CC] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🇪🇸</span>
            <span>ES</span>
          </button>
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
              language === 'en'
                ? 'bg-[#0052CC] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>🇬🇧</span>
            <span>EN</span>
          </button>
        </div>
      </div>
    );
  }

  // Desktop Navbar & other placements
  return (
    <div className={`relative flex items-center bg-[#0C1629]/90 backdrop-blur-md p-1 rounded-full border border-white/15 shadow-inner ${className}`}>
      <button
        type="button"
        onClick={() => setLanguage('es')}
        aria-label="Cambiar a Español"
        className={`relative z-10 px-2.5 py-1 rounded-full text-xs font-bold tracking-wider transition-colors flex items-center gap-1.5 select-none ${
          language === 'es' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <span className="text-[13px]">🇪🇸</span>
        <span>ES</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-label="Switch to English"
        className={`relative z-10 px-2.5 py-1 rounded-full text-xs font-bold tracking-wider transition-colors flex items-center gap-1.5 select-none ${
          language === 'en' ? 'text-white' : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        <span className="text-[13px]">🇬🇧</span>
        <span>EN</span>
      </button>

      {/* Animated active slider indicator */}
      <motion.div
        layoutId="activeLangIndicator"
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className={`absolute top-1 bottom-1 rounded-full bg-gradient-to-r from-[#0052CC] to-[#0066FF] shadow-sm border border-blue-400/30 ${
          language === 'es' ? 'left-1 w-[52px]' : 'left-[56px] w-[53px]'
        }`}
      />
    </div>
  );
};

export default LanguageToggle;
