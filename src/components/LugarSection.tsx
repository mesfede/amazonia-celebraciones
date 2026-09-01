import React, { useEffect, useRef } from 'react';
import { LugarSlider } from './LugarSlider';
import { Castle, Gamepad2, Users, Flame, Wind, UtensilsCrossed, Sparkles, PartyPopper } from 'lucide-react';
import { ConfettiExplosionCanvas, ConfettiCanvasHandle } from './ConfettiExplosionCanvas';

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

export const LugarSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const confettiRef = useRef<ConfettiCanvasHandle | null>(null);

  // Trigger realistic explosion when section scrolls into viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Erupt celebratory multi-cannon burst
            confettiRef.current?.doubleBurst();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const triggerManualExplosion = () => {
    confettiRef.current?.doubleBurst();
  };

  const scrollToGallery = () => {
    const el = document.getElementById('lugar-slider');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="el-lugar" 
      className="py-16 sm:py-24 bg-[#faf9f6] relative overflow-hidden select-none"
    >
      {/* Realistic 3D Confetti Explosion & Fluttering Fall Canvas */}
      <ConfettiExplosionCanvas ref={confettiRef} />

      {/* Atmospheric Soft Colored Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-amber-200/25 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200/25 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-rose-200/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header with interactive re-explosion click */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <button
            onClick={triggerManualExplosion}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-100/90 hover:bg-teal-200 text-teal-800 font-kids text-sm font-semibold mb-3 border border-teal-200 shadow-xs backdrop-blur-xs cursor-pointer active:scale-95 transition-all group"
            title="¡Hacé clic para lanzar confeti!"
          >
            <PartyPopper className="w-4 h-4 text-teal-600 group-hover:rotate-12 transition-transform" />
            <span>Nuestras Instalaciones</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </button>
          
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
