import React, { useState, useEffect } from 'react';
import { Menu, X, Activity } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="bg-teal-600 p-2 rounded-lg text-white">
            <Activity size={24} />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-800' : 'text-slate-900'}`}>
            MediFlow
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#agenda" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Agenda</a>
          <a href="#prontuario" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Prontuário</a>
          <a href="#financeiro" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Financeiro</a>
          <a href="#telemedicina" className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors">Telemedicina</a>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-teal-200">
            Experimente Grátis
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl py-4 flex flex-col items-center gap-4">
          <a href="#agenda" className="text-base font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Agenda</a>
          <a href="#prontuario" className="text-base font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Prontuário</a>
          <a href="#financeiro" className="text-base font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Financeiro</a>
          <a href="#telemedicina" className="text-base font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Telemedicina</a>
          <button className="w-3/4 bg-teal-600 text-white px-5 py-3 rounded-lg font-semibold">
            Começar Agora
          </button>
        </div>
      )}
    </header>
  );
};