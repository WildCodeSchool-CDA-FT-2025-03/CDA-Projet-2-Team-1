import { sign } from 'jsonwebtoken';

describe('reset email', () => {
  const payload = {
    userId: 'cb652e9c-6dd0-4845-bcfc-28e9f216f84f',
    email: 'test@example.com',
    resetUrl: 'https://example.foo/reset',
    serviceOrigin: 'auth',
  };

  it('Should send email', async () => {
    const token = sign(payload, process.env.SECRET_KEY_TOKEN_SERVER!, {
      expiresIn: '1h',
    });
    const result = await fetch('http://localhost:9501/reset', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    expect(result.status).toBe(200);
  });

  it('Should return 400 Bad Request', async () => {
    const payloadErr = {
      ...payload,
      email: 'invalid-email',
    };
    const token = sign(payloadErr, process.env.SECRET_KEY_TOKEN_SERVER!, {
      expiresIn: '1h',
    });
    const result = await fetch('http://localhost:9501/reset', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    expect(result.status).toBe(400);
  });

  it('Should return 401 Unauthorized (bad origin)', async () => {
    const payloadErr = {
      ...payload,
      serviceOrigin: 'invalid-service',
    };
    const token = sign(payloadErr, process.env.SECRET_KEY_TOKEN_SERVER!, {
      expiresIn: '1h',
    });
    const result = await fetch('http://localhost:9501/reset', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    expect(result.status).toBe(401);
  });

  it('Should return 401 Unauthorized', async () => {
    const result = await fetch('http://localhost:9501/reset', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    expect(result.status).toBe(401);
  });
});
