import {
  GetPatientsBasicQuery,
  useGetPatientDetailsLazyQuery,
  useGetPatientsBasicQuery,
} from '@/gql/graphql-types';
import { type Patient, type PatientDialogProps } from '@/types/patient';
import { useRef, useState } from 'react';
import { ErrorDisplay } from './ErrorDisplay';
import PatientDetail from './PatientDetail';
import { PatientList } from './PatientList';
import PatientEditForm from './PatientEditForm';

export const PatientDialog = ({
  serverUrl,
}: Omit<PatientDialogProps, 'patients' | 'loading' | 'error'>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const [isEditing, setIsEditing] = useState(false);

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

  // Convertit le patient GraphQL pour la liste basique (données minimales)
  const convertToBasicPatient = (patient: GetPatientsBasicQuery['patients'][0]): Patient => ({
    id: patient.id,
    firstname: patient.firstname,
    lastname: patient.lastname,
    birthdate: new Date().toISOString(),
    gender: '',
    email: '',
    ssn: { number: patient.ssn.number },
    city: { name: '', zip_code: '' },
  });

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
                ) : detailData?.patient ? (
                  isEditing ? (
                    <PatientEditForm
                      patient={{
                        id: detailData.patient.id,
                        firstname: detailData.patient.firstname,
                        lastname: detailData.patient.lastname,
                        birthdate: new Date(detailData.patient.birthdate).toISOString(),
                        gender: detailData.patient.gender,
                        email: detailData.patient.email,
                        ssn: { number: detailData.patient.ssn.number },
                        city: {
                          name: detailData.patient.city.name,
                          zip_code: detailData.patient.city.zip_code,
                        },
                      }}
                      onCancel={() => setIsEditing(false)}
                      onSave={() => {
                        setIsEditing(false);
                        setSelectedPatient(null); // ou tu peux garder le patient affiché après édition
                      }}
                    />
                  ) : (
                    <PatientDetail
                      ssn={detailData.patient.ssn.number}
                      lastname={detailData.patient.lastname}
                      firstname={detailData.patient.firstname}
                      birthdate={detailData.patient.birthdate.toString()}
                      gender={detailData.patient.gender}
                      email={detailData.patient.email}
                      zipCode={detailData.patient.city.zip_code}
                      city={detailData.patient.city.name}
                      onShowDetail={() => setSelectedPatient(null)}
                      onStartEdit={() => setIsEditing(true)}
                    />
                  )
                ) : null}
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};
