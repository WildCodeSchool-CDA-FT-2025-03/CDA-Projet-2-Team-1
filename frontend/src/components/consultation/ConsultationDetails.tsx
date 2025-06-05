import { useParams } from 'react-router';
import { useGetConsultationByIdQuery } from '@/gql/graphql-types';

function ConsultationDetails() {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useGetConsultationByIdQuery({
    variables: { id: id! },
    skip: !id,
  });

  if (loading) {
    return (
      <section aria-live="polite" className="p-4">
        <p>Chargement des détails de la consultation...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section role="alert" className="p-4 text-red-600">
        <h2 className="font-semibold text-lg mb-2">Erreur</h2>
        <p>Impossible de charger les détails de la consultation : {error.message}</p>
      </section>
    );
  }

  if (!data?.getConsultationById) {
    return (
      <section role="alert" className="p-4 text-red-600">
        <h2 className="font-semibold text-lg mb-2">Consultation introuvable</h2>
        <p>Aucune consultation trouvée avec cet identifiant.</p>
      </section>
    );
  }

  const consultation = data.getConsultationById;
  const startDate = consultation.date_start ? new Date(consultation.date_start) : null;
  const endDate = consultation.date_end ? new Date(consultation.date_end) : null;

  return (
    <article className="consultation-details space-y-6 p-4">
      <h2 className="font-bold text-3xl mb-6">Détails de la consultation</h2>

      <section aria-labelledby="patient-info">
        <h3 id="patient-info" className="font-semibold text-xl mb-3 border-b border-gray-200 pb-2">
          Informations du patient
        </h3>
        <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-y-2 gap-x-4 items-baseline">
          <dt className="font-medium text-gray-700 sm:min-w-[150px]">N° de sécurité sociale :</dt>
          <dd className="text-gray-900">{consultation.patient?.ssn?.number || 'Non renseigné'}</dd>

          <dt className="font-medium text-gray-700 sm:min-w-[150px]">Nom :</dt>
          <dd className="text-gray-900">{consultation.patient?.lastname || 'Non renseigné'}</dd>

          <dt className="font-medium text-gray-700 sm:min-w-[150px]">Prénom :</dt>
          <dd className="text-gray-900">{consultation.patient?.firstname || 'Non renseigné'}</dd>
        </dl>
      </section>

      <section aria-labelledby="doctor-info">
        <h3 id="doctor-info" className="font-semibold text-xl mb-3 border-b border-gray-200 pb-2">
          Médecin responsable
        </h3>
        <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-y-2 gap-x-4 items-baseline">
          <dt className="font-medium text-gray-700 sm:min-w-[150px]">Nom :</dt>
          <dd className="text-gray-900">Dr. {consultation.doctor?.lastname || 'Non renseigné'}</dd>

          <dt className="font-medium text-gray-700 sm:min-w-[150px]">Prénom :</dt>
          <dd className="text-gray-900">{consultation.doctor?.firstname || 'Non renseigné'}</dd>

          <dt className="font-medium text-gray-700 sm:min-w-[150px]">Service :</dt>
          <dd className="text-gray-900">{consultation.doctor?.service?.name || 'Non renseigné'}</dd>
        </dl>
      </section>

      <section aria-labelledby="appointment-time">
        <h3
          id="appointment-time"
          className="font-semibold text-xl mb-3 border-b border-gray-200 pb-2"
        >
          Horaires du rendez-vous
        </h3>
        <dl className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-y-2 gap-x-4 items-baseline">
          <dt className="font-medium text-gray-700 sm:min-w-[150px]">Date :</dt>
          <dd className="text-gray-900">
            <time dateTime={startDate?.toISOString()}>
              {startDate?.toLocaleDateString('fr-FR')}
            </time>
          </dd>

          <dt className="font-medium text-gray-700 sm:min-w-[150px]">Heure de début :</dt>
          <dd className="text-gray-900">
            <time dateTime={startDate?.toISOString()}>
              {startDate?.toLocaleTimeString('fr-FR', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </time>
          </dd>

          <dt className="font-medium text-gray-700 sm:min-w-[150px]">Heure de fin :</dt>
          <dd className="text-gray-900">
            <time dateTime={endDate?.toISOString()}>
              {endDate?.toLocaleTimeString('fr-FR', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </time>
          </dd>

          {startDate && endDate && (
            <>
              <dt className="font-medium text-gray-700 sm:min-w-[150px]">Durée :</dt>
              <dd className="text-gray-900">
                {Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60))} minutes
              </dd>
            </>
          )}
        </dl>
      </section>
    </article>
  );
}

export default ConsultationDetails;
