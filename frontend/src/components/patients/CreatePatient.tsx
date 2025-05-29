import { useForm, SubmitHandler } from 'react-hook-form';
import { InputLabel } from '../ui/input';
import { Button } from '../ui/button';
import { SelectLabel } from '../ui/select';

enum GenderInput {
  none = 'None',
  male = 'M',
  female = 'F',
}

type PatientInput = {
  ssn: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: GenderInput;
  email: string;
  codePostal: string;
  ville: string;
};

const CreatePatient = () => {
  const { register, handleSubmit } = useForm<PatientInput>();
  const submit: SubmitHandler<PatientInput> = (_data) => {};
  return (
    <section>
      <h2 className="font-bold text-3xl mb-4">Ajouter un patient</h2>
      <form onSubmit={handleSubmit(submit)}>
        <InputLabel
          id="ssn"
          label="N° de sécurité sociale"
          {...register('ssn', { required: true })}
        />
        <InputLabel id="nom" label="Nom" {...register('lastName', { required: true })} />
        <InputLabel id="prenom" label="Prenom" {...register('firstName', { required: true })} />
        <InputLabel
          id="date"
          type="date"
          label="Date de naissance"
          {...register('birthDate', { required: true })}
        />
        <SelectLabel
          id="gender"
          label="Genre"
          className="w-full"
          {...register('gender', { required: true })}
        >
          <option id="None" value="None">
            --
          </option>
          <option id="H" value="H">
            Homme
          </option>
          <option id="F" value="F">
            Femme
          </option>
        </SelectLabel>
        <InputLabel
          type="email"
          id="email"
          label="Email"
          {...register('email', { required: true })}
        />
        <InputLabel
          id="codepostal"
          label="Code postal"
          {...register('codePostal', { required: true })}
        />
        <InputLabel id="ville" label="Ville" {...register('ville', { required: true })} />
        <Button type="submit">Enregistrer le nouveau patient</Button>
      </form>
    </section>
  );
};

export default CreatePatient;
