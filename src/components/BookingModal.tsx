import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, Mail, Building, Globe, CheckCircle2, X, Loader2 } from 'lucide-react';
import { submitLeadForm } from '../utils/formSubmit';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProfile?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialProfile = 'Empresa' }) => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: 'Chile',
    profile: initialProfile,
    goal: '',
    preferredDate: '',
    preferredTime: 'Mañana (09:00 - 13:00 CET)',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await submitLeadForm({
      formName: 'Llamada de Diagnóstico Estratégica (20 min)',
      subject: `[BCN360] Nueva Llamada Agendada (${language.toUpperCase()}): ${formData.name} (${formData.company || formData.country})`,
      replyTo: formData.email,
      data: {
        'Nombre': formData.name,
        'Email': formData.email,
        'Empresa u Organización': formData.company,
        'País': formData.country,
        'Tipo de Perfil': formData.profile,
        'Horario Preferido': formData.preferredTime,
        'Objetivo en Barcelona': formData.goal || 'No especificado',
        'Idioma': language.toUpperCase()
      }
    });

    setIsLoading(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  const profileOptions = language === 'en' 
    ? ['Company / Corporate', 'Institution / Government', 'Startup / Scaleup']
    : ['Empresa / Corporativo', 'Institución / Gobierno', 'Startup / Scaleup'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl bg-[#050D1A] text-white rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl z-10 my-8 overflow-hidden"
          >
            {/* Ambient Brand Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0052CC]/25 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00D2FF]/15 rounded-full blur-[100px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052CC]/30 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{t('bookingModal.badge')}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {t('bookingModal.title')}
                  </h3>
                  <p className="text-slate-300 text-sm mt-1">
                    {t('bookingModal.subtitle')}
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        {t('bookingModal.nameLabel')} *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={t('bookingModal.namePlaceholder')}
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        {t('bookingModal.emailLabel')} *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="nombre@organizacion.com"
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        {t('bookingModal.companyLabel')} *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder={t('bookingModal.companyPlaceholder')}
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        {t('bookingModal.countryLabel')}
                      </label>
                      <div className="relative">
                        <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <select
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-sm"
                        >
                          <option value="Chile">🇨🇱 Chile</option>
                          <option value="Colombia">🇨🇴 Colombia</option>
                          <option value="México">🇲🇽 México</option>
                          <option value="Argentina">🇦🇷 Argentina</option>
                          <option value="Perú">🇵🇪 Perú</option>
                          <option value="Uruguay">🇺🇾 Uruguay</option>
                          <option value="Ecuador">🇪🇨 Ecuador</option>
                          <option value="Otro">{language === 'en' ? '🌎 Other LatAm / International' : '🌎 Otro país LatAm'}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      {t('bookingModal.profileLabel')}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {profileOptions.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setFormData({ ...formData, profile: p })}
                          className={`py-2 px-3 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                            formData.profile === p
                              ? 'bg-[#0052CC] border-[#00D2FF] text-white shadow-md'
                              : 'bg-slate-900/60 border-slate-700 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          {p.split(' ')[0]}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      {t('bookingModal.goalLabel')}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      placeholder={t('bookingModal.goalPlaceholder')}
                      className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-[#0052CC] to-[#0088FF] hover:from-[#0042A3] hover:to-[#0070D6] disabled:opacity-75 disabled:cursor-not-allowed text-white font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-[#0052CC]/40 flex items-center justify-center gap-2 text-base group cursor-pointer"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin text-[#00D2FF]" />
                          <span>{t('bookingModal.submittingBtn')}</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-5 h-5 text-[#00D2FF] group-hover:scale-110 transition-transform" />
                          <span>{t('bookingModal.submitBtn')}</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-slate-400 mt-2">
                    {t('bookingModal.disclaimer')}
                  </p>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">
                  {t('bookingModal.successTitle')}
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                  {t('bookingModal.successDesc')} <strong className="text-white">{formData.email}</strong>.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer"
                >
                  {t('bookingModal.closeBtn')}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
