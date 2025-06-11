import argon2 from 'argon2';

async function createpass(password: string) {
  try {
    const hashpw = await argon2.hash(password);
    return hashpw;
  } catch (err) {
    console.error('erreur hashage', err);
  }
}
export default createpass;
