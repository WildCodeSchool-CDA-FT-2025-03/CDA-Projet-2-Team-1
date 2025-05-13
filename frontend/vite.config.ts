import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';


export default defineConfig(() => {

    // Récupère le chemin absolue ou est exécuté ce fichier
    const root = process.cwd();

    // On récupère la variable d'environnement injectée par Docker pour savoir si on est en prod ou dev
    const viteNodeEnv = process.env.VITE_NODE_ENV || 'development';

    let envBase = {};
    let envRoot = {};

    // Initialisation conditionnelle
    if (viteNodeEnv === 'production') {
        envBase = loadEnv('base', root, 'VITE_'); // .env.base
        envRoot = loadEnv('production', root, 'VITE_'); // .env.root
    } 
    else if (viteNodeEnv === 'development') {
        envBase = loadEnv('base', root, 'VITE_'); // peut être partagé
        envRoot = loadEnv('development', root, 'VITE_'); // .env.development
    }
    

    // Fusion manuelle des variables (ordre de priorité : root > base)
    const env = {
        ...envBase,
        ...envRoot
    };

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
            port: parseInt(process.env.VITE_FRONTEND_PORT || '5173'), // Port exposé par le conteneur
        },

    // Redéfinit import.meta.env à la main pour bloquer tout chargement implicite, ne charge plus les .env par défauts
    define: {
        'import.meta.env': JSON.stringify(env)
    }
  };
});
