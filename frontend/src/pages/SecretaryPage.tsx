import { AppointmentButton } from '@/components/consultation/AppointmentButton';
import ConsultationList from '@/components/consultation/ConsultationList';
import { ConsultationRecord } from '@/components/consultation/ConsultationRecord';
import { PatientDialog } from '@/components/patients/PatientDialog';

import { useGetPatientsBasicQuery } from '@/gql/graphql-types';
import { type Patient } from '@/types/patient';
import { useState } from 'react';

import { ButtonLink } from '@/components/ui/button';
import { dateToDay } from '@/utils/date.utility';
import { Plus } from 'lucide-react';
import { Outlet } from 'react-router';

const SecretaryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Récupérer la liste des patients via GraphQL
  const { data: basicData } = useGetPatientsBasicQuery();

  // Convertir les données GraphQL en format Patient
  const patients: Patient[] =
    basicData?.patients.map((patient) => ({
      id: patient.id,
      firstname: patient.firstname,
      lastname: patient.lastname,
      birthdate: new Date().toISOString(),
      gender: '',
      email: '',
      ssn: { number: patient.ssn.number },
      city: { name: '', zip_code: '' },
    })) || [];

  return (
    <>
      <div className="flex gap-6 w-full p-4">
        <div className="w-1/2">
          <AppointmentButton onClick={() => setIsModalOpen(true)} />
        </div>

        <div className="w-1/2">
          <ButtonLink
            className="w-full h-12 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
            to="patient/creation"
          >
            <Plus className="h-5 w-5" />
            Ajouter un nouveau patient
          </ButtonLink>
        </div>
      </div>

      <ConsultationRecord
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        patients={patients}
      />

      <ConsultationList date={dateToDay(new Date())} />
      <PatientDialog serverUrl={import.meta.env.VITE_APOLLO_SERVER} />
      <Outlet />
    </>
  );
};

export default SecretaryPage;
