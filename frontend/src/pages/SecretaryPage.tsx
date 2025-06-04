import ConsultationList from '@/components/consultation/ConsultationList';
import { PatientDialog } from '@/components/patients/PatientDialog';
import { ButtonLink } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Outlet } from 'react-router';

const SecretaryPage = () => {
  return (
    <>
      <ButtonLink to="patient/creation">
        <Plus /> {`Création d'un nouveau patient`}
      </ButtonLink>
      <ConsultationList date={new Date()} />
      <PatientDialog serverUrl={import.meta.env.VITE_APOLLO_SERVER} />
      <Outlet />
    </>
  );
};

export default SecretaryPage;
