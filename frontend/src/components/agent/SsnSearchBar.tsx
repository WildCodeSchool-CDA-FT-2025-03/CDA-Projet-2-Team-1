import { Search } from 'lucide-react';

function SsnSearchBar({
  handleSubmit,
  handleSSNChange,
  ssn,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSSNChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ssn: string;
}) {
  return (
    <form className="h-1/3 flex flex-col justify-center gap-2 my-4" onSubmit={handleSubmit}>
      <label htmlFor="search">Entrez le numéro de sécurité sociale</label>
      <div className="flex flex-row gap-2">
        <input
          className="w-full bg-white border border-turquoise-500 rounded-md p-2"
          type="text"
          id="search"
          name="ssn"
          onChange={handleSSNChange}
          value={ssn}
          placeholder="1 23 45 67 890 123 45"
          maxLength={21} // 15 chiffres + 6 espaces pour le format fr
        />
        <button
          className="p-2 flex items-center justify-center rounded-md bg-turquoise-500 hover:bg-turquoise-600"
          type="submit"
          aria-label="Rechercher"
        >
          <Search className="w-8 h-8 text-white" />
        </button>
      </div>
    </form>
  );
}

export default SsnSearchBar;
