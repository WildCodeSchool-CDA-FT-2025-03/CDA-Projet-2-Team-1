import { useState } from 'react';
import Rolelist from '../role/RoleList';

function AddUserForm() {
  const [selectedRole, setSelectedRole] = useState('admin');
  return (
    <form>
      <Rolelist value={selectedRole} handleChange={setSelectedRole} />
    </form>
  );
}

export default AddUserForm;
