export interface Article {
  id: number;
  title: string;
  image: string;
  excerpt: string;
  date: string;
  category: string;
  content: string;
  author: string;
  tags: string[];
  relatedArticles: number[];
  images: string[];
  videos: string[];
}

const generateContent = (category: string) => {
  const baseContent = `
    <h2>Introduction</h2>
    <p>Bienvenue dans notre analyse approfondie du monde du gaming ${category}. Dans cet article, nous allons explorer les dernières tendances, les nouveautés et les développements majeurs qui façonnent l'industrie du jeu vidéo.</p>
    
    <h2>Les Dernières Tendances</h2>
    <p>Le marché du jeu vidéo connaît une évolution constante, avec des innovations technologiques qui repoussent les limites de l'expérience utilisateur. Les développeurs continuent d'explorer de nouvelles façons d'engager les joueurs, que ce soit à travers des graphismes plus réalistes, des mécaniques de jeu innovantes ou des récits plus immersifs.</p>
    
    <h2>Analyse Technique</h2>
    <p>D'un point de vue technique, les avancées sont remarquables. Les moteurs de jeu modernes permettent des rendus photoréalistes, tandis que l'intelligence artificielle ouvre de nouvelles possibilités pour l'adaptation dynamique du gameplay. Les performances matérielles continuent de s'améliorer, offrant des expériences plus fluides et immersives.</p>
    
    <h2>Impact sur l'Industrie</h2>
    <p>Ces développements ont un impact significatif sur l'industrie du jeu vidéo. Les studios indépendants bénéficient d'outils plus accessibles, tandis que les grands développeurs peuvent créer des expériences plus ambitieuses. La démocratisation des technologies permet une plus grande diversité de jeux et d'expériences pour les joueurs.</p>
    
    <h2>Perspectives d'Avenir</h2>
    <p>L'avenir du gaming ${category} s'annonce prometteur. Avec l'émergence de nouvelles technologies comme la réalité virtuelle, l'augmentée et le cloud gaming, les possibilités semblent infinies. Les joueurs peuvent s'attendre à des expériences toujours plus immersives et personnalisées dans les années à venir.</p>
  `;
  return baseContent;
};

const generateArticles = (count: number, category: string) => {
  const articles = [];
  const baseId =
    category === 'playstation'
      ? 1
      : category === 'xbox'
        ? 100
        : category === 'nintendo'
          ? 200
          : category === 'pc'
            ? 300
            : 400;

  for (let i = 0; i < count; i++) {
    articles.push({
      id: baseId + i,
      title: `Article ${i + 1} sur ${category}`,
      image: `/images/${category}/article${i + 1}.jpg`,
      excerpt: `Découvrez notre analyse approfondie du ${i + 1}ème article sur ${category}. Une exploration détaillée des dernières tendances et innovations.`,
      date: new Date(2024, 3, 25 - i).toISOString().split('T')[0],
      category: category,
      content: generateContent(category),
      author: `Auteur ${i + 1}`,
      tags: ['gaming', category, 'analyse', 'technologie'],
      relatedArticles: [baseId + ((i + 1) % count), baseId + ((i + 2) % count)],
      images: [
        `/images/${category}/gallery1.jpg`,
        `/images/${category}/gallery2.jpg`,
        `/images/${category}/gallery3.jpg`,
      ],
      videos: [`/videos/${category}/trailer1.mp4`, `/videos/${category}/gameplay1.mp4`],
    });
  }
  return articles;
};

export const mockArticles: Article[] = [
  ...generateArticles(5, 'playstation'),
  ...generateArticles(5, 'xbox'),
  ...generateArticles(5, 'nintendo'),
  ...generateArticles(5, 'pc'),
  ...generateArticles(5, 'mobile'),
];
