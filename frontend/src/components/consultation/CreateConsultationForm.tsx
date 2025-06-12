import * as z from 'zod';

import {
  useCreateConsultationMutation,
  useGetActiveServicesQuery,
  useGetPatientsBasicQuery,
} from '../../gql/graphql-types';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

import { showToast } from '@/lib/toast-notifications';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useActiveDoctorsByService } from '../../hooks/useDoctor';
import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { TimeSlotPicker } from './TimeSlotPicker';

const consultationSchema = z.object({
  patientId: z.string().min(1, 'Veuillez sélectionner un patient'),
  serviceId: z.string().min(1, 'Veuillez sélectionner un service'),
  doctorId: z.string().min(1, 'Veuillez sélectionner un docteur'),
  date: z.date({ required_error: 'Veuillez sélectionner une date' }),
  time: z.string().min(1, 'Veuillez sélectionner un horaire'),
  reason: z.string().optional(),
  additionalNotes: z.string().optional(),
});

type ConsultationFormData = z.infer<typeof consultationSchema>;

interface CreateConsultationFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export const CreateConsultationForm: React.FC<CreateConsultationFormProps> = ({
  onSuccess,
  onCancel,
}) => {
  const [createConsultation, { loading }] = useCreateConsultationMutation();
  const { data: patientsData } = useGetPatientsBasicQuery();
  const { data: servicesData } = useGetActiveServicesQuery();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ConsultationFormData>({
    resolver: zodResolver(consultationSchema),
  });

  const selectedServiceId = watch('serviceId');
  const selectedDoctorId = watch('doctorId');
  const selectedDate = watch('date');
  const selectedTime = watch('time');

  const { doctors: doctorsByService } = useActiveDoctorsByService(selectedServiceId || '');

  const selectedDoctor = doctorsByService.find((doctor) => doctor.id === selectedDoctorId);

  const onSubmit = async (data: ConsultationFormData) => {
    try {
      const consultationDate = new Date(data.date);
      const [hours, minutes] = data.time.split(':').map(Number);

      const startDateTime = new Date(consultationDate);
      startDateTime.setHours(hours, minutes, 0, 0);

      const endDateTime = new Date(startDateTime);
      endDateTime.setMinutes(endDateTime.getMinutes() + 30); // Consultation de 30 minutes par défaut

      const loadingToastId = showToast.loading('Création du rendez-vous en cours...');

      const result = await createConsultation({
        variables: {
          input: {
            patientId: data.patientId,
            doctorId: data.doctorId,
            dateStart: startDateTime.toISOString(),
            dateEnd: endDateTime.toISOString(),
            reason: data.reason,
            additionalNotes: data.additionalNotes,
          },
        },
      });

      showToast.dismiss(loadingToastId);

      if (result.data?.createConsultation) {
        const selectedPatient = patientsData?.patients.find((p) => p.id === data.patientId);
        const formattedDate = startDateTime.toLocaleDateString('fr-FR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        const formattedTime = startDateTime.toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
        });

        showToast.success(
          `Rendez-vous créé avec succès\n${selectedPatient?.firstname} ${selectedPatient?.lastname}\n${formattedDate} à ${formattedTime}`,
          { duration: 5000 }
        );
        onSuccess?.();
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Une erreur est survenue';
      showToast.crudError('création', 'du rendez-vous', errorMessage);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Nouveau rendez-vous</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Sélection du patient */}
          <div>
            <Label htmlFor="patientId">Patient *</Label>
            <Select onValueChange={(value) => setValue('patientId', value)}>
              <SelectTrigger className={errors.patientId ? 'border-red-500' : ''}>
                <SelectValue placeholder="Sélectionner un patient" />
              </SelectTrigger>
              <SelectContent>
                {patientsData?.patients.map((patient) => (
                  <SelectItem key={patient.id} value={patient.id}>
                    {patient.firstname} {patient.lastname} - {patient.ssn.number}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.patientId && (
              <p className="text-red-500 text-sm mt-1">{errors.patientId.message}</p>
            )}
          </div>

          {/* Sélection du service */}
          <div>
            <Label htmlFor="serviceId">Service *</Label>
            <Select onValueChange={(value) => setValue('serviceId', value)}>
              <SelectTrigger className={errors.serviceId ? 'border-red-500' : ''}>
                <SelectValue placeholder="Sélectionner un service" />
              </SelectTrigger>
              <SelectContent>
                {servicesData?.activeServices.map((service) => (
                  <SelectItem key={service.id} value={service.id}>
                    {service.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.serviceId && (
              <p className="text-red-500 text-sm mt-1">{errors.serviceId.message}</p>
            )}
          </div>

          {/* Sélection du docteur */}
          {selectedServiceId && (
            <div>
              <Label htmlFor="doctorId">Docteur *</Label>
              <Select onValueChange={(value) => setValue('doctorId', value)}>
                <SelectTrigger className={errors.doctorId ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Sélectionner un docteur" />
                </SelectTrigger>
                <SelectContent>
                  {doctorsByService.map((doctor) => (
                    <SelectItem key={doctor.id} value={doctor.id}>
                      Dr. {doctor.firstname} {doctor.lastname}
                      {doctor.specialization && ` - ${doctor.specialization}`}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.doctorId && (
                <p className="text-red-500 text-sm mt-1">{errors.doctorId.message}</p>
              )}
            </div>
          )}

          {/* Sélection de la date */}
          {selectedDoctorId && (
            <div>
              <Label htmlFor="date">Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-start text-left font-normal ${
                      !selectedDate ? 'text-muted-foreground' : ''
                    } ${errors.date ? 'border-red-500' : ''}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? (
                      format(selectedDate, 'PPP', { locale: fr })
                    ) : (
                      <span>Sélectionner une date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => setValue('date', date!)}
                    disabled={(date) => date < new Date() || date < new Date('1900-01-01')}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
            </div>
          )}

          {/* Sélection de l'heure */}
          {selectedDoctor && selectedDate && (
            <div>
              <TimeSlotPicker
                doctor={selectedDoctor}
                selectedDate={selectedDate}
                onTimeSelect={(time) => setValue('time', time)}
                selectedTime={selectedTime}
              />
              {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
            </div>
          )}

          {/* Motif de la consultation */}
          <div>
            <Label htmlFor="reason">Motif de la consultation</Label>
            <Input
              id="reason"
              {...register('reason')}
              placeholder="Consultation de routine, contrôle..."
            />
          </div>

          {/* Notes additionnelles */}
          <div>
            <Label htmlFor="additionalNotes">Notes additionnelles</Label>
            <Textarea
              id="additionalNotes"
              {...register('additionalNotes')}
              placeholder="Informations complémentaires..."
              rows={3}
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? 'Création...' : 'Créer le rendez-vous'}
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
