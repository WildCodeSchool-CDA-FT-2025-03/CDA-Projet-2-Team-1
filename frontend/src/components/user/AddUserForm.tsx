import { useState } from 'react';
import Rolelist from '../role/RoleList';
import Servicelist from '../service/ServiceList';

function AddUserForm() {
  const [selectedRole, setSelectedRole] = useState('admin');
  const [selectedSevice, setSelectedService] = useState('services');
  const [name, setName] = useState('name');
  const [firstname, setFirstname] = useState('firstname');
  const [email, setEmail] = useState('email');

  return (
    <form>
      <Rolelist value={selectedRole} handleChange={setSelectedRole} />
      <Servicelist value={selectedSevice} handleChange={setSelectedService} />
      <label>
        Nom :
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Prénom :
        <input
          type="text"
          name="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </label>
      <label>
        mél :
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit" value={'créer'}>
        {' '}
        ajouter
      </button>
    </form>
  );
}

export default AddUserForm;
