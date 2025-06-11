import { type ErrorDisplayProps } from '@/types/patient';

export const ErrorDisplay = ({ error }: ErrorDisplayProps) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded p-4">
      <p className="text-red-500 m-0">Erreur lors du chargement des patients: {error.message}</p>
      <p className="text-sm text-red-400 mt-2 mb-0">
        Vérifiez que le serveur backend est accessible sur /graphql
      </p>
    </div>
  );
};
