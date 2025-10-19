'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function SkillsSection() {
  const { t } = useLanguage();

  const networkSkills = [
    'pfSense • OPNsense Firewalls',
    'IPsec & OpenVPN Tunnels',
    'BIND9 DNS • Netplan Configuration',
    'Fail2Ban • SSH Hardening',
    'OWASP Top 10 Vulnerabilities',
    'EDR • Threat Intelligence',
  ];

  const toolsSkills = [
    'Kali Linux • Wireshark • Shodan',
    'Python • Java • C • SQL',
    'HTML/CSS/JavaScript',
    'Trello • PowerBI • Office Suite',
    'theHarvester • John the Ripper',
    'Log Management • VirusTotal',
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-black to-green-500/5 border-y border-green-500/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-green-500">{t('technicalSkills')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">{t('networkSecurity')}</h3>
            <ul className="space-y-2 text-gray-300">
              {networkSkills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">{t('toolsLanguages')}</h3>
            <ul className="space-y-2 text-gray-300">
              {toolsSkills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}