import { DEFAULT_THEME } from './themeConstants';
import React from 'react';
import { ThemeContextType } from './themeTypes';

export const ThemeContext = React.createContext<ThemeContextType>(DEFAULT_THEME);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = React.useMemo(
    () => () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    },
    [theme],
  );

  const value = React.useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
