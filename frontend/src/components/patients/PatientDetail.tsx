import { Button } from '@/components/ui/button';
import { PatientDetailProps } from '@/types/patient';
import { ChevronLeft } from 'lucide-react';
import React from 'react';

// Exemple de props, à adapter selon vos données réelles
export const PatientDetail: React.FC<PatientDetailProps> = ({
  ssn,
  lastname,
  firstname,
  birthdate,
  gender,
  email,
  zipCode,
  city,
  onShowDetail,
}) => {
  // Affiche uniquement la date (YYYY-MM-DD) même si birthdate est un DateTime ISO
  let displayBirthdate: string = '';
  if (birthdate instanceof Date) {
    displayBirthdate = birthdate.toISOString().slice(0, 10);
  }

  return (
    <section
      aria-labelledby="patient-details-title"
      className="w-full p-6 focus-within:ring-2 focus-within:ring-blue-500"
    >
      <Button onClick={() => onShowDetail(null)} variant="ghost" className="gap-2 pl-0 mb-6">
        <ChevronLeft className="h-4 w-4" />
        Retour à la liste
      </Button>
      <h2 id="patient-details-title" className="sr-only">
        Détails du patient
      </h2>
      <form aria-describedby="patient-details-desc" className="space-y-4" aria-live="polite">
        <fieldset className="space-y-2">
          <legend className="text-xs font-semibold text-gray-500 mb-2">
            N° de sécurité sociale
          </legend>
          <input
            type="text"
            value={ssn}
            readOnly
            aria-label="Numéro de sécurité sociale"
            className="w-full bg-gray-100 text-lg font-semibold tracking-widest rounded px-2 py-1 border border-gray-200 focus:outline-none"
            aria-readonly="true"
            tabIndex={0}
          />
        </fieldset>
        <ul className="space-y-4">
          <li className="grid grid-cols-1 md:grid-cols-2 gap-4div">
            <div>
              <label htmlFor="lastname" className="block text-xs font-semibold text-gray-500">
                Nom
              </label>
              <input
                id="lastname"
                type="text"
                value={lastname}
                readOnly
                className="w-full bg-transparent font-bold text-base px-2 py-1 border-none focus:outline-none"
                aria-readonly="true"
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
                readOnly
                className="w-full bg-transparent font-bold text-base px-2 py-1 border-none focus:outline-none"
                aria-readonly="true"
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
                type="text"
                value={displayBirthdate}
                readOnly
                className="w-full bg-transparent px-2 py-1 border-none focus:outline-none"
                aria-readonly="true"
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
                readOnly
                className="w-full bg-transparent px-2 py-1 border-none focus:outline-none"
                aria-readonly="true"
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
              readOnly
              className="w-full bg-transparent px-2 py-1 border-none focus:outline-none"
              aria-readonly="true"
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
                readOnly
                className="w-full bg-transparent px-2 py-1 border-none focus:outline-none"
                aria-readonly="true"
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
                readOnly
                className="w-full bg-transparent px-2 py-1 border-none focus:outline-none"
                aria-readonly="true"
              />
            </div>
          </li>
        </ul>
      </form>
    </section>
  );
};

export default PatientDetail;
