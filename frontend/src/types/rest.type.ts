export type RestEvent = {
  id: number;
  user_id: string;
  start: Date;
  end: Date;
  type: 'Congé' | 'Maladie' | 'Formation';
};

export type RestProps = {
  user_id: string;
};
