import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Eye, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import patientsData from '@/data/patients.json';
import React from 'react';

// Type pour les données des patients
type Patient = {
  id: string;
  time: string;
  lastName: string;
  firstName: string;
  doctor: {
    name: string;
    specialty: string;
  };
};

const SecretaryPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const patients: Patient[] = patientsData.patients;

  // Styles communs
  const buttonStyles = "bg-[#027FB5] hover:bg-[#026a94] text-white";
  const borderStyles = "border-2 border-[#027FB5]";
  const roundedStyles = "rounded-xl";

  return (
    <main className="min-h-screen bg-gray-50 border-t-2">
      <section className="container mx-auto p-4 space-y-6">
        {/* En-tête avec deux boutons */}
        <header className="flex gap-4">
          <Button className={`flex-1 ${buttonStyles} text-base font-semibold py-6 ${roundedStyles}`}>
            + Ajouter un nouveau rendez-vous
          </Button>
          <Button className={`flex-1 ${buttonStyles} text-base font-semibold py-6 ${roundedStyles}`}>
            + Ajouter un nouveau patient
          </Button>
        </header>
        {/* Barre de recherche avec filtres */}
        <nav className="flex gap-4">
          <section className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="search"
              placeholder="Rechercher un patient..."
              className="pl-12 py-3 text-base rounded-lg border-2 border-[#027FB5] focus:border-[#027FB5] focus:ring-1 focus:ring-[#027FB5]"
            />
          </section>
          <Select>
            <SelectTrigger className={`w-[180px] ${borderStyles} bg-white`}>
              <SelectValue placeholder="Filtrer par" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="nom">Nom</SelectItem>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="medecin">Médecin</SelectItem>
            </SelectContent>
          </Select>
          <Button className={`${buttonStyles} px-6`}>
            Rechercher
          </Button>
        </nav>
        {/* Grille principale */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendrier */}
          <article className="lg:col-span-1">
            <section className={`bg-white ${roundedStyles} ${borderStyles} p-4 h-[calc(400px+4rem)] flex flex-col`} aria-label="Calendrier des rendez-vous">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="flex-1 rounded-md"
              />
            </section>
          </article>
          {/* Liste des patients */}
          <article
            className={`lg:col-span-2 bg-white ${roundedStyles} ${borderStyles} overflow-hidden`}
            role="region"
            aria-label="Liste des rendez-vous"
          >
            <header className="p-3">
              <h2 className="text-2xl font-bold text-gray-800 pl-3">
                Liste des Rendez-vous patients
              </h2>
            </header>
            {/* En-tête des colonnes */}
            <section
              className="grid grid-cols-5 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200"
              role="rowgroup"
              aria-label="En-têtes des colonnes"
            >
              {['Heure', 'Nom', 'Prénom', 'Médecin', 'Action'].map((header) => (
                <header
                  key={header}
                  className="text-sm font-medium text-gray-500"
                  role="columnheader"
                >
                  {header}
                </header>
              ))}
            </section>
            <section className="max-h-[400px] overflow-y-auto">
              <ul className="divide-y divide-gray-100">
                {patients.map((patient) => (
                  <li
                    key={patient.id}
                    className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                    role="row"
                  >
                    <section
                      className="flex items-center text-sm text-gray-500"
                      role="cell"
                      aria-label={`Heure du rendez-vous: ${patient.time}`}
                    >
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <time>{patient.time}</time>
                    </section>
                    <section className="flex items-center" role="cell">
                      <figure
                        className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2"
                        aria-hidden="true"
                      >
                        <span className="text-blue-600 text-sm font-medium">
                          {patient.firstName[0]}
                          {patient.lastName[0]}
                        </span>
                      </figure>
                      <span className="text-sm text-gray-900">
                        {patient.lastName}
                      </span>
                    </section>
                    <section
                      className="flex items-center text-sm text-gray-900"
                      role="cell"
                    >
                      {patient.firstName}
                    </section>
                    <section className="flex flex-col text-sm" role="cell">
                      <span className="text-gray-500">{patient.doctor.name}</span>
                      <span className="text-gray-400 text-xs">
                        {patient.doctor.specialty}
                      </span>
                    </section>
                    <section className="flex items-center justify-start" role="cell">
                      <button
                        className={`inline-flex items-center px-3 py-1.5 text-sm font-medium ${buttonStyles} rounded-md transition-colors`}
                        aria-label={`Voir les détails du rendez-vous de ${patient.firstName} ${patient.lastName}`}
                      >
                        <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                        Voir
                      </button>
                    </section>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </section>
      </section>
    </main>
  );
};

export default SecretaryPage;
