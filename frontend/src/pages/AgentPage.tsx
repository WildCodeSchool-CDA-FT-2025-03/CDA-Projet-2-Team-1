import { Search } from 'lucide-react';

const AgentPage = () => {
  return (
    <>
      <form>
        <label htmlFor="search">Entrez le numéro de sécurité sociale</label>
        <input type="text" id="search" />
        <button type="submit">
          <Search />
        </button>
      </form>
      <section>
        <p>Dr. Nozman</p>
        <p>Service de psychiatrie</p>
        <p>10:30</p>
      </section>
    </>
  );
};
export default AgentPage;
