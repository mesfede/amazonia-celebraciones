import React, { useState, useEffect } from 'react';
import { MessageCircle, ChevronLeft, ChevronRight, PartyPopper } from 'lucide-react';
import lugar2 from './elugar (2).jpg';
import lugar3 from './elugar (3).jpg';
import lugar4 from './elugar (4).jpg';
import lugar5 from './elugar (5).jpg';
import lugar6 from './elugar (6).jpg';
import { BUSINESS_INFO } from '../data/content';

const HERO_SLIDES = [
  {
    image: lugar2,
    title: '¡Cumpleaños mágicos e inolvidables!',
    subtitle: 'Salón climatizado, mesas confortables y espacio pensado para toda la familia.',
    highlight: '¡Momentos Únicos!',
    badgeStyle: 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 border-amber-200/90 shadow-amber-500/30',
    iconColor: 'text-slate-950',
  },
  {
    image: lugar3,
    title: '¡Festejá con tus amigos a lo grande!',
    subtitle: 'El mejor sector para la merienda, animación y el momento de la torta.',
    highlight: '¡Fiestas Increíbles!',
    badgeStyle: 'bg-gradient-to-r from-cyan-400 via-teal-400 to-teal-500 text-slate-950 border-cyan-200/90 shadow-teal-500/30',
    iconColor: 'text-slate-950',
  },
  {
    image: lugar4,
    title: '¡Arcades retro y videojuegos!',
    subtitle: 'Fichines clásicos y entretenimiento interactivo sin límites.',
    highlight: '¡Zona Gamer!',
    badgeStyle: 'bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white border-pink-300/80 shadow-fuchsia-500/40',
    iconColor: 'text-amber-300',
  },
  {
    image: lugar5,
    title: '¡Espacios seguros y llenos de color!',
    subtitle: 'Todo preparado y coordinado para que solo te preocupes por sonreír.',
    highlight: '¡100% Cuidado!',
    badgeStyle: 'bg-gradient-to-r from-emerald-400 to-teal-600 text-white border-emerald-200/80 shadow-emerald-500/30',
    iconColor: 'text-emerald-100',
  },
  {
    image: lugar6,
    title: '¡Galería cubierta y parque con parrilla!',
    subtitle: 'Disfrutá al aire libre con la mayor comodidad en pleno centro de La Plata.',
    highlight: '¡Espacio al Aire Libre!',
    badgeStyle: 'bg-gradient-to-r from-orange-400 via-rose-500 to-red-500 text-white border-orange-200/80 shadow-orange-500/30',
    iconColor: 'text-amber-200',
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto transition every 3.6 seconds - always in continuous motion
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section 
      className="relative w-full h-[100dvh] min-h-[520px] sm:min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-950 pt-16 sm:pt-20 pb-16 sm:pb-12"
    >
      {/* Background Slider Images - Always in fluid continuous motion (Ken Burns) */}
      {HERO_SLIDES.map((item, index) => {
        const isActive = currentSlide === index;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover select-none animate-ken-burns transform-gpu"
            />
          </div>
        );
      })}

      {/* Clear & Soft Gradient Overlays for optimal photo clarity and high-contrast readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/55 z-10 pointer-events-none" />

      {/* Main Slide Foreground Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center my-auto">
        
        {/* Animated Kids Highlight Badge with Unique Color per Slide */}
        <div
          key={`badge-${currentSlide}`}
          className={`mb-3 sm:mb-4 inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-kids text-xs sm:text-base font-extrabold shadow-xl border-2 animate-pop-bounce transition-all duration-300 ${slide.badgeStyle}`}
        >
          <PartyPopper className={`w-4 h-4 sm:w-4.5 sm:h-4.5 ${slide.iconColor}`} />
          <span>{slide.highlight}</span>
        </div>

        {/* Animated Dynamic Main Headline - Bigger, bold and high-impact on mobile */}
        <div className="min-h-[80px] sm:min-h-[120px] flex items-center justify-center max-w-4xl px-2">
          <h1
            key={`title-${currentSlide}`}
            className="font-kids text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight sm:leading-[1.15] drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] animate-slide-in-up"
          >
            {slide.title}
          </h1>
        </div>

        {/* Animated Subtitle / Bajada - Clearer, larger and prominent on mobile */}
        <div className="min-h-[48px] sm:min-h-[60px] flex items-center justify-center max-w-2xl mt-2 sm:mt-2 mb-3 sm:mb-8 px-2">
          <p
            key={`sub-${currentSlide}`}
            className="text-white/95 text-base sm:text-xl font-semibold sm:font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] leading-snug sm:leading-relaxed animate-slide-in-up"
          >
            {slide.subtitle}
          </p>
        </div>

        {/* Call to Action Buttons - Hidden on Mobile as requested by user, visible on tablet/desktop */}
        <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={BUSINESS_INFO.whatsappUrl('¡Hola Amazonia! Quiero consultar disponibilidad y presupuesto para un cumpleaños.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-kids text-lg sm:text-xl font-extrabold shadow-2xl shadow-teal-950/60 hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-teal-300/50 group"
          >
            <MessageCircle className="w-6 h-6 text-amber-300 fill-amber-300/30 group-hover:rotate-12 transition-transform" />
            <span>Consultar por WhatsApp</span>
          </a>

          <a
            href="#el-lugar"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-black/45 hover:bg-black/70 text-white backdrop-blur-md font-kids text-base sm:text-lg font-bold border border-white/40 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
          >
            <span>Ver Instalaciones</span>
          </a>
        </div>

      </div>

      {/* Slide Navigation Arrows - Hidden on mobile, visible on sm/desktop */}
      <button
        onClick={handlePrev}
        className="hidden sm:flex absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/45 hover:bg-black/75 text-white items-center justify-center backdrop-blur-md border border-white/25 transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Foto anterior del salón"
      >
        <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
      </button>

      <button
        onClick={handleNext}
        className="hidden sm:flex absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/45 hover:bg-black/75 text-white items-center justify-center backdrop-blur-md border border-white/25 transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Siguiente foto del salón"
      >
        <ChevronRight className="w-7 h-7 stroke-[2.5]" />
      </button>

      {/* Slide Indicators Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/45 backdrop-blur-md border border-white/20">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === idx
                ? 'w-6 sm:w-8 bg-amber-400 shadow-md shadow-amber-400/50'
                : 'w-2 sm:w-3 bg-white/50 hover:bg-white/90'
            }`}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
