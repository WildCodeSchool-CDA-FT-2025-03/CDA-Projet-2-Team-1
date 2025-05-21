import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import EnvironnementType from '../types/environnement.config.type';
import chalk from 'chalk';
import ENV from './ENV.config';

/**
 * Détermine le fichier .env à charger
 *
 * NODE_ENV est une variable d'environnement du docker-compose.yml qui indique l'environnement d'exécution (développement, production, etc.).
 * Si elle n'est pas définie, on utilise "development" par défaut.
 */
const VerifENV = (ENV('process.env.NODE_ENV') || 'development') as EnvironnementType;
const Environnement: EnvironnementType = VerifENV;
const ENV_Base: string = 'base';
const envPath: string = path.resolve(__dirname, `../../.env.${Environnement}`);
const envBasePath: string = path.resolve(__dirname, `../../.env.${ENV_Base}`);

// Vérifie si le fichier .env.base existe
if (!fs.existsSync(envBasePath)) {
  console.error({
    identity: 'dotenv.config.ts',
    type: 'fichier de configuration',
    chemin: '/server/src/config/dotenv.config.ts',
    "❌ Nature de l'erreur": `Fichier .env.base introuvable !`,
    route: envBasePath,
  });
  process.exit(1); // Arrête le serveur si les variables d'environnement ne sont pas disponibles
}

// Vérifie si le fichier .env existe
if (!fs.existsSync(envPath)) {
  console.error({
    identity: 'dotenv.config.ts',
    type: 'fichier de configuration',
    chemin: '/server/src/config/dotenv.config.ts',
    "❌ Nature de l'erreur": `Fichier .env.${Environnement} introuvable !`,
    route: envPath,
  });
  process.exit(1); // Arrête le serveur si les variables d'environnement ne sont pas disponibles
}

// Charge les variables d'environnement

// Charge le fichier .env.base pour les variables de base communes a tous les environnements
dotenv.config({ path: envBasePath });
console.info(chalk.magenta(`Environnement .env.${ENV_Base} chargé !`));

// Charge le fichier .env correspondant à l'environnement (dévelopment ou production)
dotenv.config({ path: envPath });
console.info(chalk.magenta(`Environnement .env.${Environnement} chargé !`));

export { Environnement, envPath };
