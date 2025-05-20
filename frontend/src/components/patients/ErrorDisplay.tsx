import { type ErrorDisplayProps } from '@/types/patient';
import './patients.css';

export const ErrorDisplay = ({ error, serverUrl }: ErrorDisplayProps) => {
  return (
    <div className="patients-error">
      <p className="patients-error-message">
        Erreur lors du chargement des patients: {error.message}
      </p>
      <p className="patients-error-details">
        Vérifiez que le serveur backend est accessible sur {serverUrl}/graphql
      </p>
    </div>
  );
};
