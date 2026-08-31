import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AmazoniaLogo } from './AmazoniaLogo';

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

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'el-lugar', label: 'El Lugar' },
    { id: 'galeria', label: 'Galería' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'reservas', label: 'Consultar Fecha' },
    { id: 'contacto', label: 'Contacto' },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md border-slate-200/80 py-0'
          : 'bg-white/95 backdrop-blur-sm shadow-xs border-slate-200 py-1'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'h-14 sm:h-16' : 'h-18 sm:h-20'
          }`}
        >
          {/* Logo with smooth size reduction on scroll */}
          <button
            onClick={() => handleNavClick('inicio')}
            className="flex items-center focus:outline-none cursor-pointer py-1"
            aria-label="Amazonia Celebraciones - Inicio"
          >
            <AmazoniaLogo
              className={`w-auto transition-all duration-300 ${
                isScrolled ? 'h-9 sm:h-11' : 'h-12 sm:h-14'
              }`}
            />
          </button>

          {/* Desktop Nav (Clean without redundant WhatsApp button) */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Navegación principal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-full font-kids font-bold transition-all cursor-pointer ${
                    isScrolled ? 'text-sm' : 'text-base'
                  } ${
                    isActive
                      ? 'bg-teal-600 text-white shadow-sm'
                      : 'text-slate-700 hover:text-teal-600 hover:bg-teal-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-2xl text-slate-700 hover:text-teal-600 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-2 pb-6 space-y-1 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-2xl font-kids text-base font-bold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-teal-600 text-white'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
