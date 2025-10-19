'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export default function Footer() {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const themeColors = {
    green: { text: 'text-green-400', hover: 'hover:text-green-500', border: 'border-green-500/20' },
    blue: { text: 'text-blue-400', hover: 'hover:text-blue-500', border: 'border-blue-500/20' },
  };

  const colors = themeColors[theme];

  return (
    <footer className={`border-t ${colors.border} py-6 px-6 text-center text-gray-500 text-sm space-y-4`}>
      <p>{t('footer')}</p>
      <button
        onClick={toggleTheme}
        className={`${colors.text} ${colors.hover} transition-colors cursor-pointer font-semibold`}
      >
        {theme === 'green' ? 'Do you prefer the Blue Team?' : 'Back to Green Team?'}
      </button>
    </footer>
  );
}