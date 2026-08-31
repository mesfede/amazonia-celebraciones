import React, { useState } from 'react';
import { Calendar, MessageCircle, Sparkles, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const ReservasSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    turno: 'Tarde (16:30 a 19:30)',
    homenajeado: '',
    edad: '',
    comentarios: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `¡Hola Amazonia! 🎉 Me gustaría consultar disponibilidad para un festejo:
🎂 Homenajeado/a: ${formData.homenajeado || 'Cumple'} ${formData.edad ? `(${formData.edad} años)` : ''}
📅 Fecha deseada: ${formData.fecha || 'A coordinar'}
⏰ Turno: ${formData.turno}
👤 Contacto: ${formData.nombre || 'Interesado/a'}
${formData.comentarios ? '💬 Consulta: ' + formData.comentarios : ''}`;

    window.open(BUSINESS_INFO.whatsappUrl(text), '_blank');
  };

  return (
    <section id="reservas" className="py-14 sm:py-20 bg-gradient-to-b from-white to-teal-50/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 text-teal-800 font-kids text-sm font-semibold mb-3 border border-teal-200">
            <Calendar className="w-4 h-4 text-teal-600" />
            Disponibilidad
          </div>
          <h2 className="font-kids text-3xl sm:text-4xl text-slate-800 font-bold tracking-tight">
            Consultá <span className="text-teal-600">tu Fecha</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Completá estos datos y te respondemos al instante con la disponibilidad y presupuesto.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8">
          <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-kids font-bold text-slate-700 mb-1.5">
                  Tu Nombre y Apellido *
                </label>
                <input
                  type="text"
                  name="nombre"
                  required
                  placeholder="Ej: Sofía González"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-kids font-bold text-slate-700 mb-1.5">
                  Fecha Deseada *
                </label>
                <input
                  type="date"
                  name="fecha"
                  required
                  value={formData.fecha}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-kids font-bold text-slate-700 mb-1.5">
                  Cumpleañero/a
                </label>
                <input
                  type="text"
                  name="homenajeado"
                  placeholder="Nombre"
                  value={formData.homenajeado}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-kids font-bold text-slate-700 mb-1.5">
                  Edad a Cumplir
                </label>
                <input
                  type="number"
                  name="edad"
                  placeholder="Ej: 6"
                  value={formData.edad}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-kids font-bold text-slate-700 mb-1.5">
                  Turno
                </label>
                <select
                  name="turno"
                  value={formData.turno}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm cursor-pointer"
                >
                  <option value="Tarde (16:30 a 19:30)">Tarde (16:30 a 19:30)</option>
                  <option value="Noche (20:30 a 23:30)">Noche (20:30 a 23:30)</option>
                  <option value="Mediodía / Especial">Mediodía / Especial</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-kids font-bold text-slate-700 mb-1.5">
                Comentarios adicionales (opcional)
              </label>
              <textarea
                name="comentarios"
                rows={2}
                placeholder="¿Alguna consulta sobre menú, temáticas o cantidad de invitados?"
                value={formData.comentarios}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-kids text-base font-bold shadow-lg shadow-teal-600/25 flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-amber-300" />
              <span>Enviar Consulta a WhatsApp</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
