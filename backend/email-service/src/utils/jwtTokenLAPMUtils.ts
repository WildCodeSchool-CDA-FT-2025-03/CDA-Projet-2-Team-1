import payloadType from "../types/payloadType";
import { createDate_Number_Utils } from "./createDateUtils";
import jwt from "jsonwebtoken";
import { Request } from "express";

// Récupération de la clé secrète Server
const SECRET_KEY_TOKEN_SERVER: string | undefined = process.env.SECRET_KEY_TOKEN_SERVER;        
// Récupération de la clé secrète Client
const SECRET_KEY_TOKEN_CLIENT: string | undefined = process.env.SECRET_KEY_TOKEN_CLIENT;

//--------------------------------------------------------------------------------------

async function createJwtTokenServerLAPM(dataUser: payloadType): Promise<string | boolean> {
    if (!SECRET_KEY_TOKEN_SERVER) {
        return false
    }

    // Création des variables token
    const expiresIn: number = 60 * 60; // 1 heure
    const dateNow: number = await createDate_Number_Utils(); // Date actuelle en timestamp UNIX

    const payload_server: payloadType = {
        id: dataUser.id,
        email: dataUser.email,
        role: dataUser.role,
        iat: dateNow, // ⏳ Date de création du token
    }

    // Création du token server
    const jwtTokenServerLAPM = jwt.sign(payload_server, SECRET_KEY_TOKEN_SERVER, { expiresIn })

    return jwtTokenServerLAPM;
}

export { createJwtTokenServerLAPM };


async function createJwtTokenClientLAPM(dataUser: payloadType): Promise<string | boolean> {
    if (!SECRET_KEY_TOKEN_CLIENT) {
        return false
    }

    // Création des variables token
    const expiresIn: number = 60 * 60; // 1 heure
    const dateNow: number = await createDate_Number_Utils(); // Date actuelle en timestamp UNIX

    const payload_client: payloadType = {
        id: dataUser.id,
        email: dataUser.email,
        firstname: dataUser.firstname,
        lastname: dataUser.lastname,
        address: dataUser.address,
        role: dataUser.role,
        date_save: dataUser.date_save,
        iat: dateNow, // ⏳ Date de création du token
    }

    // Création du token client
    const jwtTokenClientLAPM = jwt.sign(payload_client, SECRET_KEY_TOKEN_CLIENT, { expiresIn })

    return jwtTokenClientLAPM;
}

export { createJwtTokenClientLAPM };


async function verifyJwtTokenLAPM(req: Request): Promise<payloadType | boolean> {
    try {
        if (!SECRET_KEY_TOKEN_SERVER) {
            return false
        }
    
        // Vérification du token
        const token = req.cookies?.jwtTokenServerLAPM;
        if (!token) return false;
    
        const payload = jwt.verify(token, SECRET_KEY_TOKEN_SERVER) as payloadType;
    
        return payload;;
    }
    catch (error) {
        return false;
    }
}

export { verifyJwtTokenLAPM };
