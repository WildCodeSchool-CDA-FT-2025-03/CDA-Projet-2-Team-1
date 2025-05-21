import 'dotenv/config';
import chalk from 'chalk';
import { Pool } from 'pg';

// ✅ Stockage du pool dans une variable globale
let pool: Pool | null = null;

/**
 * Fonction pour initialiser le pool avec gestion des erreurs
 */
function initializePool() {
  if (!pool) {
    try {
      pool = new Pool({
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT || '9500'),
        user: process.env.DB_USER || 'bob',
        password: process.env.DB_PASSWORD || '1234',
        database: process.env.DB_NAME || 'care-plan',
        max: 10, // Maximum 10 connexions simultanées
      });

      console.info(chalk.green(`${'✅ '}Pool de connexions Postgres créé avec succès !`));

      // ✅ Test réel de connexion Posgres
    } catch (error) {
      console.error(chalk.white(error));
      console.error(chalk.red('❌ Erreur lors de la création du pool PostgreSQL'));
      console.error(chalk.red('⚠️ Arrêt du serveur !'));
      throw error;
    }
  }

  return pool;
}

/**
 * Fonction pour récupérer une connexion du pool avec `try/catch`
 */
export async function useComplexConnection() {
  if (!pool) {
    console.error(chalk.red(`${'❌ '}Le pool de connexions Postgres n'a pas été initialisé !`));
    console.error(chalk.bold.red(`${'⚠️ '} Arret du serveur !`));
    throw new Error("Le pool de connexions Postgres n'a pas été initialisé !");
  }

  try {
    const connection = await pool.connect();
    return connection;
  } catch (error) {
    console.error(chalk.white(error));
    console.error(
      chalk.bold.red(`${'❌ '}Erreur lors de la récupération d'une connexion Postgres`)
    );
    throw error;
  }
}

// ✅ Initialisation du pool au démarrage
export const usePoolConnection = initializePool();
export default usePoolConnection;
