import { useState } from 'react';
// types
import { UploadFileProps } from '@/types/file.type';
// styles
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Save } from 'lucide-react';

const safeJsonParse = async (response: Response): Promise<{ message?: string } | null> => {
  try {
    return await response.json();
  } catch {
    return null;
  }
};

function UploadFile({ consultationId, onUploadSuccess }: UploadFileProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const isConfidential = false;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadError(null);
      setUploadSuccess(null);
    }
  };

  const handleUploadFile = async () => {
    if (!selectedFile) {
      setUploadError('Veuillez sélectionner un fichier');
      return;
    }

    if (!consultationId) {
      setUploadError('ID de consultation manquant');
      return;
    }

    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('consultationId', consultationId);
      formData.append('isConfidential', isConfidential ? 'true' : 'false');

      const response = await fetch('/upload/post', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      if (!response.ok) {
        // Si la réponse n'est pas ok, essayer de récupérer le message d'erreur
        let errorMessage = `Erreur ${response.status}: ${response.statusText}`;
        const errorResult = await safeJsonParse(response);
        if (errorResult?.message) {
          errorMessage = errorResult.message;
        }
        throw new Error(errorMessage);
      }

      const result = await response.json();

      setUploadSuccess('Fichier ajouté');
      setSelectedFile(null);

      // Reset du formulaire
      const fileInput = document.getElementById('file-input') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

      // Callback de succès
      if (onUploadSuccess) {
        onUploadSuccess(result.file);
      }
    } catch (error) {
      console.error('Erreur upload:', error);
      setUploadError(error instanceof Error ? error.message : 'Erreur inconnue');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <div className="flex items-center gap-2 mt-2">
        <label htmlFor="file-input" className="sr-only">
          Ajouter un fichier
        </label>
        <Input
          id="file-input"
          type="file"
          onChange={handleFileChange}
          className="block px-0 py-0 text-sm text-gray-500 file:mr-4 file:px-4 file:py-2.5 file:rounded-l-md file:border-0 file:text-sm file:cursor-pointer file:font-semibold file:text-justify file:bg-turquoise-600 file:text-white hover:file:opacity-90"
          disabled={isUploading}
        />
        <Button
          className="w-fit"
          onClick={handleUploadFile}
          disabled={!selectedFile || isUploading}
        >
          <Save className="h-6 w-6" />
        </Button>
      </div>
      {uploadError && (
        <p className="text-red-700 text-sm m-2">
          Une erreur est survenue. Contactez le service informatique.
        </p>
      )}
      {uploadSuccess && <p className="text-green-700 text-sm m-2">{uploadSuccess}</p>}
    </>
  );
}

export default UploadFile;
