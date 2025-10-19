'use client';

import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/lib/translations';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems: string[] = ['about', 'skills', 'certifications', 'projects', 'soc', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur border-b border-green-500/20 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-green-500">NC</div>

        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item: string) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize text-gray-300 hover:text-green-500 transition-colors text-sm"
            >
              {t(item as keyof typeof translations.en)}
            </button>
          ))}
          
          {/* Language Switch */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 px-3 py-2 rounded transition-colors text-green-400"
            title="Toggle language"
          >
            <Globe size={18} />
            <span className="text-sm font-bold">{language.toUpperCase()}</span>
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-green-500"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-green-500/20 p-4 space-y-4">
          {navItems.map((item: string) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left capitalize text-gray-300 hover:text-green-500 transition-colors"
            >
              {t(item as keyof typeof translations.en)}
            </button>
          ))}
          
          {/* Mobile Language Switch */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="w-full flex items-center gap-2 bg-green-500/20 hover:bg-green-500/30 px-3 py-2 rounded transition-colors text-green-400 mt-4"
          >
            <Globe size={18} />
            <span className="text-sm font-bold">
              {language === 'en' ? 'Français' : 'English'}
            </span>
          </button>
        </div>
      )}
    </nav>
  );
}