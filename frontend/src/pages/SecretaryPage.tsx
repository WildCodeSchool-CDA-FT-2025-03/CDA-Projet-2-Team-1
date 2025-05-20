import { PatientDialog } from '@/components/patients/PatientDialog';
import { GetPatientsDocument } from '@/gql/graphql';
import { useQuery } from '@apollo/client';

const SecretaryPage = () => {
  const { data, loading, error } = useQuery(GetPatientsDocument);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <PatientDialog
        patients={data?.patients}
        loading={loading}
        error={error}
        serverUrl={import.meta.env.VITE_APOLLO_SERVER}
      />
    </div>
  );
};

export default SecretaryPage;
