import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import logoCarePlan from '../../public/logo-cp-full.svg';
import illustrationLogin from '../../public/login.webp';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-row w-full">
      <div className="hidden md:flex w-1/2 items-center justify-center bg-white">
        <img
          src={illustrationLogin}
          alt="Illustration connexion"
          className="max-w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#f9fbfd]">
        <div className="login-form-container">
          <img src={logoCarePlan} alt="Logo Care Plan" className="login-logo" />
          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div>
              <Label htmlFor="email" className="login-label">
                Identifiant
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="youremail@exemple.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="login-input"
              />
            </div>
            <Button type="submit" className="login-btn">
              Se connecter
            </Button>
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
