export type Patient = {
  id: string;
  firstName: string;
  lastName: string;
  ssn?: Ssn | null;
};

export type Ssn = {
  id: string;
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
  patients: Patient[] | undefined;
  loading: boolean;
  error: Error | undefined;
  serverUrl: string;
};
