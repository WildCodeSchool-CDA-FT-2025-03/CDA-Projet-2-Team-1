/// <reference types="vitest" />
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
    root: './',
    publicDir: './public',
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
    // Configuration Vitest
    test: {
      globals: true,
      environment: 'jsdom',
      include: [
        'tests/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
        'tests/integration/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      ],
      exclude: ['tests/e2e/**/*', 'node_modules/**/*'],
      coverage: {
        reportsDirectory: './tests/unit/coverage',
        reporter: ['text', 'json', 'html'],
        include: ['src/**/*.{ts,tsx}'],
        exclude: ['src/**/*.d.ts', 'src/main.tsx', 'src/vite-env.d.ts'],
      },
    },
  };
});
