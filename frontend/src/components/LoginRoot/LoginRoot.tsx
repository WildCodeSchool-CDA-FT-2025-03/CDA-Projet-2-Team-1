import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '@/context/Auth.context';

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
      const response = await fetch(`${import.meta.env.VITE_DOMAIN_AUTH_SERVICE}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Identifiants incorrects.');
      }

      // On ne stocke les données utilisateur dans le contexte qu'après la connexion réussie
      setUser(data.data);
      const user = data.data;

      // Redirection selon le rôle
      if (user.role_id === 1) {
        navigate('/admin');
      }
      if (user.role_id === 2) {
        navigate('/doctor');
      }
      if (user.role_id === 3) {
        navigate('/secretary');
      }
      if (user.role_id === 4) {
        navigate('/agent');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Erreur login:', err.message);
        setError(err.message);
      } else {
        setError('Erreur inconnue lors de la connexion.');
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-row w-full">
      <div className="hidden md:flex w-1/2 items-center justify-center bg-white">
        <img src={logoCarePlan} alt="Illustration connexion" className="max-w-full h-auto" />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#f9fbfd]">
        <div className="login-form-container">
          <img src={logoCarePlan} alt="Logo Care Plan" className="login-logo" />
          <form onSubmit={formulaireLogin} className="w-full space-y-5">
            <div>
              <Label htmlFor="email" className="login-label">
                Identifiant
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="youremail@exemple.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
              />
            </div>
            <div>
              <Label htmlFor="password" className="login-label">
                Mot de passe
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="yourpassword"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
              />
            </div>
            <Button type="submit" className="login-btn">
              Se connecter
            </Button>
            {error && <p className="text-red-600 font-bold">{error}</p>}
          </form>
          <div className="mt-4 w-full text-right">
            <button
              type="button"
              className="forgot-password-link bg-transparent border-none p-0 cursor-pointer"
              onClick={() => {
                /* TODO: action mot de passe perdu */
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
