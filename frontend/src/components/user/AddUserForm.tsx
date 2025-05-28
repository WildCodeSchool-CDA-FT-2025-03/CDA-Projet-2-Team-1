import { useState } from 'react';
import Rolelist from '../role/RoleList';
import Servicelist from '../service/ServiceList';
import { InputLabel } from '../ui/input';

function AddUserForm() {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');

  const addUser = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const payload = {
      service_id: selectedService,
      role_id: selectedRole,
      name,
      firstname,
      email,
    };

    console.info(payload);
  };

  return (
    <form onSubmit={addUser}>
      <Rolelist value={selectedRole} handleChange={setSelectedRole} />
      <Servicelist value={selectedService} handleChange={setSelectedService} />

      <InputLabel
        id="name"
        label="Nom"
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <InputLabel
        id="Prenom"
        label="Prenom"
        type="text"
        name="firstname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        required
      />

      <InputLabel
        id="email"
        label="email"
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        pattern="[^@\s]+@hopital\.gouv\.fr$"
        title="email en @hopital.gouv.fr seulement"
      />

      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddUserForm;
