import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SecretaryPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 border-t-2">
      {/* Section principale */}
      <div className="container mx-auto p-4 space-y-6">
        {/* En-tête avec deux boutons */}
        <div className="flex gap-4">
          <Button className="flex-1 bg-[#027FB5] hover:bg-[#0270a0] text-white text-base font-semibold py-6 rounded-xl">
            + Ajouter un nouveau rendez-vous
          </Button>
          <Button className="flex-1 bg-[#027FB5] hover:bg-[#0270a0] text-white text-base font-semibold py-6 rounded-xl">
            + Ajouter un nouveau patient
          </Button>
        </div>

        {/* Barre de recherche avec filtres */}
        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="search"
              placeholder="Rechercher un patient..."
              className="pl-12 py-3 text-base rounded-lg border-2 border-[#027FB5] focus:border-[#027FB5] focus:ring-1 focus:ring-[#027FB5]"
            />
          </div>
          <Select>
            <SelectTrigger className="w-[180px] border-2 border-[#027FB5] bg-white">
              <SelectValue placeholder="Filtrer par" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="nom">Nom</SelectItem>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="medecin">Médecin</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-[#027FB5] hover:bg-gray-900 text-white px-6">
            Rechercher
          </Button>
        </div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Calendrier */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#027FB5]"></div>

          {/* Liste des patients */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#027FB5]"></div>
        </div>
      </div>
    </main>
  );
};

export default SecretaryPage;
