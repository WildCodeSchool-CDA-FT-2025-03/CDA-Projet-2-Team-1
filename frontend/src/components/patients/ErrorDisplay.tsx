import { type ErrorDisplayProps } from '@/types/patient';

export const ErrorDisplay = ({ error, serverUrl }: ErrorDisplayProps) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-md p-4">
      <p className="text-red-500">Erreur lors du chargement des patients: {error.message}</p>
      <p className="text-sm text-red-400 mt-2">
        Vérifiez que le serveur backend est accessible sur {serverUrl}/graphql
      </p>
    </div>
  );
};
