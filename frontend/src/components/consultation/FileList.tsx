import { useGetFilesByConsultationIdQuery } from '@/gql/graphql-types';
import { useParams } from 'react-router';
import UploadFile from './UploadFile';

function FileList() {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error, refetch } = useGetFilesByConsultationIdQuery({
    variables: { consultationId: id! },
    skip: !id,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const existingFiles = data?.getFilesByConsultationId;

  const handleUploadSuccess = () => {
    // Rafraîchir la liste des fichiers après un upload réussi
    refetch();
  };

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
      <UploadFile consultationId={id!} onUploadSuccess={handleUploadSuccess} />
    </section>
  );
}

export default FileList;
