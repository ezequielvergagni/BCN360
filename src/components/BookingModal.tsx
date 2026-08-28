import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, Mail, Building, Globe, CheckCircle2, X, Sparkles, Send } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProfile?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialProfile = 'Empresa' }) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate booking confirmation
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

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
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052CC]/30 border border-[#00D2FF]/40 text-[#00D2FF] text-xs font-bold uppercase tracking-wider mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Llamada de Diagnóstico • 20 Minutos</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Agenda tu llamada estratégica
                  </h3>
                  <p className="text-slate-300 text-sm mt-1">
                    Evaluaremos los objetivos de tu organización y te mostraremos qué tipo de agenda y alianzas podemos abrir para ti en Barcelona.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Nombre completo *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Tu nombre y apellido"
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email corporativo *
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
                        Empresa / Institución *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Nombre de la entidad"
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        País de origen
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
                          <option value="Otro">🌎 Otro país LatAm</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Tipo de perfil
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Empresa / Corporativo', 'Institución / Gobierno', 'Startup / Scaleup'].map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setFormData({ ...formData, profile: p })}
                          className={`py-2 px-3 text-xs font-bold rounded-xl border text-center transition-all ${
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
                      ¿Qué objetivo principal buscas en Barcelona? (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      placeholder="Ej: Scouting de proveedores IA, alianzas con universidades, expansión a Europa..."
                      className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0052CC] to-[#0088FF] hover:from-[#0042A3] hover:to-[#0070D6] text-white font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-[#0052CC]/40 flex items-center justify-center gap-2 text-base group"
                    >
                      <Calendar className="w-5 h-5 text-[#00D2FF] group-hover:scale-110 transition-transform" />
                      <span>Confirmar Solicitud de Llamada (20 min)</span>
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-slate-400 mt-2">
                    🔒 Sin costo ni compromiso comercial. Te responderemos en menos de 24 horas hábiles.
                  </p>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">
                  ¡Solicitud Recibida con Éxito!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                  Nos pondremos en contacto a <strong className="text-white">{formData.email}</strong> para coordinar el horario exacto de la videollamada con nuestro equipo en Barcelona.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm transition-colors"
                >
                  Cerrar ventana
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
