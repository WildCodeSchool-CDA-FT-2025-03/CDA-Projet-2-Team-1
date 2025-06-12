/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        turquoise: {
          50: '#fafdff',
          100: '#e6f7ff',
          200: '#bae7ff',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0395d3',
          600: '#027fb5',
          700: '#026aa7',
          800: '#065f99',
          900: '#0c4a6e',
        },
        'custom-blue': '#0ea5e9',
        main: '#027fb5',
      },
    },
  },
  plugins: [
    // Décommentez les plugins que vous utilisez réellement
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('tailwindcss-animate'),
  ],
};
