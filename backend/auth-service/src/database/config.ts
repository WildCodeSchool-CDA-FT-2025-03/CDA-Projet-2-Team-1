import 'dotenv/config';
import mysql from 'mysql2/promise';
import chalk from 'chalk';
import ENV from '../config/ENV.config';
import testPoolConnection from '../repository/testPoolConnection.config.repository';

// ✅ Stockage du pool dans une variable globale
let pool: mysql.Pool | null = null;

/**
 * Fonction pour initialiser le pool avec gestion des erreurs
 */
function initializePool() {
  if (!pool) {
    try {
      pool = mysql.createPool({
        host: ENV('process.env.DB_HOST', 'Warning') || 'localhost',
        port: Number(ENV('process.env.DB_PORT', 'Warning') || '3306'),
        user: ENV('process.env.DB_USER', 'Warning') || 'root',
        password: ENV('process.env.DB_PASSWORD', 'Warning') || 'password',
        database: ENV('process.env.DB_NAME', 'Warning') || 'DB_CarePlan',
        waitForConnections: true, // Attend qu'une connexion soit disponible au lieu de planter
        connectionLimit: 10, // Maximum 10 connexions simultanées
        queueLimit: 0, // Aucune limite d'attente (les requêtes attendent leur tour)
      });

      console.info(chalk.green(`${'✅ '}Pool de connexions MySQL créé avec succès !`));

      // ✅ Test réel de connexion MySQL
      try {
        testPoolConnection(pool);
      } catch (error) {
        const testPoolConnectionError = error as Error;
        console.error({
          identity: 'config.ts',
          type: 'Fichier de configuration database',
          chemin: 'src/database/config.ts',
          "❌ Nature de l'erreur":
            "Erreur détecté lors de l'utilisation de la fonction testPoolConnection",
          testPoolConnection: {
            identity: 'testPoolConnection.config.repository.ts',
            type: 'Repository',
            chemin: 'src/repository/testPoolConnection.config.repository.ts',
            /* Erreur retourné par le composant : */
            "❌ Nature de l'erreur": testPoolConnectionError.message,
            '❌ Erreur': testPoolConnectionError.name,
          },
        });
        console.error(chalk.red(`${'⚠️ '} Arret du serveur !`));
        process.exit(1); // Arrête le serveur si la connexion échoue
      }
    } catch (error) {
      console.error(chalk.white(error));
      console.error(chalk.red(`${'❌ '}Erreur lors de la création du pool MySQL`));
      console.error(chalk.red(`${'⚠️ '} Arret du serveur !`));
      throw error; // Permet de stopper l'application si le pool ne peut pas être créé
    }
  }
  return pool;
}

/**
 * Fonction pour récupérer une connexion du pool avec `try/catch`
 */
export async function useComplexConnection() {
  if (!pool) {
    console.error(chalk.red(`${'❌ '}Le pool de connexions MySQL n'a pas été initialisé !`));
    console.error(chalk.bold.red(`${'⚠️ '} Arret du serveur !`));
    throw new Error("Le pool de connexions MySQL n'a pas été initialisé !");
  }

  try {
    const connection = await pool.getConnection();
    return connection;
  } catch (error) {
    console.error(chalk.white(error));
    console.error(chalk.bold.red(`${'❌ '}Erreur lors de la récupération d'une connexion MySQL`));
    throw error;
  }
}

// ✅ Initialisation du pool au démarrage
export const usePoolConnection = initializePool();
export default usePoolConnection;
