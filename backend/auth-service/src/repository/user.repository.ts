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

export async function getIdByEmailRepository(email: string): Promise<string> {
  const dataUser: QueryResult<{ id: string }> = await usePoolConnection.query(
    'SELECT id FROM "user" WHERE email= $1',
    [email]
  );
  if (dataUser.rows.length > 0) {
    return dataUser.rows[0].id;
  } else {
    throw new Error('Email not found');
  }
}

export default verifyEmailRepository;
