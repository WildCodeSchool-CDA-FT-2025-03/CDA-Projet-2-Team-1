import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';

export const useTheme = () => useContext(ThemeContext);
