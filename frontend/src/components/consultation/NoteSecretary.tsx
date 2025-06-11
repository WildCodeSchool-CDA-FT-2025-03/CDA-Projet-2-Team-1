import { useState } from 'react';
import { useParams } from 'react-router';
import { useQuery, useMutation } from '@apollo/client';
// types
import {
  GET_NOTE_SECRETARY_BY_CONSULTATION_ID,
  CREATE_NOTE_SECRETARY,
} from '@/schemas/note-secretary.schema';
// utils
import { formatDate, formatTime } from '@/utiles/date.utile';
// styles
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

function NoteSecretary() {
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState('');

  const { data, loading, error, refetch } = useQuery(GET_NOTE_SECRETARY_BY_CONSULTATION_ID, {
    variables: { consultationId: id! },
    skip: !id,
  });

  const [createNoteMutation, { loading: createLoading }] = useMutation(CREATE_NOTE_SECRETARY, {
    onCompleted: () => {
      // Rafraîchir les données après création
      refetch();
      // Réinitialiser le formulaire
      setNote('');
    },
    onError: (error) => {
      console.error('Erreur lors de la création de la note:', error);
      alert('Erreur lors de la création de la note: ' + error.message);
    },
  });

  const handleSaveNote = async () => {
    if (!note.trim()) {
      alert("Veuillez saisir une note avant d'enregistrer");
      return;
    }

    try {
      await createNoteMutation({
        variables: {
          text: note.trim(),
          consultationId: id!,
        },
      });
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
    }
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;

  // Vérifier s'il y a déjà une note
  const existingNote = data?.getNoteSecretaryByConsultationId?.[0];

  return (
    <section aria-labelledby="note-secretary">
      <h3 className="font-semibold text-xl mb-3 border-b border-turquoise-600 pb-2">
        Note du secrétariat
      </h3>

      {existingNote ? (
        <div className="space-y-2 bg-gray-50 p-3 rounded-md">
          <p className="text-gray-800">{existingNote.text}</p>

          <p className="text-xs italic text-gray-500 mt-2">
            le {formatDate(new Date(existingNote.created_at))} à{' '}
            {formatTime(new Date(existingNote.created_at))}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <Textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Saisissez votre note..."
            className="min-h-[100px]"
          />
          <Button onClick={handleSaveNote} disabled={createLoading || !note.trim()}>
            {createLoading ? 'Enregistrement...' : 'Enregistrer'}
          </Button>
        </div>
      )}
    </section>
  );
}

export default NoteSecretary;
