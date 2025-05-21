import { useEffect, useRef, useState } from 'react';
// Components
import { ErrorDisplay } from './ErrorDisplay';
import { PatientList } from './PatientList';
// types
import { type PatientDialogProps } from '@/types/patient';
import './patients.css';

export const PatientDialog = ({ patients, loading, error, serverUrl }: PatientDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

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
        className="patients-button"
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="patients-modal"
        aria-haspopup="dialog"
      >
        Voir les patients
      </button>
      {isOpen && (
        <>
          <div className="patients-overlay" onClick={() => setIsOpen(false)} aria-hidden="true" />
          <div
            ref={modalRef}
            id="patients-modal"
            className="patients-sidebar"
            role="dialog"
            aria-modal="true"
            aria-labelledby="patients-title"
            aria-describedby="patients-content"
          >
            <div className="patients-header">
              <h2 id="patients-title" className="patients-title">
                Liste des patients
              </h2>
              <button
                className="patients-close-button"
                onClick={() => setIsOpen(false)}
                aria-label="Fermer la liste des patients"
              >
                ✕
              </button>
            </div>
            <div id="patients-content">
              {loading && <p>Chargement...</p>}
              {error && <ErrorDisplay error={error} serverUrl={serverUrl} />}
              {!loading && !error && patients && <PatientList patients={patients} />}
            </div>
          </div>
        </>
      )}
    </>
  );
};
