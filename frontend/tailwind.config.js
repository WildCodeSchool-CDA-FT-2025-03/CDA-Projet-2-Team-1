/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html', // Scanne l'index HTML
    './src/**/*.{js,ts,jsx,tsx}', // Scanne tous les fichiers JS/TS/JSX/TSX dans src
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'border': 'var(--border)',
        'input': 'var(--input)',
        'ring': 'var(--ring)',
        'background': 'var(--background)',
        'foreground': 'var(--foreground)',
        'primary': {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        'secondary': {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        'destructive': {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        'muted': {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        'accent': {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        'popover': {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        'card': {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        // Exemple pour la couleur turquoise spécifique si elle n'est pas --primary
        'turquoise': '#027FB5',
        'turquoise-dark': '#027FB5',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      // Vous pouvez ajouter d'autres extensions ici (keyframes, etc.)
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};
