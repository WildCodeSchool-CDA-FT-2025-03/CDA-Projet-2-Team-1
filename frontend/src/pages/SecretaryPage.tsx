import ConsultationList from '@/components/consultation/ConsultationList';
import Modal from '@/components/Modal';
import CreatePatient from '@/components/patients/CreatePatient';
import { PatientDialog } from '@/components/patients/PatientDialog';
import { Button } from '@/components/ui/button';
import useModal from '@/context/ModalNav';

const SecretaryPage = () => {
  const { open } = useModal();

  const openCreatePatient = () => {
    open(<CreatePatient />);
  };

  return (
    <>
      <Button onClick={openCreatePatient}>+ Creation d&apos;un nouveau patient</Button>
      <ConsultationList date={new Date()} />
      <PatientDialog serverUrl={import.meta.env.VITE_APOLLO_SERVER} />
      <Modal />
    </>
  );
};

export default SecretaryPage;
