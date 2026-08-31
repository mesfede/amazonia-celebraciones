import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  ChevronDown,
  Navigation,
  HelpCircle,
} from 'lucide-react';
import { BUSINESS_INFO, FAQ_ITEMS } from '../data/content';

export const ContactoSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="contacto" className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 text-teal-800 font-kids text-sm font-semibold mb-3 border border-teal-200">
            <Phone className="w-4 h-4 text-teal-600" />
            Vías Directas
          </div>
          <h2 className="font-kids text-3xl sm:text-4xl lg:text-5xl text-slate-800 font-bold tracking-tight">
            Ubicación & <span className="text-teal-600">Contacto</span>
          </h2>
          <p className="text-slate-600 text-base mt-2">
            Vení a conocer el salón en persona o escribinos para consultar cualquier duda.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          
          {/* Card 1: Dirección */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-700">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-kids text-xl font-bold text-slate-800">En La Plata</h3>
              <p className="text-slate-600 text-sm">
                {BUSINESS_INFO.address} (entre 12 y 13)
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Calle+41+866+La+Plata+Buenos+Aires"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-teal-600 font-kids font-bold text-sm hover:underline"
            >
              <Navigation className="w-4 h-4" />
              <span>Ver en Google Maps</span>
            </a>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-kids text-xl font-bold text-slate-800">WhatsApp</h3>
              <p className="text-slate-600 text-sm">
                {BUSINESS_INFO.phone} • Atención directa
              </p>
            </div>
            <a
              href={BUSINESS_INFO.whatsappUrl('¡Hola! Me gustaría hacer una consulta sobre el salón.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-kids font-bold text-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Escribir por WhatsApp</span>
            </a>
          </div>

          {/* Card 3: Instagram */}
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-600">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="font-kids text-xl font-bold text-slate-800">Instagram</h3>
              <p className="text-slate-600 text-sm">
                {BUSINESS_INFO.instagramHandle}
              </p>
            </div>
            <a
              href={BUSINESS_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 hover:opacity-90 text-white font-kids font-bold text-sm transition-opacity"
            >
              <Instagram className="w-4 h-4" />
              <span>Seguir en Instagram</span>
            </a>
          </div>

        </div>

        {/* Map & FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-slate-200 shadow-md h-[380px] bg-slate-100">
            <iframe
              title="Ubicación Amazonia Celebraciones"
              src="https://maps.google.com/maps?q=Calle%2041%20866,%20La%20Plata,%20Buenos%20Aires&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full"
            />
          </div>

          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-slate-800 font-kids text-xl font-bold mb-3">
              <HelpCircle className="w-5 h-5 text-teal-600" />
              <span>Preguntas Frecuentes</span>
            </div>

            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 font-kids font-bold text-slate-800 hover:text-teal-600 text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-teal-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-sm text-slate-600 border-t border-slate-200/60 leading-relaxed bg-white pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
