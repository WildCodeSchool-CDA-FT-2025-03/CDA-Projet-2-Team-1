import logocp from './logocp.svg';
import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
      {/* Logo + Titre */}
      <Link to="/" className="flex items-center">
        <img src={logocp} alt="logo" className="h-auto w-auto" />
      </Link>
    </header>
  );
}
