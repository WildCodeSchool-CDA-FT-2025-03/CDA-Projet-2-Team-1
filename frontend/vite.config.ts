import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    root: './', // (facultatif, c’est la valeur par défaut)
    publicDir: './public', // (facultatif aussi)
    server: {
      host: true,
      watch: {
        usePolling: true,
      },
      port: 5173,
    },
    preview: {
      host: true,
      port: 5173,
    },
  };
});
