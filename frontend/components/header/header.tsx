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
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-sm">
          Déconnexion
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
          Aide
        </button>
      </div>
    </header>
  );
}
