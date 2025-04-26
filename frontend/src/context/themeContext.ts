import { DEFAULT_THEME } from './themeConstants';
import { ThemeContextType } from './themeTypes';
import { createContext } from 'react';

export const ThemeContext = createContext<ThemeContextType>(DEFAULT_THEME);
