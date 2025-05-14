import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Eye, Search } from 'lucide-react';

import { SecretaryContentModal } from '@/components/SecretaryContentModal';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import patientsData from '@/data/patients.json';
import { Patient } from '@/types/patient';
import React from 'react';

const buttonStyles = 'bg-[#0395d3] hover:bg-[#0284bc] text-white';
const borderStyles = 'border-2 border-[#0395d3]';
const roundedStyles = 'rounded-xl';

const SecretaryPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const patients: Patient[] = patientsData.patients;

  return (
    <main
      className={`${isModalOpen ? 'h-screen' : 'h-full'} bg-gray-50 border-t-2`}
      role="main"
    >
      <SecretaryContentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <section className="container mx-auto p-4 space-y-6">
        {/* En-tête avec deux boutons */}
        <header className="flex gap-4">
          <Button
            className={`flex-1 ${buttonStyles} text-base font-semibold py-6 ${roundedStyles}`}
            aria-label="Ajouter un nouveau rendez-vous"
            onClick={() => setIsModalOpen(true)}
          >
            + Ajouter un nouveau rendez-vous
          </Button>
          <Button
            className={`flex-1 ${buttonStyles} text-base font-semibold py-6 ${roundedStyles}`}
            aria-label="Ajouter un nouveau patient"
          >
            + Ajouter un nouveau patient
          </Button>
        </header>
        {/* Barre de recherche avec filtres */}
        <nav className="flex gap-4" aria-label="Recherche et filtres">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
            <Input
              type="search"
              placeholder="Rechercher un patient..."
              className="pl-12 py-3 text-base rounded-lg border-2 border-[#027FB5] focus:border-[#027FB5] focus:ring-1 focus:ring-[#027FB5]"
              aria-label="Rechercher un patient"
            />
          </div>
          <Select>
            <SelectTrigger
              className={`w-[180px] ${borderStyles} bg-white`}
              aria-label="Filtrer par"
            >
              <SelectValue placeholder="Filtrer par" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="nom">Nom</SelectItem>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="medecin">Médecin</SelectItem>
            </SelectContent>
          </Select>
          <Button
            className={`${buttonStyles} px-6`}
            aria-label="Lancer la recherche"
          >
            Rechercher
          </Button>
        </nav>
        {/* Grille principale */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendrier */}
          <aside className="lg:col-span-1">
            <section
              className={`bg-white ${roundedStyles} ${borderStyles} p-4 h-[calc(400px+4rem)] flex flex-col`}
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="flex-1 rounded-md [&_.rdp-day_selected]:bg-[#0395d3] [&_.rdp-day_selected]:text-white [&_.rdp-day_selected:hover]:bg-[#0284bc]"
                initialFocus
                disabled={{ before: new Date() }}
                fromDate={new Date()}
                toDate={
                  new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                }
              />
            </section>
          </aside>
          {/* Liste des patients */}
          <section
            className={`lg:col-span-2 bg-white ${roundedStyles} ${borderStyles} overflow-hidden`}
            aria-labelledby="liste-rendezvous-titre"
          >
            <header className="p-3">
              <h2
                id="liste-rendezvous-titre"
                className="text-2xl font-bold text-gray-800 pl-3"
              >
                Liste des Rendez-vous patients
              </h2>
            </header>
            {/* En-tête des colonnes */}
            <div className="grid grid-cols-5 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200">
              <ul className="contents">
                {['Heure', 'Nom', 'Prénom', 'Médecin', 'Action'].map(
                  (header) => (
                    <li
                      key={header}
                      className="text-sm font-medium text-gray-900"
                    >
                      {header}
                    </li>
                  )
                )}
              </ul>
            </div>
            <section className="max-h-[400px] overflow-y-auto">
              <ul
                className="w-full"
                aria-label="Liste des rendez-vous patients"
              >
                {patients.map((patient) => (
                  <li
                    key={patient.id}
                    className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center text-sm text-gray-900">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <time dateTime={patient.time}>{patient.time}</time>
                    </div>
                    <div className="flex items-center">
                      <figure className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <span className="text-blue-800 text-sm font-medium">
                          {patient.firstName[0]}
                          {patient.lastName[0]}
                        </span>
                      </figure>
                      <span className="text-sm text-gray-900">
                        {patient.lastName}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-900">
                      {patient.firstName}
                    </div>
                    <div className="flex flex-col text-sm">
                      <span className="text-gray-900">
                        {patient.doctor.name}
                      </span>
                      <span className="text-gray-700 text-xs">
                        {patient.doctor.specialty}
                      </span>
                    </div>
                    <div className="flex items-center justify-start">
                      <button
                        className={`inline-flex items-center px-3 py-1.5 text-sm font-medium ${buttonStyles} rounded-md transition-colors`}
                        aria-label={`Voir les détails du rendez-vous de ${patient.firstName} ${patient.lastName}`}
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        Voir
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default SecretaryPage;
