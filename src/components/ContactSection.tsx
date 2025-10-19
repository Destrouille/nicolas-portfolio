'use client';

import { Mail, Linkedin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-green-500/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-green-500">{t('letsConnect')}</h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          {t('connectDesc')}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:nicolas.callegari@efrei.net"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105"
          >
            <Mail size={20} />
            {t('emailMe')}
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-call%C3%A9gari-9b2501252/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-green-500 text-green-400 hover:bg-green-500/10 px-6 py-3 rounded-lg transition-all"
          >
            <Linkedin size={20} />
            {t('linkedinBtn')}
          </a>
        </div>
      </div>
    </section>
  );
}