import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { InputLabel } from '../ui/input';
import { Button, ButtonLink } from '../ui/button';
import { toastError, toastSuccess } from '../ui/toast';

type RestPasswordForm = {
  email: string;
};

function RestPassword() {
  const { register, handleSubmit, reset } = useForm<RestPasswordForm>();

  const onSubmit: SubmitHandler<RestPasswordForm> = async (input: RestPasswordForm) => {
    try {
      // TOFIX: utiliser le service client quand il sera dans dev
      await axios.post(
        `/auth/reset`,
        { email: input.email },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      toastSuccess('Email de réinitialisation envoyé');
    } catch (_err) {
      toastError("Erreur durant l'envoie de l'email");
    } finally {
      reset();
    }
  };

  return (
    <form
      className="w-full max-w-sm flex flex-col items-center gap-4"
      aria-label="Formulaire de réinitialisation de mot de passe"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputLabel
        type="email"
        label="Adresse email de récupération"
        {...register('email', {
          required: { value: true, message: "L'adresse mail est requis." },
        })}
      />
      <div className="flex gap-4 w-full">
        <ButtonLink to="/" className="bg-transparent text-main text-right" aria-label="Annuler">
          Annuler
        </ButtonLink>
        <Button type="submit">Envoyer email</Button>
      </div>
    </form>
  );
}
export default RestPassword;
