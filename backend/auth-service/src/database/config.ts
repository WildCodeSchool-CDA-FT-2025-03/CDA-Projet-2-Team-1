import 'dotenv/config';
import chalk from 'chalk';
import { Pool } from 'pg';
import testPoolConnection from '../repository/testPoolConnection.config.repository';

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
      (async () => {
        await testPoolConnection(pool);
      })();
    } catch (error) {
      console.error(chalk.yellow(`${'⚠️ '} Erreur lors de la création du pool PostgreSQL`));
      throw error;
    }
  }

  return pool;
}

// ✅ Initialisation du pool au démarrage
export const usePoolConnection = initializePool();
export default usePoolConnection;
