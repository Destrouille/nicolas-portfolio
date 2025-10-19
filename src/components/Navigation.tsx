'use client';

import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { translations } from '@/lib/translations';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme } = useTheme();

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navItems: string[] = ['about', 'skills', 'certifications', 'projects', 'soc', 'contact'];

  const themeColors = {
    green: {
      border: 'border-green-500/20',
      text: 'text-green-500',
      bgHover: 'bg-green-500/20 hover:bg-green-500/30',
      textHover: 'text-gray-300 hover:text-green-500',
    },
    blue: {
      border: 'border-blue-500/20',
      text: 'text-blue-500',
      bgHover: 'bg-blue-500/20 hover:bg-blue-500/30',
      textHover: 'text-gray-300 hover:text-blue-500',
    },
  };

  const colors = themeColors[theme];

  return (
    <nav className={`fixed top-0 w-full bg-black/95 backdrop-blur border-b ${colors.border} z-50`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection('about')}
          className={`text-2xl font-bold ${colors.text} hover:opacity-80 transition-opacity`}
        >
          NC
        </button>

        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item: string) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize ${colors.textHover} transition-colors text-sm`}
            >
              {t(item as keyof typeof translations.en)}
            </button>
          ))}
          
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className={`flex items-center gap-2 ${colors.bgHover} px-3 py-2 rounded transition-colors ${colors.text}`}
            title="Toggle language"
          >
            <Globe size={18} />
            <span className="text-sm font-bold">{language.toUpperCase()}</span>
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden ${colors.text}`}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className={`md:hidden bg-black border-t ${colors.border} p-4 space-y-4`}>
          {navItems.map((item: string) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`block w-full text-left capitalize ${colors.textHover} transition-colors`}
            >
              {t(item as keyof typeof translations.en)}
            </button>
          ))}
          
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className={`w-full flex items-center gap-2 ${colors.bgHover} px-3 py-2 rounded transition-colors ${colors.text} mt-4`}
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