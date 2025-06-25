import { Outlet } from 'react-router';
import { useState } from 'react';
// Components
import { ButtonLink } from '@/components/ui/button';
import ConsultationList from '@/components/consultation/ConsultationList';
import { PatientDialog } from '@/components/patients/PatientDialog';
// Utils
import { dateToDay } from '@/utils/date.utility';
// Styles
import { Plus } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';

const SecretaryPage = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <section className="flex flex-col gap-6" aria-label="Actions secrétariat">
        <div className="flex flex-row gap-6">
          <ButtonLink
            className="flex justify-center items-center gap-2 w-1/2"
            to="appointment/creation"
          >
            <Plus className="inline" aria-hidden="true" focusable="false" />{' '}
            {`Ajouter un nouveau rendez-vous`}
          </ButtonLink>
          <ButtonLink
            className="flex justify-center items-center gap-2 w-1/2"
            to="patient/creation"
          >
            <Plus className="inline" aria-hidden="true" focusable="false" />{' '}
            {`Création d'un nouveau patient`}
          </ButtonLink>
        </div>
        <PatientDialog />
      </section>
      <div className="flex flex-row gap-6 h-[90%]">
        {/* Section à mettre dans le composant calendrier */}
        <section className="w-1/2 flex flex-col justify-center items-center rounded-md border border-turquoise-600 bg-white">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </section>
        <ConsultationList date={dateToDay(new Date())} />
      </div>
      <Outlet />
    </>
  );
};

export default SecretaryPage;
