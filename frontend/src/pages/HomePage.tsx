import ArticleCard from '../components/ArticleCard';
import { Link } from 'react-router-dom';
import { mockArticles } from '../data/mockArticles';

const HomePage = () => {
  const categories = ['playstation', 'xbox', 'nintendo', 'pc', 'mobile'];

  // Récupérer les 5 articles les plus récents, toutes catégories confondues
  const latestArticles = mockArticles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  // Grouper les articles par catégorie
  const articlesByCategory = categories
    .map(category => ({
      category,
      articles: latestArticles.filter(article => article.category === category),
    }))
    .filter(({ articles }) => articles.length > 0);

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {articlesByCategory.map(({ category, articles }) => (
            <section key={category} className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold capitalize">{category}</h2>
                <Link
                  to={`/category/${category}`}
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Voir tous les articles →
                </Link>
              </div>
              <div className="space-y-6">
                {articles.map(article => (
                  <ArticleCard key={article.id} {...article} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="lg:col-span-1 space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">À propos</h2>
            <p className="text-gray-400">
              Bienvenue sur notre site dédié à l&apos;actualité du gaming. Découvrez les dernières
              nouvelles, tests et analyses des jeux vidéo sur toutes les plateformes.
            </p>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4">Statistiques</h2>
            <div className="space-y-2 text-gray-400">
              <p>Articles récents : {latestArticles.length}</p>
              <p>Dernier article : {new Date(latestArticles[0].date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
