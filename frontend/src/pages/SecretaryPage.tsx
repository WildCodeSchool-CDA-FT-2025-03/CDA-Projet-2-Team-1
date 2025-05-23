import ConsultationList from '@/components/consultation/ConsultationList';
import { PatientDialog } from '@/components/patients/PatientDialog';

const SecretaryPage = () => {
  return (
    <>
      <ConsultationList date={new Date()} />
      <h1>test</h1>
      <PatientDialog serverUrl={import.meta.env.VITE_APOLLO_SERVER} />
    </>
  );
};

export default SecretaryPage;
