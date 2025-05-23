import AddUserForm from '@/components/user/AddUserForm';
import SelectServiceForm from '@/components/service/SelectServiceForm';

const AdminPage = () => {
  return (
    <div>
      <h1>Bienvenue Admin</h1>
      <AddUserForm />
      <SelectServiceForm />
    </div>
  );
};
export default AdminPage;
