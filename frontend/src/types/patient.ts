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
