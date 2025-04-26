import './Sidebar.css';

import RSSFeed from './RSSFeed';
import React from 'react';
import WordCloud from './WordCloud';

const Sidebar: React.FC = () => {
  // Exemple de données pour le nuage de mots
  const wordCloudData = [
    { text: 'PlayStation', value: 100 },
    { text: 'Xbox', value: 80 },
    { text: 'Nintendo', value: 70 },
    { text: 'PC Gaming', value: 90 },
    { text: 'eSports', value: 60 },
    { text: 'Jeux vidéo', value: 120 },
    { text: 'Streaming', value: 50 },
    { text: 'Multiplayer', value: 40 },
    { text: 'Indie', value: 30 },
    { text: 'AAA', value: 70 },
  ];

  return (
    <aside className="space-y-6">
      <div className="card p-6">
        <h3 className="text-lg font-bold text-white mb-4">Nuage de mots</h3>
        <WordCloud words={wordCloudData} />
      </div>

      <div className="card p-6">
        <RSSFeed />
      </div>
    </aside>
  );
};

export default Sidebar;
