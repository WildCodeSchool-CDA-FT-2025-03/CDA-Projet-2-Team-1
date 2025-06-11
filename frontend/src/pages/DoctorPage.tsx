import Rest from '@/components/Rest/Rest';

const doctorId = 'b1aef857-4ca5-4da1-bb55-4eb9a05da185'; // À remplacer par l'ID du médecin connecté

const DoctorPage = () => {
  return (
    <section>
      <Rest user_id={doctorId} />
    </section>
  );
};
export default DoctorPage;
