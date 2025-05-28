import { Search } from 'lucide-react';
import { useState } from 'react';

import { useGetConsultationBySsnForAgentLazyQuery } from '@/gql/graphql-types';
import { formatSSN, unformatSSN } from '@/utils/ssnUtils';

const AgentPage = () => {
  const [ssn, setSsn] = useState('');
  const [getConsultationBySsnForAgent, { data, loading, error }] =
    useGetConsultationBySsnForAgentLazyQuery({
      onError: (error) => {
        console.error('Query error:', error);
      },
    });

  const handleSSNChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatSSN(e.target.value);
    setSsn(formattedValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ssn.trim()) {
      // Envoyer le SSN sans formatage à la query
      const unformattedSSN = unformatSSN(ssn);
      getConsultationBySsnForAgent({
        variables: { ssn: unformattedSSN },
        errorPolicy: 'all',
      });
    }
  };

  // Récupération des données de la première consultation trouvée
  const consultation = data?.getConsultationBySsnForAgent?.[0];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="m-4 h-[calc(100vh-10rem)] flex flex-col">
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
          >
            <Search className="w-8 h-8 text-white" />
          </button>
        </div>
      </form>
      <section className="h-2/3 p-4 flex flex-col justify-around items-center gap-2 border border-turquoise-500 rounded-md">
        {data && data.getConsultationBySsnForAgent.length === 0 ? (
          <>
            <p className="text-xl font-bold text-orange-600">Aucune consultation trouvée</p>
          </>
        ) : consultation ? (
          <>
            <p className="text-xl font-bold">Dr. {consultation.doctor.lastname}</p>
            <p className="text-lg">{consultation.doctor.service.name}</p>
            <p className="text-lg font-bold">
              {consultation.date_start &&
                new Date(consultation.date_start).toLocaleTimeString('fr-FR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
            </p>
          </>
        ) : (
          <>
            <p className="text-lg">Entrez un numéro de sécurité sociale ci-dessus</p>
          </>
        )}
      </section>
    </section>
  );
};

export default AgentPage;
