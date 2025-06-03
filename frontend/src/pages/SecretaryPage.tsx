import ConsultationList from '@/components/consultation/ConsultationList';
import { PatientDialog } from '@/components/patients/PatientDialog';
import { dateToDay } from '@/utiles/date.utile';

const SecretaryPage = () => {
  return (
    <>
      <ConsultationList date={dateToDay(new Date())} />
      <PatientDialog serverUrl={import.meta.env.VITE_APOLLO_SERVER} />
    </>
  );
};

export default SecretaryPage;
