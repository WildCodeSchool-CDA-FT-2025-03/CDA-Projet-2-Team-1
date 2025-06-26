import { Link } from 'react-router';
import LogoCarePlan from '/logo-cp.svg';
import LogoCarePlanFull from '/logo-cp-full.svg';
import { ButtonLink } from './ui/button';
import { LogOutIcon } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <img src={LogoCarePlan} alt="Logo de l'application Care Plan" className="md:hidden h-12" />
        <img
          src={LogoCarePlanFull}
          alt="Logo de l'application Care Plan"
          className="hidden md:block h-20"
        />
      </Link>
      <ButtonLink
        className="flex flex-row items-center justify-center gap-2 border border-gray-500 bg-white text-black hover:bg-gray-200"
        to="/"
      >
        Déconnexion
        <LogOutIcon className="w-5 h-5" />
      </ButtonLink>
    </header>
  );
}
