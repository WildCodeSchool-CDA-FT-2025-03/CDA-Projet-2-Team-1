import usePoolConnection from "../database/config";
import { ResultSetHeader } from "mysql2";

async function insertUserRepository(firstname: string, lastname: string, address: string, email: string, password: string): Promise<ResultSetHeader> {
    const [results] = await usePoolConnection.query<ResultSetHeader>(
        "INSERT INTO user (firstname, lastname, address, email, password) VALUES (?, ?, ?, ?, ?)",
        [firstname, lastname, address, email, password],
    )
    return results;
}

export default insertUserRepository;
