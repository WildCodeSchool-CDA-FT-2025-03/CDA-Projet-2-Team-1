import Rest from '@/components/Rest';

const doctorId = '1'; // À remplacer par l'ID du médecin connecté

const DoctorPage = () => {
  return (
    <div>
      <h1>Bienvenue Docteur House</h1>
      <Rest user_id={doctorId} />
    </div>
  );
};
export default DoctorPage;
