import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Modal } from './ui/Modal';

interface SecretaryContentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SecretaryContentModal({
  isOpen,
  onClose,
}: SecretaryContentModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [selectedMonth, setSelectedMonth] = useState<number>(
    new Date().getMonth()
  );
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];
  const years = Array.from(
    { length: 5 },
    (_, i) => new Date().getFullYear() + i
  );

  // Synchronise le calendrier avec le select mois/année
  const handleMonthChange = (value: string) => {
    setSelectedMonth(Number(value));
    setSelectedDate((prev) => {
      const d = prev ? new Date(prev) : new Date();
      d.setMonth(Number(value));
      return new Date(d);
    });
  };
  const handleYearChange = (value: string) => {
    setSelectedYear(Number(value));
    setSelectedDate((prev) => {
      const d = prev ? new Date(prev) : new Date();
      d.setFullYear(Number(value));
      return new Date(d);
    });
  };

  const handleClose = () => {
    if (!isClosing) {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, 300);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClose();
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);

  // Génère dynamiquement les horaires de 08:00 à 20:00 par pas de 30 minutes
  const horaires = [];
  for (let h = 8; h <= 20; h++) {
    if (h < 20) {
      horaires.push(`${h.toString().padStart(2, '0')}:00`);
      horaires.push(`${h.toString().padStart(2, '0')}:30`);
    } else {
      horaires.push('20:00');
    }
  }

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setIsClosing(false)}>
      {(isOpen || isClosing) && (
        <Modal
          isOpen={isOpen}
          onClose={handleClose}
          title="Nouveau rendez-vous"
        >
          <div className="relative max-h-[80vh] overflow-y-auto">
            <form className="space-y-4 py-4 mx-[5px]" onSubmit={handleSubmit}>
              <label
                htmlFor="input-secu"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                N° de sécurité sociale
              </label>
              <Input
                id="input-secu"
                placeholder="N° de sécurité sociale"
                className="mb-2"
              />
              <div className="flex gap-2">
                <div className="flex-1 flex flex-col">
                  <label
                    htmlFor="input-nom"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Nom
                  </label>
                  <Input id="input-nom" placeholder="Nom" className="flex-1" />
                </div>
                <div className="flex-1 flex flex-col">
                  <label
                    htmlFor="input-prenom"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Prénom
                  </label>
                  <Input
                    id="input-prenom"
                    placeholder="Prénom"
                    className="flex-1"
                  />
                </div>
              </div>
              <Button
                type="button"
                className="w-full bg-[#0395d3] text-white my-2"
              >
                + Ajouter un nouveau patient
              </Button>
              <div className="flex gap-2">
                <div className="flex-1 flex flex-col">
                  <label
                    htmlFor="select-service"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Service
                  </label>
                  <Select>
                    <SelectTrigger
                      id="select-service"
                      className="w-full border-2 border-[#0395d3]"
                    >
                      <SelectValue placeholder="Service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="cardio" className="focus:bg-[#e0f2fe]">
                        Cardiologie
                      </SelectItem>
                      <SelectItem value="derma" className="focus:bg-[#e0f2fe]">
                        Dermatologie
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1 flex flex-col">
                  <label
                    htmlFor="select-medecin"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Médecin
                  </label>
                  <Select>
                    <SelectTrigger
                      id="select-medecin"
                      className="w-full border-2 border-[#0395d3]"
                    >
                      <SelectValue placeholder="Médecin" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="dr1" className="focus:bg-[#e0f2fe]">
                        Dr. Martin
                      </SelectItem>
                      <SelectItem value="dr2" className="focus:bg-[#e0f2fe]">
                        Dr. Dupont
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 flex flex-col">
                  <label
                    htmlFor="select-motif"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Motif de consultation
                  </label>
                  <Select>
                    <SelectTrigger
                      id="select-motif"
                      className="w-full border-2 border-[#0395d3]"
                    >
                      <SelectValue placeholder="Motif de consultation" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem
                        value="consult"
                        className="focus:bg-[#e0f2fe]"
                      >
                        Consultation
                      </SelectItem>
                      <SelectItem
                        value="controle"
                        className="focus:bg-[#e0f2fe]"
                      >
                        Contrôle
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1 flex flex-col">
                  <label
                    htmlFor="select-duree"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Durée
                  </label>
                  <Select>
                    <SelectTrigger
                      id="select-duree"
                      className="w-full border-2 border-[#0395d3]"
                    >
                      <SelectValue placeholder="Durée" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="15" className="focus:bg-[#e0f2fe]">
                        15 min
                      </SelectItem>
                      <SelectItem value="30" className="focus:bg-[#e0f2fe]">
                        30 min
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* Sélection de la date avec jours scrollables */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="select-date-mois"
                  className="mb-1 text-sm font-medium text-gray-700"
                >
                  Date du rendez-vous
                </label>
                <div className="flex gap-2 mb-2 justify-start">
                  <Select
                    value={selectedMonth.toString()}
                    onValueChange={handleMonthChange}
                  >
                    <SelectTrigger
                      id="select-date-mois"
                      className="border-0 max-w-[160px]"
                    >
                      <SelectValue placeholder="Mois" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {months.map((m, idx) => (
                        <SelectItem
                          key={m}
                          value={idx.toString()}
                          className="focus:bg-[#e0f2fe]"
                        >
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    value={selectedYear.toString()}
                    onValueChange={handleYearChange}
                  >
                    <SelectTrigger className="border-0 border-[#0395d3] max-w-[100px]">
                      <SelectValue placeholder="Année" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {years.map((y) => (
                        <SelectItem
                          key={y}
                          value={y.toString()}
                          className="focus:bg-[#e0f2fe]"
                        >
                          {y}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2 overflow-x-auto py-2">
                  {Array.from({ length: daysInMonth }, (_, i) => {
                    const day = i + 1;
                    const isSelected =
                      selectedDate &&
                      selectedDate.getDate() === day &&
                      selectedDate.getMonth() === selectedMonth &&
                      selectedDate.getFullYear() === selectedYear;
                    const dateObj = new Date(selectedYear, selectedMonth, day);
                    const weekDays = [
                      'DIM',
                      'LUN',
                      'MAR',
                      'MER',
                      'JEU',
                      'VEN',
                      'SAM',
                    ];
                    const weekDay = weekDays[dateObj.getDay()];
                    return (
                      <div
                        key={day}
                        className="flex flex-col items-center min-w-[48px]"
                      >
                        <Button
                          type="button"
                          variant={isSelected ? 'default' : 'outline'}
                          className={`min-h-[48px] h-[56px] w-[48px] flex flex-col justify-center items-center gap-0 p-0 ${isSelected ? 'bg-[#0395d3] text-white' : 'border-2 border-[#0395d3] text-black'}`}
                          onClick={() =>
                            setSelectedDate(
                              new Date(selectedYear, selectedMonth, day)
                            )
                          }
                        >
                          <span
                            className={`text-base leading-none flex-1 flex items-center justify-center ${isSelected ? 'text-white' : 'text-black'}`}
                          >
                            {day}
                          </span>
                          <span
                            className={`text-xs leading-none flex-1 flex items-center justify-center ${isSelected ? 'text-white' : 'text-black'}`}
                          >
                            {weekDay}
                          </span>
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Horaires scrollables horizontalement */}
              <span
                id="label-horaires"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Horaires disponibles
              </span>
              <div
                className="flex gap-2 overflow-x-auto py-2"
                aria-labelledby="label-horaires"
              >
                {horaires.map((h) => (
                  <Button
                    key={h}
                    type="button"
                    variant={selectedTime === h ? 'default' : 'outline'}
                    className={`min-w-[70px] border-2 border-[#0395d3] ${selectedTime === h ? 'bg-[#0395d3] text-white' : 'text-black'}`}
                    onClick={() => setSelectedTime(h)}
                  >
                    {h}
                  </Button>
                ))}
              </div>
              <label
                htmlFor="input-info-supp"
                className="mb-1 text-sm font-medium text-gray-700"
              >
                Information supplémentaire
              </label>
              <textarea
                id="input-info-supp"
                placeholder="Information supplémentaire"
                className="w-full border-2 border-[#0395d3] rounded-lg p-2"
                rows={3}
              />
              <div className="flex gap-2 mt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-2 border-[#0395d3]"
                >
                  Annuler
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[#0395d3] hover:bg-[#0284bc] text-white"
                >
                  Enregistrer le rendez-vous
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </AnimatePresence>
  );
}
