export type RestEvent = {
  id: number;
  start: Date;
  end: Date;
  type: 'Congé' | 'Maladie' | 'Formation';
};
