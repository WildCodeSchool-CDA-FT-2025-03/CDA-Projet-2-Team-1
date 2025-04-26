import './ArticleCard.css';

import { Link } from 'react-router-dom';

interface ArticleCardProps {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  date: string;
}

const ArticleCard = ({ id, title, image, excerpt, date }: ArticleCardProps) => {
  return (
    <article className="card group hover:shadow-xl transition-shadow duration-300">
      <Link to={`/article/${id}`} className="block">
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h2>
          <p className="text-gray-400 mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center justify-between">
            <time dateTime={date} className="text-sm text-gray-400">
              {new Date(date).toLocaleDateString()}
            </time>
            <span className="text-primary font-medium">Lire l&apos;article</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
