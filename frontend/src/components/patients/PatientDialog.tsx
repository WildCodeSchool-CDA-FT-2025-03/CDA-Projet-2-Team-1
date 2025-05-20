import { useState } from 'react';
// Components
import { ErrorDisplay } from './ErrorDisplay';
import { PatientList } from './PatientList';
// types
import { type PatientDialogProps } from '@/types/patient';
import './patients.css';

export const PatientDialog = ({ patients, loading, error, serverUrl }: PatientDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="patients-button" onClick={() => setIsOpen(true)}>
        Voir les patients
      </button>
      {isOpen && (
        <aside className="patients-sidebar">
          <div className="patients-header">
            <h2 className="patients-title">Liste des patients</h2>
            <button className="patients-close-button" onClick={() => setIsOpen(false)}>
              ✕
            </button>
          </div>
          {loading && <p>Chargement...</p>}
          {error && <ErrorDisplay error={error} serverUrl={serverUrl} />}
          {!loading && !error && patients && <PatientList patients={patients} />}
        </aside>
      )}
    </>
  );
};
