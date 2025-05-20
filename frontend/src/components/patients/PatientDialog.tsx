import { motion } from 'framer-motion';
// Components
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ErrorDisplay } from './ErrorDisplay';
import { PatientList } from './PatientList';
// types
import { type PatientDialogProps } from '@/types/patient';

export const PatientDialog = ({ patients, loading, error, serverUrl }: PatientDialogProps) => {
  return (
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
          {error && <ErrorDisplay error={error} serverUrl={serverUrl} />}
          {!loading && !error && patients && <PatientList patients={patients} />}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
