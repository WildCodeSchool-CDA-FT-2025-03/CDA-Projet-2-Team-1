import crypto from 'crypto';

async function createCryptoUtils(): Promise<string> {
    return crypto.randomBytes(32).toString("hex");
}

export {createCryptoUtils};