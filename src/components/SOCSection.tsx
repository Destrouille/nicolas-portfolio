'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export default function SOCSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const themeColors = {
    green: {
      bg: 'bg-green-500/5 border-y border-green-500/20',
      text: 'text-green-500',
      title: 'text-green-400',
      cardBorder: 'border-green-500/30 hover:border-green-500',
      bullet: 'text-green-500',
    },
    blue: {
      bg: 'bg-blue-500/5 border-y border-blue-500/20',
      text: 'text-blue-500',
      title: 'text-blue-400',
      cardBorder: 'border-blue-500/30 hover:border-blue-500',
      bullet: 'text-blue-500',
    },
  };

  const colors = themeColors[theme];

  return (
    <section id="soc" className={`py-20 px-6 ${colors.bg}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 ${colors.text}`}>{t('socTraining')}</h2>

        {/* SIEM Interface */}
        <div className={`mb-12 bg-gray-900 border ${colors.cardBorder} transition-all rounded-lg overflow-hidden`}>
          <Image
            src="/images/siem-interface.png"
            alt="SIEM Interface"
            width={1000}
            height={450}
            className="w-full h-auto"
          />
          <div className="p-6">
            <h3 className={`text-2xl font-bold ${colors.title} mb-2`}>{t('siemTitle')}</h3>
            <p className="text-gray-300 text-sm">{t('siemDesc')}</p>
          </div>
        </div>

        {/* EDR */}
        <div className={`mb-12 bg-gray-900 border ${colors.cardBorder} transition-all rounded-lg overflow-hidden`}>
          <Image
            src="/images/edr-threat.png"
            alt="EDR Threat Detection"
            width={1000}
            height={450}
            className="w-full h-auto"
          />
          <div className="p-6">
            <h3 className={`text-2xl font-bold ${colors.title} mb-2`}>{t('edrTitle')}</h3>
            <p className="text-gray-300 text-sm">{t('edrDesc')}</p>
          </div>
        </div>

        {/* Log Management */}
        <div className={`mb-12 bg-gray-900 border ${colors.cardBorder} transition-all rounded-lg overflow-hidden`}>
          <Image
            src="/images/log-management.png"
            alt="Log Management"
            width={1000}
            height={450}
            className="w-full h-auto"
          />
          <div className="p-6">
            <h3 className={`text-2xl font-bold ${colors.title} mb-2`}>{t('logMgmtTitle')}</h3>
            <p className="text-gray-300 text-sm">{t('logMgmtDesc')}</p>
          </div>
        </div>

        {/* Threat Intelligence */}
        <div className={`mb-12 bg-gray-900 border ${colors.cardBorder} transition-all rounded-lg p-6`}>
          <h3 className={`text-xl font-bold ${colors.title} mb-3`}>{t('threatIntelTitle')}</h3>
          <p className="text-gray-300 text-sm mb-4">{t('threatIntelDesc')}</p>
          <div className={`inline-block bg-${theme === 'green' ? 'green' : 'blue'}-500/20 border ${theme === 'green' ? 'border-green-500/50' : 'border-blue-500/50'} rounded px-3 py-1`}>
            <p className="text-gray-300 text-xs">Advanced threat analysis and intelligence gathering for proactive defense</p>
          </div>
        </div>

        {/* SOC Fundamentals */}
        <div className={`mb-12 bg-gray-900 border ${colors.cardBorder} transition-all rounded-lg p-6`}>
          <h3 className={`text-xl font-bold ${colors.title} mb-3`}>{t('socAnalyst')}</h3>
          <p className="text-gray-300 text-sm mb-4">{t('socAnalystDesc')}</p>
          <div className={`inline-block bg-${theme === 'green' ? 'green' : 'blue'}-500/20 border ${theme === 'green' ? 'border-green-500/50' : 'border-blue-500/50'} rounded px-3 py-1`}>
            <p className="text-gray-300 text-xs">{t('socDesc')}</p>
          </div>
        </div>

        {/* Key Competencies */}
        <div className={`bg-gray-900 border ${colors.cardBorder} transition-all rounded-lg p-8`}>
          <h3 className={`${colors.title} font-bold mb-6 text-lg`}>{t('keyCompetencies')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🔔', title: t('alertAnalysis') },
              { icon: '🎯', title: t('threatIntel') },
              { icon: '⚠️', title: t('incidentResponse') },
              { icon: '📊', title: t('logAnalysis') },
              { icon: '🛡️', title: t('siemTools') },
              { icon: '🦠', title: t('malwareDetection') },
              { icon: '🔍', title: t('edrTitle') },
              { icon: '📋', title: t('logMgmtTitle') },
            ].map((item, idx) => (
              <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition-all border ${theme === 'green' ? 'border-green-500/10 hover:border-green-500/30' : 'border-blue-500/10 hover:border-blue-500/30'}`}>
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-300 font-medium text-sm">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}