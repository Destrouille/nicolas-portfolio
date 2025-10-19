'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export default function CertificationsSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();
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

  const themeColors = {
    green: {
      bg: 'bg-green-500/5 border-y border-green-500/20',
      text: 'text-green-500',
      title: 'text-green-400',
      cardBorder: 'border-green-500/30 hover:border-green-500',
      progressBg: 'bg-green-600 to-green-400',
      cyanText: 'text-cyan-400',
      cyanBar: 'from-cyan-500 to-green-400',
    },
    blue: {
      bg: 'bg-blue-500/5 border-y border-blue-500/20',
      text: 'text-blue-500',
      title: 'text-blue-400',
      cardBorder: 'border-blue-500/30 hover:border-blue-500',
      progressBg: 'bg-blue-600 to-blue-400',
      cyanText: 'text-blue-400',
      cyanBar: 'from-blue-500 to-blue-400',
    },
  };

  const colors = themeColors[theme];

  return (
    <section id="certifications" className={`py-20 px-6 ${colors.bg}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold mb-8 ${colors.text}`}>{t('certifications')}</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className={`bg-gray-900 p-6 rounded-lg border ${colors.cardBorder} transition-all relative`}>
            <div className="absolute top-4 right-4">
              <Image
                src="/images/introduction_to_cybersecurity.png"
                alt="Cisco Introduction to Cybersecurity Logo"
                width={64}
                height={64}
                className="h-16 w-auto"
              />
            </div>
            <div className={`${colors.title} font-bold mb-2`}>{t('completed')}</div>
            <h3 className="text-lg font-bold mb-2">{t('cisco1')}</h3>
            <p className="text-gray-400 text-sm">{t('ciscoDesc1')}</p>
          </div>
          <div className={`bg-gray-900 p-6 rounded-lg border ${colors.cardBorder} transition-all relative`}>
            <div className="absolute top-4 right-4">
              <Image
                src="/images/junior_cybersecurity_analyst_career_path.png"
                alt="Cisco Junior Cybersecurity Analyst Logo"
                width={64}
                height={64}
                className="h-16 w-auto"
              />
            </div>
            <div className={`${colors.title} font-bold mb-2`}>{t('completed')}</div>
            <h3 className="text-lg font-bold mb-2">{t('cisco2')}</h3>
            <p className="text-gray-400 text-sm">{t('ciscoDesc2')}</p>
          </div>
        </div>

        <div className={`bg-gray-900 p-6 rounded-lg border ${colors.cardBorder} transition-all mb-8 relative`}>
          <div className="absolute top-4 right-4">
            <Image
              src="/images/net_plus_sec_plus.png"
              alt="CompTIA Network+ & Security+ Logo"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
          </div>
          <div className={`text-yellow-500 font-bold mb-2`}>{t('inProgress')}</div>
          <h3 className="text-lg font-bold mb-2">{t('comptia')}</h3>
          <p className="text-gray-400 text-sm mb-4">{t('comptiaDesc')}</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-300">{t('completion')}</span>
              <span className={`${colors.title} font-bold`}>45%</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-green-500/20">
              <div 
                className={`h-full bg-gradient-to-r ${colors.progressBg} transition-all duration-300 rounded-full`}
                style={{ width: '45%' }}
              ></div>
            </div>
          </div>
        </div>

        <div className={`bg-gray-900 p-6 rounded-lg border ${colors.cardBorder} transition-all relative`}>
          <div className="absolute top-4 right-4">
            <Image
              src="/images/letsdefend-logo.png"
              alt="LetsDefend Logo"
              width={64}
              height={64}
              className="h-16 w-auto"
            />
          </div>
          <div className={`${colors.cyanText} font-bold mb-2`}>{t('focusPath')}</div>
          <h3 className="text-lg font-bold mb-2">{t('letsdefend')}</h3>
          <p className="text-gray-400 text-sm mb-4">{t('letsdefendDesc')}</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-300">{t('completion')}</span>
              <span className={`${colors.cyanText} font-bold`}>{Math.round(socProgress)}%</span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden border border-green-500/20">
              <div 
                className={`h-full bg-gradient-to-r ${colors.cyanBar} transition-all duration-300 rounded-full`}
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