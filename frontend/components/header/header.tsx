import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
      {/* Logo + Titre */}
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-blue-600">CarePlan</span>
        <span className="text-sm text-gray-500">
          votre gestionnaire numérique
        </span>
      </div>

      {/* Boutons (non fonctionnels pour l'instant) */}
      <div className="flex gap-4">
        <button className="px-4 py-2 border border-sky-600 rounded hover:bg-sky-600 text-sm">
          Déconnexion
        </button>
        <button className="px-4 py-2 border border-sky-600 text-black rounded hover:bg-sky-600 text-sm">
          Aide
        </button>
      </div>
    </header>
  );
}
