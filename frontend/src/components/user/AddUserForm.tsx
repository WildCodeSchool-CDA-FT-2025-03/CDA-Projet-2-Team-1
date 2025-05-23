import { useState } from 'react';
import Rolelist from '../role/RoleList';
import Servicelist from '../service/ServiceList';
function AddUserForm() {
  const [selectedRole, setSelectedRole] = useState('admin');
  const [selectedSevice, setSelectedService] = useState('services');
  return (
    <form>
      <Rolelist value={selectedRole} handleChange={setSelectedRole} />
      <Servicelist value={selectedSevice} handleChange={setSelectedService} />
    </form>
  );
}

export default AddUserForm;
