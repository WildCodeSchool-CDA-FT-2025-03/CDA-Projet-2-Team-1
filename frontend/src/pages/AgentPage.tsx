import { Search } from 'lucide-react';

const AgentPage = () => {
  return (
    <section className="m-4 h-[calc(100vh-10rem)] flex flex-col">
      <form className="h-1/3 flex flex-col justify-center gap-2 my-4">
        <label htmlFor="search">Entrez le numéro de sécurité sociale</label>
        <div className="flex flex-row gap-2">
          <input
            className="w-full bg-white border border-turquoise-500 rounded-md"
            type="text"
            id="search"
          />
          <button
            className="p-2 flex items-center justify-center rounded-md bg-turquoise-500 hover:bg-turquoise-600"
            type="submit"
          >
            <Search className="w-8 h-8 text-white" />
          </button>
        </div>
      </form>
      <section className="h-2/3 p-4 flex flex-col justify-around items-center gap-2 border border-turquoise-500 rounded-md">
        <p className="text-xl font-bold">Dr. Nozman</p>
        <p className="text-lg">Service de psychiatrie</p>
        <p className="text-lg font-bold">10:30</p>
      </section>
    </section>
  );
};
export default AgentPage;
