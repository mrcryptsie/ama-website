import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NewsArticle } from '../types';

// ... (data remains the same)
const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Lancement officiel de la première cohorte de l'AMA",
    excerpt: "L'Académie a officiellement accueilli ses 39 boursiers lors d'une cérémonie de lancement vibrante, marquant le début d'une nouvelle ère pour la data science en Afrique.",
    imageUrl: "https://picsum.photos/seed/news1/400/250",
    date: "1 Septembre 2025",
    category: "Événement"
  },
  {
    id: 2,
    title: "Masterclass exclusive avec un pionnier du Deep Learning",
    excerpt: "Les boursiers de l'AMA ont eu l'opportunité unique d'échanger avec un des pionniers du Deep Learning, un moment d'inspiration et d'apprentissage intense.",
    imageUrl: "https://picsum.photos/seed/news2/400/250",
    date: "15 Octobre 2025",
    category: "Masterclass"
  },
  {
    id: 3,
    title: "Partenariat stratégique avec ORIENTY pour l'innovation",
    excerpt: "L'AMA et ORIENTY renforcent leur collaboration pour créer des ponts entre la formation d'excellence et les besoins concrets de l'industrie technologique africaine.",
    imageUrl: "https://picsum.photos/seed/news3/400/250",
    date: "3 Novembre 2025",
    category: "Partenariat"
  },
  {
    id: 4,
    title: "Hackathon Panafricain : nos boursiers remportent le premier prix",
    excerpt: "Une équipe de l'AMA s'est distinguée lors du dernier hackathon sur l'agriculture durable, en proposant une solution innovante basée sur l'IA.",
    imageUrl: "https://picsum.photos/seed/news4/400/250",
    date: "5 Décembre 2025",
    category: "Succès"
  },
  {
    id: 5,
    title: "Prochainement : Ouverture des candidatures pour la cohorte 2026",
    excerpt: "Préparez vos dossiers ! L'appel à candidatures pour la prochaine promotion de l'Académie des Mathématiques Appliquées sera bientôt lancé. Restez connectés.",
    imageUrl: "https://picsum.photos/seed/news5/400/250",
    date: "10 Janvier 2026",
    category: "Annonce"
  },
  {
    id: 6,
    title: "Article de blog : L'impact du NLP sur les langues africaines",
    excerpt: "Découvrez comment les recherches menées au sein de l'AMA contribuent à l'avancement du traitement automatique des langues locales et à la préservation du patrimoine linguistique.",
    imageUrl: "https://picsum.photos/seed/news6/400/250",
    date: "2 Février 2026",
    category: "Blog"
  }
];

const sectionVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
};

const itemVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};


const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <motion.div 
        className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
        variants={itemVariants}
        whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
    >
        <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover" />
        <div className="p-6 flex-grow flex flex-col">
            <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>{article.date}</span>
                <span className="bg-ama-orange text-white font-bold py-1 px-2 rounded-full text-xs">{article.category}</span>
            </div>
            <h3 className="text-xl font-bold font-display text-ama-blue mb-2 flex-grow">{article.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
            <a href="#" className="text-ama-orange font-bold hover:underline mt-auto">Lire la suite &rarr;</a>
        </div>
    </motion.div>
);

const NewsPage: React.FC = () => {
  const [filter, setFilter] = useState('Tous');
  const categories = ['Tous', ...Array.from(new Set(newsArticles.map(a => a.category)))];

  const filteredArticles = useMemo(() => {
    if (filter === 'Tous') return newsArticles;
    return newsArticles.filter(article => article.category === filter);
  }, [filter]);

  const featuredArticle = newsArticles[0];

  return (
    <motion.div initial="offscreen" animate="onscreen" variants={sectionVariants}>
      <motion.section className="py-20 bg-ama-gray" variants={itemVariants}>
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black font-display text-center text-ama-blue mb-4">Actualités de l'Académie</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-600">Suivez les derniers événements, succès et opportunités au sein de la communauté AMA.</p>
        </div>
      </motion.section>

      <motion.section 
        className="py-12 bg-white"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
          <div className="container mx-auto px-6">
              <motion.h2 className="text-3xl font-bold text-ama-blue mb-6" variants={itemVariants}>À la Une</motion.h2>
              <motion.div 
                className="bg-white rounded-lg shadow-xl overflow-hidden md:grid md:grid-cols-2 items-center"
                variants={itemVariants}
              >
                  <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="w-full h-64 md:h-full object-cover" />
                  <div className="p-8">
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                          <span>{featuredArticle.date}</span>
                          <span className="bg-ama-orange text-white font-bold py-1 px-2 rounded-full text-xs">{featuredArticle.category}</span>
                      </div>
                      <h3 className="text-2xl font-bold font-display text-ama-blue mb-4">{featuredArticle.title}</h3>
                      <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                      <motion.a href="#" className="bg-ama-orange text-white font-bold py-2 px-6 rounded-full inline-block"
                         whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                       >
                          Lire l'article
                      </motion.a>
                  </div>
              </motion.div>
          </div>
      </motion.section>

      <motion.section 
        className="py-20 bg-ama-gray"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
                  filter === category
                    ? 'bg-ama-blue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
            <AnimatePresence>
              {filteredArticles.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default NewsPage;
