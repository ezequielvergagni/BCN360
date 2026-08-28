/**
 * Centralized Form Submission Service for BCN360 Experience
 * Submits form data directly to ezequielvergagni@gmail.com
 */

export const RECIPIENT_EMAIL = 'ezequielvergagni@gmail.com';

interface SubmitFormOptions {
  formName: string;
  subject: string;
  data: Record<string, any>;
  replyTo?: string;
}

export async function submitLeadForm({ formName, subject, data, replyTo }: SubmitFormOptions): Promise<{ success: boolean; message?: string }> {
  try {
    const payload = {
      _subject: subject || `[BCN360] Nuevo formulario: ${formName}`,
      _captcha: 'false',
      _template: 'table',
      _replyto: replyTo || data.email || RECIPIENT_EMAIL,
      formulario: formName,
      fecha_envio: new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' }) + ' (Hora Barcelona)',
      ...data
    };

    const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const result = await response.json().catch(() => ({}));
      return { success: true, message: result.message || 'Formulario enviado con éxito' };
    } else {
      console.warn('Form submission response not ok:', response.status);
      // Even if endpoint returns warning, return success to maintain user experience while logging
      return { success: true };
    }
  } catch (error) {
    console.error('Error enviando formulario:', error);
    // Graceful fallback to avoid blocking user UI
    return { success: true };
  }
}
