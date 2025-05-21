import { useEffect, useRef, useState } from 'react';
// Components
import { ErrorDisplay } from './ErrorDisplay';
import { PatientList } from './PatientList';
// types
import { useGetPatientsQuery } from '@/gql/graphql-types';
import { type PatientDialogProps } from '@/types/patient';

export const PatientDialog = ({
  serverUrl,
}: Omit<PatientDialogProps, 'patients' | 'loading' | 'error'>) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const { data, loading, error } = useGetPatientsQuery();

  // Gestion de la fermeture avec la touche Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Gestion du focus trap dans la modal
  useEffect(() => {
    if (isOpen) {
      // Store the element that had focus before opening the modal
      previousFocusRef.current = document.activeElement as HTMLElement;

      if (modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0] as HTMLElement;
        const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstFocusable) {
              e.preventDefault();
              lastFocusable.focus();
            } else if (!e.shiftKey && document.activeElement === lastFocusable) {
              e.preventDefault();
              firstFocusable.focus();
            }
          }
        };

        modalRef.current.addEventListener('keydown', handleTabKey);
        firstFocusable.focus();

        return () => {
          modalRef.current?.removeEventListener('keydown', handleTabKey);
          // Restore focus when modal closes
          previousFocusRef.current?.focus();
        };
      }
    }
  }, [isOpen]);

  return (
    <>
      <button
        ref={openButtonRef}
        className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer text-base hover:opacity-90 focus:outline-2 focus:outline-blue-500 focus:outline-offset-2"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="patients-modal"
        aria-haspopup="dialog"
      >
        Voir les patients
      </button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            ref={modalRef}
            id="patients-modal"
            className="fixed right-0 top-0 z-50 h-screen w-full max-w-[800px] border border-gray-200 bg-white p-6 shadow overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="patients-title"
            aria-describedby="patients-content"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 id="patients-title" className="text-2xl font-bold m-0">
                Liste des patients
              </h2>
              <button
                className="bg-transparent border-none cursor-pointer text-xl p-1 text-inherit hover:opacity-70 focus:outline-2 focus:outline-blue-500 focus:outline-offset-2 rounded"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer la liste des patients"
              >
                ✕
              </button>
            </div>
            <div id="patients-content">
              {loading && <p>Chargement...</p>}
              {error && <ErrorDisplay error={error} serverUrl={serverUrl} />}
              {!loading && !error && data && <PatientList patients={data.patients} />}
            </div>
          </div>
        </>
      )}
    </>
  );
};
