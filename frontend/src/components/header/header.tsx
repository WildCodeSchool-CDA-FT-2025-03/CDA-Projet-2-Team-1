import logocp from './logocp.svg';

export default function Header() {
  return (
    <header className="w-full bg-white shadow px-6 py-4 flex items-center justify-between">
      {/* Logo + Titre */}
      <img src={logocp} alt="logo" className="h-auto w-auto" />
    </header>
  );
}
