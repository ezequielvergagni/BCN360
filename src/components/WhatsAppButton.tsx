import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '+34610691957',
  defaultMessage
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { t } = useLanguage();

  const activeMessage = defaultMessage || t('whatsapp.defaultMessage');
  const tooltipText = t('whatsapp.tooltip');

  // Clean phone number for wa.me link (remove +, spaces, etc.)
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(activeMessage);
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2 pointer-events-none">
      
      {/* Floating Tooltip Pill */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto bg-white text-slate-800 text-xs font-semibold py-2.5 px-4 rounded-2xl shadow-xl border border-slate-200/90 flex items-center gap-2 max-w-xs mb-1"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>{tooltipText}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
              aria-label="Cerrar tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a BCN360 Experience"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#25D366] to-[#20ba5a] text-white rounded-full shadow-2xl shadow-emerald-600/40 hover:shadow-emerald-600/60 transition-shadow focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        {/* Glow ripple effect */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 group-hover:opacity-60 animate-ping pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 fill-white text-white drop-shadow relative z-10" />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
