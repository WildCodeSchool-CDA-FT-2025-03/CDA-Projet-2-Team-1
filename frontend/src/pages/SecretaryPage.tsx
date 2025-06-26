import { Outlet } from 'react-router';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
// Components
import { ButtonLink } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import ConsultationList from '@/components/consultation/ConsultationList';
import { PatientDialog } from '@/components/patients/PatientDialog';
// Styles
import { Plus } from 'lucide-react';

const SecretaryPage = () => {
  const [date, setDate] = useState(new Date());

  const setDateFromCalendar = (d: Date) => {
    if (d) {
      d.setHours(5);
      setDate(d);
    } else {
      setDate(new Date());
    }
  };
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
        <aside className="w-1/2 h-full flex flex-col justify-center items-center rounded-md border border-turquoise-600 bg-white">
          <Calendar
            required
            className="w-full h-full"
            mode="single"
            selected={date}
            onSelect={setDateFromCalendar}
          />
        </aside>
        <ConsultationList date={date} />
      </div>
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default SecretaryPage;
