import React, { useState, useEffect } from 'react';
import { Maximize2, X, PartyPopper, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import logoImg from './Amazonia_logo_ok.png';
import cumple1 from './cumple_evento (1).jpg';
import cumple2 from './cumple_evento (2).jpg';
import cumple3 from './cumple_evento (3).jpg';
import cumple4 from './cumple_evento (4).jpg';
import cumple2_01 from './cumple_evento2_01.jpg';
import cumple2_02 from './cumple_evento2_02.jpg';
import cumple2_03 from './cumple_evento2_03.jpg';
import cumple2_04 from './cumple_evento2_04.jpg';

const CUMPLE_PHOTOS = [
  {
    src: cumple2_01,
    alt: 'Cumpleaños en Amazonia 1',
    rotate: '-rotate-2 sm:-rotate-3 hover:rotate-0',
    tapeColor: 'bg-amber-300/90',
  },
  {
    src: cumple2_02,
    alt: 'Cumpleaños en Amazonia 2',
    rotate: 'rotate-2 sm:rotate-3 hover:rotate-0',
    tapeColor: 'bg-teal-300/90',
  },
  {
    src: cumple2_03,
    alt: 'Cumpleaños en Amazonia 3',
    rotate: '-rotate-2 sm:-rotate-3 hover:rotate-0',
    tapeColor: 'bg-pink-300/90',
  },
  {
    src: cumple2_04,
    alt: 'Cumpleaños en Amazonia 4',
    rotate: 'rotate-2 sm:rotate-3 hover:rotate-0',
    tapeColor: 'bg-purple-300/90',
  },
  {
    src: cumple1,
    alt: 'Festejo infantil en Amazonia',
    rotate: 'rotate-1 sm:rotate-2 hover:rotate-0',
    tapeColor: 'bg-emerald-300/90',
  },
  {
    src: cumple2,
    alt: 'Juegos y diversión en Amazonia',
    rotate: '-rotate-2 sm:-rotate-2 hover:rotate-0',
    tapeColor: 'bg-orange-300/90',
  },
  {
    src: cumple3,
    alt: 'Momento de la torta en Amazonia',
    rotate: 'rotate-2 sm:rotate-3 hover:rotate-0',
    tapeColor: 'bg-sky-300/90',
  },
  {
    src: cumple4,
    alt: 'Animación y sonrisas en Amazonia',
    rotate: '-rotate-1 sm:-rotate-2 hover:rotate-0',
    tapeColor: 'bg-rose-300/90',
  },
];

// Rich festive colorful confetti texture for modal backdrop
const MODAL_CONFETTI = [
  { top: '4%', left: '4%', w: '12px', h: '30px', rotate: 'rotate-12', color: 'bg-amber-400' },
  { top: '8%', left: '16%', w: '10px', h: '26px', rotate: '-rotate-25', color: 'bg-rose-500' },
  { top: '5%', left: '32%', w: '11px', h: '28px', rotate: 'rotate-45', color: 'bg-teal-400' },
  { top: '7%', left: '50%', w: '9px', h: '24px', rotate: '-rotate-15', color: 'bg-orange-400' },
  { top: '6%', left: '68%', w: '12px', h: '28px', rotate: 'rotate-35', color: 'bg-pink-400' },
  { top: '4%', left: '85%', w: '10px', h: '26px', rotate: '-rotate-30', color: 'bg-emerald-400' },
  { top: '9%', left: '94%', w: '11px', h: '25px', rotate: 'rotate-20', color: 'bg-amber-300' },

  { top: '20%', left: '3%', w: '11px', h: '28px', rotate: '-rotate-40', color: 'bg-teal-400' },
  { top: '24%', left: '14%', w: '10px', h: '26px', rotate: 'rotate-15', color: 'bg-amber-400' },
  { top: '18%', left: '88%', w: '11px', h: '29px', rotate: 'rotate-30', color: 'bg-rose-500' },
  { top: '25%', left: '96%', w: '9px', h: '24px', rotate: '-rotate-20', color: 'bg-orange-400' },

  { top: '42%', left: '4%', w: '12px', h: '30px', rotate: 'rotate-25', color: 'bg-rose-500' },
  { top: '48%', left: '12%', w: '9px', h: '24px', rotate: '-rotate-35', color: 'bg-emerald-400' },
  { top: '38%', left: '89%', w: '12px', h: '28px', rotate: '-rotate-15', color: 'bg-teal-400' },
  { top: '45%', left: '95%', w: '10px', h: '26px', rotate: 'rotate-45', color: 'bg-amber-400' },

  { top: '65%', left: '5%', w: '11px', h: '28px', rotate: '-rotate-15', color: 'bg-orange-400' },
  { top: '72%', left: '13%', w: '10px', h: '26px', rotate: 'rotate-35', color: 'bg-pink-400' },
  { top: '62%', left: '87%', w: '11px', h: '27px', rotate: 'rotate-20', color: 'bg-emerald-400' },
  { top: '70%', left: '94%', w: '10px', h: '26px', rotate: '-rotate-45', color: 'bg-rose-500' },

  { top: '85%', left: '6%', w: '12px', h: '28px', rotate: 'rotate-30', color: 'bg-teal-400' },
  { top: '90%', left: '18%', w: '10px', h: '26px', rotate: '-rotate-20', color: 'bg-amber-400' },
  { top: '88%', left: '35%', w: '9px', h: '24px', rotate: 'rotate-45', color: 'bg-rose-500' },
  { top: '92%', left: '52%', w: '11px', h: '27px', rotate: '-rotate-10', color: 'bg-emerald-400' },
  { top: '87%', left: '70%', w: '10px', h: '26px', rotate: 'rotate-25', color: 'bg-orange-400' },
  { top: '91%', left: '85%', w: '12px', h: '28px', rotate: '-rotate-35', color: 'bg-pink-400' },
  { top: '86%', left: '95%', w: '10px', h: '25px', rotate: 'rotate-15', color: 'bg-amber-300' },
];

export const CumpleGallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedPhoto === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedPhoto((prev) => (prev === null ? null : (prev + 1) % CUMPLE_PHOTOS.length));
      } else if (e.key === 'ArrowLeft') {
        setSelectedPhoto((prev) => (prev === null ? null : prev === 0 ? CUMPLE_PHOTOS.length - 1 : prev - 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPhoto((prev) => (prev === null ? null : prev === 0 ? CUMPLE_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPhoto((prev) => (prev === null ? null : (prev + 1) % CUMPLE_PHOTOS.length));
  };

  return (
    <section id="galeria" className="py-12 sm:py-24 bg-white relative overflow-hidden">
      {/* Playful background colorful blurs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-teal-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-teal-50 text-teal-700 font-kids text-xs sm:text-sm font-semibold mb-2 sm:mb-3 border border-teal-200 shadow-xs">
            <PartyPopper className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
            Momentos Mágicos
          </div>
          <h2 className="font-kids text-2xl sm:text-4xl lg:text-5xl text-slate-800 font-bold tracking-tight">
            Así se vive un cumple en <span className="text-teal-600">Amazonia</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-lg mt-1 sm:mt-2">
            Tocá cualquier foto para abrirla en grande y recorrer todas las fotos.
          </p>
        </div>

        {/* Compact App-Style Grid on Mobile (4 cols or 2x4 compact) & Spacious Polaroids on Desktop */}
        <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-8 pt-2 sm:pt-4 pb-4 sm:pb-8 max-w-7xl mx-auto">
          {CUMPLE_PHOTOS.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhoto(index)}
              className={`relative cursor-pointer transition-all duration-300 transform sm:${item.rotate} hover:scale-105 hover:z-20 active:scale-95 group`}
            >
              {/* Playful Tape decoration on sm+ screens */}
              <div
                className={`hidden sm:block absolute -top-3.5 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-6 sm:h-7 ${item.tapeColor} backdrop-blur-xs rounded-xs -rotate-2 shadow-xs z-20 border-y border-white/40`}
              />

              {/* Photo Frame - Compact & lightweight on mobile, Polaroid on desktop */}
              <div className="bg-white p-1.5 sm:p-3.5 sm:pb-5 rounded-xl sm:rounded-3xl shadow-sm sm:shadow-xl hover:shadow-2xl border border-slate-200 sm:border-2 sm:border-slate-100 hover:border-teal-400 transition-all duration-300">
                <div className="relative aspect-square sm:aspect-[3/4] overflow-hidden rounded-lg sm:rounded-2xl bg-slate-900">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Hover overlay with zoom icon */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white/95 text-teal-700 flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct WhatsApp Call to Action */}
        <div className="mt-4 sm:mt-8 text-center">
          <a
            href="https://wa.me/5492215340620?text=Hola%20Amazonia!%20Vi%20las%20fotos%20de%20los%20festejos%20y%20quiero%20consultar%20disponibilidad."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-kids text-sm sm:text-lg font-bold shadow-lg shadow-teal-600/25 hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
            <span>¡Quiero festejar en Amazonia!</span>
          </a>
        </div>

      </div>

      {/* Entertaining Colorful Lightbox Modal with Logo Backdrop & Full Navigation */}
      {selectedPhoto !== null && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-between p-3 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Rectangles Texture Background in Modal */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {MODAL_CONFETTI.map((c, i) => (
              <div
                key={i}
                className={`absolute rounded-xs shadow-lg opacity-80 animate-pulse ${c.color} ${c.rotate}`}
                style={{
                  top: c.top,
                  left: c.left,
                  width: c.w,
                  height: c.h,
                  animationDuration: `${3 + (i % 4)}s`,
                }}
              />
            ))}

            {/* Giant Amazonia Logo Watermark in Center Backdrop */}
            <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
              <img
                src={logoImg}
                alt="Amazonia Logo Fondo"
                className="w-full max-w-2xl h-auto object-contain filter invert drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
              />
            </div>
          </div>

          {/* Top Bar: Counter & Close Button */}
          <div className="relative z-20 w-full max-w-5xl flex items-center justify-between pt-1 sm:pt-2 pb-2">
            <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white font-kids text-xs sm:text-sm font-bold shadow-lg">
              <PartyPopper className="w-3.5 h-3.5 text-amber-400" />
              <span>Foto {selectedPhoto + 1} de {CUMPLE_PHOTOS.length}</span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(null);
              }}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-md transition-all z-50 cursor-pointer border border-white/25 hover:scale-105 active:scale-95"
              aria-label="Cerrar visor"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Center Area: Prev Arrow + Image Frame + Next Arrow */}
          <div 
            className="relative z-20 w-full max-w-5xl flex-1 flex items-center justify-center px-1 sm:px-12 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Nav Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 cursor-pointer z-30 border border-white/60"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3]" />
            </button>

            {/* Photo Card with White Polarized Border */}
            <div className="relative max-h-[64vh] sm:max-h-[72vh] flex items-center justify-center bg-white p-2 sm:p-4 rounded-2xl sm:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.9)] border-2 sm:border-4 border-white/90 transform transition-all duration-300">
              <img
                key={selectedPhoto}
                src={CUMPLE_PHOTOS[selectedPhoto].src}
                alt={CUMPLE_PHOTOS[selectedPhoto].alt}
                className="max-h-[58vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded-xl sm:rounded-2xl animate-in zoom-in-95 duration-200"
              />
            </div>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 cursor-pointer z-30 border border-white/60"
              aria-label="Foto siguiente"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3]" />
            </button>
          </div>

          {/* Bottom Thumbnails Navigation Strip */}
          <div 
            className="relative z-20 w-full max-w-4xl py-2 flex items-center justify-center gap-1.5 sm:gap-3 overflow-x-auto px-2 sm:px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {CUMPLE_PHOTOS.map((photo, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedPhoto(idx)}
                className={`relative shrink-0 w-11 h-11 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden cursor-pointer transition-all duration-200 border-2 ${
                  selectedPhoto === idx
                    ? 'border-amber-400 scale-110 shadow-lg shadow-amber-400/50 ring-2 ring-white'
                    : 'border-white/30 opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img src={photo.src} alt={`Miniatura ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
