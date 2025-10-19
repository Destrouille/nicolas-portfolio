'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-black to-green-500/5 border-y border-green-500/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-green-500">{t('featuredProjects')}</h2>

        {/* NGO Project */}
        <div className="mb-12 bg-gray-900 border border-green-500/30 rounded-lg overflow-hidden hover:border-green-500 transition-all">
          <div className="bg-gradient-to-r from-green-600/20 to-transparent p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-2">{t('ngoTitle')}</h3>
            <p className="text-gray-400 text-sm">{t('ngoSubtitle')}</p>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-gray-300">
              {t('ngoDesc')}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-green-400 font-bold mb-2">{t('keyTechnologies')}</h4>
                <div className="flex flex-wrap gap-2">
                  {['pfSense', 'IPsec', 'OpenVPN', 'BIND9', 'Fail2Ban', 'Netplan', 'Ubuntu Server'].map(tech => (
                    <span key={tech} className="bg-green-500/20 text-green-300 px-3 py-1 rounded text-xs border border-green-500/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-green-400 font-bold mb-2">{t('outcomes')}</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>✓ {t('ngoOutcome1')}</li>
                  <li>✓ {t('ngoOutcome2')}</li>
                  <li>✓ {t('ngoOutcome3')}</li>
                  <li>✓ {t('ngoOutcome4')}</li>
                </ul>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="border-t border-green-500/20 pt-6">
              <h4 className="text-green-400 font-bold mb-4">{t('infrastructureArch')}</h4>
              <div className="bg-black p-4 rounded-lg border border-green-500/20 overflow-auto">
                <Image
                  src="/images/architecture-ong.png"
                  alt="NGO Infrastructure Architecture"
                  width={1200}
                  height={700}
                  priority
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Master Camp Project */}
        <div className="bg-gray-900 border border-green-500/30 rounded-lg overflow-hidden hover:border-green-500 transition-all">
          <div className="bg-gradient-to-r from-green-600/20 to-transparent p-6">
            <h3 className="text-2xl font-bold text-green-400 mb-2">{t('masterTitle')}</h3>
            <p className="text-gray-400 text-sm">{t('masterSubtitle')}</p>
          </div>
          <div className="p-6 space-y-6">
            <p className="text-gray-300">
              {t('masterDesc')}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-green-400 font-bold mb-2">{t('focusAreas')}</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• {t('masterFocus1')}</li>
                  <li>• {t('masterFocus2')}</li>
                  <li>• {t('masterFocus3')}</li>
                  <li>• {t('masterFocus4')}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-green-400 font-bold mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {['OPNsense', 'DNS', 'Access Control'].map(tech => (
                    <span key={tech} className="bg-green-500/20 text-green-300 px-3 py-1 rounded text-xs border border-green-500/50">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Architecture Diagram */}
            <div className="border-t border-green-500/20 pt-6">
              <h4 className="text-green-400 font-bold mb-4">{t('infrastructureArch')}</h4>
              <div className="bg-black p-4 rounded-lg border border-green-500/20 overflow-auto">
                <Image
                  src="/images/architecture-mastercamp.png"
                  alt="Master Camp Infrastructure Architecture"
                  width={1200}
                  height={700}
                  priority
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}