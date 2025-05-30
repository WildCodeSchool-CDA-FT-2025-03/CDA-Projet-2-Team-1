import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '@/context/Auth.context';
import axios from 'axios';
import { validateFormLogin } from '@/utils/validateFormLogin';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import logoCarePlan from '../header/logocp.svg';

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
      const response = await axios.post(
        `${import.meta.env.VITE_DOMAIN_AUTH_SERVICE}/auth/login`,
        { email, password },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = response.data;
      const user = data.data;
      setUser(user);

      if (user.role_id === 1) return navigate('/admin');
      if (user.role_id === 2) return navigate('/doctor');
      if (user.role_id === 3) return navigate('/secretary');
      if (user.role_id === 4) return navigate('/agent');

      throw new Error(`Rôle utilisateur inconnu : ${user.role_id}`);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error('Erreur login:', err.response?.data?.message || err.message);
        setError(err.response?.data?.message || 'Identifiants incorrects.');
      } else {
        setError('Erreur inconnue lors de la connexion.');
      }
    }
  }

  return (
    <main className="min-h-screen flex flex-row w-full bg-gray-100" role="main">
      {/* Image latérale (décorative) */}
      <aside
        className="hidden md:flex w-1/2 items-center justify-center bg-white"
        aria-hidden="true"
      >
        <img src={logoCarePlan} alt="" className="max-w-full h-auto" />
      </aside>

      {/* Section formulaire */}
      <section className="w-full md:w-1/2 flex items-center justify-center bg-[#f9fbfd]">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <header>
            <img
              src={logoCarePlan}
              alt="Logo de l'application Care Plan"
              className="mx-auto mb-6 w-32"
            />
          </header>

          <form
            onSubmit={formulaireLogin}
            className="w-full space-y-5"
            aria-label="Formulaire de connexion"
          >
            <fieldset>
              <legend className="sr-only">Connexion à l’espace utilisateur</legend>

              <div>
                <Label htmlFor="email" className="block mb-1 font-semibold text-gray-700">
                  Identifiant
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="youremail@exemple.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>

              <div>
                <Label htmlFor="password" className="block mb-1 font-semibold text-gray-700">
                  Mot de passe
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="mot de passe"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
            </fieldset>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Se connecter
            </Button>

            {error && (
              <div role="alert" aria-live="assertive" className="text-red-600 font-bold">
                {error}
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
