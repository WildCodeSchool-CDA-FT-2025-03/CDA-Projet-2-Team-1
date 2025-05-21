export type Patient = {
  id: string;
  firstName: string;
  lastName: string;
  ssn?: Ssn | null;
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
