import {
  RestEntity,
  useGetByUserIdQuery,
  useCreateRestMutation,
  GetByUserIdDocument,
} from '@/gql/graphql-types';
import { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { fr } from 'date-fns/locale';

// Configuration du localisateur
const locales = {
  fr: fr,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: fr }),
  getDay,
  locales,
});

// Navigation de l'agenda
const navigation = {
  next: 'Suivant >',
  previous: '< Précédent',
  today: "Aujourd'hui",
  month: 'Mois',
  week: 'Semaine',
  day: 'Jour',
};

// Mapping des couleurs par type de congé
const eventColors = (typeRest: string) => {
  switch (typeRest) {
    case 'Congé':
      return '#4CAF50'; // vert
    case 'Maladie':
      return '#F44336'; // rouge
    case 'Formation':
      return '#2196F3'; // bleu
    default:
      return '#2196F3'; // bleu
  }
};

// Style personnalisé pour les congés
const eventStyleGetter = (event: RestEntity) => ({
  style: {
    backgroundColor: eventColors(event.type),
    borderRadius: '4px',
    color: 'white',
    border: 'none',
    padding: '2px 5px',
  },
});

type RestProps = {
  user_id: string;
};

function Rest({ user_id }: RestProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedDates, setSelectedDates] = useState<{ start: Date; end: Date } | null>(null);
  const [selectedType, setSelectedType] = useState('Congé');

  const events = useGetByUserIdQuery({ variables: { userId: user_id } });
  const [createRest] = useCreateRestMutation({
    refetchQueries: [{ query: GetByUserIdDocument, variables: { userId: user_id } }],
  });

  const rest =
    events.data?.getByUserID.map((e) => {
      return {
        ...e,
        date_start: new Date(e.date_start),
        date_end: new Date(e.date_end),
      };
    }) || [];

  const handleSelect = ({ start, end }: { start: Date; end: Date }) => {
    setSelectedDates({ start, end });
    setShowModal(true);
  };

  const handleCreateRest = async () => {
    if (selectedDates) {
      try {
        await createRest({
          variables: {
            userId: user_id,
            type: selectedType,
            dateStart: selectedDates.start,
            dateEnd: selectedDates.end,
          },
        });
        setShowModal(false);
        setSelectedDates(null);
      } catch (error) {
        console.error('Erreur lors de la création du congé:', error);
      }
    }
  };

  return (
    <section className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Gestion des Congés</h2>
      <div className="bg-white rounded-lg shadow-md p-4 h-[600px]">
        <Calendar
          localizer={localizer}
          events={rest}
          startAccessor="date_start"
          endAccessor="date_end"
          titleAccessor={(event) => event.type}
          style={{ height: '100%' }}
          views={['month', 'week', 'day']}
          defaultView="month"
          selectable
          eventPropGetter={eventStyleGetter}
          date={currentDate}
          onNavigate={(date) => setCurrentDate(date)}
          onSelectSlot={handleSelect}
          culture="fr"
          messages={navigation}
        />
      </div>

      {showModal && (
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
                Du {selectedDates?.start.toLocaleDateString()} au{' '}
                {selectedDates?.end.toLocaleDateString()}
              </p>
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Annuler
              </button>
              <button
                onClick={handleCreateRest}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Créer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Rest;
