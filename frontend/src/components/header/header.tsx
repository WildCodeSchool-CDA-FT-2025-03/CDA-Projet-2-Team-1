import { HelpCircle, LogOut } from 'lucide-react';
import logocp from './logocp.svg';

export default function Header() {
  return (
    <header className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
      {/* Logo + Titre */}
      <img src={logocp} alt="logo" className="h-auto w-auto" />
      {/* Boutons (non fonctionnels pour l'instant) */}
      <div className="flex gap-4">
        <button
          aria-label="déconnexion"
          className="flex flex-raw items-center px-4 py-2 border border-sky-600 rounded  text-sm"
        >
          <LogOut className="w-10 h-10 text-sky-600" />
          Déconnexion
        </button>
        <button aria-label="aide" className="px-4 py-2 text-sky rounded ">
          <HelpCircle className="w-10 h-10 text-sky-600" />
        </button>
      </div>
    </header>
  );
}
