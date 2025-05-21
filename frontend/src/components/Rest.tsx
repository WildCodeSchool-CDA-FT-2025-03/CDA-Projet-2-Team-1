import { RestEntity, useGetByUserIdQuery } from '@/gql/graphql-types';
import { useState } from 'react';
import { Calendar, SlotInfo, dateFnsLocalizer } from 'react-big-calendar';
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

// Style personnalisé pour les événements
const eventStyleGetter = (event: RestEntity) => ({
  style: {
    backgroundColor: eventColors(event.type),
    borderRadius: '4px',
    color: 'white',
    border: 'none',
    padding: '2px 5px',
  },
});

// Gestionnaire de sélection
const handleSelect = (slotInfo: SlotInfo) => {
  console.log('Selected slot:', slotInfo);
  // ouvrir un modal pour ajouter un nouvel événement
};

type RestProps = {
  user_id: string;
};

function Rest({ user_id }: RestProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const events = useGetByUserIdQuery({ variables: { userId: user_id } });
  const rest =
    events.data?.getByUserID.map((e) => {
      return {
        ...e,
        date_start: new Date(e.date_start),
        date_end: new Date(e.date_end),
      };
    }) || [];

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
          onSelectSlot={handleSelect}
          eventPropGetter={eventStyleGetter}
          date={currentDate}
          onNavigate={(date) => setCurrentDate(date)}
          culture="fr"
          messages={navigation}
        />
      </div>
    </section>
  );
}

export default Rest;
