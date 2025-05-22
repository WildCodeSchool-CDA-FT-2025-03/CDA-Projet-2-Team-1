import { useEffect, useRef, useState } from 'react';
import { RestModalProps, RestEnum } from '@/types/rest.types';

function RestModal({ isOpen, onClose, onSubmit, selectedDates }: RestModalProps) {
  const [selectedType, setSelectedType] = useState(RestEnum.REST);
  const dialogRef = useRef<HTMLDialogElement>(null);

  //useEffect pour gérer l'ouverture/fermeture et les événements de la modale
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Fermer la modale lorsque l'utilisateur appuie sur Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Fermer la modale lorsque l'utilisateur clique à l'extérieur
    const handleBackdropClick = (e: MouseEvent) => {
      const rect = dialog.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        onClose();
      }
    };

    // Affichage de la modale
    if (isOpen && selectedDates) {
      dialog.showModal();

      // Ajout des événements de fermeture a11y de la modale
      dialog.addEventListener('keydown', handleKeyDown);
      dialog.addEventListener('click', handleBackdropClick);
    } else {
      dialog.close();
    }

    // Nettoyage des événements
    return () => {
      dialog.removeEventListener('keydown', handleKeyDown);
      dialog.removeEventListener('click', handleBackdropClick);
    };
  }, [isOpen, selectedDates, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedType);
  };

  if (!selectedDates) return null;

  return (
    <dialog
      ref={dialogRef}
      className="z-50 m-0 p-6 min-h-screen fixed top-0 right-0 left-auto bottom-0 w-3/7 max-w-[700px] border-l border-gray-200 rounded-none bg-white shadow-xl backdrop:bg-transparent backdrop:backdrop-blur-xs pointer-events-auto"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-desc"
    >
      <button
        type="button"
        onClick={onClose}
        className="p-2 text-gray-600 hover:text-gray-800 cursor-pointer"
        aria-label="Fermer le panneau"
      >
        {'>>'}
      </button>
      <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
        <h2 id="dialog-title" className="text-xl font-semibold mb-4">
          Enregistrer un nouvel événement
        </h2>
        <div className="mb-4">
          <label htmlFor="restType" className="block text-sm font-medium text-gray-700 mb-2">
            {`Type d'événement`}
          </label>
          <select
            id="restType"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as RestEnum)}
            className="w-full p-2 border rounded"
            aria-required="true"
          >
            <option value={RestEnum.REST}>{RestEnum.REST}</option>
            <option value={RestEnum.SICK}>{RestEnum.SICK}</option>
            <option value={RestEnum.COURSE}>{RestEnum.COURSE}</option>
          </select>
          <p id="dialog-desc" className="text-sm text-gray-600 mt-2">
            {`Du ${selectedDates.start.toLocaleDateString()} au ${new Date(selectedDates.end.getTime() - 1000).toLocaleDateString()} (inclus)`}
          </p>
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-8 py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
            aria-label="Annuler la création de l'événement"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="px-8 py-2 bg-turquoise-500 text-white rounded hover:bg-turquoise-600 cursor-pointer"
            aria-label="Valider et créer l'événement"
          >
            Valider
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default RestModal;
