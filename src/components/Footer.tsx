'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-green-500/20 py-6 px-6 text-center text-gray-500 text-sm">
      <p>{t('footer')}</p>
    </footer>
  );
}