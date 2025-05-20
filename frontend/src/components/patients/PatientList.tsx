import { type PatientListProps } from '@/types/patient';

export const PatientList = ({ patients }: PatientListProps) => {
  if (patients.length === 0) {
    return <p>Aucun patient trouvé.</p>;
  }

  return (
    <ul className="space-y-4">
      {patients.map((patient) => (
        <li key={patient.id} className="p-4 bg-white border rounded shadow-sm">
          <p className="font-semibold">
            {patient.firstName} {patient.lastName} {patient.ssn.number}
          </p>
        </li>
      ))}
    </ul>
  );
};
