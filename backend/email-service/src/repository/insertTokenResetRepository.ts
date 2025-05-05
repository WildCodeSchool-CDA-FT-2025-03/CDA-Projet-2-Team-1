import usePoolConnection from "../database/config";
import { ResultSetHeader } from "mysql2";

async function insertTokenResetRepository(userId: number, token: string, expiresAt: Date): Promise<ResultSetHeader> {
    const [results] = await usePoolConnection.query<ResultSetHeader>(
        "INSERT INTO reset_password (user_id, token, expires_at) VALUES (?, ?, ?)",
        [userId, token, expiresAt],
    )
    return results;
}

export default insertTokenResetRepository;
