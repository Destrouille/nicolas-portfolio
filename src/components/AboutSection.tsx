'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-6 bg-green-500/5 border-y border-green-500/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-green-500">{t('aboutMe')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t('aboutText1')}
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {t('aboutText2')}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('aboutText3')}
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-900 p-4 rounded-lg border border-green-500/20 hover:border-green-500 transition-all">
              <h3 className="text-green-500 font-bold mb-2">{t('languages')}</h3>
              <p className="text-gray-300 text-sm">
                {t('languagesText')}
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border border-green-500/20 hover:border-green-500 transition-all">
              <h3 className="text-green-500 font-bold mb-2">{t('passions')}</h3>
              <p className="text-gray-300 text-sm">
                {t('passionsText')}
              </p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border border-green-500/20 hover:border-green-500 transition-all">
              <h3 className="text-green-500 font-bold mb-2">{t('education')}</h3>
              <p className="text-gray-300 text-sm">
                {t('educationText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}