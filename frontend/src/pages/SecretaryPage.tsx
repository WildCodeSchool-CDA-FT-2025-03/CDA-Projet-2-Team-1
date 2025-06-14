import ConsultationList from '@/components/consultation/ConsultationList';
import { PatientDialog } from '@/components/patients/PatientDialog';
import { ButtonLink } from '@/components/ui/button';
import { dateToDay } from '@/utils/date.utility';
import { Plus } from 'lucide-react';
import { Outlet } from 'react-router';

const SecretaryPage = () => {
  return (
    <>
      <div className="flex gap-2 mb-4">
        <ButtonLink
          className="flex justify-center items-center gap-2 w-1/2"
          to="appointment/creation"
        >
          <Plus className="inline" /> {`Ajouter un nouveau rendez-vous`}
        </ButtonLink>
        <ButtonLink className="flex justify-center items-center gap-2 w-1/2" to="patient/creation">
          <Plus className="inline" /> {`Création d'un nouveau patient`}
        </ButtonLink>
      </div>
      <ConsultationList date={dateToDay(new Date())} />
      <PatientDialog />
      <Outlet />
    </>
  );
};

export default SecretaryPage;
