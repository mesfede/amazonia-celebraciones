import React from 'react';
import { LugarSlider } from './LugarSlider';
import { Castle, Gamepad2, Users, Flame, Wind, UtensilsCrossed, CheckCircle2 } from 'lucide-react';

const FEATURES = [
  {
    icon: Castle,
    title: 'Pelotero & Laberinto',
    desc: 'Estructura gigante con túneles, tobogán y piscina de pelotas.',
    color: 'text-teal-600 bg-teal-50 border-teal-200 group-hover:bg-teal-600 group-hover:text-white',
  },
  {
    icon: Gamepad2,
    title: 'Zona de Arcades',
    desc: 'Fichines y máquinas de videojuegos retro clásicos sin costo extra.',
    color: 'text-amber-600 bg-amber-50 border-amber-200 group-hover:bg-amber-500 group-hover:text-white',
  },
  {
    icon: Wind,
    title: 'Salón Climatizado',
    desc: 'Aire acondicionado y calefacción en todo el salón principal.',
    color: 'text-sky-600 bg-sky-50 border-sky-200 group-hover:bg-sky-600 group-hover:text-white',
  },
  {
    icon: Users,
    title: 'Espacio para Adultos',
    desc: 'Mesas redondas vestidas, sillas cómodas y vajilla completa.',
    color: 'text-purple-600 bg-purple-50 border-purple-200 group-hover:bg-purple-600 group-hover:text-white',
  },
  {
    icon: Flame,
    title: 'Parque & Parrilla',
    desc: 'Espacio al aire libre con galería cubierta y parrilla para asados.',
    color: 'text-rose-600 bg-rose-50 border-rose-200 group-hover:bg-rose-600 group-hover:text-white',
  },
  {
    icon: UtensilsCrossed,
    title: 'Cocina Equipada',
    desc: 'Heladeras, freezer, microondas, horno y barra de servicio.',
    color: 'text-emerald-600 bg-emerald-50 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white',
  },
];

// Decorative confetti rectangles matching the uploaded image pattern:
// Warm colors (amber/yellow #eab308, orange #f97316, crimson red #e11d48, dark slate #1e293b, teal #0f766e)
const RECT_CONFETTI = [
  // Top area
  { top: '3%', left: '5%', w: '9px', h: '24px', rotate: 'rotate-12', color: 'bg-emerald-700/60' },
  { top: '6%', left: '18%', w: '10px', h: '26px', rotate: '-rotate-6', color: 'bg-amber-500/65' },
  { top: '4%', left: '38%', w: '9px', h: '25px', rotate: 'rotate-3', color: 'bg-rose-700/60' },
  { top: '7%', left: '52%', w: '9px', h: '23px', rotate: '-rotate-12', color: 'bg-teal-800/60' },
  { top: '3%', left: '74%', w: '11px', h: '28px', rotate: 'rotate-45', color: 'bg-orange-600/60' },
  { top: '5%', left: '88%', w: '10px', h: '25px', rotate: '-rotate-15', color: 'bg-rose-800/60' },

  // Upper-middle area
  { top: '16%', left: '8%', w: '10px', h: '27px', rotate: 'rotate-35', color: 'bg-amber-500/60' },
  { top: '22%', left: '2%', w: '8px', h: '22px', rotate: '-rotate-6', color: 'bg-teal-700/60' },
  { top: '18%', left: '26%', w: '11px', h: '26px', rotate: 'rotate-75', color: 'bg-slate-900/50' },
  { top: '25%', left: '16%', w: '9px', h: '24px', rotate: 'rotate-15', color: 'bg-orange-600/65' },
  { top: '20%', left: '44%', w: '9px', h: '25px', rotate: '-rotate-25', color: 'bg-slate-800/50' },
  { top: '15%', left: '60%', w: '10px', h: '27px', rotate: 'rotate-20', color: 'bg-rose-700/60' },
  { top: '22%', left: '80%', w: '10px', h: '28px', rotate: '-rotate-35', color: 'bg-amber-500/65' },
  { top: '18%', left: '94%', w: '9px', h: '24px', rotate: 'rotate-10', color: 'bg-slate-900/55' },

  // Center area
  { top: '38%', left: '4%', w: '10px', h: '26px', rotate: '-rotate-15', color: 'bg-rose-700/60' },
  { top: '44%', left: '12%', w: '10px', h: '25px', rotate: 'rotate-45', color: 'bg-slate-900/50' },
  { top: '40%', left: '24%', w: '9px', h: '24px', rotate: '-rotate-30', color: 'bg-amber-500/65' },
  { top: '48%', left: '6%', w: '9px', h: '23px', rotate: 'rotate-6', color: 'bg-orange-600/65' },
  { top: '36%', left: '88%', w: '10px', h: '27px', rotate: 'rotate-35', color: 'bg-rose-700/60' },
  { top: '42%', left: '76%', w: '9px', h: '24px', rotate: '-rotate-45', color: 'bg-slate-800/50' },
  { top: '48%', left: '93%', w: '9px', h: '25px', rotate: 'rotate-20', color: 'bg-teal-800/60' },

  // Lower-middle area
  { top: '60%', left: '3%', w: '10px', h: '27px', rotate: 'rotate-20', color: 'bg-teal-700/60' },
  { top: '66%', left: '10%', w: '9px', h: '24px', rotate: '-rotate-45', color: 'bg-slate-900/55' },
  { top: '62%', left: '20%', w: '10px', h: '26px', rotate: 'rotate-10', color: 'bg-rose-700/60' },
  { top: '58%', left: '82%', w: '10px', h: '26px', rotate: 'rotate-45', color: 'bg-amber-500/65' },
  { top: '65%', left: '92%', w: '9px', h: '25px', rotate: '-rotate-20', color: 'bg-orange-600/60' },
  { top: '72%', left: '84%', w: '9px', h: '24px', rotate: 'rotate-15', color: 'bg-rose-800/60' },

  // Bottom area
  { top: '82%', left: '6%', w: '9px', h: '25px', rotate: '-rotate-20', color: 'bg-amber-500/65' },
  { top: '88%', left: '15%', w: '10px', h: '27px', rotate: 'rotate-40', color: 'bg-slate-900/50' },
  { top: '84%', left: '28%', w: '9px', h: '24px', rotate: '-rotate-10', color: 'bg-teal-700/60' },
  { top: '92%', left: '7%', w: '9px', h: '23px', rotate: 'rotate-30', color: 'bg-orange-600/65' },
  { top: '85%', left: '74%', w: '10px', h: '26px', rotate: '-rotate-35', color: 'bg-teal-800/60' },
  { top: '90%', left: '86%', w: '9px', h: '25px', rotate: 'rotate-25', color: 'bg-amber-500/65' },
  { top: '84%', left: '95%', w: '10px', h: '26px', rotate: '-rotate-15', color: 'bg-slate-900/55' },
  { top: '94%', left: '48%', w: '9px', h: '24px', rotate: 'rotate-50', color: 'bg-rose-700/60' },
];

export const LugarSection: React.FC = () => {
  const scrollToGallery = () => {
    const el = document.getElementById('lugar-slider');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="el-lugar" className="py-16 sm:py-24 bg-[#faf9f6] relative overflow-hidden">
      
      {/* Rectangular Confetti Texture Background (from user reference image) */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {RECT_CONFETTI.map((item, idx) => (
          <div
            key={idx}
            className={`absolute rounded-[2px] shadow-xs transition-transform duration-700 hover:scale-110 ${item.color} ${item.rotate}`}
            style={{
              top: item.top,
              left: item.left,
              width: item.w,
              height: item.h,
            }}
          />
        ))}
        {/* Soft atmospheric gradient highlights */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/90 text-teal-800 font-kids text-sm font-semibold mb-3 border border-teal-200 shadow-xs backdrop-blur-xs">
            <CheckCircle2 className="w-4 h-4 text-teal-600" />
            Nuestras Instalaciones
          </div>
          <h2 className="font-kids text-3xl sm:text-4xl lg:text-5xl text-slate-800 font-bold tracking-tight">
            Conocé <span className="text-teal-600">El Lugar</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-2 font-medium">
            Un espacio amplio, seguro y preparado para que chicos y grandes disfruten al máximo.
          </p>
        </div>

        {/* Integral Slider */}
        <div className="mb-14">
          <LugarSlider />
        </div>

        {/* Highlights Grid - Interactive cards with hover animation and cursor-pointer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                onClick={scrollToGallery}
                className="bg-white/90 backdrop-blur-xs rounded-2xl p-5 shadow-xs hover:shadow-xl border border-slate-200/90 hover:border-teal-400 flex items-start gap-4 cursor-pointer transform hover:-translate-y-1.5 hover:scale-[1.02] active:scale-98 transition-all duration-300 group select-none"
              >
                <div className={`p-3 rounded-2xl border ${item.color} shrink-0 transition-colors duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-kids text-lg font-bold text-slate-800 group-hover:text-teal-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
