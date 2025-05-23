export type City = {
  name: string | null;
  zip_code: string | null;
};

// Type conforme au backend
export type Patient = {
  id: string;
  firstname: string;
  lastname: string;
  birthdate: Date | null;
  gender: string;
  email: string;
  ssn?: {
    number: string;
  } | null;
  city?: City | null;
};

export type Ssn = {
  number: string;
};

export type PatientListProps = {
  patients: Patient[];
};

export type ErrorDisplayProps = {
  error: Error;
  serverUrl: string;
};

export type PatientDialogProps = {
  serverUrl: string;
};

export type PatientDetailProps = {
  ssn: string;
  lastname: string;
  firstname: string;
  birthdate: Date | null;
  gender: string;
  email: string;
  zipCode: string;
  city: string;
  onShowDetail: (patient: null) => void;
};
