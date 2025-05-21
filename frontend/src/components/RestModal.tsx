import { useState } from 'react';

type RestModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (type: string) => void;
  selectedDates: { start: Date; end: Date } | null;
};

function RestModal({ isOpen, onClose, onSubmit, selectedDates }: RestModalProps) {
  const [selectedType, setSelectedType] = useState('Congé');

  if (!isOpen || !selectedDates) return null;

  const handleSubmit = () => {
    onSubmit(selectedType);
  };

  return (
    <div className="fixed z-50 inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h3 className="text-xl font-semibold mb-4">Nouveau congé</h3>
        <div className="mb-4">
          <label htmlFor="restType" className="block text-sm font-medium text-gray-700 mb-2">
            Type de congé
          </label>
          <select
            id="restType"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="Congé">Congé</option>
            <option value="Maladie">Maladie</option>
            <option value="Formation">Formation</option>
          </select>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Du {selectedDates.start.toLocaleDateString()} au{' '}
            {selectedDates.end.toLocaleDateString()}
          </p>
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800">
            Annuler
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Créer
          </button>
        </div>
      </div>
    </div>
  );
}

export default RestModal;
