import Rest from '@/components/Rest';

const doctorId = 'b1aef857-4ca5-4da1-bb55-4eb9a05da185'; // À remplacer par l'ID du médecin connecté

const DoctorPage = () => {
  return (
    <div>
      <h1>Bienvenue Docteur House</h1>
      <Rest user_id={doctorId} />
    </div>
  );
};
export default DoctorPage;
