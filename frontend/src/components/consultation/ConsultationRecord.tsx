import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Modal } from '@/components/ui/Modal';
import {
  useCreateConsultationMutation,
  useGetActiveDoctorsByServiceQuery,
  useGetActiveServicesQuery,
  useGetConsultationsByDoctorAndDateRangeQuery,
} from '@/gql/graphql-types';
import { showToast } from '@/lib/toast-notifications';
import { type Patient } from '@/types/patient';
import { AnimatePresence } from 'framer-motion';
import { useMemo, useState } from 'react';

type ConsultationRecordProps = {
  isOpen: boolean;
  onClose: () => void;
  patients?: Patient[];
};

export function ConsultationRecord({ isOpen, onClose, patients = [] }: ConsultationRecordProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedMonth, setSelectedMonth] = useState<number>(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [ssnInput, setSsnInput] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focusedSuggestionIndex, setFocusedSuggestionIndex] = useState(-1);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');

  // Nouveaux états pour le formulaire
  const [consultationReason, setConsultationReason] = useState<string>('');
  const [consultationDuration, setConsultationDuration] = useState<number>(30);
  const [additionalNotes, setAdditionalNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // GraphQL queries
  const { data: servicesData } = useGetActiveServicesQuery();
  const { data: doctorsData } = useGetActiveDoctorsByServiceQuery({
    variables: { serviceId: selectedService },
    skip: !selectedService, // Skip query if no service selected
  });

  // Query pour récupérer les consultations du docteur sélectionné pour la date sélectionnée
  const queryVariables = useMemo(() => {
    if (!selectedDate || !selectedDoctor) {
      return {
        doctorId: selectedDoctor,
        startDate: new Date(),
        endDate: new Date(),
      };
    }

    // Créer les dates de début et fin en UTC pour couvrir toute la journée
    const startDate = new Date(selectedDate);
    startDate.setHours(0, 0, 0, 0); // 00:00:00 local time

    const endDate = new Date(selectedDate);
    endDate.setHours(23, 59, 59, 999); // 23:59:59 local time

    return {
      doctorId: selectedDoctor,
      startDate,
      endDate,
    };
  }, [selectedDate, selectedDoctor]);

  const { data: consultationsData } = useGetConsultationsByDoctorAndDateRangeQuery({
    variables: queryVariables,
    skip: !selectedDate || !selectedDoctor, // Skip query if no date or no doctor selected
  });

  // Calculer les créneaux occupés et les conflits
  const { occupiedSlots, patientConflicts } = useMemo(() => {
    if (!consultationsData?.getConsultationsByDoctorAndDateRange || !selectedDoctor) {
      return { occupiedSlots: new Set(), patientConflicts: new Set() };
    }

    const occupied = new Set<string>();
    const conflicts = new Set<string>();

    consultationsData.getConsultationsByDoctorAndDateRange.forEach((consultation) => {
      // Toutes les consultations retournées sont déjà pour le médecin sélectionné
      const startTime = new Date(consultation.date_start);
      const endTime = new Date(consultation.date_end);

      // Marquer tous les créneaux de 30 min occupés pendant cette consultation
      const currentTime = new Date(startTime);
      while (currentTime < endTime) {
        const timeSlot = `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}`;
        occupied.add(timeSlot);
        currentTime.setMinutes(currentTime.getMinutes() + 30);
      }

      // Vérifier si c'est le même patient (conflit)
      if (selectedPatient && consultation.patient.ssn.number === selectedPatient.ssn?.number) {
        const startTime = new Date(consultation.date_start);
        const timeSlot = `${startTime.getHours().toString().padStart(2, '0')}:${startTime.getMinutes().toString().padStart(2, '0')}`;
        conflicts.add(timeSlot);
      }
    });

    return { occupiedSlots: occupied, patientConflicts: conflicts };
  }, [consultationsData, selectedDoctor, selectedPatient]);

  // Formater le SSN avec des espaces
  const formatSSN = (value: string) => {
    // Supprimer tous les caractères non-numériques
    const numbers = value.replace(/\D/g, '');

    // Limiter à 15 chiffres
    const truncated = numbers.slice(0, 15);

    // Appliquer le format français : 1 23 45 67 890 123 45
    let formatted = '';
    for (let i = 0; i < truncated.length; i++) {
      if (i === 1 || i === 3 || i === 5 || i === 7 || i === 10 || i === 13) {
        formatted += ' ';
      }
      formatted += truncated[i];
    }

    return formatted;
  };

  // Extraire uniquement les chiffres du SSN pour la recherche
  const getSSNNumbers = (formattedSSN: string) => {
    return formattedSSN.replace(/\D/g, '');
  };

  // Filtrer les patients par SSN
  const ssnNumbers = getSSNNumbers(ssnInput);
  const filteredPatients = patients.filter(
    (patient) =>
      patient.ssn?.number?.includes(ssnNumbers) && ssnNumbers.length === 15 && showSuggestions
  );

  const handleSsnChange = (value: string) => {
    const formatted = formatSSN(value);
    setSsnInput(formatted);
    setFocusedSuggestionIndex(-1); // Reset l'index de focus

    const numbers = getSSNNumbers(formatted);

    // Si le SSN a 15 chiffres, chercher les correspondances
    if (numbers.length === 15) {
      const matchingPatients = patients.filter((patient) => patient.ssn?.number?.includes(numbers));

      if (matchingPatients.length === 1) {
        // Un seul patient trouvé : sélection automatique
        setSelectedPatient(matchingPatients[0]);
        setShowSuggestions(false);
      } else if (matchingPatients.length > 1) {
        // Plusieurs patients trouvés : afficher l'autocomplétion
        setSelectedPatient(null);
        setShowSuggestions(true);
      } else {
        // Aucun patient trouvé
        setSelectedPatient(null);
        setShowSuggestions(false);
      }
    } else {
      setSelectedPatient(null);
      setShowSuggestions(false);
    }
  };

  const handleSsnKeyDown = (e: React.KeyboardEvent) => {
    const numbers = getSSNNumbers(ssnInput);

    if (e.key === 'Enter') {
      e.preventDefault(); // Empêche la soumission du formulaire

      if (
        showSuggestions &&
        focusedSuggestionIndex >= 0 &&
        filteredPatients[focusedSuggestionIndex]
      ) {
        // Sélectionner le patient focalisé
        selectPatient(filteredPatients[focusedSuggestionIndex]);
      } else if (numbers.length === 15) {
        // Relancer la recherche si SSN complet
        handleSsnChange(ssnInput);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (showSuggestions && filteredPatients.length > 0) {
        setFocusedSuggestionIndex((prev) => (prev < filteredPatients.length - 1 ? prev + 1 : 0));
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (showSuggestions && filteredPatients.length > 0) {
        setFocusedSuggestionIndex((prev) => (prev > 0 ? prev - 1 : filteredPatients.length - 1));
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setFocusedSuggestionIndex(-1);
    }
  };

  const selectPatient = (patient: Patient) => {
    setSelectedPatient(patient);
    setSsnInput(formatSSN(patient.ssn?.number || ''));
    setShowSuggestions(false);
    setFocusedSuggestionIndex(-1);
  };

  // Gestion de la sélection en cascade Service > Médecin
  const handleServiceChange = (value: string) => {
    setSelectedService(value);
    setSelectedDoctor(''); // Reset selection of doctor when service changes
    setSelectedTime(null); // Reset selected time when service changes
  };

  const handleDoctorChange = (value: string) => {
    setSelectedDoctor(value);
    setSelectedTime(null); // Reset selected time when doctor changes
  };

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
  const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() + i);

  // Synchronise le calendrier avec le select mois/année
  const handleMonthChange = (value: string) => {
    setSelectedMonth(Number(value));
    setSelectedDate((prev) => {
      const d = prev ? new Date(prev) : new Date();
      d.setMonth(Number(value));
      return new Date(d);
    });
    setSelectedTime(null); // Reset selected time when date changes
  };

  const handleYearChange = (value: string) => {
    setSelectedYear(Number(value));
    setSelectedDate((prev) => {
      const d = prev ? new Date(prev) : new Date();
      d.setFullYear(Number(value));
      return new Date(d);
    });
    setSelectedTime(null); // Reset selected time when date changes
  };

  const handleDayChange = (day: number) => {
    setSelectedDate(new Date(selectedYear, selectedMonth, day));
    setSelectedTime(null); // Reset selected time when date changes
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

  const handleCancel = () => {
    setSelectedService('');
    setSelectedDoctor('');
    setSelectedDate(new Date());
    setSelectedMonth(new Date().getMonth());
    setSelectedYear(new Date().getFullYear());
    setSelectedTime(null);
    setSsnInput('');
    setSelectedPatient(null);
    setShowSuggestions(false);
    setFocusedSuggestionIndex(-1);
    setConsultationReason('');
    setAdditionalNotes('');
    setIsSubmitting(false);
    onClose();
  };

  // Validation du formulaire
  const isFormValid = () => {
    const isValid =
      selectedPatient &&
      selectedService &&
      selectedDoctor &&
      selectedDate &&
      selectedTime &&
      consultationReason?.trim();

    return isValid;
  };

  // Nouvelle fonction handleSubmit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (!isFormValid()) {
        showToast.error('Veuillez remplir tous les champs obligatoires');
        setIsSubmitting(false);
        return;
      }

      // Toast de chargement
      const loadingToastId = showToast.loading(
        `Création du rendez-vous pour ${selectedPatient?.firstname} ${selectedPatient?.lastname}...`
      );

      // Parse time and create proper dates
      const [hours, minutes] = selectedTime!.split(':').map(Number);
      const startDate = new Date(selectedDate!);
      startDate.setHours(hours, minutes, 0, 0);

      const endDate = new Date(startDate);
      endDate.setMinutes(endDate.getMinutes() + 30);

      const variables = {
        input: {
          patientId: selectedPatient!.id,
          doctorId: selectedDoctor!,
          dateStart: startDate.toISOString(),
          dateEnd: endDate.toISOString(),
          reason: consultationReason || 'consultation',
          additionalNotes: additionalNotes?.trim() || null,
        },
      };

      const result = await createConsultation({ variables });

      if (result.data?.createConsultation) {
        // Fermer le toast de chargement
        showToast.dismiss(loadingToastId);

        // Toast de succès
        setTimeout(() => {
          const formattedDate = startDate.toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          const formattedTime = startDate.toLocaleTimeString('fr-FR', {
            hour: '2-digit',
            minute: '2-digit',
          });

          showToast.success(
            `Rendez-vous créé avec succès\n${selectedPatient?.firstname} ${selectedPatient?.lastname}\n${formattedDate} à ${formattedTime}`,
            { duration: 5000 }
          );
        }, 300);

        handleCancel();
      }
    } catch (error: unknown) {
      setIsSubmitting(false);
      const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue';
      showToast.crudError('création', 'du rendez-vous', errorMessage);
    }
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);

  // Génère dynamiquement les horaires de 08:00 à 20:00 par pas de 30 minutes
  const horaires: string[] = [];
  for (let h = 8; h <= 20; h++) {
    if (h < 20) {
      horaires.push(`${h.toString().padStart(2, '0')}:00`);
      horaires.push(`${h.toString().padStart(2, '0')}:30`);
    } else {
      horaires.push('20:00');
    }
  }

  // Mutation GraphQL - Simplifier en retirant les callbacks car on gère avec toast
  const [createConsultation] = useCreateConsultationMutation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setIsClosing(false)}>
      {(isOpen || isClosing) && (
        <Modal isOpen={isOpen} onClose={handleClose} title="Nouveau rendez-vous">
          <div className="relative h-full overflow-y-auto">
            <form className="h-full space-y-4 py-4 mx-[5px]" onSubmit={handleSubmit}>
              <div className="relative">
                <label htmlFor="input-secu" className="mb-1 text-sm font-medium text-gray-700">
                  N° de sécurité sociale
                </label>
                <Input
                  id="input-secu"
                  placeholder="1 23 45 67 890 123 45"
                  className="mb-2"
                  value={ssnInput}
                  onChange={(e) => handleSsnChange(e.target.value)}
                  onKeyDown={handleSsnKeyDown}
                  aria-expanded={showSuggestions}
                  aria-haspopup="listbox"
                  aria-autocomplete="list"
                  role="combobox"
                  maxLength={17}
                />

                {/* Liste d'autocomplétion */}
                {showSuggestions && filteredPatients.length > 0 && (
                  <div
                    className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto"
                    role="listbox"
                    aria-label="Suggestions de patients"
                  >
                    {filteredPatients.map((patient, index) => (
                      <div
                        key={patient.id}
                        className={`p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0 ${focusedSuggestionIndex === index ? 'bg-[#0395d3] text-white' : ''}`}
                        onClick={() => selectPatient(patient)}
                        role="option"
                        aria-selected={focusedSuggestionIndex === index}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            selectPatient(patient);
                          }
                        }}
                      >
                        <div className="font-medium">
                          {patient.firstname} {patient.lastname}
                        </div>
                        <div className="text-sm text-gray-600">{patient.ssn?.number}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-2">
                <div className="flex-1 flex flex-col">
                  <label htmlFor="input-nom" className="mb-1 text-sm font-medium text-gray-700">
                    Nom
                  </label>
                  <Input
                    id="input-nom"
                    placeholder="Nom"
                    className="flex-1"
                    value={selectedPatient?.lastname || ''}
                    onChange={() => {
                      if (!selectedPatient) {
                        // Permettre la saisie libre si aucun patient sélectionné
                      }
                    }}
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label htmlFor="input-prenom" className="mb-1 text-sm font-medium text-gray-700">
                    Prénom
                  </label>
                  <Input
                    id="input-prenom"
                    placeholder="Prénom"
                    className="flex-1"
                    value={selectedPatient?.firstname || ''}
                    onChange={() => {
                      if (!selectedPatient) {
                        // Permettre la saisie libre si aucun patient sélectionné
                      }
                    }}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 flex flex-col">
                  <label
                    htmlFor="select-service"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Service
                  </label>
                  <Select value={selectedService} onValueChange={handleServiceChange}>
                    <SelectTrigger id="select-service" className="w-full border-2 border-[#0395d3]">
                      <SelectValue placeholder="Sélectionner un service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {servicesData?.activeServices.map((service) => (
                        <SelectItem
                          key={service.id}
                          value={service.id.toString()}
                          className="focus:bg-[#e0f2fe]"
                        >
                          {service.name}
                        </SelectItem>
                      ))}
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
                  <Select value={selectedDoctor} onValueChange={handleDoctorChange}>
                    <SelectTrigger id="select-medecin" className="w-full border-2 border-[#0395d3]">
                      <SelectValue
                        placeholder={
                          selectedService
                            ? 'Sélectionner un médecin'
                            : "Sélectionner d'abord un service"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {doctorsData?.activeDoctorsByService.map((doctor) => (
                        <SelectItem
                          key={doctor.id}
                          value={doctor.id}
                          className="focus:bg-[#e0f2fe]"
                        >
                          Dr. {doctor.firstname} {doctor.lastname}
                          {doctor.specialization && ` - ${doctor.specialization}`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 flex flex-col">
                  <label htmlFor="select-motif" className="mb-1 text-sm font-medium text-gray-700">
                    Motif de consultation *
                  </label>
                  <Select value={consultationReason} onValueChange={setConsultationReason}>
                    <SelectTrigger id="select-motif" className="w-full border-2 border-[#0395d3]">
                      <SelectValue placeholder="Motif de consultation" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="consultation" className="focus:bg-[#e0f2fe]">
                        Consultation
                      </SelectItem>
                      <SelectItem value="controle" className="focus:bg-[#e0f2fe]">
                        Contrôle
                      </SelectItem>
                      <SelectItem value="urgence" className="focus:bg-[#e0f2fe]">
                        Urgence
                      </SelectItem>
                      <SelectItem value="suivi" className="focus:bg-[#e0f2fe]">
                        Suivi
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1 flex flex-col">
                  <label htmlFor="select-duree" className="mb-1 text-sm font-medium text-gray-700">
                    Durée (minutes)
                  </label>
                  <Select
                    value={consultationDuration.toString()}
                    onValueChange={(value) => setConsultationDuration(parseInt(value))}
                  >
                    <SelectTrigger id="select-duree" className="w-full border-2 border-[#0395d3]">
                      <SelectValue placeholder="Durée" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="15" className="focus:bg-[#e0f2fe]">
                        15 min
                      </SelectItem>
                      <SelectItem value="30" className="focus:bg-[#e0f2fe]">
                        30 min
                      </SelectItem>
                      <SelectItem value="45" className="focus:bg-[#e0f2fe]">
                        45 min
                      </SelectItem>
                      <SelectItem value="60" className="focus:bg-[#e0f2fe]">
                        1 heure
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
                  <Select value={selectedMonth.toString()} onValueChange={handleMonthChange}>
                    <SelectTrigger id="select-date-mois" className="border-0 max-w-[160px]">
                      <SelectValue placeholder="Mois" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {months.map((m, idx) => (
                        <SelectItem key={m} value={idx.toString()} className="focus:bg-[#e0f2fe]">
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={selectedYear.toString()} onValueChange={handleYearChange}>
                    <SelectTrigger className="border-0 border-[#0395d3] max-w-[100px]">
                      <SelectValue placeholder="Année" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {years.map((y) => (
                        <SelectItem key={y} value={y.toString()} className="focus:bg-[#e0f2fe]">
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
                    const weekDays = ['DIM', 'LUN', 'MAR', 'MER', 'JEU', 'VEN', 'SAM'];
                    const weekDay = weekDays[dateObj.getDay()];
                    return (
                      <div key={day} className="flex flex-col items-center min-w-[48px]">
                        <Button
                          type="button"
                          variant={isSelected ? 'default' : 'outline'}
                          className={`min-h-[48px] h-[56px] w-[48px] flex flex-col justify-center items-center gap-0 p-0 ${isSelected ? 'bg-[#0395d3] text-white' : 'border-2 border-[#0395d3] text-black'}`}
                          onClick={() => handleDayChange(day)}
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
              <span id="label-horaires" className="mb-1 text-sm font-medium text-gray-700">
                Horaires disponibles
              </span>

              {/* Légende des couleurs */}
              {selectedDoctor && (
                <div className="flex gap-4 text-xs text-gray-600 mb-2">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 border border-[#0395d3] bg-white rounded"></div>
                    <span>Disponible</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 border border-gray-300 bg-gray-100 rounded"></div>
                    <span>Occupé</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 border border-green-500 bg-green-100 rounded"></div>
                    <span>Patient séléctioné</span>
                  </div>
                </div>
              )}

              <div className="flex gap-2 overflow-x-auto py-2" aria-labelledby="label-horaires">
                {horaires.map((h) => {
                  const isOccupied = occupiedSlots.has(h);
                  const hasPatientConflict = patientConflicts.has(h);
                  const isSelected = selectedTime === h;
                  const isDisabled = isOccupied;

                  let buttonClasses = `min-w-[70px] border-2 `;

                  if (hasPatientConflict) {
                    // Vert pour le Patient séléctioné
                    buttonClasses += `border-green-500 ${isSelected ? 'bg-green-500 text-white' : 'bg-green-100 text-green-700'}`;
                  } else if (isOccupied) {
                    // Gris pour créneaux occupés (non sélectionnable)
                    buttonClasses += `border-gray-300 bg-gray-100 text-gray-400 cursor-not-allowed`;
                  } else if (isSelected) {
                    // Bleu pour sélectionné
                    buttonClasses += `border-[#0395d3] bg-[#0395d3] text-white`;
                  } else {
                    // Normal pour disponible
                    buttonClasses += `border-[#0395d3] text-black hover:bg-[#e0f2fe]`;
                  }

                  return (
                    <Button
                      key={h}
                      type="button"
                      disabled={isDisabled}
                      onClick={() => !isOccupied && setSelectedTime(h)}
                      className={buttonClasses}
                      title={
                        isOccupied ? 'Créneau occupé par un autre patient' : 'Créneau disponible'
                      }
                    >
                      {h}
                    </Button>
                  );
                })}
              </div>
              <label htmlFor="input-info-supp" className="mb-1 text-sm font-medium text-gray-700">
                Information supplémentaire
              </label>
              <textarea
                id="input-info-supp"
                placeholder="Information supplémentaire"
                className="w-full border-2 border-[#0395d3] rounded-lg p-2"
                rows={3}
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
              />
              <div className="flex gap-2 mt-4">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-2 border-[#0395d3]"
                  onClick={handleCancel}
                >
                  Annuler
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-[#0395d3] hover:bg-[#0284bc] text-white disabled:opacity-50"
                  disabled={!isFormValid() || isSubmitting}
                >
                  {isSubmitting ? 'Enregistrement...' : 'Enregistrer le rendez-vous'}
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </AnimatePresence>
  );
}
