import {
  GetPatientDetailsQuery,
  GetPatientsBasicQuery,
  useGetPatientDetailsLazyQuery,
  useGetPatientsBasicQuery,
} from '@/gql/graphql-types';
import { type Patient, type PatientDialogProps } from '@/types/patient';
import { useRef, useState } from 'react';
import { ErrorDisplay } from './ErrorDisplay';
import PatientDetail from './PatientDetail';
import { PatientList } from './PatientList';

export const PatientDialog = ({
  serverUrl,
}: Omit<PatientDialogProps, 'patients' | 'loading' | 'error'>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);

  // Requête pour la liste basique des patients
  const {
    data: basicData,
    loading: basicLoading,
    error: basicError,
  } = useGetPatientsBasicQuery({
    skip: !isOpen, // Ne charge les données que lorsque la modal est ouverte
  });

  // Requête pour les détails d'un patient
  const [getPatientDetails, { data: detailData, loading: detailLoading, error: detailError }] =
    useGetPatientDetailsLazyQuery();

  // Gestionnaire pour afficher les détails d'un patient
  const handleShowDetail = async (patient: Patient) => {
    setSelectedPatient(patient);
    await getPatientDetails({ variables: { id: patient.id } });
  };

  // Convertit le patient GraphQL en type patient frontend pour la liste
  const convertToBasicPatient = (patient: GetPatientsBasicQuery['patients'][0]): Patient => ({
    id: patient.id,
    firstname: patient.firstname,
    lastname: patient.lastname,
    birthdate: null,
    gender: '',
    email: '',
    ssn: patient.ssn ? { number: patient.ssn.number } : null,
    city: null,
  });

  // Convertit le patient GraphQL en type patient frontend pour les détails
  const convertToDetailPatient = (
    patient: NonNullable<GetPatientDetailsQuery['patient']>
  ): Patient => ({
    id: patient.id,
    firstname: patient.firstname,
    lastname: patient.lastname,
    birthdate: patient.birthdate ? new Date(patient.birthdate) : null,
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

  // Mapping pour PatientDetail
  const mapPatientToDetailProps = (patient: Patient) => ({
    ssn: patient.ssn?.number || '',
    lastname: patient.lastname,
    firstname: patient.firstname,
    birthdate: patient.birthdate,
    gender: patient.gender,
    email: patient.email,
    zipCode: patient.city?.zip_code || '',
    city: patient.city?.name || '',
  });

  // ... reste du code pour la gestion du focus et des événements ...

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

            {basicLoading && <p>Chargement de la liste...</p>}
            {basicError && <ErrorDisplay error={basicError} serverUrl={serverUrl} />}
            {detailError && <ErrorDisplay error={detailError} serverUrl={serverUrl} />}

            {!basicLoading && !basicError && basicData && !selectedPatient && (
              <PatientList
                patients={basicData.patients.map(convertToBasicPatient)}
                onShowDetail={handleShowDetail}
              />
            )}
            {selectedPatient && (
              <>
                {detailLoading ? (
                  <p>Chargement des détails...</p>
                ) : (
                  detailData?.patient && (
                    <PatientDetail
                      {...mapPatientToDetailProps(convertToDetailPatient(detailData.patient))}
                      onShowDetail={() => setSelectedPatient(null)}
                    />
                  )
                )}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};
