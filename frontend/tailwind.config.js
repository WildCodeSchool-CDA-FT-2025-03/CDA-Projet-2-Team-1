/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        turquoise: {
          500: '#0395d3',
          600: '#027fb5',
          DEFAULT: '#0395d3',
        },
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
