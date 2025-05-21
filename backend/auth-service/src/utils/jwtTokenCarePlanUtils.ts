import payloadType from '../types/payloadType';
import { createDate_Number_Utils } from './createDateUtils';
import jwt from 'jsonwebtoken';
import ENV from '../config/ENV.config';
import userTableType from '../types/userTable.type';

// Récupération de la clé secrète Server
const SECRET_KEY_TOKEN_SERVER: string = ENV('process.env.SECRET_KEY_TOKEN_SERVER');

//--------------------------------------------------------------------------------------

async function createJwtTokenServerCarePlan(dataUser: userTableType): Promise<string> {
  if (SECRET_KEY_TOKEN_SERVER === 'Error') {
    return 'Error';
  }

  // Création des variables token
  const expiresIn: number = 60 * 60; // 1 heure
  const dateNow: number = await createDate_Number_Utils(); // Date actuelle en timestamp UNIX

  const payload_server: payloadType = {
    id: dataUser.id,
    email: dataUser.email,
    role_id: dataUser.role_id,
    service_id: dataUser.service_id,
    iat: dateNow, // ⏳ Date de création du token
  };

  // Création du token server
  const jwtTokenServerCarePlan = jwt.sign(payload_server, SECRET_KEY_TOKEN_SERVER, { expiresIn });

  return jwtTokenServerCarePlan;
}

export { createJwtTokenServerCarePlan };
