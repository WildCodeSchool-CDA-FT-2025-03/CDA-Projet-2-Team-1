import chalk = require('chalk');
import { RowDataPacket } from 'mysql2';
import mysql from 'mysql2/promise';

type TestConnectionResult = RowDataPacket & { test: number };

async function testPoolConnection(pool: mysql.Pool) {
  try {
    // On demande a la base de données de nous renvoyer une clé qui se nomme test et qui vaut 1
    const [result] = await pool.query<TestConnectionResult[]>('SELECT 1 as test');

    if (
      result.length === 1 /* Vérifie le nombre de ligne retourné est bien 1 */ &&
      result[0].test === 1 /* On vérifie que la clé test vaux bien 1 */
    ) {
      console.info(chalk.green('✅ Connexion MySQL vérifiée avec succès !'));
    } else {
      throw new Error('❌ La requête de test MySQL a retourné un résultat inattendu.');
    }
  } catch (error) {
    console.error(chalk.red(`${'❌ '}Connexion MySQL impossible :`));
    console.error(chalk.red(`${'⚠️ '} Arret du serveur !`), error);
    process.exit(1); // Arrête le serveur si la connexion échoue
  }
}

export default testPoolConnection;
