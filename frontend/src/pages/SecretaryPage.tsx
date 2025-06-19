import { ButtonLink } from '@/components/ui/button';
import ConsultationList from '@/components/consultation/ConsultationList';
import { Outlet } from 'react-router';
import { PatientDialog } from '@/components/patients/PatientDialog';
import { Plus } from 'lucide-react';
import { dateToDay } from '@/utils/date.utility';

const SecretaryPage = () => {
  return (
    <>
      <section className="flex gap-2 mb-4" aria-label="Actions secrétariat">
        <ButtonLink
          className="flex justify-center items-center gap-2 w-1/2"
          to="appointment/creation"
        >
          <Plus className="inline" aria-hidden="true" focusable="false" />{' '}
          {`Ajouter un nouveau rendez-vous`}
        </ButtonLink>
        <ButtonLink className="flex justify-center items-center gap-2 w-1/2" to="patient/creation">
          <Plus className="inline" aria-hidden="true" focusable="false" />{' '}
          {`Création d'un nouveau patient`}
        </ButtonLink>
      </section>
      <ConsultationList date={dateToDay(new Date())} />
      <PatientDialog />
      <Outlet />
    </>
  );
};

export default SecretaryPage;
