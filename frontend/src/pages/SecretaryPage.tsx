import ConsultationList from '@/components/consultation/ConsultationList';
import { PatientDialog } from '@/components/patients/PatientDialog';
import { dateToDay } from '@/utiles/date.utile';
import { ButtonLink } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Outlet } from 'react-router';

const SecretaryPage = () => {
  return (
    <>
      <ButtonLink className="flex justify-center items-center gap-2" to="patient/creation">
        <Plus className="inline" /> {`Création d'un nouveau patient`}
      </ButtonLink>
      <ConsultationList date={dateToDay(new Date())} />
      <PatientDialog serverUrl={import.meta.env.VITE_APOLLO_SERVER} />
      <Outlet />
    </>
  );
};

export default SecretaryPage;
