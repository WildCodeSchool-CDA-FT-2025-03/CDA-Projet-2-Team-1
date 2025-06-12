import * as z from 'zod';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useCreateAvailability } from '../../hooks/useAvailability';
import { DAYS_OF_WEEK } from '../../types/doctor.types';
import { Button } from '../ui/button';
import { Label } from '../ui/label';

const availabilitySchema = z
  .object({
    doctorId: z.string().min(1),
    dayOfWeek: z.number().min(0).max(6),
    startTime: z
      .string()
      .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Format horaire invalide (HH:MM)'),
    endTime: z
      .string()
      .regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Format horaire invalide (HH:MM)'),
  })
  .refine(
    (data) => {
      const start = new Date(`2000-01-01T${data.startTime}:00`);
      const end = new Date(`2000-01-01T${data.endTime}:00`);
      return start < end;
    },
    {
      message: "L'heure de fin doit être après l'heure de début",
      path: ['endTime'],
    }
  );

type AvailabilityFormData = z.infer<typeof availabilitySchema>;

interface AvailabilityFormProps {
  doctorId: string;
  defaultDayOfWeek?: number;
  onSuccess?: () => void;
  onCancel?: () => void;
}

export const AvailabilityForm: React.FC<AvailabilityFormProps> = ({
  doctorId,
  defaultDayOfWeek,
  onSuccess,
  onCancel,
}) => {
  const { createAvailability, loading } = useCreateAvailability();

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<AvailabilityFormData>({
    resolver: zodResolver(availabilitySchema),
    defaultValues: {
      doctorId,
      dayOfWeek: defaultDayOfWeek ?? 1,
      startTime: '09:00',
      endTime: '17:00',
    },
  });

  const selectedDay = watch('dayOfWeek');

  const onSubmit = async (data: AvailabilityFormData) => {
    try {
      await createAvailability(data);
      toast.success('Disponibilité créée avec succès');
      onSuccess?.();
    } catch (error) {
      toast.error('Erreur lors de la création de la disponibilité');
    }
  };

  // Créneaux horaires prédéfinis
  const timeSlots = [
    '08:00',
    '08:30',
    '09:00',
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
  ];

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Nouvelle disponibilité</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Jour de la semaine */}
          <div>
            <Label htmlFor="dayOfWeek">Jour de la semaine</Label>
            <Select
              value={selectedDay?.toString()}
              onValueChange={(value) => setValue('dayOfWeek', parseInt(value))}
            >
              <SelectTrigger className={errors.dayOfWeek ? 'border-red-500' : ''}>
                <SelectValue placeholder="Sélectionner un jour" />
              </SelectTrigger>
              <SelectContent>
                {DAYS_OF_WEEK.map((day) => (
                  <SelectItem key={day.value} value={day.value.toString()}>
                    {day.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.dayOfWeek && (
              <p className="text-red-500 text-sm mt-1">{errors.dayOfWeek.message}</p>
            )}
          </div>

          {/* Heure de début */}
          <div>
            <Label htmlFor="startTime">Heure de début</Label>
            <Select
              value={watch('startTime')}
              onValueChange={(value) => setValue('startTime', value)}
            >
              <SelectTrigger className={errors.startTime ? 'border-red-500' : ''}>
                <SelectValue placeholder="Sélectionner l'heure de début" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.startTime && (
              <p className="text-red-500 text-sm mt-1">{errors.startTime.message}</p>
            )}
          </div>

          {/* Heure de fin */}
          <div>
            <Label htmlFor="endTime">Heure de fin</Label>
            <Select value={watch('endTime')} onValueChange={(value) => setValue('endTime', value)}>
              <SelectTrigger className={errors.endTime ? 'border-red-500' : ''}>
                <SelectValue placeholder="Sélectionner l'heure de fin" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.endTime && (
              <p className="text-red-500 text-sm mt-1">{errors.endTime.message}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-4">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? 'Création...' : 'Créer'}
            </Button>
            {onCancel && (
              <Button type="button" variant="outline" onClick={onCancel}>
                Annuler
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
