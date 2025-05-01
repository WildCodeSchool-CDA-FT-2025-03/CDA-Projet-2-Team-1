import React from 'react';
import { HelpCircle } from 'lucide-react';
import logocp from './logocp.svg';

export default function Header() {
  return (
    <header className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
      {/* Logo + Titre */}
      <div className="flex flex-col">
        <img src={logocp} alt="logo" className="h-10 w-auto" />
      </div>

      {/* Boutons (non fonctionnels pour l'instant) */}
      <div className="flex gap-4">
        <button className="px-4 py-2 border border-sky-600 rounded hover:bg-sky-600 text-sm">
          Déconnexion
        </button>
        <button className="px-4 py-2 text-sky rounded ">
          <HelpCircle className="w-10 h-10 text-sky-600" />
        </button>
      </div>
    </header>
  );
}
