/*import usePoolConnection from '../database/config';
import { QueryResult } from 'pg';
//import { type UserType, type UserInput } from '../types/userTable.type';

//async function verifyUserByEmail(email: string): Promise<UserType | null> {
  // Vérification : l'email reçu existe t-il dans la DB ?
  //const dataUser: QueryResult<UserType> = await usePoolConnection.query(
    'SELECT * FROM "user" WHERE email= $1',
    [email]
  );
  return dataUser.rows.length > 0 ? dataUser.rows[0] : null;
}
//async function createUser(user: UserInput): Promise<UserInput | null> {
  //console.log('create User', user);
 // const newUser: QueryResult<UserInput> = await usePoolConnection.query(
    'INSERT INTO user (firstname,lastname,genre,email,role_id,service_id) RETURNING (firstname,lastname,genre,email,role_id,service_id)'
  //);
  //console.log('result request', newUser);
  //return null;
//}
/**
 * firstname
 * lastname
 * email
 * password
 * gender
 * role_id
 * service_id
 */

//export { verifyUserByEmail, createUser };
