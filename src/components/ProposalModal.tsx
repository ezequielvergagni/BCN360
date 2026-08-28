import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, Send, Building, Mail, User, Globe, Users, Calendar, CheckCircle2, X, Loader2 } from 'lucide-react';
import { submitLeadForm } from '../utils/formSubmit';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProfile?: string;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose, defaultProfile = 'Empresa' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: 'Chile',
    profile: defaultProfile,
    delegationSize: '4-8 personas',
    expectedQuarter: 'Q3 2026 (Septiembre - Noviembre)',
    details: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await submitLeadForm({
      formName: 'Solicitud de Propuesta Personalizada',
      subject: `[BCN360] Nueva Propuesta Solicitada: ${formData.company || formData.name} (${formData.country})`,
      replyTo: formData.email,
      data: {
        'Responsable': formData.name,
        'Email': formData.email,
        'Empresa o Entidad': formData.company,
        'País': formData.country,
        'Tipo de Perfil': formData.profile,
        'Tamaño de Delegación': formData.delegationSize,
        'Ventana de Tiempo': formData.expectedQuarter,
        'Detalles y Foco Sectorial': formData.details || 'No especificado',
      }
    });

    setIsLoading(false);
    setIsSubmitted(true);
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
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#0052CC]/25 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00D2FF]/15 rounded-full blur-[100px] pointer-events-none" />

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
                    <FileText className="w-3.5 h-3.5" />
                    <span>Inmersión a Medida</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Solicita una propuesta personalizada
                  </h3>
                  <p className="text-slate-300 text-sm mt-1">
                    Diseñamos programas llave en mano adaptados al tamaño de tu delegación, sector específico y cronograma de viaje.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Nombre del responsable *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Tu nombre completo"
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email institucional / corporativo *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="nombre@empresa.com"
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Organización / Entidad *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Nombre de la empresa o institución"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Tamaño estimado de delegación
                      </label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <select
                          value={formData.delegationSize}
                          onChange={(e) => setFormData({ ...formData, delegationSize: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-sm"
                        >
                          <option value="1-3 personas (Ejecutivo individual/socios)">1-3 personas (Directivos)</option>
                          <option value="4-8 personas (Comité de innovación)">4-8 personas (Comité)</option>
                          <option value="9-15 personas (Delegación gremial/institucional)">9-15 personas (Delegación)</option>
                          <option value="Más de 15 personas (Misión masiva)">Más de 15 personas (Misión)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Ventana de tiempo prevista
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <select
                          value={formData.expectedQuarter}
                          onChange={(e) => setFormData({ ...formData, expectedQuarter: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-sm"
                        >
                          <option value="Q3 2026 (Septiembre - Noviembre)">Q3 2026 (Septiembre - Noviembre)</option>
                          <option value="Q4 2026 (Diciembre)">Q4 2026 (Diciembre)</option>
                          <option value="Q1 2027 (Enero - Marzo)">Q1 2027 (Enero - Marzo)</option>
                          <option value="Q2 2027 (Abril - Junio)">Q2 2027 (Abril - Junio)</option>
                          <option value="Fechas flexibles por definir">Fechas flexibles por definir</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Foco sectorial y necesidades específicas
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Cuéntanos el sector (Fintech, Health, Biotech, Smart Cities, Clima, etc.) y qué tipos de reuniones o visitas te interesan."
                      className="w-full px-4 py-2.5 bg-slate-900/90 border border-slate-700/80 rounded-xl focus:ring-2 focus:ring-[#0052CC] focus:border-[#00D2FF] text-white text-sm resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#0052CC] hover:bg-[#0042A3] disabled:opacity-75 disabled:cursor-not-allowed text-white font-extrabold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-[#0052CC]/40 flex items-center justify-center gap-2 text-base group"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#00D2FF]" />
                          <span>Procesando requerimiento...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#00D2FF] group-hover:translate-x-1 transition-transform" />
                          <span>Solicitar Propuesta y Presupuesto Detallado</span>
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-slate-400 mt-2">
                    Recibirás una propuesta técnica y económica personalizada en un plazo máximo de 48 horas.
                  </p>
                </form>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-2">
                  ¡Propuesta en Preparación!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                  Hemos registrado los requerimientos de <strong className="text-white">{formData.company}</strong>. Nuestro equipo de diseño de programas se pondrá en contacto a <strong className="text-white">{formData.email}</strong> con una propuesta técnica a medida.
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
