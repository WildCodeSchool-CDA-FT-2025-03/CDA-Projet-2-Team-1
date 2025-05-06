import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React from 'react';

const SecretaryPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
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
          <div className="bg-white p-6 rounded-xl border-2 border-[#027FB5]">
            {/* Calendrier */}
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-full rounded-md border-none"
              classNames={{
                months:
                  'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full',
                month: 'space-y-4 w-full',
                caption: 'flex justify-center pt-1 relative items-center',
                caption_label: 'text-sm font-medium text-[#027FB5]',
                nav: 'space-x-1 flex items-center',
                nav_button:
                  'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                nav_button_previous: 'absolute left-1',
                nav_button_next: 'absolute right-1',
                table: 'w-full border-collapse space-y-1',
                head_row: 'flex w-full justify-around',
                head_cell:
                  'text-[#027FB5] rounded-md w-12 font-normal text-[0.8rem]',
                row: 'flex w-full mt-2 justify-around',
                cell: 'text-center text-sm p-0 relative [&:has([aria-selected])]:bg-[#027FB5] first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
                day: 'h-12 w-12 p-0 font-normal aria-selected:opacity-100',
                day_selected:
                  'bg-[#027FB5] text-white hover:bg-[#027FB5] hover:text-white focus:bg-[#027FB5] focus:text-white',
                day_today: 'bg-[#027FB5] text-white',
                day_outside: 'text-gray-400 opacity-50',
                day_disabled: 'text-gray-400 opacity-50',
                day_range_middle:
                  'aria-selected:bg-[#027FB5] aria-selected:text-white',
                day_hidden: 'invisible',
              }}
            />
          </div>
          {/* Liste des patients */}
          <div className="bg-white p-6 rounded-xl border-2 border-[#027FB5]"></div>
        </div>
      </div>
    </main>
  );
};

export default SecretaryPage;
