import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '@/context/Auth.context';
import axios from 'axios';

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

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_DOMAIN_AUTH_SERVICE}/api/login`,
        { email, password },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = response.data;

      setUser(data.data);
      const user = data.data;

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
    <div className="min-h-screen flex flex-row w-full">
      {/* Colonne gauche : image */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-white">
        <img src={logoCarePlan} alt="Illustration connexion" className="max-w-full h-auto" />
      </div>

      {/* Colonne droite : formulaire */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#f9fbfd]">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <img src={logoCarePlan} alt="Logo Care Plan" className="mx-auto mb-6 w-32" />

          <form onSubmit={formulaireLogin} className="w-full space-y-5">
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

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Se connecter
            </Button>

            {error && <p className="text-red-600 font-bold">{error}</p>}
          </form>

          <div className="mt-4 w-full text-right">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline bg-transparent border-none p-0 cursor-pointer"
              onClick={() => {
                // TODO: action mot de passe perdu
              }}
            >
              Mot de passe perdu ?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
