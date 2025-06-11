export type City = {
  name: string;
  zip_code: string;
};

export type Patient = {
  id: string;
  firstname: string;
  lastname: string;
  birthdate: string;
  gender: string;
  email: string;
  ssn: {
    number: string;
  };
  city: City;
};

export type Ssn = {
  number: string;
};

export type PatientListProps = {
  patients: Patient[];
};


export type PatientDetailProps = {
  ssn: string;
  lastname: string;
  firstname: string;
  birthdate: string;
  gender: string;
  email: string;
  zipCode: string;
  city: string;
  onShowDetail: (patient: null) => void;
};
