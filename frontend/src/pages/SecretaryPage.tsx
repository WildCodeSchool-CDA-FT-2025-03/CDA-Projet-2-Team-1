import { GetPatientsDocument } from '@/gql/graphql-types';
import { PatientDialog } from '@/components/patients/PatientDialog';
import { useQuery } from '@apollo/client';

const SecretaryPage = () => {
  const { data, loading, error } = useQuery(GetPatientsDocument);

  return (
    <PatientDialog
      patients={data?.patients}
      loading={loading}
      error={error}
      serverUrl={import.meta.env.VITE_APOLLO_SERVER}
    />
  );
};

export default SecretaryPage;
