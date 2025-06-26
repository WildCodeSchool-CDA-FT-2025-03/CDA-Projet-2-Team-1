import usePoolConnection from '../database/config';
import { QueryResult } from 'pg';
import { type UserType, type UserInput } from '../types/userTable.type';

async function verifyEmailRepository(email: string): Promise<UserType | null> {
  // Vérification : l'email reçu existe t-il dans la DB ?
  const dataUser: QueryResult<UserType> = await usePoolConnection.query(
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

async function verifyUserByEmail(email: string): Promise<UserType | null> {
  // Vérification : l'email reçu existe t-il dans la DB ?
  const dataUser: QueryResult<UserType> = await usePoolConnection.query(
    'SELECT * FROM "user" WHERE email= $1',
    [email]
  );
  return dataUser.rows.length > 0 ? dataUser.rows[0] : null;
}

async function createUser(user: UserInput): Promise<string> {
  const newUser: QueryResult = await usePoolConnection.query(
    'INSERT INTO "user" (firstname,lastname,genre,email,role_id,service_id,password) VALUES  ($1,$2,$3,$4,$5,$6,$7) RETURNING id;',
    [
      user.firstname,
      user.lastname,
      user.genre,
      user.email,
      user.role_id,
      user.service_id,
      user.password,
    ]
  );
  return newUser.rows[0].id;
}

export { verifyUserByEmail, createUser };
