import React, { useState } from 'react';
import { Utensils, Music, ShieldCheck, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import mesasSillasImg from './elugar (2).jpg';

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

const SERVICES_LIST: ServiceItem[] = [
  {
    icon: Clock,
    title: '3 Horas de Evento',
    desc: 'Tiempo completo para disfrutar juegos, merienda, animación y el momento de la torta (+30 min de tolerancia previa).',
  },
  {
    icon: Music,
    title: 'Animación & Coordinación',
    desc: 'Equipo de coordinadores para guiar las dinámicas, cuidar a los chicos y organizar todos los juegos del cumple.',
  },
  {
    icon: Utensils,
    title: 'Vajilla & Servicio',
    desc: 'Vajilla completa para adultos y niños, mantelería, termos para café/mate y asistencia de camareras.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad Médica',
    desc: 'Área protegida por emergencias médicas y personal de apoyo durante todo el desarrollo del festejo.',
  },
];

export const ServicesSection: React.FC = () => {
  const [toggledCard, setToggledCard] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setToggledCard((prev) => (prev === index ? null : index));
  };

  return (
    <section id="servicios" className="py-20 sm:py-28 relative overflow-hidden bg-slate-900">
      
      {/* Background Image: Mesas y Sillas with Soft Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={mesasSillasImg}
          alt="Amazonia Salón Mesas y Sillas"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Multilayer backdrop: soft blur & dark gradient for superior contrast */}
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-teal-950/60 to-slate-950/90" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header - Single line title */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 font-kids text-sm font-bold mb-4 shadow-md border border-amber-300">
            <CheckCircle2 className="w-4 h-4 text-slate-950" />
            Servicio Todo Incluido
          </div>
          
          {/* Clean responsive title without any horizontal scroll */}
          <h2 className="font-kids text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] leading-tight px-2">
            ¿Qué incluye tu evento en <span className="text-amber-400">Amazonia</span>?
          </h2>

          <p className="text-teal-100 text-base sm:text-lg mt-3 font-medium drop-shadow-md">
            Pasa el cursor o presiona cada tarjeta para descubrir los detalles.
          </p>
        </div>

        {/* 4 Compact Cards Grid with Hover & Tap Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SERVICES_LIST.map((service, index) => {
            const Icon = service.icon;
            const isToggled = toggledCard === index;

            return (
              <div
                key={index}
                onClick={() => handleCardClick(index)}
                className={`group relative cursor-pointer rounded-2xl p-5 sm:p-6 border transition-all duration-300 transform hover:-translate-y-1.5 select-none shadow-xl flex flex-col justify-between min-h-[140px] sm:min-h-[160px] backdrop-blur-md ${
                  isToggled
                    ? 'bg-slate-950/95 border-amber-400 text-white ring-2 ring-amber-400/40 shadow-2xl'
                    : 'bg-white/95 hover:bg-slate-950/95 border-white/40 hover:border-amber-400 text-slate-800 hover:text-white'
                }`}
              >
                {/* Top Section: Icon & Title */}
                <div>
                  <div className="flex items-center gap-3.5 mb-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors shadow-md ${
                        isToggled
                          ? 'bg-amber-400 text-slate-950'
                          : 'bg-teal-700 text-white group-hover:bg-amber-400 group-hover:text-slate-950'
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    <h3
                      className={`font-kids text-lg sm:text-xl font-bold tracking-tight leading-snug transition-colors ${
                        isToggled
                          ? 'text-amber-300'
                          : 'text-slate-900 group-hover:text-amber-300'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description: Revealed on hover OR tap/click */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isToggled
                        ? 'max-h-48 opacity-100 mt-3 pt-3 border-t border-amber-400/30'
                        : 'max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 group-hover:mt-3 group-hover:pt-3 group-hover:border-t group-hover:border-amber-400/30'
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-slate-100 font-medium drop-shadow-xs">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Included List Banner */}
        <div className="mt-14 bg-gradient-to-r from-teal-900/95 via-teal-800/95 to-teal-900/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border-2 border-teal-500/40">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-kids text-2xl font-bold text-amber-300">¿Querés un presupuesto a medida?</h4>
            <p className="text-teal-100 text-sm sm:text-base max-w-xl">
              Consultanos por turnos de mañana, tarde o noche, adicionales de menú infantil, pizza party o temáticas especiales.
            </p>
          </div>
          <a
            href="https://wa.me/5492215340620?text=Hola%20Amazonia!%20Quisiera%20solicitar%20un%20presupuesto%20para%20un%20cumplea%C3%B1os."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-kids text-base font-extrabold shadow-xl hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer border border-white/50"
          >
            <MessageCircle className="w-5 h-5" />
            Pedir Presupuesto
          </a>
        </div>

      </div>
    </section>
  );
};
