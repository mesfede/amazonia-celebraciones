import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import lugar2 from './elugar (2).jpg';
import lugar3 from './elugar (3).jpg';
import lugar4 from './elugar (4).jpg';
import lugar5 from './elugar (5).jpg';
import lugar6 from './elugar (6).jpg';

const VENUE_PHOTOS = [
  { src: lugar2, alt: 'Instalaciones Amazonia - Salón principal' },
  { src: lugar3, alt: 'Instalaciones Amazonia - Sector de mesas y merienda' },
  { src: lugar4, alt: 'Instalaciones Amazonia - Zona de Arcades y juegos' },
  { src: lugar5, alt: 'Instalaciones Amazonia - Pelotero y laberinto' },
  { src: lugar6, alt: 'Instalaciones Amazonia - Parque y galería exterior' },
];

export const LugarSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto transition every 4 seconds with smooth crossfade
  useEffect(() => {
    if (!isAutoplay || isModalOpen) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === VENUE_PHOTOS.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoplay, isModalOpen]);

  const prevSlide = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev === 0 ? VENUE_PHOTOS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev === VENUE_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="lugar-slider" className="w-full max-w-6xl mx-auto">
      {/* Full Hero-style Slider Frame */}
      <div
        className="relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-950 aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/10] group"
        onMouseEnter={() => setIsAutoplay(false)}
        onMouseLeave={() => setIsAutoplay(true)}
      >
        {/* Layered Cross-Fading Images */}
        {VENUE_PHOTOS.map((photo, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover select-none transform transition-transform duration-7000 ease-linear scale-100 group-hover:scale-105"
            />
          </div>
        ))}

        {/* Soft Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none z-20" />

        {/* Fullscreen Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-md transition-all transform hover:scale-105 active:scale-95 cursor-pointer border border-white/20"
          title="Ver en pantalla completa"
          aria-label="Ver en pantalla completa"
        >
          <Maximize2 className="w-5 h-5" />
        </button>

        {/* Subtle Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/75 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all transform hover:scale-110 active:scale-95 z-30 cursor-pointer opacity-90 hover:opacity-100"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6 stroke-[3]" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/75 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all transform hover:scale-110 active:scale-95 z-30 cursor-pointer opacity-90 hover:opacity-100"
          aria-label="Siguiente foto"
        >
          <ChevronRight className="w-6 h-6 stroke-[3]" />
        </button>

        {/* Minimal Subtle Dots Indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
          {VENUE_PHOTOS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setIsAutoplay(false);
                setCurrentIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-7 bg-amber-400'
                  : 'w-2.5 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Ir a foto ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50 cursor-pointer"
            aria-label="Cerrar visor"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer z-50"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer z-50"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={VENUE_PHOTOS[currentIndex].src}
              alt={VENUE_PHOTOS[currentIndex].alt}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="mt-3 text-center text-white/70 font-kids text-sm">
              Foto {currentIndex + 1} de {VENUE_PHOTOS.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
