import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  root: './',
  publicDir: './public',
  server: {
    host: process.env.VITE_HOST || '', // node container in docker (container name)
    origin: 'http://localhost:5173', // exposed node container address
  },
});
