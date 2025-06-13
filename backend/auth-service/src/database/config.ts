import 'dotenv/config';
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
        host: process.env.DATABASE_HOST,
        port: 5432,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        max: 10, // Maximum 10 connexions simultanées
      });

      console.info(`${'✅ '}Pool de connexions Postgres créé avec succès !`);

      // ✅ Test réel de connexion Posgres
      (async () => {
        await testPoolConnection(pool);
      })();
    } catch (error) {
      console.error(`${'⚠️ '} Erreur lors de la création du pool PostgreSQL`);
      throw error;
    }
  }

  return pool;
}

// ✅ Initialisation du pool au démarrage
export const usePoolConnection = initializePool();
export default usePoolConnection;
