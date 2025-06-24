import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { PatientEditFormProps } from '@/types/patient';

const PatientEditForm: React.FC<PatientEditFormProps> = ({ patient, onCancel, onSuccess }) => {
  const [firstname, setFirstname] = useState(patient.firstname);
  const [lastname, setLastname] = useState(patient.lastname);
  const [birthdate, setBirthdate] = useState(patient.birthdate.slice(0, 10)); // format YYYY-MM-DD
  const [gender, setGender] = useState(patient.gender);
  const [email, setEmail] = useState(patient.email);
  const [zipCode, setZipCode] = useState(patient.city.zip_code);
  const [city, setCity] = useState(patient.city.name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ici tu pourras appeler ta mutation GraphQL
    // console.log('Formulaire soumis :', {
    //   id: patient.id,
    //   firstname,
    //   lastname,
    //   birthdate,
    //   gender,
    //   email,
    //   zipCode,
    //   city,
    // });

    // Appel du callback de succès (tu pourras faire mieux après la mutation)
    onSuccess();
  };

  return (
    <section className="w-full p-6">
      <Button onClick={onCancel} variant="ghost" className="gap-2 pl-0 mb-6 cursor-pointer">
        <ChevronLeft className="h-4 w-4" />
        Annuler la modification
      </Button>
      <h2 className="sr-only">Modifier le patient</h2>

      <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
        <fieldset className="space-y-2">
          <legend className="text-xs font-semibold text-gray-500 mb-2">
            N° de sécurité sociale (non modifiable)
          </legend>
          <input
            type="text"
            value={patient.ssn.number}
            readOnly
            className="w-full text-lg font-semibold tracking-widest rounded px-2 py-1 bg-gray-100"
          />
        </fieldset>

        <ul className="space-y-4">
          <li className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="lastname" className="block text-xs font-semibold text-gray-500">
                Nom
              </label>
              <input
                id="lastname"
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="w-full border px-2 py-1 rounded"
              />
            </div>
            <div>
              <label htmlFor="firstname" className="block text-xs font-semibold text-gray-500">
                Prénom
              </label>
              <input
                id="firstname"
                type="text"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="w-full border px-2 py-1 rounded"
              />
            </div>
          </li>
          <li className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="birthdate" className="block text-xs font-semibold text-gray-500">
                Date de naissance
              </label>
              <input
                id="birthdate"
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="w-full border px-2 py-1 rounded"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-xs font-semibold text-gray-500">
                Genre
              </label>
              <input
                id="gender"
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full border px-2 py-1 rounded"
              />
            </div>
          </li>
          <li>
            <label htmlFor="email" className="block text-xs font-semibold text-gray-500">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-2 py-1 rounded"
            />
          </li>
          <li className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="zipCode" className="block text-xs font-semibold text-gray-500">
                Code postal
              </label>
              <input
                id="zipCode"
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full border px-2 py-1 rounded"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-xs font-semibold text-gray-500">
                Ville
              </label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border px-2 py-1 rounded"
              />
            </div>
          </li>
        </ul>

        <div className="pt-6">
          <Button type="submit" className="w-full">
            Enregistrer les modifications
          </Button>
        </div>
      </form>
    </section>
  );
};

export default PatientEditForm;
