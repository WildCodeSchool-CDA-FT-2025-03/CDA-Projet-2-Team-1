import 'dotenv/config';
import chalk from 'chalk';
import ENV from '../config/ENV.config';
import testPoolConnection from '../repository/testPoolConnection.config.repository';
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
        host: ENV('process.env.DB_HOST', 'Warning') || 'localhost',
        port: Number(ENV('process.env.DB_PORT', 'Warning') || '3306'),
        user: ENV('process.env.DB_USER', 'Warning') || 'root',
        password: ENV('process.env.DB_PASSWORD', 'Warning') || 'password',
        database: ENV('process.env.DB_NAME', 'Warning') || 'DB_CarePlan',
        max: 10, // Maximum 10 connexions simultanées
      });

      console.info(chalk.green(`${'✅ '}Pool de connexions Postgres créé avec succès !`));

      // ✅ Test réel de connexion Posgres
      (async () => {
        try {
          await testPoolConnection(pool);
        } catch (error) {
          const testPoolConnectionError = error as Error;

          console.error({
            identity: 'config.ts',
            type: 'Fichier de configuration database',
            chemin: 'src/database/config.ts',
            "❌ Nature de l'erreur":
              "Erreur détectée lors de l'utilisation de la fonction testPoolConnection",
            testPoolConnection: {
              identity: 'testPoolConnection.config.repository.ts',
              type: 'Repository',
              chemin: 'src/repository/testPoolConnection.config.repository.ts',
              "❌ Nature de l'erreur": testPoolConnectionError.message,
              '❌ Erreur': testPoolConnectionError.name,
            },
          });

          console.error(chalk.red('⚠️ Arrêt du serveur !'));
          process.exit(1);
        }
      })();
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
