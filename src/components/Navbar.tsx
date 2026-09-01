import React, { useState, useEffect } from 'react';
import { Menu, X, Home, MapPin, Image as ImageIcon, PartyPopper, Calendar, MessageCircle } from 'lucide-react';
import { AmazoniaLogo } from './AmazoniaLogo';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const desktopNavLinks = [
    {
      id: 'inicio',
      label: 'Inicio',
      icon: Home,
    },
    {
      id: 'el-lugar',
      label: 'El Lugar',
      icon: MapPin,
    },
    {
      id: 'galeria',
      label: 'Galería',
      icon: ImageIcon,
    },
    {
      id: 'servicios',
      label: 'Servicios',
      icon: PartyPopper,
    },
    {
      id: 'reservas',
      label: 'Reservas',
      icon: Calendar,
    },
  ];

  const mobileNavLinks = [
    {
      id: 'inicio',
      label: 'Inicio',
      icon: Home,
      activeBg: 'bg-emerald-500 text-white shadow-md shadow-emerald-500/35 ring-2 ring-emerald-200',
      activeText: 'text-emerald-700 font-extrabold',
      idleIcon: 'text-emerald-600',
      idleBg: 'bg-emerald-50 text-emerald-700',
    },
    {
      id: 'el-lugar',
      label: 'El Lugar',
      icon: MapPin,
      activeBg: 'bg-sky-500 text-white shadow-md shadow-sky-500/35 ring-2 ring-sky-200',
      activeText: 'text-sky-700 font-extrabold',
      idleIcon: 'text-sky-600',
      idleBg: 'bg-sky-50 text-sky-700',
    },
    {
      id: 'reservas',
      label: 'Reservas',
      icon: Calendar,
      isCenter: true,
      activeBg: 'bg-gradient-to-tr from-rose-500 via-rose-600 to-pink-600 text-white shadow-xl shadow-rose-500/40 ring-4 ring-rose-200',
      activeText: 'text-rose-600 font-extrabold',
      idleIcon: 'text-white',
      idleBg: 'bg-gradient-to-tr from-rose-500 to-rose-600 text-white',
    },
    {
      id: 'galeria',
      label: 'Galería',
      icon: ImageIcon,
      activeBg: 'bg-purple-500 text-white shadow-md shadow-purple-500/35 ring-2 ring-purple-200',
      activeText: 'text-purple-700 font-extrabold',
      idleIcon: 'text-purple-600',
      idleBg: 'bg-purple-50 text-purple-700',
    },
    {
      id: 'servicios',
      label: 'Servicios',
      icon: PartyPopper,
      activeBg: 'bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/40 ring-2 ring-amber-200',
      activeText: 'text-amber-700 font-extrabold',
      idleIcon: 'text-amber-600',
      idleBg: 'bg-amber-50 text-amber-700',
    },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-amber-400/95 backdrop-blur-md shadow-md border-amber-300/80 py-0'
            : 'bg-white/95 backdrop-blur-sm shadow-xs border-slate-200 py-1'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled ? 'h-13 sm:h-16' : 'h-15 sm:h-20'
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => handleNavClick('inicio')}
              className="flex items-center focus:outline-none cursor-pointer py-1"
              aria-label="Amazonia Celebraciones - Inicio"
            >
              <AmazoniaLogo
                variant={isScrolled ? 'white' : 'color'}
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-8 sm:h-11' : 'h-10 sm:h-14'
                }`}
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5" aria-label="Navegación principal">
              {desktopNavLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-4 py-2 rounded-full font-kids font-bold transition-all cursor-pointer ${
                      isScrolled ? 'text-sm' : 'text-base'
                    } ${
                      isScrolled
                        ? isActive
                          ? 'bg-white text-emerald-900 shadow-md ring-2 ring-white/60 font-extrabold'
                          : 'text-emerald-950 hover:text-emerald-900 hover:bg-amber-300/70'
                        : isActive
                          ? 'bg-teal-600 text-white shadow-sm'
                          : 'text-slate-700 hover:text-teal-600 hover:bg-teal-50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              
              <button
                onClick={() => handleNavClick('contacto')}
                className={`px-4 py-2 rounded-full font-kids font-bold transition-all cursor-pointer ${
                  isScrolled ? 'text-sm' : 'text-base'
                } ${
                  isScrolled
                    ? activeSection === 'contacto'
                      ? 'bg-white text-emerald-900 shadow-md ring-2 ring-white/60 font-extrabold'
                      : 'text-emerald-950 hover:text-emerald-900 hover:bg-amber-300/70'
                    : activeSection === 'contacto'
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'text-slate-700 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                Contacto
              </button>
            </nav>

            {/* Mobile Header Menu Button (WhatsApp button removed as requested) */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-xl transition-colors cursor-pointer ${
                  isScrolled
                    ? 'text-emerald-950 hover:bg-amber-300/80'
                    : 'text-slate-700 hover:text-teal-600 hover:bg-slate-100'
                }`}
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu (App Drawer style) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-4 pt-2 pb-6 space-y-1.5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1.5">
              {mobileNavLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-kids text-base font-bold transition-all cursor-pointer ${
                      isActive
                        ? `${link.activeBg} font-extrabold`
                        : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`p-1.5 rounded-xl ${isActive ? 'bg-white/20' : link.idleBg}`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : link.idleIcon}`} />
                    </div>
                    <span>{link.label}</span>
                  </button>
                );
              })}
              <button
                onClick={() => handleNavClick('contacto')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-kids text-base font-bold transition-all cursor-pointer ${
                  activeSection === 'contacto'
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                <div className="p-1.5 rounded-xl bg-teal-50 text-teal-700">
                  <MessageCircle className="w-5 h-5 text-teal-600" />
                </div>
                <span>Contacto & Ubicación</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Joyful & Colorful App-like Mobile Bottom Navigation Bar with Prominent Center Reservas Button */}
      <nav 
        aria-label="Navegación móvil estilo app" 
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t-2 border-slate-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.12)] pt-1.5 pb-2.5 px-2 flex items-center justify-around"
      >
        {mobileNavLinks.map((link) => {
          const Icon = link.icon;
          const isActive = activeSection === link.id;

          if (link.isCenter) {
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="flex flex-col items-center justify-center -mt-6 mx-1 cursor-pointer active:scale-95 transition-transform"
                aria-label="Reservas - Consultar fechas disponibles"
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-tr from-rose-500 via-rose-600 to-pink-600 text-white ring-4 ring-rose-200 shadow-rose-500/50 scale-105 animate-pop-bounce'
                      : 'bg-gradient-to-tr from-rose-500 to-pink-500 text-white shadow-rose-500/35 border-2 border-white hover:scale-105'
                  }`}
                >
                  <Calendar className="w-7 h-7 text-white stroke-[2.4]" />
                </div>
                <span className={`font-kids text-xs tracking-tight mt-0.5 transition-colors ${
                  isActive ? 'font-extrabold text-rose-600' : 'font-bold text-rose-600'
                }`}>
                  {link.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`flex flex-col items-center justify-center py-0.5 px-2 rounded-2xl transition-all duration-300 cursor-pointer active:scale-90 ${
                isActive
                  ? `${link.activeText} scale-105`
                  : 'text-slate-500 hover:text-slate-700 font-medium'
              }`}
            >
              <div
                className={`p-2 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? `${link.activeBg} animate-pop-bounce`
                    : `${link.idleBg} ${link.idleIcon} opacity-85 hover:opacity-100`
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'text-white stroke-[2.4]' : 'stroke-[2.2]'}`} />
              </div>
              <span className={`font-kids text-xs tracking-tight mt-1 transition-colors ${isActive ? 'font-extrabold' : 'font-semibold text-slate-600'}`}>
                {link.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
};
