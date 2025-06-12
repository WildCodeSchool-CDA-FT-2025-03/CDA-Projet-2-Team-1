import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Clock, Plus, Trash2 } from 'lucide-react';
import { DAYS_OF_WEEK, DoctorUser, formatTime } from '../../types/doctor.types';
import React, { useState } from 'react';
import { useDeleteAvailability, useDoctorAvailabilities } from '../../hooks/useAvailability';

import { AvailabilityForm } from './AvailabilityForm';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { toast } from 'react-toastify';

interface DoctorAvailabilityCalendarProps {
  doctor: DoctorUser;
}

export const DoctorAvailabilityCalendar: React.FC<DoctorAvailabilityCalendarProps> = ({
  doctor,
}) => {
  const { availabilities, loading, error } = useDoctorAvailabilities(doctor.id);
  const { deleteAvailability } = useDeleteAvailability();
  const [showForm, setShowForm] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const handleDeleteAvailability = async (availabilityId: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette disponibilité ?')) {
      try {
        await deleteAvailability(availabilityId);
        toast.success('Disponibilité supprimée');
      } catch (error) {
        toast.error('Erreur lors de la suppression');
      }
    }
  };

  const handleAddAvailability = (dayOfWeek: number) => {
    setSelectedDay(dayOfWeek);
    setShowForm(true);
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setSelectedDay(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">Erreur lors du chargement des disponibilités</p>
      </div>
    );
  }

  // Grouper les disponibilités par jour
  const availabilitiesByDay = availabilities.reduce(
    (acc, availability) => {
      if (!acc[availability.dayOfWeek]) {
        acc[availability.dayOfWeek] = [];
      }
      acc[availability.dayOfWeek].push(availability);
      return acc;
    },
    {} as Record<number, typeof availabilities>
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Disponibilités - Dr. {doctor.firstname} {doctor.lastname}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {DAYS_OF_WEEK.map((day) => (
              <Card key={day.value} className="min-h-[200px]">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm">{day.label}</h3>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleAddAvailability(day.value)}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {availabilitiesByDay[day.value]?.length > 0 ? (
                    availabilitiesByDay[day.value]
                      .sort((a, b) => a.startTime.localeCompare(b.startTime))
                      .map((availability) => (
                        <div
                          key={availability.id}
                          className="flex items-center justify-between p-2 bg-blue-50 rounded-lg"
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">
                              {formatTime(availability.startTime)} -{' '}
                              {formatTime(availability.endTime)}
                            </span>
                            <Badge
                              variant={availability.isActive ? 'default' : 'secondary'}
                              className="text-xs w-fit"
                            >
                              {availability.isActive ? 'Actif' : 'Inactif'}
                            </Badge>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => handleDeleteAvailability(availability.id)}
                            className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))
                  ) : (
                    <p className="text-gray-500 text-sm">Aucune disponibilité</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Formulaire d'ajout de disponibilité */}
      {showForm && selectedDay !== null && (
        <AvailabilityForm
          doctorId={doctor.id}
          defaultDayOfWeek={selectedDay}
          onSuccess={handleFormSuccess}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
};
