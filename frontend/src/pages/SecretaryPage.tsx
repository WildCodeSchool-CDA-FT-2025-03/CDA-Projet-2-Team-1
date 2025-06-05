import { AppointmentButton } from '@/components/consultation/AppointmentButton';
import ConsultationList from '@/components/consultation/ConsultationList';
import { ConsultationRecord } from '@/components/consultation/ConsultationRecord';
import { PatientDialog } from '@/components/patients/PatientDialog';
import { useGetPatientsBasicQuery } from '@/gql/graphql-types';
import { type Patient } from '@/types/patient';
import { useState } from 'react';

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
      <PatientDialog serverUrl={import.meta.env.VITE_APOLLO_SERVER} />
      <ConsultationList date={new Date()} />
    </>
  );
};

export default SecretaryPage;
