import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import axiosClient from '../../lib/axios-client.ts';

// Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// Contexts
import { useAuth } from '@/context/Auth.context';
// Utils
import { validateFormLogin } from '@/utils/validateFormLogin.utility';
// Assets
import IllustrationLogin from '/login.webp';
import LogoCarePlanFull from '/logo-cp-full.svg';
import { ToastContainer } from 'react-toastify';

export default function LoginRoot() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth();

  async function formulaireLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    // ✅ Validation côté client avec Joi
    const erreurs = validateFormLogin(email, password);
    if (erreurs.length > 0) {
      setError(erreurs.join('\n'));
      return;
    }

    try {
      const response = await axiosClient.post('auth/login', { email, password });
      const { data } = response.data;
      setUser(data);

      if (data.role_id === 1) return navigate('/admin');
      if (data.role_id === 2) return navigate('/doctor');
      if (data.role_id === 3) return navigate('/secretary');
      if (data.role_id === 4) return navigate('/agent');

      throw new Error(`utilisateur inconnu`);
    } catch {
      setError('Identifiants ou mot de passe incorrects.');
    }
  }

  return (
    <section className="w-full min-h-screen flex flex-row" role="main">
      {/* Image latérale (décorative) */}
      <aside
        className="hidden md:flex w-1/2 items-center justify-center bg-white"
        aria-hidden="true"
      >
        <img src={IllustrationLogin} alt="" className="max-w-full h-auto" />
      </aside>
      {/* Section formulaire */}
      <section className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center gap-4 bg-turquoise-50">
        <img
          src={LogoCarePlanFull}
          alt="Logo de l'application Care Plan"
          className="w-56 md:w-72 my-12"
        />

        <form
          onSubmit={formulaireLogin}
          className="w-full flex flex-col items-center gap-4"
          aria-label="Formulaire de connexion"
        >
          <div className="w-full max-w-sm">
            <Label htmlFor="email" className="ml-2 text-sm font-normal">
              Identifiant
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="monemail@exemple.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-turquoise-500 rounded-sm bg-white"
            />
          </div>
          <div className="w-full max-w-sm">
            <Label htmlFor="password" className="ml-2 text-sm font-normal">
              Mot de passe
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="************"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 border border-turquoise-500 rounded-sm bg-white"
            />
          </div>
          <Button
            type="submit"
            className="w-full max-w-sm py-2 px-4 rounded-sm font-bold text-white bg-turquoise-500 hover:bg-turquoise-600"
          >
            Se connecter
          </Button>
          {error && (
            <div
              role="alert"
              aria-live="assertive"
              className="max-w-sm text-red-600 text-sm font-semibold"
            >
              {error}
            </div>
          )}
        </form>
        <Link
          to="/password/reset"
          className="w-full max-w-sm text-sm text-right text-turquoise-500 hover:text-turquoise-600 bg-transparent border-none cursor-pointer"
        >
          Mot de passe perdu ?
        </Link>
      </section>
      <ToastContainer />
    </section>
  );
}
