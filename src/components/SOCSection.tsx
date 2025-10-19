'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function SOCSection() {
  const { t } = useLanguage();

  return (
    <section id="soc" className="py-20 px-6 bg-green-500/5 border-y border-green-500/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-green-500">{t('socTraining')}</h2>

        {/* SIEM Interface - Full Width Hero */}
        <div className="mb-12 bg-gray-900 border border-green-500/30 hover:border-green-500 transition-all rounded-lg overflow-hidden">
          <Image
            src="/images/siem-interface.png"
            alt="SIEM Interface"
            width={1000}
            height={450}
            className="w-full h-auto"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-2">{t('siemTitle')}</h3>
            <p className="text-gray-300 text-sm">{t('siemDesc')}</p>
          </div>
        </div>

        {/* EDR - Full Width Hero */}
        <div className="mb-12 bg-gray-900 border border-green-500/30 hover:border-green-500 transition-all rounded-lg overflow-hidden">
          <Image
            src="/images/edr-threat.png"
            alt="EDR Threat Detection"
            width={1000}
            height={450}
            className="w-full h-auto"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-2">{t('edrTitle')}</h3>
            <p className="text-gray-300 text-sm">{t('edrDesc')}</p>
          </div>
        </div>

        {/* Log Management - Full Width Hero */}
        <div className="mb-12 bg-gray-900 border border-green-500/30 hover:border-green-500 transition-all rounded-lg overflow-hidden">
          <Image
            src="/images/log-management.png"
            alt="Log Management"
            width={1000}
            height={450}
            className="w-full h-auto"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-2">{t('logMgmtTitle')}</h3>
            <p className="text-gray-300 text-sm">{t('logMgmtDesc')}</p>
          </div>
        </div>

        {/* Threat Intelligence - Text Box Style */}
        <div className="mb-12 bg-gray-900 border border-green-500/30 hover:border-green-500 transition-all rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-400 mb-3">{t('threatIntelTitle')}</h3>
          <p className="text-gray-300 text-sm mb-4">{t('threatIntelDesc')}</p>
          <div className="inline-block bg-green-500/20 border border-green-500/50 rounded px-3 py-1">
            <p className="text-gray-300 text-xs">Advanced threat analysis and intelligence gathering for proactive defense</p>
          </div>
        </div>

        {/* SOC Fundamentals Info */}
        <div className="mb-12 bg-gray-900 border border-green-500/30 hover:border-green-500 transition-all rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-400 mb-3">{t('socAnalyst')}</h3>
          <p className="text-gray-300 text-sm mb-4">{t('socAnalystDesc')}</p>
          <div className="inline-block bg-green-500/20 border border-green-500/50 rounded px-3 py-1">
            <p className="text-gray-300 text-xs">{t('socDesc')}</p>
          </div>
        </div>

        {/* Key Competencies - Modern Grid */}
        <div className="bg-gray-900 border border-green-500/30 hover:border-green-500 transition-all rounded-lg p-8">
          <h3 className="text-green-400 font-bold mb-6 text-lg">{t('keyCompetencies')}</h3>
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
              <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700 transition-all border border-green-500/10 hover:border-green-500/30">
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