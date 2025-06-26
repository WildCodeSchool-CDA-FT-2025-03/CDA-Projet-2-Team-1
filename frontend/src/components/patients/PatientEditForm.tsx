import React, { useState } from 'react';
import { useUpdatePatientMutation } from '@/gql/graphql-types';
import { Patient } from '@/types/patient';
import { Button } from '@/components/ui/button';

interface PatientEditFormProps {
  patient: Patient;
  onCancel: () => void;
  onSave?: () => void;
}

const PatientEditForm: React.FC<PatientEditFormProps> = ({ patient, onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    ...patient,
    birthdate: patient.birthdate.slice(0, 10), // Format YYYY-MM-DD
  });

  const [updatePatient, { loading, error }] = useUpdatePatientMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('city.')) {
      const field = name.split('.')[1] as keyof typeof formData.city;
      setFormData((prev) => ({
        ...prev,
        city: {
          ...prev.city,
          [field]: value,
        },
      }));
    } else if (name.startsWith('ssn.')) {
      const field = name.split('.')[1] as keyof typeof formData.ssn;
      setFormData((prev) => ({
        ...prev,
        ssn: {
          ...prev.ssn,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updatePatient({
        variables: {
          data: {
            id: formData.id,
            firstname: formData.firstname,
            lastname: formData.lastname,
            birthdate: formData.birthdate,
            gender: formData.gender,
            email: formData.email,
            city: {
              name: formData.city.name,
              zip_code: formData.city.zip_code,
            },
            ssn: {
              number: formData.ssn.number,
            },
          },
        },
      });

      if (onSave) onSave();
    } catch (err) {
      console.error('Erreur lors de la mise à jour du patient :', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-6 space-y-4">
      <h2 className="text-lg font-bold">Modifier le patient</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstname" className="block text-xs font-semibold text-gray-500">
            Prénom
          </label>
          <input
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          />
        </div>

        <div>
          <label htmlFor="lastname" className="block text-xs font-semibold text-gray-500">
            Nom
          </label>
          <input
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="birthdate" className="block text-xs font-semibold text-gray-500">
            Date de naissance
          </label>
          <input
            id="birthdate"
            name="birthdate"
            type="date"
            value={formData.birthdate}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          />
        </div>

        <div>
          <label htmlFor="gender" className="block text-xs font-semibold text-gray-500">
            Genre
          </label>
          <input
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-gray-500">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="city.zip_code" className="block text-xs font-semibold text-gray-500">
            Code postal
          </label>
          <input
            id="city.zip_code"
            name="city.zip_code"
            value={formData.city.zip_code}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          />
        </div>

        <div>
          <label htmlFor="city.name" className="block text-xs font-semibold text-gray-500">
            Ville
          </label>
          <input
            id="city.name"
            name="city.name"
            value={formData.city.name}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1"
          />
        </div>
      </div>

      <div>
        <label htmlFor="ssn.number" className="block text-xs font-semibold text-gray-500">
          Numéro de sécurité sociale
        </label>
        <input
          id="ssn.number"
          name="ssn.number"
          value={formData.ssn.number}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      {error && <p className="text-sm text-red-600">Une erreur est survenue : {error.message}</p>}

      <div className="flex gap-4 pt-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Enregistrement...' : 'Enregistrer'}
        </Button>
        <Button type="button" variant="ghost" onClick={onCancel}>
          Annuler
        </Button>
      </div>
    </form>
  );
};

export default PatientEditForm;
