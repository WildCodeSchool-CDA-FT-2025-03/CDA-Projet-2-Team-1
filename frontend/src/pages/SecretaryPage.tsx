import { AppointmentButton } from '@/components/consultation/AppointmentButton';
import ConsultationList from '@/components/consultation/ConsultationList';
import { ConsultationRecord } from '@/components/consultation/ConsultationRecord';
import { PatientDialog } from '@/components/patients/PatientDialog';

import { useGetPatientsBasicQuery } from '@/gql/graphql-types';
import { type Patient } from '@/types/patient';
import { useState } from 'react';

import { dateToDay } from '@/utiles/date.utile';
import { ButtonLink } from '@/components/ui/button';
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
      <AppointmentButton onClick={() => setIsModalOpen(true)} />

      <ConsultationRecord
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        patients={patients}
      />
      <ConsultationList date={new Date()} />

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
