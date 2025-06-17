import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useEffect, useState } from 'react';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { useGetPatientsBasicQuery } from '@/gql/graphql-types';

const CreateAppointmentDialog = () => {
  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [search, setSearch] = useState('');
  const [selectedPatient, setSelectedPatient] = useState<string | undefined>(undefined);

  // Hook GraphQL pour la recherche
  const { data, loading } = useGetPatientsBasicQuery();

  // Synchronise la sélection avec react-hook-form
  useEffect(() => {
    setValue('patientId', selectedPatient);
  }, [selectedPatient, setValue]);

  const onSubmit = (_formData: unknown) => {
    // ... logique d'envoi
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Nouveau rendez-vous</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Champ de recherche */}
          <div>
            <Label htmlFor="search">Recherche patient</Label>
            <Input
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Nom, prénom ou N° de sécu"
              className="mb-2"
            />
          </div>
          {/* Sélection du patient */}
          <div>
            <Label htmlFor="patientId">Patient *</Label>
            <Select
              value={selectedPatient}
              onValueChange={setSelectedPatient}
              disabled={loading || !data?.patients?.length}
            >
              <SelectTrigger className={errors.patientId ? 'border-red-500' : ''}>
                <SelectValue placeholder={loading ? 'Recherche...' : 'Sélectionner un patient'} />
              </SelectTrigger>
              <SelectContent>
                {data?.patients?.length ? (
                  data.patients.map((patient) => (
                    <SelectItem key={patient.id} value={patient.id}>
                      {patient.firstname} {patient.lastname} - {patient.ssn.number}
                    </SelectItem>
                  ))
                ) : (
                  <div className="px-4 py-2 text-muted-foreground">Aucun résultat</div>
                )}
              </SelectContent>
            </Select>
            {typeof errors.patientId?.message === 'string' && (
              <p className="text-red-500 text-sm mt-1">{errors.patientId.message}</p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateAppointmentDialog;
