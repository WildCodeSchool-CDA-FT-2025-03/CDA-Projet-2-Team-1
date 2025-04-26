import './RSSFeed.css';

import React, { useEffect, useState } from 'react';

import Parser from 'rss-parser';

interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
}

const RSSFeed: React.FC = () => {
  const [feedItems, setFeedItems] = useState<RSSItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const parser = new Parser();
        // Utilisation d'un proxy CORS pour contourner les restrictions
        const response = await fetch(
          'https://api.allorigins.win/get?url=' +
            encodeURIComponent('https://www.jeuxvideo.com/rss/rss.xml'),
        );
        const data = await response.json();
        const rssContent = data.contents;

        const feed = await parser.parseString(rssContent);

        if (feed.items) {
          setFeedItems(
            feed.items.slice(0, 5).map(item => ({
              title: item.title || '',
              link: item.link || '#',
              pubDate: item.pubDate ? new Date(item.pubDate).toLocaleDateString() : '',
            })),
          );
        } else {
          setError('Aucun article trouvé dans le flux RSS');
        }
      } catch (err) {
        setError('Impossible de se connecter au serveur RSS');
        console.error('Erreur RSS:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRSS();
  }, []);

  if (loading) {
    return <div className="rss-loading">Chargement du flux RSS...</div>;
  }

  if (error) {
    return <div className="rss-error">{error}</div>;
  }

  return (
    <div className="rss-feed">
      <h3>Dernières actualités gaming</h3>
      <ul>
        {feedItems.map(item => (
          <div key={item.link} className="mb-4">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            <span className="rss-date">{item.pubDate}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RSSFeed;
