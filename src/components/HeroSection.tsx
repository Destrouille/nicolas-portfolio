'use client';

import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-6 inline-block">
          <div className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 animate-pulse">
            {t('title')}
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-4">
          {t('subtitle')}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          {t('tagline')}
        </p>
        <button
          onClick={() => scrollToSection('about')}
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
        >
          {t('exploreWork')}
          <ChevronDown size={18} />
        </button>
      </div>
    </section>
  );
}