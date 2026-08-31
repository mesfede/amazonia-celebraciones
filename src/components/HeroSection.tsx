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
  },
  {
    image: lugar3,
    title: '¡Festejá con tus amigos a lo grande!',
    subtitle: 'El mejor sector para la merienda, animación y el momento de la torta.',
    highlight: '¡Fiestas Increíbles!',
  },
  {
    image: lugar4,
    title: '¡Arcades retro y videojuegos!',
    subtitle: 'Fichines clásicos y entretenimiento interactivo sin límites.',
    highlight: '¡Zona Gamer!',
  },
  {
    image: lugar5,
    title: '¡Espacios seguros y llenos de color!',
    subtitle: 'Todo preparado y coordinado para que solo te preocupes por sonreír.',
    highlight: '¡100% Cuidado!',
  },
  {
    image: lugar6,
    title: '¡Galería cubierta y parque con parrilla!',
    subtitle: 'Disfrutá al aire libre con la mayor comodidad en pleno centro de La Plata.',
    highlight: '¡Espacio al Aire Libre!',
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
      className="relative w-full h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950 pt-20 pb-12"
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/50 z-10 pointer-events-none" />

      {/* Main Slide Foreground Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center my-auto">
        
        {/* Animated Kids Highlight Badge */}
        <div
          key={`badge-${currentSlide}`}
          className="mb-4 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-kids text-sm sm:text-base font-extrabold shadow-xl border-2 border-white/60 animate-pop-bounce"
        >
          <PartyPopper className="w-4 h-4 text-slate-950" />
          <span>{slide.highlight}</span>
        </div>

        {/* Animated Dynamic Main Headline */}
        <div className="min-h-[90px] sm:min-h-[120px] flex items-center justify-center max-w-4xl">
          <h1
            key={`title-${currentSlide}`}
            className="font-kids text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] animate-slide-in-up"
          >
            {slide.title}
          </h1>
        </div>

        {/* Animated Subtitle */}
        <div className="min-h-[48px] sm:min-h-[60px] flex items-center justify-center max-w-2xl mt-2 mb-8">
          <p
            key={`sub-${currentSlide}`}
            className="text-white text-base sm:text-xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] leading-relaxed animate-slide-in-up"
          >
            {slide.subtitle}
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
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

      {/* Slide Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/45 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md border border-white/25 transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Foto anterior del salón"
      >
        <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/45 hover:bg-black/75 text-white flex items-center justify-center backdrop-blur-md border border-white/25 transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Siguiente foto del salón"
      >
        <ChevronRight className="w-7 h-7 stroke-[2.5]" />
      </button>

      {/* Slide Indicators Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/45 backdrop-blur-md border border-white/20">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
              currentSlide === idx
                ? 'w-8 bg-amber-400 shadow-md shadow-amber-400/50'
                : 'w-3 bg-white/50 hover:bg-white/90'
            }`}
            aria-label={`Ir al slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
