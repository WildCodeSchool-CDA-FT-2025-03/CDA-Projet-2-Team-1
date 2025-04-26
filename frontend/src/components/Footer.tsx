import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-background shadow-md mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">À propos</h3>
            <p className="text-foreground/80">
              Game News est votre source d&apos;information pour les dernières actualités du jeu
              vidéo.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/category/playstation"
                  className="text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  PlayStation
                </Link>
              </li>
              <li>
                <Link
                  to="/category/xbox"
                  className="text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  Xbox
                </Link>
              </li>
              <li>
                <Link
                  to="/category/nintendo"
                  className="text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  Nintendo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-foreground/80">Email: contact@gamenews.com</li>
              <li className="text-foreground/80">Téléphone: +33 1 23 45 67 89</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Game News. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
