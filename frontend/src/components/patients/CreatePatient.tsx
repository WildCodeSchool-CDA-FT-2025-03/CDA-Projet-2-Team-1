import { AddNewPatientMutationVariables, useAddNewPatientMutation } from '@/gql/graphql-types';
import { ToastContainer } from 'react-toastify';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputLabel } from '../ui/input';
import { Button } from '../ui/button';
import { SelectStyle } from '../ui/select';
import { toastError, toastSuccess } from '../ui/toast';
import { useNavigate } from 'react-router';
import { useEffect, useRef } from 'react';

const CreatePatient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddNewPatientMutationVariables>();
  const [addPatient] = useAddNewPatientMutation();
  const ssnRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<AddNewPatientMutationVariables> = async (
    input: AddNewPatientMutationVariables
  ) => {
    try {
      await addPatient({ variables: input });
      toastSuccess('Nouveau patient enregistré');
      navigate('..');
    } catch (_err) {
      toastError('Erreur durant la creation du patient');
    }
  };

  const { ref: registerRef, ...registerProps } = register('patient.ssn.number', {
    required: { value: true, message: 'Le SSN est requis.' },
    pattern: { value: /^[0-9]{15}$/, message: 'Le SSN doit contenir 15 chiffres.' },
  });

  useEffect(() => {
    ssnRef.current?.focus();
  });

  return (
    <section aria-label="create patient">
      <h2 className="font-bold text-3xl mb-4">Ajouter un patient</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel
          ref={(e) => {
            registerRef(e);
            ssnRef.current = e;
          }}
          id="ssn"
          label="N° de sécurité sociale"
          isError={errors.patient?.ssn !== null}
          msg={errors.patient?.ssn?.number?.message}
          {...registerProps}
        />
        <InputLabel
          id="nom"
          label="Nom"
          isError={errors.patient?.lastname !== null}
          msg={errors.patient?.lastname?.message}
          {...register('patient.lastname', {
            required: { value: true, message: 'Le nom est requis.' },
          })}
        />
        <InputLabel
          id="prenom"
          label="Prénom"
          isError={errors.patient?.firstname !== null}
          msg={errors.patient?.firstname?.message}
          {...register('patient.firstname', {
            required: { value: true, message: 'Le prenom est requis.' },
          })}
        />
        <InputLabel
          id="date"
          type="date"
          label="Date de naissance"
          isError={errors.patient?.birthdate !== null}
          msg={errors.patient?.birthdate?.message}
          {...register('patient.birthdate', {
            required: { value: true, message: 'La date de naissance est requis.' },
          })}
        />
        <div className="mb-4">
          <label htmlFor="genre">Genre</label>
          <select
            className={SelectStyle}
            id="genre"
            {...register('patient.gender', {
              pattern: { value: /^[M|F]$/, message: 'Le genre est requis' },
            })}
          >
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
          {errors.patient?.gender && (
            <p className="text-red-600">{errors.patient.gender.message}</p>
          )}
        </div>
        <InputLabel
          type="email"
          id="email"
          label="Email"
          isError={errors.patient?.email !== null}
          msg={errors.patient?.email?.message}
          {...register('patient.email', {
            required: { value: true, message: "L'adresse mail est requis." },
          })}
        />
        <InputLabel
          id="codepostal"
          label="Code postal"
          isError={errors.patient?.city?.zip_code !== null}
          msg={errors.patient?.city?.zip_code?.message}
          {...register('patient.city.zip_code', {
            required: { value: true, message: 'Le code postal est requis.' },
          })}
        />
        <InputLabel
          id="city"
          label="Ville"
          isError={errors.patient?.city?.name !== null}
          msg={errors.patient?.city?.name?.message}
          {...register('patient.city.name', {
            required: { value: true, message: 'Le nom de la ville est requis.' },
          })}
        />
        <Button type="submit">Enregistrer le nouveau patient</Button>
      </form>
      <ToastContainer />
    </section>
  );
};

export default CreatePatient;
