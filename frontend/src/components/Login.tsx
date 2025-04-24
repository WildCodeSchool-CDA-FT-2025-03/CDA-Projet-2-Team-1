import React, { useState } from 'react';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Supposons que les composants Shadcn Input, Label, Button sont configurés
// Si ce n'est pas le cas, remplacez par des éléments HTML standard stylisés

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique de connexion à implémenter
    console.log('Tentative de connexion avec:', formData);
  };

  return (
    <div className="min-h-screen flex bg-background">
      {/* Colonne gauche avec l'image */}
      <div className="w-1/2 flex items-center justify-center p-12">
        <img src="/imagelogin.svg" alt="Illustration connexion" className="max-w-full h-auto" />
      </div>

      {/* Colonne droite avec le formulaire */}
      <div className="w-1/2 flex flex-col items-center justify-center p-12">
        <div className="w-full max-w-xs">
          {/* Logo */}
          <img src="/logoText.svg" alt="CarePlan Logo" className="mb-10 h-10 mx-auto" />

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-foreground">Identifiant</Label>
              <Input
                id="email"
                type="email"
                placeholder="youremail@exemple.com"
                required
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="mt-1 w-full px-3 py-2 border border-turquoise rounded-md shadow-sm focus:outline-none focus:ring-turquoise focus:border-turquoise text-sm"
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-sm font-medium text-foreground">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                placeholder="yourpassword"
                required
                value={formData.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="mt-1 w-full px-3 py-2 border border-turquoise rounded-md shadow-sm focus:outline-none focus:ring-turquoise focus:border-turquoise text-sm"
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full bg-turquoise text-white py-2 px-4 rounded-md hover:bg-turquoise-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-turquoise transition duration-150 ease-in-out text-sm font-semibold"
              >
                Se connecter
              </Button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-xs text-turquoise hover:underline">
              Mot de passe perdu ?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 