import { useState } from 'react';
import Servicelist from '../service/ServiceList';
function SelectServiceForm() {
  const [selectedSevice, setSelectedService] = useState('services');
  return (
    <form>
      <Servicelist value={selectedSevice} handleChange={setSelectedService} />
    </form>
  );
}

export default SelectServiceForm;
