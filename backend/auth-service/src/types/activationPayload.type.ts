type payloadType = {
  id: number;
  email: string;
  firstname?: string;
  lastname?: string;
  role_id: number;
  service_id: number;
  create_at?: string;
  iat: number; // Date de création du token
};

type activationEmail = {
  userId: string;
  email: string;
  activationUrl: string;
  serviceOrigin: string;
};

export { payloadType, activationEmail };
