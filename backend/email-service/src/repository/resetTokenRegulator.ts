import usePoolConnection from "../database/config";
import { RowDataPacket, ResultSetHeader, FieldPacket } from "mysql2";

// Récupération de tout les id et dates d'expiration dans la DB
async function getTokenResetRepository(): Promise<RowDataPacket[]> {
    const [results]: [RowDataPacket[], FieldPacket[]] = await usePoolConnection.query<RowDataPacket[]>(
        "SELECT id, expires_at FROM reset_password",
    )
    return results;
}

export {getTokenResetRepository};


// Suppression des tokens ciblés par un id dans la DB
async function deleteTokenResetRepository(tabExpiredToken: number[]): Promise<number | undefined> {
    // Vérification si le tableau est vide
    if (tabExpiredToken.length === 0) {
        return;
    }

    // Stockage de la requête SQL
    const querySQL: string = "DELETE FROM reset_password WHERE id IN (?)";
    // Exécution de la requête SQL
    const [results]: [ResultSetHeader, FieldPacket[]] = await usePoolConnection.query<ResultSetHeader>(querySQL, [tabExpiredToken]);
    return results.affectedRows
}

export {deleteTokenResetRepository};


// Récupération d'un token cible dans la DB
async function getOneTokenResetRepository(token: string): Promise<RowDataPacket[]> {
    const [results]: [RowDataPacket[], FieldPacket[]] = await usePoolConnection.query<RowDataPacket[]>(
        "SELECT * FROM reset_password WHERE token = ?", [token]
    )
    return results;
}

export {getOneTokenResetRepository};


// Suppression d'un token ciblé dans la DB
async function deletOneTokenResetRepository(token: string): Promise<number> {
    const [results]: [ResultSetHeader, FieldPacket[]] = await usePoolConnection.query<ResultSetHeader>(
        "DELETE FROM reset_password WHERE token = ?", [token]
    )
    return results.affectedRows;
}

export {deletOneTokenResetRepository};
