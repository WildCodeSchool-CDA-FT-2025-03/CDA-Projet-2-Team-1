import { useState } from 'react';
import { RestModalProps, RestEnum } from '@/types/rest.types';
import Modal from '@/components/Modal';

function RestModal({ isOpen, onClose, onSubmit, selectedDates }: RestModalProps) {
  const [selectedType, setSelectedType] = useState(RestEnum.REST);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(selectedType);
  };

  if (!isOpen || !selectedDates) return null;

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            {Object.values(RestEnum).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
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
    </Modal>
  );
}

export default RestModal;
