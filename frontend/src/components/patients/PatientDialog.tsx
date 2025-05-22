import { useEffect, useRef, useState } from 'react';
// Components
import { ErrorDisplay } from './ErrorDisplay';
import PatientDetail from './PatientDetail';
import { PatientList } from './PatientList';
// types
import { GetPatientsQuery, useGetPatientsQuery } from '@/gql/graphql-types';
import { type Patient, type PatientDialogProps } from '@/types/patient';

export const PatientDialog = ({
  serverUrl,
}: Omit<PatientDialogProps, 'patients' | 'loading' | 'error'>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const { data, loading, error } = useGetPatientsQuery();

  // Convert GraphQL patient to frontend patient type
  const convertToFrontendPatient = (patient: GetPatientsQuery['patients'][0]): Patient => ({
    id: patient.id,
    firstname: patient.firstname,
    lastname: patient.lastname,
    birthdate: patient.birthdate,
    gender: patient.gender,
    email: patient.email,
    ssn: patient.ssn ? { number: patient.ssn.number } : null,
    city: patient.city
      ? {
          name: patient.city.name,
          zip_code: patient.city.zip_code,
        }
      : null,
  });

  // Gestion de la fermeture avec la touche Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setSelectedPatient(null);
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

      const modalElement = modalRef.current;
      if (modalElement) {
        const focusableElements = modalElement.querySelectorAll(
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

        modalElement.addEventListener('keydown', handleTabKey);
        firstFocusable.focus();

        return () => {
          modalElement.removeEventListener('keydown', handleTabKey);
          // Restore focus when modal closes
          previousFocusRef.current?.focus();
        };
      }
    }
  }, [isOpen]);

  // Mapping pour PatientDetail
  const mapPatientToDetailProps = (patient: Patient) => {
    return {
      ssn: patient.ssn?.number || '',
      lastname: patient.lastname || '',
      firstname: patient.firstname || '',
      birthdate: patient.birthdate ? patient.birthdate.toISOString() : 'N/A',
      gender: patient.gender || '---',
      email: patient.email || '',
      zipCode: patient.city?.zip_code || '',
      city: patient.city?.name || '',
    };
  };

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
            onClick={() => {
              setIsOpen(false);
              setSelectedPatient(null);
            }}
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
                {selectedPatient ? 'Détail du patient' : 'Liste des patients'}
              </h2>
              <button
                className="bg-transparent border-none cursor-pointer text-xl p-1 text-inherit hover:opacity-70 focus:outline-2 focus:outline-blue-500 focus:outline-offset-2 rounded"
                onClick={() => {
                  setIsOpen(false);
                  setSelectedPatient(null);
                }}
                aria-label="Fermer la liste des patients"
              >
                ✕
              </button>
            </div>
            <div id="patients-content">
              {loading && <p>Chargement...</p>}
              {error && <ErrorDisplay error={error} serverUrl={serverUrl} />}
              {!loading && !error && data && !selectedPatient && (
                <PatientList
                  patients={data.patients.map(convertToFrontendPatient)}
                  onShowDetail={(patient) => setSelectedPatient(patient)}
                />
              )}
              {!loading && !error && selectedPatient && (
                <PatientDetail
                  {...mapPatientToDetailProps(selectedPatient)}
                  onShowDetail={setSelectedPatient}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
