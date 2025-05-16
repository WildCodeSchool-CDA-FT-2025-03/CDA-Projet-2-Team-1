import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

const SecretaryPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" size="lg">
            Lister les patients
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Liste des patients</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Contenu de la liste des patients à ajouter ici */}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SecretaryPage;
