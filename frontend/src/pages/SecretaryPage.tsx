import { ButtonLink } from '@/components/ui/button';
import ConsultationList from '@/components/consultation/ConsultationList';
import { Outlet } from 'react-router';
import { PatientDialog } from '@/components/patients/PatientDialog';
import { Plus } from 'lucide-react';
import { dateToDay } from '@/utils/date.utility';

const SecretaryPage = () => {
  return (
    <>
      <div className="flex gap-2 mb-4" role="region" aria-label="Actions secrétariat">
        <ButtonLink
          className="flex justify-center items-center gap-2 w-1/2"
          to="appointment/creation"
          aria-label="Ajouter un nouveau rendez-vous"
          title="Ajouter un nouveau rendez-vous"
        >
          <Plus className="inline" aria-hidden="true" focusable="false" />{' '}
          {`Ajouter un nouveau rendez-vous`}
        </ButtonLink>
        <ButtonLink
          className="flex justify-center items-center gap-2 w-1/2"
          to="patient/creation"
          aria-label="Créer un nouveau patient"
          title="Créer un nouveau patient"
        >
          <Plus className="inline" aria-hidden="true" focusable="false" />{' '}
          {`Création d'un nouveau patient`}
        </ButtonLink>
      </div>
      <ConsultationList date={dateToDay(new Date())} />
      <PatientDialog />
      <Outlet />
    </>
  );
};

export default SecretaryPage;
