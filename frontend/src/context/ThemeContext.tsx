import React, { createContext, useMemo, useState } from 'react';

import { DEFAULT_THEME } from './themeConstants';
import { ThemeContextType } from './themeTypes';

export const ThemeContext = createContext<ThemeContextType>(DEFAULT_THEME);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = useMemo(
    () => () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    },
    [theme],
  );

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
