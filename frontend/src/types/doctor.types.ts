// Types frontend pour les docteurs
export interface DoctorUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  specialization?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  service: {
    id: string;
    name: string;
  };
  availabilities?: DoctorAvailability[];
}

export interface DoctorAvailability {
  id: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  isActive: boolean;
  createdAt: Date;
}

export interface CreateDoctorInput {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  genre: string;
  phone?: string;
  specialization?: string;
  serviceId: string;
}

export interface UpdateDoctorInput {
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  specialization?: string;
  serviceId?: string;
  isActive?: boolean;
}

export interface CreateAvailabilityInput {
  doctorId: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
}

export interface UpdateAvailabilityInput {
  dayOfWeek?: number;
  startTime?: string;
  endTime?: string;
  isActive?: boolean;
}

// Utilitaires pour les jours de la semaine
export const DAYS_OF_WEEK = [
  { value: 0, label: 'Dimanche' },
  { value: 1, label: 'Lundi' },
  { value: 2, label: 'Mardi' },
  { value: 3, label: 'Mercredi' },
  { value: 4, label: 'Jeudi' },
  { value: 5, label: 'Vendredi' },
  { value: 6, label: 'Samedi' },
];

export const getDayLabel = (dayOfWeek: number): string => {
  return DAYS_OF_WEEK.find((day) => day.value === dayOfWeek)?.label || 'Jour inconnu';
};

// Utilitaires pour les horaires
export const formatTime = (time: string): string => {
  return time.substring(0, 5); // HH:MM
};

export const parseTime = (time: string): { hours: number; minutes: number } => {
  const [hours, minutes] = time.split(':').map(Number);
  return { hours, minutes };
};

export const isTimeSlotAvailable = (
  availabilities: DoctorAvailability[],
  dayOfWeek: number,
  timeSlot: string
): boolean => {
  const dayAvailabilities = availabilities.filter(
    (av) => av.dayOfWeek === dayOfWeek && av.isActive
  );

  const { hours, minutes } = parseTime(timeSlot);
  const slotMinutes = hours * 60 + minutes;

  return dayAvailabilities.some((availability) => {
    const startTime = parseTime(availability.startTime);
    const endTime = parseTime(availability.endTime);
    const startMinutes = startTime.hours * 60 + startTime.minutes;
    const endMinutes = endTime.hours * 60 + endTime.minutes;

    return slotMinutes >= startMinutes && slotMinutes < endMinutes;
  });
};
