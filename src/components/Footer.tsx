import React from 'react';
import { Instagram, MessageCircle, MapPin, Heart } from 'lucide-react';
import { AmazoniaLogo } from './AmazoniaLogo';
import { BUSINESS_INFO } from '../data/content';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-teal-800 text-white pt-14 pb-8 border-t border-teal-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 items-center">
          
          {/* Logo in Pure White & Tagline */}
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-block">
              <AmazoniaLogo variant="white" className="h-14 w-auto mx-auto md:mx-0" />
            </div>
            <p className="text-teal-100 text-sm font-medium">
              Salón de fiestas y eventos infantiles en La Plata.
            </p>
          </div>

          {/* Quick Nav in White / Amber */}
          <div className="flex flex-wrap justify-center gap-4 text-sm font-kids font-bold text-white">
            <button onClick={() => onNavigate('inicio')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Inicio
            </button>
            <button onClick={() => onNavigate('el-lugar')} className="hover:text-amber-300 transition-colors cursor-pointer">
              El Lugar
            </button>
            <button onClick={() => onNavigate('galeria')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Galería
            </button>
            <button onClick={() => onNavigate('servicios')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Servicios
            </button>
            <button onClick={() => onNavigate('reservas')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Consultar Fecha
            </button>
            <button onClick={() => onNavigate('contacto')} className="hover:text-amber-300 transition-colors cursor-pointer">
              Contacto
            </button>
          </div>

          {/* Social / WhatsApp Buttons */}
          <div className="flex justify-center md:justify-end gap-3">
            <a
              href={BUSINESS_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-2xl bg-white/15 hover:bg-pink-600 flex items-center justify-center text-white transition-all transform hover:scale-105 active:scale-95 shadow-md border border-white/20"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl('¡Hola! Me comunico desde la web de Amazonia.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-2xl bg-white/15 hover:bg-emerald-600 flex items-center justify-center text-white transition-all transform hover:scale-105 active:scale-95 shadow-md border border-white/20"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom legal line */}
        <div className="pt-6 border-t border-teal-700/80 text-center text-xs text-teal-100 flex flex-col sm:flex-row items-center justify-between gap-3 font-medium">
          <p>© {new Date().getFullYear()} Amazonia Celebraciones • Calle 41 N° 866 (e/ 12 y 13), La Plata</p>
          <p className="text-amber-300 font-bold">WhatsApp: 0221 534-0620 / 0221 564-2036</p>
        </div>
      </div>
    </footer>
  );
};
