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

// Rich festive colorful confetti texture for modal backdrop with continuous free floating animation
const MODAL_CONFETTI = [
  { top: '4%', left: '4%', w: '12px', h: '32px', color: 'bg-amber-400', anim: 'animate-confetti-1', delay: '0s' },
  { top: '8%', left: '16%', w: '10px', h: '28px', color: 'bg-rose-500', anim: 'animate-confetti-2', delay: '1.2s' },
  { top: '5%', left: '32%', w: '11px', h: '30px', color: 'bg-teal-400', anim: 'animate-confetti-3', delay: '2.5s' },
  { top: '7%', left: '50%', w: '10px', h: '26px', color: 'bg-orange-400', anim: 'animate-confetti-4', delay: '0.8s' },
  { top: '6%', left: '68%', w: '12px', h: '30px', color: 'bg-pink-400', anim: 'animate-confetti-1', delay: '3.1s' },
  { top: '4%', left: '85%', w: '10px', h: '28px', color: 'bg-emerald-400', anim: 'animate-confetti-2', delay: '1.9s' },
  { top: '9%', left: '94%', w: '11px', h: '26px', color: 'bg-amber-300', anim: 'animate-confetti-3', delay: '4.2s' },

  { top: '20%', left: '3%', w: '11px', h: '30px', color: 'bg-teal-400', anim: 'animate-confetti-4', delay: '1.5s' },
  { top: '24%', left: '14%', w: '10px', h: '26px', color: 'bg-amber-400', anim: 'animate-confetti-1', delay: '2.8s' },
  { top: '18%', left: '88%', w: '11px', h: '32px', color: 'bg-rose-500', anim: 'animate-confetti-2', delay: '0.5s' },
  { top: '25%', left: '96%', w: '9px', h: '25px', color: 'bg-orange-400', anim: 'animate-confetti-3', delay: '3.6s' },

  { top: '42%', left: '4%', w: '12px', h: '32px', color: 'bg-rose-500', anim: 'animate-confetti-1', delay: '2.2s' },
  { top: '48%', left: '12%', w: '9px', h: '26px', color: 'bg-emerald-400', anim: 'animate-confetti-2', delay: '4.0s' },
  { top: '38%', left: '89%', w: '12px', h: '30px', color: 'bg-teal-400', anim: 'animate-confetti-3', delay: '1.1s' },
  { top: '45%', left: '95%', w: '10px', h: '28px', color: 'bg-amber-400', anim: 'animate-confetti-4', delay: '2.9s' },

  { top: '65%', left: '5%', w: '11px', h: '30px', color: 'bg-orange-400', anim: 'animate-confetti-1', delay: '3.4s' },
  { top: '72%', left: '13%', w: '10px', h: '27px', color: 'bg-pink-400', anim: 'animate-confetti-2', delay: '0.7s' },
  { top: '62%', left: '87%', w: '11px', h: '28px', color: 'bg-emerald-400', anim: 'animate-confetti-3', delay: '2.3s' },
  { top: '70%', left: '94%', w: '10px', h: '27px', color: 'bg-rose-500', anim: 'animate-confetti-4', delay: '4.5s' },

  { top: '85%', left: '6%', w: '12px', h: '30px', color: 'bg-teal-400', anim: 'animate-confetti-1', delay: '1.7s' },
  { top: '90%', left: '18%', w: '10px', h: '28px', color: 'bg-amber-400', anim: 'animate-confetti-2', delay: '3.8s' },
  { top: '88%', left: '35%', w: '9px', h: '25px', color: 'bg-rose-500', anim: 'animate-confetti-3', delay: '0.3s' },
  { top: '92%', left: '52%', w: '11px', h: '28px', color: 'bg-emerald-400', anim: 'animate-confetti-4', delay: '2.6s' },
  { top: '87%', left: '70%', w: '10px', h: '27px', color: 'bg-orange-400', anim: 'animate-confetti-1', delay: '4.1s' },
  { top: '91%', left: '85%', w: '12px', h: '30px', color: 'bg-pink-400', anim: 'animate-confetti-2', delay: '1.4s' },
  { top: '86%', left: '95%', w: '10px', h: '26px', color: 'bg-amber-300', anim: 'animate-confetti-3', delay: '3.0s' },
];

// Institutional Balloons for section background pattern
interface BalloonProps {
  color: string;
  highlight: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const BalloonSvg: React.FC<BalloonProps> = ({ color, highlight, size = 64, className = '', style }) => (
  <div className={`relative inline-block ${className}`} style={{ width: size, height: size * 1.55, ...style }}>
    <svg viewBox="0 0 50 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
      {/* Balloon string */}
      <path
        d="M25 44 C22 53 28 62 24 73"
        stroke="#94a3b8"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        strokeDasharray="2 1.5"
      />
      {/* Balloon body */}
      <path
        d="M25 4 C13.5 4 4 13 4 24.5 C4 35 15.5 43 23.5 43.8 L23 45.5 C23 46 24 46.5 25 46.5 C26 46.5 27 46 27 45.5 L26.5 43.8 C34.5 43 46 35 46 24.5 C46 13 36.5 4 25 4 Z"
        fill={color}
      />
      {/* Balloon Knot */}
      <polygon points="22.5,46 27.5,46 25,43" fill={color} />
      {/* Glossy light reflection */}
      <ellipse
        cx="16"
        cy="15"
        rx="4.5"
        ry="8"
        transform="rotate(-28 16 15)"
        fill={highlight}
        fillOpacity="0.65"
      />
      <circle cx="21" cy="9" r="1.8" fill={highlight} fillOpacity="0.8" />
    </svg>
  </div>
);

// Predefined decorative background balloons with diverse dynamic motions
const BG_BALLOONS = [
  // Top left cluster - active & bouncy
  { top: '3%', left: '2%', size: 78, color: '#0d9488', highlight: '#99f6e4', anim: 'animate-balloon-lively', delay: '0s', opacity: 'opacity-40' },
  { top: '8%', left: '6%', size: 56, color: '#f59e0b', highlight: '#fef08a', anim: 'animate-balloon-bouncy', delay: '0.8s', opacity: 'opacity-35' },
  { top: '15%', left: '1%', size: 62, color: '#ec4899', highlight: '#fbcfe8', anim: 'animate-balloon-3', delay: '2.5s', opacity: 'opacity-30' },

  // Top right cluster - lively sway
  { top: '4%', right: '3%', size: 72, color: '#f97316', highlight: '#fed7aa', anim: 'animate-balloon-lively', delay: '0.6s', opacity: 'opacity-40' },
  { top: '10%', right: '7%', size: 60, color: '#10b981', highlight: '#a7f3d0', anim: 'animate-balloon-bouncy', delay: '1.8s', opacity: 'opacity-35' },
  { top: '17%', right: '2%', size: 64, color: '#0ea5e9', highlight: '#bae6fd', anim: 'animate-balloon-2', delay: '1.2s', opacity: 'opacity-30' },

  // Middle left
  { top: '40%', left: '1.5%', size: 70, color: '#14b8a6', highlight: '#ccfbf1', anim: 'animate-balloon-bouncy', delay: '0.5s', opacity: 'opacity-32' },
  { top: '49%', left: '5.5%', size: 52, color: '#e11d48', highlight: '#fecdd3', anim: 'animate-balloon-lively', delay: '2.2s', opacity: 'opacity-28' },

  // Middle right
  { top: '43%', right: '2%', size: 68, color: '#fbbf24', highlight: '#fef9c3', anim: 'animate-balloon-lively', delay: '1.4s', opacity: 'opacity-32' },
  { top: '53%', right: '5.5%', size: 54, color: '#8b5cf6', highlight: '#ddd6fe', anim: 'animate-balloon-bouncy', delay: '2.0s', opacity: 'opacity-28' },

  // Bottom left cluster
  { bottom: '5%', left: '3%', size: 74, color: '#059669', highlight: '#6ee7b7', anim: 'animate-balloon-lively', delay: '0.3s', opacity: 'opacity-35' },
  { bottom: '12%', left: '7%', size: 56, color: '#f97316', highlight: '#fed7aa', anim: 'animate-balloon-bouncy', delay: '1.6s', opacity: 'opacity-30' },

  // Bottom right cluster
  { bottom: '4%', right: '3.5%', size: 76, color: '#0d9488', highlight: '#99f6e4', anim: 'animate-balloon-bouncy', delay: '1.1s', opacity: 'opacity-35' },
  { bottom: '11%', right: '8%', size: 58, color: '#ec4899', highlight: '#fbcfe8', anim: 'animate-balloon-lively', delay: '2.4s', opacity: 'opacity-30' },
];

// Continuous rising balloons that fly upwards into the sky
const FLYING_BALLOONS = [
  { left: '12%', size: 65, color: '#f59e0b', highlight: '#fef08a', anim: 'animate-balloon-fly-1', delay: '0s' },
  { left: '38%', size: 58, color: '#0d9488', highlight: '#99f6e4', anim: 'animate-balloon-fly-2', delay: '6s' },
  { left: '68%', size: 70, color: '#e11d48', highlight: '#fecdd3', anim: 'animate-balloon-fly-3', delay: '3s' },
  { left: '88%', size: 62, color: '#0ea5e9', highlight: '#bae6fd', anim: 'animate-balloon-fly-1', delay: '11s' },
  { left: '24%', size: 54, color: '#10b981', highlight: '#a7f3d0', anim: 'animate-balloon-fly-3', delay: '14s' },
  { left: '52%', size: 66, color: '#f97316', highlight: '#fed7aa', anim: 'animate-balloon-fly-2', delay: '17s' },
];

// Rich festive ambient floating dots constellation
const FLOATING_DOTS = [
  // Left side
  { top: '8%', left: '14%', size: 'w-3 h-3', color: 'bg-amber-400', anim: 'animate-dot-float-1', delay: '0s' },
  { top: '16%', left: '22%', size: 'w-2.5 h-2.5', color: 'bg-teal-400', anim: 'animate-dot-float-2', delay: '1.2s' },
  { top: '24%', left: '8%', size: 'w-3.5 h-3.5', color: 'bg-rose-400', anim: 'animate-dot-float-3', delay: '0.5s' },
  { top: '34%', left: '18%', size: 'w-2 h-2', color: 'bg-emerald-400', anim: 'animate-dot-float-4', delay: '2.1s' },
  { top: '48%', left: '10%', size: 'w-3 h-3', color: 'bg-sky-400', anim: 'animate-dot-float-1', delay: '1.5s' },
  { top: '60%', left: '24%', size: 'w-2.5 h-2.5', color: 'bg-orange-400', anim: 'animate-dot-float-2', delay: '0.8s' },
  { top: '72%', left: '12%', size: 'w-3.5 h-3.5', color: 'bg-pink-400', anim: 'animate-dot-float-3', delay: '2.8s' },
  { top: '86%', left: '20%', size: 'w-2.5 h-2.5', color: 'bg-teal-400', anim: 'animate-dot-float-4', delay: '1.1s' },

  // Center / Middle lanes
  { top: '12%', left: '46%', size: 'w-2.5 h-2.5', color: 'bg-amber-400', anim: 'animate-dot-float-2', delay: '0.4s' },
  { top: '28%', left: '54%', size: 'w-3 h-3', color: 'bg-pink-400', anim: 'animate-dot-float-4', delay: '1.7s' },
  { top: '64%', left: '42%', size: 'w-2 h-2', color: 'bg-emerald-400', anim: 'animate-dot-float-1', delay: '2.3s' },
  { top: '82%', left: '50%', size: 'w-3 h-3', color: 'bg-rose-400', anim: 'animate-dot-float-3', delay: '0.9s' },

  // Right side
  { top: '9%', right: '16%', size: 'w-3 h-3', color: 'bg-sky-400', anim: 'animate-dot-float-3', delay: '0.7s' },
  { top: '18%', right: '24%', size: 'w-2.5 h-2.5', color: 'bg-emerald-400', anim: 'animate-dot-float-1', delay: '1.9s' },
  { top: '27%', right: '10%', size: 'w-3.5 h-3.5', color: 'bg-orange-400', anim: 'animate-dot-float-4', delay: '0.3s' },
  { top: '41%', right: '20%', size: 'w-2 h-2', color: 'bg-amber-400', anim: 'animate-dot-float-2', delay: '2.5s' },
  { top: '56%', right: '12%', size: 'w-3 h-3', color: 'bg-rose-400', anim: 'animate-dot-float-1', delay: '1.0s' },
  { top: '68%', right: '26%', size: 'w-2.5 h-2.5', color: 'bg-teal-400', anim: 'animate-dot-float-3', delay: '2.0s' },
  { top: '79%', right: '14%', size: 'w-3.5 h-3.5', color: 'bg-purple-400', anim: 'animate-dot-float-2', delay: '0.6s' },
  { top: '89%', right: '22%', size: 'w-2.5 h-2.5', color: 'bg-amber-400', anim: 'animate-dot-float-4', delay: '1.4s' },
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
    <section id="galeria" className="py-12 sm:py-24 bg-gradient-to-b from-amber-50/40 via-white to-teal-50/40 relative overflow-hidden">
      
      {/* Decorative Institutional Balloons & Floating Atmosphere in Section Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
        {/* Subtle festive colorful blurs */}
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-teal-200/35 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-200/35 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-8 w-72 h-72 bg-pink-200/25 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-6 w-72 h-72 bg-sky-200/25 rounded-full blur-3xl" />

        {/* Anchored Balloons with Dynamic Lively Motion */}
        {BG_BALLOONS.map((b, i) => (
          <div
            key={`anchor-balloon-${i}`}
            className={`absolute ${b.anim} ${b.opacity} hover:scale-110 transition-transform duration-300`}
            style={{
              top: b.top,
              bottom: b.bottom,
              left: b.left,
              right: b.right,
              animationDelay: b.delay,
            }}
          >
            <BalloonSvg
              color={b.color}
              highlight={b.highlight}
              size={b.size}
            />
          </div>
        ))}

        {/* Flying Ascending Balloons Floating Upwards into the Sky */}
        {FLYING_BALLOONS.map((b, i) => (
          <div
            key={`flying-balloon-${i}`}
            className={`absolute ${b.anim} opacity-40`}
            style={{
              left: b.left,
              top: 0,
              animationDelay: b.delay,
            }}
          >
            <BalloonSvg
              color={b.color}
              highlight={b.highlight}
              size={b.size}
            />
          </div>
        ))}

        {/* Floating Constellation of Small Moving Dots */}
        {FLOATING_DOTS.map((dot, i) => (
          <div
            key={`floating-dot-${i}`}
            className={`absolute rounded-full ${dot.size} ${dot.color} ${dot.anim} shadow-xs pointer-events-none`}
            style={{
              top: dot.top,
              left: dot.left,
              right: dot.right,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-teal-50/90 text-teal-700 font-kids text-xs sm:text-sm font-semibold mb-2 sm:mb-3 border border-teal-200 shadow-xs backdrop-blur-xs">
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

      {/* Entertaining Colorful Lightbox Modal with Free Floating Confetti, Logo Backdrop & Full Navigation */}
      {selectedPhoto !== null && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-between p-3 sm:p-6 select-none animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Continuous Free-Floating Rectangles Confetti Texture in Modal */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {MODAL_CONFETTI.map((c, i) => (
              <div
                key={i}
                className={`absolute rounded-xs shadow-lg opacity-80 ${c.color} ${c.anim}`}
                style={{
                  top: c.top,
                  left: c.left,
                  width: c.w,
                  height: c.h,
                  animationDelay: c.delay,
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
