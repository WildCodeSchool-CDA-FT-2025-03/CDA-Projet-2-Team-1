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

type ResetForEmailServicePayload = {
  userId: string;
  email: string;
  serviceOrigin: string;
};

export { payloadType, ResetForEmailServicePayload };
