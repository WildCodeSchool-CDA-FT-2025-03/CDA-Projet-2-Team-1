import { type PatientListProps } from '@/types/patient';

export const PatientList = ({ patients }: PatientListProps) => {
  if (patients.length === 0) {
    return <p>Aucun patient trouvé.</p>;
  }

  return (
    <ul className="list-none p-0 m-0" aria-label="Liste des patients">
      {patients.map((patient) => (
        <li
          key={patient.id}
          className="p-4 border border-gray-200 rounded mb-4 last:mb-0"
          aria-label={`Patient: ${patient.firstName} ${patient.lastName}`}
        >
          <p className="font-bold m-0">
            {patient.firstName} {patient.lastName} {patient.ssn?.number}
          </p>
        </li>
      ))}
    </ul>
  );
};
