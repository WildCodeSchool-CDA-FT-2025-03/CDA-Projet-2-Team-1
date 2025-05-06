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
import React from 'react';

// components

const SecretaryPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <main className="min-h-screen bg-gray-50 border-t-2">
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
          <Button className="bg-[#027FB5] hover:bg-[#026a94] text-white px-6">
            Rechercher
          </Button>
        </div>
        {/* Grille principale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white space-y-6 p-6 rounded-xl border-2 border-[#027FB5]">
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
          <div
            className="bg-white rounded-xl border-2 border-[#027FB5] overflow-hidden"
            role="region"
            aria-label="Liste des rendez-vous"
          >
            <div className="p-3">
              <h2 className="text-2xl font-bold text-gray-800 pl-3">
                Liste des Rendez-vous patients
              </h2>
            </div>
            {/* En-tête des colonnes */}
            <div
              className="grid grid-cols-5 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200"
              role="rowgroup"
            >
              <div
                className="text-sm font-medium text-gray-500"
                role="columnheader"
              >
                Heure
              </div>
              <div
                className="text-sm font-medium text-gray-500"
                role="columnheader"
              >
                Nom
              </div>
              <div
                className="text-sm font-medium text-gray-500"
                role="columnheader"
              >
                Prénom
              </div>
              <div
                className="text-sm font-medium text-gray-500"
                role="columnheader"
              >
                Médecin
              </div>
              <div
                className="text-sm font-medium text-gray-500"
                role="columnheader"
              >
                Action
              </div>
            </div>
            <div className="max-h-[400px] overflow-y-auto"></div>

            {/* Liste des patients */}
            <div className="divide-y divide-gray-100" role="rowgroup">
              <div
                className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                role="row"
              >
                <div
                  className="flex items-center text-sm text-gray-500"
                  role="cell"
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
                  <span>14:30</span>
                </div>
                <div className="flex items-center" role="cell">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2"
                    aria-hidden="true"
                  >
                    <span className="text-blue-600 text-sm font-medium">
                      JD
                    </span>
                  </div>
                  <span className="text-sm text-gray-900">Dupont</span>
                </div>
                <div
                  className="flex items-center text-sm text-gray-900"
                  role="cell"
                >
                  Jean
                </div>
                <div className="flex flex-col text-sm" role="cell">
                  <span className="text-gray-500">Dr. Marie Martin</span>
                  <span className="text-gray-400 text-xs">Généraliste</span>
                </div>
                <div className="flex items-center justify-start" role="cell">
                  <button
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-[#027FB5] hover:bg-[#026a94] rounded-md transition-colors"
                    aria-label="Voir les détails du rendez-vous de Jean Dupont"
                  >
                    <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                    Voir
                  </button>
                </div>
              </div>

              <div
                className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                role="row"
              >
                <div
                  className="flex items-center text-sm text-gray-500"
                  role="cell"
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
                  <span>10:15</span>
                </div>
                <div className="flex items-center" role="cell">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2"
                    aria-hidden="true"
                  >
                    <span className="text-blue-600 text-sm font-medium">
                      ML
                    </span>
                  </div>
                  <span className="text-sm text-gray-900">Laurent</span>
                </div>
                <div
                  className="flex items-center text-sm text-gray-900"
                  role="cell"
                >
                  Marie
                </div>
                <div className="flex flex-col text-sm" role="cell">
                  <span className="text-gray-500">Dr. Pierre Dubois</span>
                  <span className="text-gray-400 text-xs">Cardiologue</span>
                </div>
                <div className="flex items-center justify-start" role="cell">
                  <button
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-[#027FB5] hover:bg-[#026a94] rounded-md transition-colors"
                    aria-label="Voir les détails du rendez-vous de Marie Laurent"
                  >
                    <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                    Voir
                  </button>
                </div>
              </div>

              <div
                className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                role="row"
              >
                <div
                  className="flex items-center text-sm text-gray-500"
                  role="cell"
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
                  <span>09:00</span>
                </div>
                <div className="flex items-center" role="cell">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2"
                    aria-hidden="true"
                  >
                    <span className="text-blue-600 text-sm font-medium">
                      PD
                    </span>
                  </div>
                  <span className="text-sm text-gray-900">Dubois</span>
                </div>
                <div
                  className="flex items-center text-sm text-gray-900"
                  role="cell"
                >
                  Paul
                </div>
                <div className="flex flex-col text-sm" role="cell">
                  <span className="text-gray-500">Dr. Sophie Bernard</span>
                  <span className="text-gray-400 text-xs">Dermatologue</span>
                </div>
                <div className="flex items-center justify-start" role="cell">
                  <button
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-[#027FB5] hover:bg-[#026a94] rounded-md transition-colors"
                    aria-label="Voir les détails du rendez-vous de Paul Dubois"
                  >
                    <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                    Voir
                  </button>
                </div>
              </div>

              <div
                className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                role="row"
              >
                <div
                  className="flex items-center text-sm text-gray-500"
                  role="cell"
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
                  <span>11:30</span>
                </div>
                <div className="flex items-center" role="cell">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2"
                    aria-hidden="true"
                  >
                    <span className="text-blue-600 text-sm font-medium">
                      CL
                    </span>
                  </div>
                  <span className="text-sm text-gray-900">Leroy</span>
                </div>
                <div
                  className="flex items-center text-sm text-gray-900"
                  role="cell"
                >
                  Claire
                </div>
                <div className="flex flex-col text-sm" role="cell">
                  <span className="text-gray-500">Dr. Thomas Moreau</span>
                  <span className="text-gray-400 text-xs">Pédiatre</span>
                </div>
                <div className="flex items-center justify-start" role="cell">
                  <button
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-[#027FB5] hover:bg-[#026a94] rounded-md transition-colors"
                    aria-label="Voir les détails du rendez-vous de Claire Leroy"
                  >
                    <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                    Voir
                  </button>
                </div>
              </div>

              <div
                className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                role="row"
              >
                <div
                  className="flex items-center text-sm text-gray-500"
                  role="cell"
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
                  <span>13:45</span>
                </div>
                <div className="flex items-center" role="cell">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2"
                    aria-hidden="true"
                  >
                    <span className="text-blue-600 text-sm font-medium">
                      MR
                    </span>
                  </div>
                  <span className="text-sm text-gray-900">Rousseau</span>
                </div>
                <div
                  className="flex items-center text-sm text-gray-900"
                  role="cell"
                >
                  Marc
                </div>
                <div className="flex flex-col text-sm" role="cell">
                  <span className="text-gray-500">Dr. Julie Petit</span>
                  <span className="text-gray-400 text-xs">Ophtalmologue</span>
                </div>
                <div className="flex items-center justify-start" role="cell">
                  <button
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-[#027FB5] hover:bg-[#026a94] rounded-md transition-colors"
                    aria-label="Voir les détails du rendez-vous de Marc Rousseau"
                  >
                    <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                    Voir
                  </button>
                </div>
              </div>

              <div
                className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                role="row"
              >
                <div
                  className="flex items-center text-sm text-gray-500"
                  role="cell"
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
                  <span>15:15</span>
                </div>
                <div className="flex items-center" role="cell">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2"
                    aria-hidden="true"
                  >
                    <span className="text-blue-600 text-sm font-medium">
                      SL
                    </span>
                  </div>
                  <span className="text-sm text-gray-900">Lefebvre</span>
                </div>
                <div
                  className="flex items-center text-sm text-gray-900"
                  role="cell"
                >
                  Sophie
                </div>
                <div className="flex flex-col text-sm" role="cell">
                  <span className="text-gray-500">Dr. Marie Martin</span>
                  <span className="text-gray-400 text-xs">Généraliste</span>
                </div>
                <div className="flex items-center justify-start" role="cell">
                  <button
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-[#027FB5] hover:bg-[#026a94] rounded-md transition-colors"
                    aria-label="Voir les détails du rendez-vous de Sophie Lefebvre"
                  >
                    <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                    Voir
                  </button>
                </div>
              </div>

              <div
                className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                role="row"
              >
                <div
                  className="flex items-center text-sm text-gray-500"
                  role="cell"
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
                  <span>16:00</span>
                </div>
                <div className="flex items-center" role="cell">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2"
                    aria-hidden="true"
                  >
                    <span className="text-blue-600 text-sm font-medium">
                      AL
                    </span>
                  </div>
                  <span className="text-sm text-gray-900">Leroux</span>
                </div>
                <div
                  className="flex items-center text-sm text-gray-900"
                  role="cell"
                >
                  Antoine
                </div>
                <div className="flex flex-col text-sm" role="cell">
                  <span className="text-gray-500">Dr. Pierre Dubois</span>
                  <span className="text-gray-400 text-xs">Cardiologue</span>
                </div>
                <div className="flex items-center justify-start" role="cell">
                  <button
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-[#027FB5] hover:bg-[#026a94] rounded-md transition-colors"
                    aria-label="Voir les détails du rendez-vous d'Antoine Leroux"
                  >
                    <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                    Voir
                  </button>
                </div>
              </div>

              <div
                className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                role="row"
              >
                <div
                  className="flex items-center text-sm text-gray-500"
                  role="cell"
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
                  <span>16:45</span>
                </div>
                <div className="flex items-center" role="cell">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2"
                    aria-hidden="true"
                  >
                    <span className="text-blue-600 text-sm font-medium">
                      EB
                    </span>
                  </div>
                  <span className="text-sm text-gray-900">Blanc</span>
                </div>
                <div
                  className="flex items-center text-sm text-gray-900"
                  role="cell"
                >
                  Emma
                </div>
                <div className="flex flex-col text-sm" role="cell">
                  <span className="text-gray-500">Dr. Sophie Bernard</span>
                  <span className="text-gray-400 text-xs">Dermatologue</span>
                </div>
                <div className="flex items-center justify-start" role="cell">
                  <button
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-[#027FB5] hover:bg-[#026a94] rounded-md transition-colors"
                    aria-label="Voir les détails du rendez-vous d'Emma Blanc"
                  >
                    <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                    Voir
                  </button>
                </div>
              </div>

              <div
                className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                role="row"
              >
                <div
                  className="flex items-center text-sm text-gray-500"
                  role="cell"
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
                  <span>17:30</span>
                </div>
                <div className="flex items-center" role="cell">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2"
                    aria-hidden="true"
                  >
                    <span className="text-blue-600 text-sm font-medium">
                      JD
                    </span>
                  </div>
                  <span className="text-sm text-gray-900">Dupuis</span>
                </div>
                <div
                  className="flex items-center text-sm text-gray-900"
                  role="cell"
                >
                  Julie
                </div>
                <div className="flex flex-col text-sm" role="cell">
                  <span className="text-gray-500">Dr. Thomas Moreau</span>
                  <span className="text-gray-400 text-xs">Pédiatre</span>
                </div>
                <div className="flex items-center justify-start" role="cell">
                  <button
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-[#027FB5] hover:bg-[#026a94] rounded-md transition-colors"
                    aria-label="Voir les détails du rendez-vous de Julie Dupuis"
                  >
                    <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                    Voir
                  </button>
                </div>
              </div>

              <div
                className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                role="row"
              >
                <div
                  className="flex items-center text-sm text-gray-500"
                  role="cell"
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
                  <span>18:00</span>
                </div>
                <div className="flex items-center" role="cell">
                  <div
                    className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2"
                    aria-hidden="true"
                  >
                    <span className="text-blue-600 text-sm font-medium">
                      PL
                    </span>
                  </div>
                  <span className="text-sm text-gray-900">Lemaire</span>
                </div>
                <div
                  className="flex items-center text-sm text-gray-900"
                  role="cell"
                >
                  Pierre
                </div>
                <div className="flex flex-col text-sm" role="cell">
                  <span className="text-gray-500">Dr. Julie Petit</span>
                  <span className="text-gray-400 text-xs">Ophtalmologue</span>
                </div>
                <div className="flex items-center justify-start" role="cell">
                  <button
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-[#027FB5] hover:bg-[#026a94] rounded-md transition-colors"
                    aria-label="Voir les détails du rendez-vous de Pierre Lemaire"
                  >
                    <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                    Voir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SecretaryPage;
