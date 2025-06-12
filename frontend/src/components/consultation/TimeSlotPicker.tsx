import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { DoctorUser, parseTime } from '../../types/doctor.types';
import React, { useMemo } from 'react';

import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Clock } from 'lucide-react';
import { useDoctorAvailabilities } from '../../hooks/useAvailability';
import { useGetConsultationsByDoctorAndDateRangeQuery } from '../../gql/graphql-types';

interface TimeSlotPickerProps {
  doctor: DoctorUser;
  selectedDate: Date;
  onTimeSelect: (time: string) => void;
  selectedTime?: string;
  consultationDurationMinutes?: number;
}

export const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  doctor,
  selectedDate,
  onTimeSelect,
  selectedTime,
  consultationDurationMinutes = 30,
}) => {
  const { availabilities, loading: availabilitiesLoading } = useDoctorAvailabilities(doctor.id);

  // Récupérer les consultations existantes pour la date sélectionnée
  const startOfDay = new Date(selectedDate);
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date(selectedDate);
  endOfDay.setHours(23, 59, 59, 999);

  const { data: consultationsData, loading: consultationsLoading } =
    useGetConsultationsByDoctorAndDateRangeQuery({
      variables: {
        doctorId: doctor.id,
        startDate: startOfDay,
        endDate: endOfDay,
      },
    });

  const dayOfWeek = selectedDate.getDay();

  // Générer les créneaux disponibles
  const availableTimeSlots = useMemo(() => {
    if (!availabilities.length) return [];

    // Filtrer les disponibilités pour le jour sélectionné
    const dayAvailabilities = availabilities.filter(
      (av) => av.dayOfWeek === dayOfWeek && av.isActive
    );

    if (!dayAvailabilities.length) return [];

    const slots: { time: string; isAvailable: boolean; isOccupied: boolean }[] = [];
    const existingConsultations = consultationsData?.getConsultationsByDoctorAndDateRange || [];

    dayAvailabilities.forEach((availability) => {
      const startTime = parseTime(availability.startTime);
      const endTime = parseTime(availability.endTime);

      const startMinutes = startTime.hours * 60 + startTime.minutes;
      const endMinutes = endTime.hours * 60 + endTime.minutes;

      // Générer des créneaux de consultation toutes les 30 minutes
      for (
        let minutes = startMinutes;
        minutes < endMinutes;
        minutes += consultationDurationMinutes
      ) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        const timeString = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;

        // Vérifier si le créneau est occupé par une consultation existante
        const isOccupied = existingConsultations.some((consultation) => {
          const consultationStart = new Date(consultation.date_start);
          const consultationEnd = new Date(consultation.date_end);
          const slotStart = new Date(selectedDate);
          slotStart.setHours(hours, mins, 0, 0);
          const slotEnd = new Date(slotStart);
          slotEnd.setMinutes(slotEnd.getMinutes() + consultationDurationMinutes);

          return slotStart < consultationEnd && slotEnd > consultationStart;
        });

        // Vérifier si le créneau est dans le futur (si c'est aujourd'hui)
        const now = new Date();
        const slotDateTime = new Date(selectedDate);
        slotDateTime.setHours(hours, mins, 0, 0);
        const isFuture = slotDateTime > now;

        slots.push({
          time: timeString,
          isAvailable: isFuture && !isOccupied,
          isOccupied,
        });
      }
    });

    return slots.sort((a, b) => a.time.localeCompare(b.time));
  }, [availabilities, dayOfWeek, selectedDate, consultationsData, consultationDurationMinutes]);

  if (availabilitiesLoading || consultationsLoading) {
    return (
      <Card>
        <CardContent className="flex justify-center items-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </CardContent>
      </Card>
    );
  }

  if (!availableTimeSlots.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Créneaux horaires
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 text-center py-4">Aucun créneau disponible pour ce jour</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Créneaux horaires disponibles
        </CardTitle>
        <p className="text-sm text-gray-600">
          Dr. {doctor.firstname} {doctor.lastname} - {selectedDate.toLocaleDateString('fr-FR')}
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {availableTimeSlots.map((slot) => (
            <Button
              key={slot.time}
              variant={selectedTime === slot.time ? 'default' : 'outline'}
              disabled={!slot.isAvailable}
              onClick={() => slot.isAvailable && onTimeSelect(slot.time)}
              className={`
                relative p-2 h-12
                ${!slot.isAvailable ? 'opacity-50 cursor-not-allowed' : ''}
                ${slot.isOccupied ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-50' : ''}
                ${selectedTime === slot.time && slot.isAvailable ? 'bg-turquoise-500 text-white hover:bg-turquoise-600' : ''}
              `}
            >
              <div className="flex flex-col items-center">
                <span className="text-sm font-medium">{slot.time}</span>
                {slot.isOccupied && (
                  <Badge variant="destructive" className="text-xs px-1 py-0">
                    Occupé
                  </Badge>
                )}
              </div>
            </Button>
          ))}
        </div>

        {/* Légende */}
        <div className="flex flex-wrap gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border border-gray-300 rounded bg-white"></div>
            <span>Disponible</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border border-turquoise-300 rounded bg-turquoise-500"></div>
            <span>Sélectionné</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border border-red-300 rounded bg-red-50"></div>
            <span>Occupé</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border border-gray-300 rounded bg-gray-100"></div>
            <span>Indisponible</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
