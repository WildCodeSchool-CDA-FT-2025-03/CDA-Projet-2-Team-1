import { Link } from 'react-router';
import LogoCarePlan from '/logo-cp.svg';
import LogoCarePlanFull from '/logo-cp-full.svg';

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
    </header>
  );
}
