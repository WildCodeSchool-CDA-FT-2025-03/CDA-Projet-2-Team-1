import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { GetPatientsDocument } from '@/gql/graphql';
import { motion } from 'framer-motion';
import { useQuery } from '@apollo/client';

//import { GET_PATIENTS } from '@/graphql/queries';
//import { useQuery } from '@apollo/client';

interface Patient {
  id: string;
  firstName: string;
  lastName: string;
}

const SecretaryPage = () => {
  //const { loading, error, data } = useQuery(GET_PATIENTS);

  const { data, loading, error } = useQuery(GetPatientsDocument);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" size="lg">
            Voir les patients
          </Button>
        </DialogTrigger>
        <DialogContent asChild>
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 z-50 h-screen w-full max-w-lg border bg-white p-6 shadow-lg sm:rounded-l-lg sm:max-w-[800px] overflow-y-auto"
          >
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-4">
                Liste des patients
              </DialogTitle>
            </DialogHeader>

            {loading && <p>Chargement...</p>}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <p className="text-red-500">
                  Erreur lors du chargement des patients: {error.message}
                </p>
                <p className="text-sm text-red-400 mt-2">
                  Vérifiez que le serveur backend est accessible sur{' '}
                  {import.meta.env.VITE_APOLLO_SERVER}/graphql
                </p>
              </div>
            )}
            {!loading &&
            !error &&
            data?.patients &&
            data.patients.length > 0 ? (
              <ul className="space-y-4">
                {data.patients.map((patient: Patient) => (
                  <li
                    key={patient.id}
                    className="p-4 bg-white border rounded shadow-sm"
                  >
                    <p className="font-semibold">
                      {patient.firstName} {patient.lastName}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              !loading && <p>Aucun patient trouvé.</p>
            )}
          </motion.div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SecretaryPage;
