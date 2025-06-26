import { type Patient } from '@/types/patient';
import { Button } from '../ui/button';

interface PatientListWithDetailProps {
  patients: Patient[];
  onShowDetail: (patient: Patient) => void;
}

export const PatientList = ({ patients, onShowDetail }: PatientListWithDetailProps) => {
  if (patients.length === 0) {
    return <p>Aucun patient trouvé.</p>;
  }

  return (
    <ul className="list-none p-0 m-0" aria-label="Liste des patients">
      {patients.map((patient) => (
        <li
          key={patient.id}
          className="p-4 border border-gray-200 rounded-md mb-4 last:mb-0 flex items-center justify-between"
          aria-label={`Patient: ${patient.firstname} ${patient.lastname}`}
        >
          <span className="font-bold m-0">
            {patient.firstname} {patient.lastname} {patient.ssn?.number}
          </span>
          <Button
            type="button"
            onClick={() => onShowDetail(patient)}
            aria-label={`Afficher plus de détails pour ${patient.firstname} ${patient.lastname}`}
          >
            Afficher plus de détail
          </Button>
        </li>
      ))}
    </ul>
  );
};
