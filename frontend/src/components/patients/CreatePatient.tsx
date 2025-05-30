import { useForm, SubmitHandler } from 'react-hook-form';
import { InputLabel } from '../ui/input';
import { Button } from '../ui/button';
import { SelectStyle } from '../ui/select';
import { AddNewPatientMutationVariables, useAddNewPatientMutation } from '@/gql/graphql-types';

const CreatePatient = () => {
  const { register, handleSubmit } = useForm<AddNewPatientMutationVariables>();
  const [addPatient] = useAddNewPatientMutation();

  const onSubmit: SubmitHandler<AddNewPatientMutationVariables> = (
    input: AddNewPatientMutationVariables
  ) => {
    addPatient({ variables: input });
  };

  return (
    <section>
      <h2 className="font-bold text-3xl mb-4">Ajouter un patient</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel
          id="ssn"
          label="N° de sécurité sociale"
          {...register('patient.ssn.number', { required: true })}
        />
        <InputLabel id="nom" label="Nom" {...register('patient.lastname', { required: true })} />
        <InputLabel
          id="prenom"
          label="Prenom"
          {...register('patient.firstname', { required: true })}
        />
        <InputLabel
          id="date"
          type="date"
          label="Date de naissance"
          {...register('patient.birthdate', { required: true })}
        />
        <div className="mb-4">
          <label htmlFor="genre">Genre</label>
          <select className={SelectStyle} id="genre" {...register('patient.gender')}>
            <option id="None" value="None">
              --
            </option>
            <option id="H" value="M">
              Homme
            </option>
            <option id="F" value="F">
              Femme
            </option>
          </select>
        </div>
        <InputLabel
          type="email"
          id="email"
          label="Email"
          {...register('patient.email', { required: true })}
        />
        <InputLabel
          id="codepostal"
          label="Code postal"
          {...register('patient.city.zip_code', { required: true })}
        />
        <InputLabel
          id="city"
          label="Ville"
          {...register('patient.city.name', { required: true })}
        />
        <Button type="submit">Enregistrer le nouveau patient</Button>
      </form>
    </section>
  );
};

export default CreatePatient;
