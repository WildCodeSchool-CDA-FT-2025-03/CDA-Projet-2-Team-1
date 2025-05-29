import ConsultationList from '@/components/consultation/ConsultationList';
import Modal from '@/components/Modal';
import CreatePatient from '@/components/patients/CreatePatient';
import { PatientDialog } from '@/components/patients/PatientDialog';

const SecretaryPage = () => {
  return (
    <>
      <ConsultationList date={new Date()} />
      <PatientDialog serverUrl={import.meta.env.VITE_APOLLO_SERVER} />
      <Modal>
        <CreatePatient />
      </Modal>
    </>
  );
};

export default SecretaryPage;
