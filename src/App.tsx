import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LugarSection } from './components/LugarSection';
import { CumpleGallerySection } from './components/CumpleGallerySection';
import { ServicesSection } from './components/ServicesSection';
import { ReservasSection } from './components/ReservasSection';
import { ContactoSection } from './components/ContactoSection';
import { Footer } from './components/Footer';
import { BUSINESS_INFO } from './data/content';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sections = ['inicio', 'el-lugar', 'galeria', 'servicios', 'reservas', 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['inicio', 'el-lugar', 'galeria', 'servicios', 'reservas', 'contacto'].includes(hash)) {
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    window.history.pushState(null, '', `#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '#inicio');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-500/20 selection:text-teal-900">
      {/* Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={handleNavigate} />

      {/* Main Content */}
      <main className="flex-grow pb-16 lg:pb-0">
        <div id="inicio">
          <HeroSection />
        </div>
        <LugarSection />
        <CumpleGallerySection />
        <ServicesSection />
        <ReservasSection />
        <ContactoSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp & Scroll Top */}
      <aside aria-label="Contacto directo y volver arriba" className="fixed bottom-16 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-center gap-2.5 sm:gap-3">
        {showBackToTop && (
          <button
            id="btn-scroll-top"
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-700 hover:text-teal-600 shadow-lg border border-slate-200 flex items-center justify-center transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            aria-label="Volver arriba"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        )}

        <a
          id="btn-floating-whatsapp"
          href={BUSINESS_INFO.whatsappUrl('¡Hola! Me gustaría consultar disponibilidad de fecha para un cumple en Amazonia.')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex group items-center gap-2.5 px-5 py-3.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-kids font-bold text-base shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white/20 text-amber-300" />
          <span>Consultar Fecha</span>
        </a>
      </aside>
    </div>
  );
}
