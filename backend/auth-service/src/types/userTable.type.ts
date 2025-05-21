type userTableType = {
  id: number;
  firstname: string;
  lastname: string;
  genre: 'M' | 'F';
  email: string;
  password: string;
  is_active: boolean;
  service_id: number;
  role_id: number;
  created_at: string;
  iat?: number; // Date de création du token
};

export default userTableType;
