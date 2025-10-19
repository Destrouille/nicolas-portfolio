'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export type Theme = 'green' | 'blue';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('green');

  const toggleTheme = () => {
    setTheme(prev => prev === 'green' ? 'blue' : 'green');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

export const themeColors = {
  green: {
    primary: 'green-500',
    primaryLight: 'green-400',
    primaryDark: 'green-600',
    bg: 'green-500/5',
    border: 'green-500/20',
    borderLight: 'green-500/30',
    hover: 'green-500',
  },
  blue: {
    primary: 'blue-500',
    primaryLight: 'blue-400',
    primaryDark: 'blue-600',
    bg: 'blue-500/5',
    border: 'blue-500/20',
    borderLight: 'blue-500/30',
    hover: 'blue-500',
  },
};