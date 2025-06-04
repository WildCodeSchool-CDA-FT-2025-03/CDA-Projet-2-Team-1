import { GetConsultationBySsnForAgentQuery } from '@/gql/graphql-types';

function ConsultationAgentDisplay({ data }: { data: GetConsultationBySsnForAgentQuery }) {
  // Récupération des données de la première consultation trouvée
  const consultation = data?.getConsultationBySsnForAgent?.[0];

  return (
    <>
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
    </>
  );
}

export default ConsultationAgentDisplay;
