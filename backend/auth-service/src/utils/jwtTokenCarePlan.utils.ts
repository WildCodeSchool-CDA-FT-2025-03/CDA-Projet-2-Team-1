import payloadType from '../types/payloadTokenJWT.type';
import { createDateNumberUtils } from './createDateUtils';
import jwt from 'jsonwebtoken';
import userTableType from '../types/userTable.type';
import { Request } from 'express';

// Récupération de la clé secrète Server
const SECRET_KEY_TOKEN_SERVER: string | undefined = process.env.SECRET_KEY_TOKEN_SERVER;

//--------------------------------------------------------------------------------------

async function createJwtTokenServerCarePlan(dataUser: userTableType): Promise<string> {
  if (!SECRET_KEY_TOKEN_SERVER) {
    return 'Error';
  }

  // Création des variables token
  const expiresIn: number = 60 * 60; // 1 heure
  const dateNow: number = await createDateNumberUtils(); // Date actuelle en timestamp UNIX

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

/*--------------------------------------------------------------------------------------*/
async function verifyJwtTokenCarePlan(req: Request): Promise<payloadType | boolean> {
  try {
    if (!SECRET_KEY_TOKEN_SERVER) {
      return false;
    }

    // Vérification du token
    const token = req.cookies?.jwtTokenServerCarePlan;
    if (!token) return false;

    const payload = jwt.verify(token, SECRET_KEY_TOKEN_SERVER) as payloadType;

    return payload;
  } catch (error) {
    return false;
  }
}

export { verifyJwtTokenCarePlan };
