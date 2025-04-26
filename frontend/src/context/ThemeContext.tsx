import React, { useMemo, useState } from 'react';

import { ThemeContext } from './themeContext';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = useMemo(
    () => () => {
      setIsDarkMode(!isDarkMode);
    },
    [isDarkMode],
  );

  const value = useMemo(
    () => ({
      isDarkMode,
      toggleTheme,
    }),
    [isDarkMode, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
