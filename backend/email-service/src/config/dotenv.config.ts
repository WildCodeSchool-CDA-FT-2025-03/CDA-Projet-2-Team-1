import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import EnvironnementType from '../types/environnement.config.type';

/**
 * Détermine le fichier .env à charger
 * 
 * NODE_ENV est une variable d'environnement du docker-compose.yml qui indique l'environnement d'exécution (développement, production, etc.).
 * Si elle n'est pas définie, on utilise "development" par défaut.
 */
const VerifENV = (process.env.NODE_ENV || "development") as EnvironnementType;
const ENV: EnvironnementType = VerifENV;
const envPath: string = path.resolve(__dirname, `../../.env.${ENV}`);
const envBasePath: string = path.resolve(__dirname, '../../.env.base');

// Vérifie si le fichier .env.base existe
if (!fs.existsSync(envBasePath)) {
  console.error(
    {
        identity: "dotenv.config.ts",
        type: "fichier de configuration",
        chemin: "/server/src/config/dotenv.config.ts",
        "❌ Nature de l'erreur": `Fichier .env.base introuvable !`,
        route: envBasePath,
    }
    );
  process.exit(1); // Arrête le serveur si les variables d'environnement ne sont pas disponibles
}

// Vérifie si le fichier .env existe
if (!fs.existsSync(envPath)) {
  console.error(
    {
        identity: "dotenv.config.ts",
        type: "fichier de configuration",
        chemin: "/server/src/config/dotenv.config.ts",
        "❌ Nature de l'erreur": `Fichier .env.${ENV} introuvable !`,
        route: envPath,
    }
    );
  process.exit(1); // Arrête le serveur si les variables d'environnement ne sont pas disponibles
}

// Charge les variables d'environnement

  // Charge le fichien .env.base pour les variables de base communes a tous les environnements
  dotenv.config({ path: envBasePath });

  // Charge le fichier .env correspondant à l'environnement (dévelopment ou production)
  dotenv.config({ path: envPath });

export {ENV, envPath};
