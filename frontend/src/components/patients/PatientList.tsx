import { type PatientListProps } from '@/types/patient';
import './patients.css';

export const PatientList = ({ patients }: PatientListProps) => {
  if (patients.length === 0) {
    return <p>Aucun patient trouvé.</p>;
  }

  return (
    <ul className="patients-list">
      {patients.map((patient) => (
        <li key={patient.id} className="patients-list-item">
          <p className="patients-list-name">
            {patient.firstName} {patient.lastName} {patient.ssn?.number}
          </p>
        </li>
      ))}
    </ul>
  );
};
