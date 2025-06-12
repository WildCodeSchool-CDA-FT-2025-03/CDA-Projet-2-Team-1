import { formatSSN, unformatSSN } from '@/utils/ssn.utility';

import ConsultationAgentDisplay from '@/components/agent/ConsultationAgentDisplay';
import SsnSearchBar from '@/components/agent/SsnSearchBar';
import { useGetConsultationBySsnForAgentLazyQuery } from '@/gql/graphql-types';
import { useState } from 'react';

// components

// utils

// types

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
      });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <section className="m-4 h-[calc(100vh-10rem)] flex flex-col">
      <SsnSearchBar handleSubmit={handleSubmit} handleSSNChange={handleSSNChange} ssn={ssn} />
      {data && <ConsultationAgentDisplay data={data} />}
    </section>
  );
};

export default AgentPage;
