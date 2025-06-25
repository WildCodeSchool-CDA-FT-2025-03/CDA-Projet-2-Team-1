import { useState } from 'react';
import { ButtonLink } from '@/components/ui/button';
import ConsultationList from '@/components/consultation/ConsultationList';
import { Outlet } from 'react-router';
import { PatientDialog } from '@/components/patients/PatientDialog';
import { Plus } from 'lucide-react';
// import { dateToDay } from '@/utils/date.utility';
import { Calendar } from '@/components/ui/calendar';

const SecretaryPage = () => {
  const [date, setDate] = useState(new Date());
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
      <ConsultationList date={date} />
      <PatientDialog />
      <aside className="lg:col-span-1">
        <section className={`bg-white p-4 h-[calc(400px+4rem)] flex flex-col w-1/2`}>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            // className="flex-1 rounded-md [&_.rdp-day_selected]:bg-[#0395d3] [&_.rdp-day_selected]:text-white [&_.rdp-day_selected:hover]:bg-[#0284bc]"
            // autoFocus={true}
            disabled={{ before: date }}
            fromDate={new Date()}
            toDate={new Date(date.setFullYear(new Date().getFullYear() + 1))}
          />
        </section>
      </aside>
      <Outlet />
    </>
  );
};

export default SecretaryPage;
