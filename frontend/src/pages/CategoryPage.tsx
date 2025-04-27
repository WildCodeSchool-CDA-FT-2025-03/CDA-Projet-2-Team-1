import { Link, useParams } from 'react-router-dom';

import ArticleCard from '../components/ArticleCard';
import { mockArticles } from '../data/mockArticles';
import { useState } from 'react';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');
  const articlesPerPage = 5;

  const filteredArticles = mockArticles
    .filter(article => article.category.toLowerCase() === category?.toLowerCase())
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const currentArticles = filteredArticles.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage,
  );

  if (!filteredArticles.length) {
    return (
      <div className="container py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Catégorie non trouvée</h1>
          <Link to="/" className="btn btn-primary">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  const categoryInfo = {
    playstation: {
      description:
        'Toute l&apos;actualité PlayStation, des dernières sorties aux analyses approfondies des jeux exclusifs.',
      icon: '🎮',
    },
    xbox: {
      description: 'Suivez l&apos;actualité Xbox, des annonces aux tests des jeux Game Pass.',
      icon: '🎮',
    },
    nintendo: {
      description:
        'Découvrez les dernières nouvelles Nintendo, des sorties Switch aux annonces exclusives.',
      icon: '🎮',
    },
    pc: {
      description: 'L&apos;actualité PC gaming, des configurations aux tests de performance.',
      icon: '💻',
    },
    mobile: {
      description: 'Les dernières tendances du gaming mobile, des jeux aux accessoires.',
      icon: '📱',
    },
  };

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-3xl font-bold capitalize mb-4 md:mb-0">Articles {category}</h1>
            <div className="flex items-center gap-4">
              <label htmlFor="sortBy" className="text-foreground">
                Trier par :
              </label>
              <select
                id="sortBy"
                value={sortBy}
                onChange={e => setSortBy(e.target.value as 'newest' | 'oldest')}
                className="bg-dark-lighter text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary [&>option]:bg-white [&>option]:text-black"
              >
                <option value="newest">Plus récent</option>
                <option value="oldest">Plus ancien</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {currentArticles.map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`btn ${currentPage === i + 1 ? 'btn-primary' : 'bg-dark-lighter hover:bg-dark-lighter/80'}`}
                  aria-label={`Page ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="card p-6">
            <div className="text-4xl mb-4">
              {categoryInfo[category as keyof typeof categoryInfo]?.icon || '🎮'}
            </div>
            <h2 className="text-xl font-bold mb-4">À propos de {category}</h2>
            <p className="text-gray-400">
              {categoryInfo[category as keyof typeof categoryInfo]?.description ||
                'Découvrez tous nos articles sur cette catégorie, incluant les dernières actualités, tests de jeux, et analyses approfondies.'}
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">Statistiques</h2>
            <div className="space-y-2 text-gray-400">
              <p>Articles dans cette catégorie : {filteredArticles.length}</p>
              <p>Dernier article : {new Date(filteredArticles[0].date).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="card p-6">
            <label htmlFor="search" className="text-gray-400">
              Rechercher
            </label>
            <input
              id="search"
              type="text"
              placeholder="Rechercher..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
