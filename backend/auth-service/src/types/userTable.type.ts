export type UserInput = {
  firstname: string;
  lastname: string;
  genre: 'M' | 'F';
  email: string;
  password: string;
  service_id: number;
  role_id: number;
};

export type UserType = UserInput & {
  id: number;
  is_active: boolean;
  created_at: string;
};
