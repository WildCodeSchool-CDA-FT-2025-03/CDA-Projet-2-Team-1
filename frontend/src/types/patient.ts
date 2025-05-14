export type Patient = {
  id: string;
  time: string;
  lastName: string;
  firstName: string;
  doctor: {
    name: string;
    specialty: string;
  };
};
