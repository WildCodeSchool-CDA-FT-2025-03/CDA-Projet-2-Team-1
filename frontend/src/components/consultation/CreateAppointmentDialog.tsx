import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatSSN, unformatSSN } from '@/utils/ssn.utility';
import {
  useGetConsultationReasonsQuery,
  useGetDoctorsByServiceQuery,
  useGetPatientsBasicQuery,
  useGetServicesQuery,
  usePatientBySsnQuery,
} from '@/gql/graphql-types';

import { ButtonLink } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const CreateAppointmentDialog = () => {
  const form = useForm<AppointmentFormData>();
  const { data: servicesData } = useGetServicesQuery();

  const ssn = form.watch('ssn');

  const { data, loading, error } = usePatientBySsnQuery({
    variables: { ssn: ssn ? unformatSSN(ssn) : '' },
    skip: !ssn || unformatSSN(ssn || '').length !== 15,
  });

  const { data: patientsData, loading: loadingPatients } = useGetPatientsBasicQuery();

  const serviceId = form.watch('serviceId');
  const {
    data: doctorsData,
    loading: loadingDoctors,
    error: errorDoctors,
  } = useGetDoctorsByServiceQuery({
    variables: { serviceId: Number(serviceId) },
    skip: !serviceId,
  });

  useEffect(() => {
    if (data?.patientBySsn) {
      form.setValue('lastname', data.patientBySsn.lastname);
      form.setValue('firstname', data.patientBySsn.firstname);
    }
  }, [data, form, ssn, loading, error]);

  type AppointmentFormData = {
    ssn: string;
    lastname: string;
    firstname: string;
    serviceId?: string;
    doctorId?: string;
    reasonConsultationId?: string;
    duration?: string;
  };

  const onSubmit = (formData: AppointmentFormData) => {
    void formData; // a retirer quand on aura la logique d'envoi
  };
  const { data: reasonsData, loading: loadingReasons } = useGetConsultationReasonsQuery();

  return (
    <Card
      className="w-full max-w-4xl mx-auto rounded-none shadow-none border-0"
      aria-labelledby="appointment-title"
    >
      <CardHeader>
        <CardTitle id="appointment-title">Nouveau rendez-vous</CardTitle>
      </CardHeader>
      <section>
        <CardContent>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
            aria-describedby="appointment-desc"
          >
            <fieldset>
              <legend className="sr-only">Informations patient</legend>
              {/* Champ numéro de sécurité sociale */}
              <div>
                <Label htmlFor="ssn">
                  Numéro de sécurité sociale <span aria-hidden="true">*</span>
                </Label>
                <Input
                  id="ssn"
                  maxLength={21}
                  className={`${form.formState.errors.ssn ? 'border-red-500' : ''} mb-[1em]`}
                  placeholder="N° de sécu"
                  aria-required="true"
                  aria-invalid={!!form.formState.errors.ssn}
                  {...form.register('ssn', {
                    required: 'Le numéro de sécu est requis',
                    validate: (value) => {
                      const numbers = value.replace(/\D/g, '');
                      if (numbers.length !== 15) {
                        return 'Le numéro de sécu doit contenir 15 chiffres';
                      }
                      return true;
                    },
                  })}
                  onChange={(e) => {
                    form.setValue('ssn', formatSSN(e.target.value));
                  }}
                />
                {loading && (
                  <p className="text-blue-500 text-sm mt-1" role="status">
                    Recherche du patient...
                  </p>
                )}
                {error && (
                  <p className="text-red-500 text-sm mt-1" role="alert">
                    Erreur lors de la recherche du patient.
                  </p>
                )}
                {!loading && !error && ssn && ssn.length === 15 && !data?.patientBySsn && (
                  <p className="text-orange-500 text-sm mt-1" role="alert">
                    Aucun patient trouvé pour ce numéro de sécu.
                  </p>
                )}
                {typeof form.formState.errors.ssn?.message === 'string' && (
                  <p className="text-red-500 text-sm mt-1" role="alert">
                    {form.formState.errors.ssn.message}
                  </p>
                )}
              </div>
              {ssn && ssn.length < 15 && (
                <div className="border rounded p-2 mt-2 bg-gray-50">
                  <p className="text-sm mb-1 text-gray-600">Sélectionnez un patient :</p>
                  {loadingPatients && <p>Chargement des patients...</p>}
                  {patientsData?.patients
                    .filter(
                      (p) =>
                        p.ssn.number.startsWith(ssn) ||
                        p.lastname.toLowerCase().includes(ssn.toLowerCase()) ||
                        p.firstname.toLowerCase().includes(ssn.toLowerCase())
                    )
                    .map((patient) => (
                      <button
                        type="button"
                        key={patient.id}
                        className="cursor-pointer hover:bg-gray-200 px-2 py-1 rounded w-full text-left"
                        onClick={() => {
                          form.setValue('ssn', patient.ssn.number);
                          form.setValue('lastname', patient.lastname);
                          form.setValue('firstname', patient.firstname);
                        }}
                        aria-label={`Sélectionner ${patient.firstname} ${patient.lastname}`}
                      >
                        {patient.firstname} {patient.lastname} — {patient.ssn.number}
                      </button>
                    ))}
                  {patientsData?.patients?.length === 0 && <p>Aucun patient trouvé.</p>}
                </div>
              )}
              {/* Champs nom et prénom côte à côte en desktop */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="lastname">
                    Nom <span aria-hidden="true">*</span>
                  </Label>
                  <Input
                    id="lastname"
                    className={`${form.formState.errors.lastname ? 'border-red-500' : ''} mb-[1em]`}
                    placeholder="Nom"
                    readOnly={!!data?.patientBySsn}
                    aria-required="true"
                    aria-invalid={!!form.formState.errors.lastname}
                    {...form.register('lastname', { required: 'Le nom est requis' })}
                  />
                  {typeof form.formState.errors.lastname?.message === 'string' && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {form.formState.errors.lastname.message}
                    </p>
                  )}
                </div>
                <div className="flex-1">
                  <Label htmlFor="firstname">
                    Prénom <span aria-hidden="true">*</span>
                  </Label>
                  <Input
                    id="firstname"
                    className={`${form.formState.errors.lastname ? 'border-red-500' : ''} mb-[1em]`}
                    placeholder="Prénom"
                    readOnly={!!data?.patientBySsn}
                    aria-required="true"
                    aria-invalid={!!form.formState.errors.firstname}
                    {...form.register('firstname', { required: 'Le prénom est requis' })}
                  />
                  {typeof form.formState.errors.firstname?.message === 'string' && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {form.formState.errors.firstname.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <ButtonLink
                  className="flex justify-center items-center gap-2 w-full"
                  to="/secretary/patient/creation"
                >
                  <Plus className="inline" aria-hidden="true" focusable="false" />{' '}
                  {`Création d'un nouveau patient`}
                </ButtonLink>
              </div>
              {/* Champs Service et Médecin côte à côte */}
              <div>
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Select Service */}
                  <div className="flex-1">
                    <Label htmlFor="serviceId">Service *</Label>
                    <select
                      id="serviceId"
                      className="w-full border rounded px-3 py-2 mt-1"
                      value={form.watch('serviceId') || ''}
                      required
                      onChange={(e) => {
                        form.setValue('serviceId', e.target.value);
                        form.setValue('doctorId', ''); // reset doctor quand service change
                      }}
                    >
                      <option value="">Sélectionner un service</option>
                      {servicesData?.getServices.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Select Médecin */}
                  <div className="flex-1">
                    <Label htmlFor="doctorId">Médecin *</Label>
                    <select
                      id="doctorId"
                      className="w-full border rounded px-3 py-2 mt-1"
                      value={form.watch('doctorId') || ''}
                      onChange={(e) => form.setValue('doctorId', e.target.value)}
                      required
                      disabled={!serviceId || loadingDoctors}
                    >
                      <option value="">
                        {loadingDoctors
                          ? 'Chargement...'
                          : errorDoctors
                            ? 'Erreur lors du chargement'
                            : 'Sélectionner un médecin'}
                      </option>
                      {doctorsData?.doctorsByService.map((doctor) => (
                        <option key={doctor.id} value={doctor.id}>
                          {doctor.firstname} {doctor.lastname}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 mt-4">
                    <Label htmlFor="reasonConsultationId">Motif de consultation *</Label>
                    <select
                      id="reasonConsultationId"
                      className="w-full border rounded px-3 py-2 mt-1"
                      value={form.watch('reasonConsultationId') || ''}
                      onChange={(e) => form.setValue('reasonConsultationId', e.target.value)}
                      required
                      disabled={loadingReasons}
                    >
                      <option value="">
                        {loadingReasons ? 'Chargement...' : 'Sélectionner un motif'}
                      </option>
                      {reasonsData?.getConsultationReasons.map((reason) => (
                        <option key={reason.id} value={reason.id}>
                          {reason.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* Champ Durée de consultation */}
                  <div className="flex-1 mt-4">
                    <Label htmlFor="duration">Durée de consultation *</Label>
                    <select
                      id="duration"
                      className="w-full border rounded px-3 py-2 mt-1"
                      value={form.watch('duration') || ''}
                      onChange={(e) => form.setValue('duration', e.target.value)}
                      required
                    >
                      <option value="">Sélectionner une durée</option>
                      <option value="15">15 minutes</option>
                      <option value="30">30 minutes</option>
                      <option value="45">45 minutes</option>
                      <option value="60">60 minutes</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </CardContent>
      </section>
    </Card>
  );
};

export default CreateAppointmentDialog;
