import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const consoleCategories = [
  { name: 'PlayStation', path: '/category/playstation' },
  { name: 'Xbox', path: '/category/xbox' },
  { name: 'Nintendo', path: '/category/nintendo' },
  { name: 'PC', path: '/category/pc' },
  { name: 'Mobile', path: '/category/mobile' },
];

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <header className="sticky top-0 z-50 bg-background shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="text-2xl font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded"
          >
            Game News
          </Link>

          <nav className="flex flex-wrap justify-center gap-4">
            {consoleCategories.map(category => (
              <Link
                key={category.path}
                to={category.path}
                className="text-foreground hover:text-primary transition-colors duration-200 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-full hover:bg-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label={`Basculer en mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
            >
              <div className="relative w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-foreground absolute transition-opacity duration-200 ${
                    theme === 'dark' ? 'opacity-100' : 'opacity-0'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-foreground absolute transition-opacity duration-200 ${
                    theme === 'light' ? 'opacity-100' : 'opacity-0'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
            </button>

            <div className="flex items-center gap-2">
              <input
                type="search"
                placeholder="Rechercher..."
                className="input"
                aria-label="Rechercher des articles"
              />
              <button className="btn btn-primary" aria-label="Lancer la recherche">
                Rechercher
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
