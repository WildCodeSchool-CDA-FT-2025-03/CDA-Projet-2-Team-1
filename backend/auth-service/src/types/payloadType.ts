type payloadType = {
  id: number;
  email: string;
  firstname?: string;
  lastname?: string;
  address?: string;
  role: string;
  date_save?: string;
  iat: number; // Date de création du token
};

export default payloadType;
