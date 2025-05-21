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
import RestModal from './RestModal';

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

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDates(null);
  };

  const handleCreateRest = async (type: string) => {
    if (selectedDates) {
      try {
        await createRest({
          variables: {
            userId: user_id,
            type,
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

      <RestModal
        isOpen={showModal}
        onClose={handleCloseModal}
        onSubmit={handleCreateRest}
        selectedDates={selectedDates}
      />
    </section>
  );
}

export default Rest;
