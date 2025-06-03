import usePoolConnection from '../database/config';
import { QueryResult } from 'pg';
import userTableType from '../types/userTable.type';

async function verifyEmailRepository(email: string): Promise<userTableType | null> {
  // Vérification : l'email reçu existe t-il dans la DB ?
  const dataUser: QueryResult<userTableType> = await usePoolConnection.query(
    'SELECT * FROM "user" WHERE email= $1',
    [email]
  );
  return dataUser.rows.length > 0 ? dataUser.rows[0] : null;
}

export default verifyEmailRepository;
