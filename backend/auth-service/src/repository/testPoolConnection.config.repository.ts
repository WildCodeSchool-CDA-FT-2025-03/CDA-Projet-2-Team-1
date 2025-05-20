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
      return;
    }

    // ⛔ Requête réussie mais le résultat n’est pas celui attendu
    throw new Error('La requête de test MySQL a retourné un résultat inattendu.');
  } catch (error) {
    /* Si le résultat est inattendu, on récupère l'erreur plus haut et on le renvois à config.ts */
    if (error instanceof Error) {
      error.message = `${error.message}`;
      throw error;
    }

    /* Si la connexion échoue complètement */
    throw new Error(
      `Connexion impossible à la DB, vérifiez vos identifiants de connexion et vos variables d'environnement.`
    );
  }
}

export default testPoolConnection;
