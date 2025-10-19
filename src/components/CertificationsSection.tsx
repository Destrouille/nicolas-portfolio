'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function CertificationsSection() {
  const { t } = useLanguage();
  const [socProgress, setSocProgress] = useState(28);

  useEffect(() => {
    const interval = setInterval(() => {
      setSocProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 2;
      });
    }, 86400000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-green-500/5 border-y border-green-500/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-green-500">{t('certifications')}</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500/30 hover:border-green-500 transition-all">
            <div className="text-green-400 font-bold mb-2">{t('completed')}</div>
            <h3 className="text-lg font-bold mb-2">{t('cisco1')}</h3>
            <p className="text-gray-400 text-sm">{t('ciscoDesc1')}</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-green-500/30 hover:border-green-500 transition-all">
            <div className="text-green-400 font-bold mb-2">{t('completed')}</div>
            <h3 className="text-lg font-bold mb-2">{t('cisco2')}</h3>
            <p className="text-gray-400 text-sm">{t('ciscoDesc2')}</p>
          </div>
        </div>

        {/* CompTIA - Horizontal Bar */}
        <div className="bg-gray-900 p-6 rounded-lg border border-green-500/30 hover:border-green-500 transition-all mb-8">
          <div className="text-yellow-500 font-bold mb-2">{t('inProgress')}</div>
          <h3 className="text-lg font-bold mb-2">{t('comptia')}</h3>
          <p className="text-gray-400 text-sm mb-4">{t('comptiaDesc')}</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-300">{t('completion')}</span>
              <span className="text-green-400 font-bold">45%</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-green-500/20">
              <div 
                className="h-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-300 rounded-full"
                style={{ width: '45%' }}
              ></div>
            </div>
          </div>
        </div>

        {/* LetsDefend - Horizontal Bar */}
        <div className="bg-gray-900 p-6 rounded-lg border border-green-500/30 hover:border-green-500 transition-all">
          <div className="text-cyan-400 font-bold mb-2">{t('focusPath')}</div>
          <h3 className="text-lg font-bold mb-2">{t('letsdefend')}</h3>
          <p className="text-gray-400 text-sm mb-4">{t('letsdefendDesc')}</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-300">{t('completion')}</span>
              <span className="text-cyan-400 font-bold">{Math.round(socProgress)}%</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-green-500/20">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-green-400 transition-all duration-300 rounded-full"
                style={{ width: `${socProgress}%` }}
              ></div>
            </div>
            <p className="text-gray-400 text-xs">{t('day')} {Math.round(socProgress / 4)} {t('of')} 25 • {t('progressesDaily')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}