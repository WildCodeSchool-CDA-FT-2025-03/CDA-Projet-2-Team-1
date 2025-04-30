import * as argon2 from 'argon2';

async function hashPasswordArgonUtils (passwordUser: string): Promise<string> {
    const hash: string = await argon2.hash(passwordUser);
    return hash;
}

export {hashPasswordArgonUtils};


async function verifyPasswordArgonUtils(passwordDB: string, passwordUser: string): Promise<boolean> {
    const verifyPassword: boolean = await argon2.verify(passwordDB, passwordUser);
    return verifyPassword;
}

export {verifyPasswordArgonUtils};
