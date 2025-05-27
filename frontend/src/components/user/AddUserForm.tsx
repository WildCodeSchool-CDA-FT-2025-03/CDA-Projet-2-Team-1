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
      <label>
        Nom :
        <input type="text" name="name" />
      </label>
      <label>
        Prénom :
        <input type="text" name="firstname" />
      </label>
      <label>
        mél :
        <input type="text" name="email" />
      </label>
      <input type="submit" value={'créer'} />
    </form>
  );
}

export default AddUserForm;
