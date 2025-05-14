import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';


export default defineConfig(() => {

  // Récupère le chemin absolue ou est exécuté ce fichier
  const root = process.cwd();

  // On récupère la variable d'environnement injectée par Docker pour savoir si on est en prod ou dev
  const viteNodeEnv = process.env.VITE_NODE_ENV || 'development';

  // Typage correct
  let envBase: Record<string, string> = {};
  let envRoot: Record<string, string> = {};

  // Initialisation conditionnelle
  if (viteNodeEnv === 'production') {
    envBase = loadEnv('base', root, 'VITE_');        // .env.base
    envRoot = loadEnv('production', root, 'VITE_');  // .env.production
  } 
  else {
    envBase = loadEnv('base', root, 'VITE_');        // .env.base
    envRoot = loadEnv('development', root, 'VITE_'); // .env.development
  }

  const env: Record<string, string> = {
    ...envBase,
    ...envRoot,
  };

  // Injection dans process.env uniquement pour vite.config.ts
  for (const [key, value] of Object.entries(env)) {
    process.env[key] = value;
  }

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    root: './',         // (facultatif, c’est la valeur par défaut)
    publicDir: './public', // (facultatif aussi)
    server: {
      host: true,
      port: parseInt(process.env.VITE_FRONTEND_PORT || '5173'),
    },
  };
});
