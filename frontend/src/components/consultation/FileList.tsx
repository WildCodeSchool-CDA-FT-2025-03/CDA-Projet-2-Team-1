import { useGetFilesByConsultationIdQuery } from '@/gql/graphql-types';
import { useParams } from 'react-router';

function FileList() {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useGetFilesByConsultationIdQuery({
    variables: { consultationId: id! },
    skip: !id,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const existingFiles = data?.getFilesByConsultationId;

  return (
    <section aria-labelledby="file-list">
      <h3 id="file-list" className="font-semibold text-xl mb-3 border-b border-turquoise-600 pb-2">
        Documents joints
      </h3>

      {existingFiles && existingFiles.length > 0 ? (
        <ul>
          {data?.getFilesByConsultationId.map((file) => (
            <li key={file.id}>
              <a href={file.path} target="_blank" rel="noopener noreferrer">
                {file.name}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun document joint pour cette consultation</p>
      )}
    </section>
  );
}

export default FileList;
