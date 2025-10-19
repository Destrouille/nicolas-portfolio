'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export default function SkillsSection() {
  const { t } = useLanguage();
  const { theme } = useTheme();

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

  const themeColors = {
    green: {
      bg: 'bg-gradient-to-b from-black to-green-500/5 border-y border-green-500/20',
      text: 'text-green-500',
      title: 'text-green-400',
      bullet: 'bg-green-500',
    },
    blue: {
      bg: 'bg-gradient-to-b from-black to-blue-500/5 border-y border-blue-500/20',
      text: 'text-blue-500',
      title: 'text-blue-400',
      bullet: 'bg-blue-500',
    },
  };

  const colors = themeColors[theme];

  return (
    <section id="skills" className={`py-20 px-6 ${colors.bg}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-4xl font-bold mb-12 ${colors.text}`}>{t('technicalSkills')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className={`text-xl font-bold ${colors.title} mb-4`}>{t('networkSecurity')}</h3>
            <ul className="space-y-2 text-gray-300">
              {networkSkills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className={`w-2 h-2 ${colors.bullet} rounded-full`}></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={`text-xl font-bold ${colors.title} mb-4`}>{t('toolsLanguages')}</h3>
            <ul className="space-y-2 text-gray-300">
              {toolsSkills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className={`w-2 h-2 ${colors.bullet} rounded-full`}></span>
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