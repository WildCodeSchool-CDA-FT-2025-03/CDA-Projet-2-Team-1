import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { InputLabel } from '../ui/input';
import { Button } from '../ui/button';
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
      aria-label="Formulaire de d'envoie d'un email de réinitialisation de mot de passe"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputLabel
        type="email"
        label="Adresse email de recupération"
        {...register('email', {
          required: { value: true, message: "L'adresse mail est requis." },
        })}
      />
      <Button type="submit">Envoyer email</Button>
    </form>
  );
}
export default RestPassword;
