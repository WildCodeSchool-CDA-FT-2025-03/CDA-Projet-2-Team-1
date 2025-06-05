import { useParams } from 'react-router';
import { useGetConsultationByIdQuery } from '@/gql/graphql-types';

function ConsultationDetails() {
  const { id } = useParams();

  const req = useGetConsultationByIdQuery({ variables: { id: id! } });

  return (
    <>
      <div>
        <h1>ConsultationDetails</h1>
        <p>{req.data?.getConsultationById?.patient?.firstname}</p>
        <p>{req.data?.getConsultationById?.patient?.lastname}</p>
        <p>{req.data?.getConsultationById?.patient?.ssn?.number}</p>
        <p>{req.data?.getConsultationById?.doctor?.firstname}</p>
        <p>{req.data?.getConsultationById?.doctor?.lastname}</p>
        <p>{req.data?.getConsultationById?.doctor?.service?.name}</p>
        <p>{req.data?.getConsultationById?.date_start?.toLocaleString()}</p>
        <p>{req.data?.getConsultationById?.date_end?.toLocaleString()}</p>
      </div>
    </>
  );
}

export default ConsultationDetails;
