import { useState } from 'react';
import { Calendar, SlotInfo, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { fr } from 'date-fns/locale';
// Types
import { RestEvent, RestProps } from '../types/rest.type';

// Données factices des congés
const fakeRestData: RestEvent[] = [
  {
    id: 1,
    user_id: '1',
    start: new Date(2025, 5, 19),
    end: new Date(2025, 5, 25),
    type: 'Congé',
  },
  {
    id: 2,
    user_id: '1',
    start: new Date(2025, 5, 9),
    end: new Date(2025, 5, 11),
    type: 'Maladie',
  },
  {
    id: 3,
    user_id: '2',
    start: new Date(2025, 5, 12),
    end: new Date(2025, 5, 14),
    type: 'Formation',
  },
  {
    id: 4,
    user_id: '3',
    start: new Date(2025, 5, 30),
    end: new Date(2025, 5, 31),
    type: 'Formation',
  },
];

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
const eventColors = {
  Congé: '#4CAF50', // vert
  Maladie: '#F44336', // rouge
  Formation: '#2196F3', // bleu
};

// Style personnalisé pour les événements
const eventStyleGetter = (event: RestEvent) => ({
  style: {
    backgroundColor: eventColors[event.type] || '#9E9E9E', // gris par défaut
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

function Rest({ user_id }: RestProps) {
  const [events] = useState<RestEvent[]>(fakeRestData);
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1));

  // Filtrer les événements pour n'afficher que ceux du médecin connecté
  const filteredEvents = events.filter((event) => event.user_id === user_id);

  return (
    <section className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Gestion des Congés</h2>

      <div className="bg-white rounded-lg shadow-md p-4 h-[600px]">
        <Calendar
          localizer={localizer}
          events={filteredEvents}
          startAccessor="start"
          endAccessor="end"
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
