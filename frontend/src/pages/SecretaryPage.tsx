import { PatientDialog } from '@/components/patients/PatientDialog';

const SecretaryPage = () => {
  return <PatientDialog serverUrl={import.meta.env.VITE_APOLLO_SERVER} />;
};

export default SecretaryPage;
