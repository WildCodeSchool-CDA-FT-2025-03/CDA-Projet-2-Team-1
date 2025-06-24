import { useState } from 'react';
import Rolelist from '../role/RoleList';
import Servicelist from '../service/ServiceList';
import { InputLabel } from '../ui/input';
import Select from '../formUi/Select';
import axiosClient from '@/lib/axios-client';
import { toastSuccess, toastError } from '../ui/toast';
import { ToastContainer } from 'react-toastify';
import { Button } from '../ui/button';
function AddUserForm() {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [genre, setGenre] = useState('');
  const addUser = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await axiosClient.post('/auth/register', {
        email,
        firstname,
        lastname,
        genre,
        role_id: selectedRole,
        service_id: selectedService,
      });
      setLastname('');
      setFirstname('');
      setEmail('');
      setGenre('');
      setSelectedRole('');
      setSelectedService('');
      toastSuccess(`Utilisateur ajouté avec succès`);
    } catch (err) {
      console.error(err);
      toastError(`Erreur lors de l'ajout de l'utilisateur`);
    }
  };

  return (
    <form onSubmit={addUser} className="m-4 flex flex-col gap-4">
      <Rolelist value={selectedRole} handleChange={setSelectedRole} />
      <Servicelist value={selectedService} handleChange={setSelectedService} />
      <InputLabel
        id="name"
        label="Nom"
        type="text"
        name="name"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        required
      />
      <InputLabel
        id="Prénom"
        label="Prénom"
        type="text"
        name="firstname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
        required
      />
      <div className="w-64 ">
        <Select
          value={genre}
          handleChange={setGenre}
          label="Choisissez un genre"
          list={[
            { name: 'Homme', id: 'M' },
            { name: 'Femme', id: 'F' },
          ]}
          field="name"
        />
      </div>
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
      <Button type="submit">Ajouter</Button>
      <ToastContainer />
    </form>
  );
}

export default AddUserForm;
