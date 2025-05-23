export interface City {
  name: string | null;
  zip_code: string | null;
}

// Type conforme au backend
export interface Patient {
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
}

export interface Ssn {
  number: string;
}

export interface PatientListProps {
  patients: Patient[];
}

export interface ErrorDisplayProps {
  error: Error;
  serverUrl: string;
}

export interface PatientDialogProps {
  serverUrl: string;
}

export interface PatientDetailProps {
  ssn: string;
  lastname: string;
  firstname: string;
  birthdate: Date | null;
  gender: string;
  email: string;
  zipCode: string;
  city: string;
  onShowDetail: (patient: null) => void;
}
