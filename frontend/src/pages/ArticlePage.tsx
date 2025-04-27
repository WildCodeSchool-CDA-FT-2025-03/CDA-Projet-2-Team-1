import { Link, useParams } from 'react-router-dom';

import { mockArticles } from '../data/mockArticles';

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = mockArticles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="container py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article non trouvé</h1>
          <Link to="/" className="btn btn-primary">
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <article className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-block mb-6 text-primary hover:text-primary/80 transition-colors"
        >
          ← Retour à l&apos;accueil
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
          <div className="flex items-center text-gray-400">
            <time dateTime={article.date}>{new Date(article.date).toLocaleDateString()}</time>
            <span className="mx-2">•</span>
            <span>{article.author}</span>
          </div>
        </header>

        <div className="aspect-video overflow-hidden rounded-lg mb-8">
          {article.images.map(imageUrl => (
            <div key={imageUrl} className="mb-4">
              <img
                src={imageUrl}
                alt={article.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="prose prose-invert max-w-none mb-8">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {article.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {article.images.map(imageUrl => (
              <div key={imageUrl} className="aspect-video overflow-hidden rounded-lg">
                <img src={imageUrl} alt={article.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        {article.videos.length > 0 && (
          <div className="space-y-4 mb-8">
            {article.videos.map(videoUrl => (
              <div key={videoUrl} className="mb-4">
                <video controls className="w-full">
                  <source src={videoUrl} type="video/mp4" />
                  <track kind="captions" srcLang="fr" label="Français" />
                </video>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {article.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-dark-lighter rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        {article.relatedArticles.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {article.relatedArticles.map(relatedId => {
                const relatedArticle = mockArticles.find(a => a.id === relatedId);
                if (!relatedArticle) return null;
                return (
                  <Link
                    key={relatedId}
                    to={`/article/${relatedId}`}
                    className="block p-4 bg-dark-lighter rounded-lg hover:bg-dark-lighter/80 transition-colors"
                  >
                    <h3 className="text-lg font-bold mb-2">{relatedArticle.title}</h3>
                    <p className="text-gray-400">{relatedArticle.excerpt}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <p className="text-gray-400">
          Bienvenue dans notre analyse approfondie du monde du gaming {article.category}. Dans cet
          article, nous allons explorer les dernières tendances, les nouveautés et les
          développements majeurs qui façonnent l&apos;industrie du jeu vidéo.
        </p>

        <p className="text-gray-400">
          Ces développements ont un impact significatif sur l&apos;industrie du jeu vidéo. Les
          studios indépendants bénéficient d&apos;outils plus accessibles, tandis que les grands
          développeurs peuvent créer des expériences plus ambitieuses.
        </p>
      </article>
    </div>
  );
};

export default ArticlePage;
