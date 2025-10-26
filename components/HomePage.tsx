import React, { useState } from 'react'; // Ajout de useState
import { motion } from 'framer-motion';
import { Page } from '../types';
import { Counter } from './Counter';
import TestimonialCard from './TestimonialCard';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
// Import pour les tooltips (si vous avez react-tooltip ou similaire, sinon on fait simple)
// import { Tooltip } from 'react-tooltip'; // Si vous l'utilisez, sinon ignorez cette ligne

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const partners = [
  { name: 'Harvard University', logo: 'https://logo.clearbit.com/harvard.edu' },
  { name: 'Google', logo: 'https://logo.clearbit.com/google.com' },
  { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'Facebook', logo: 'https://logo.clearbit.com/meta.com' },
  { name: 'Netflix', logo: 'https://logo.clearbit.com/netflix.com' },
  { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com' },
  { name: 'Tesla', logo: 'https://logo.clearbit.com/tesla.com' },
  { name: 'Apple', logo: 'https://logo.clearbit.com/apple.com' },
];

const testimonials = [
  {
    name: "Yannick Adiahenot",
    country: "Côte d'Ivoire",
    text: "L'AMA a été une expérience transformatrice. J'ai acquis des compétences inestimables en data science qui ont ouvert de nouvelles portes à ma carrière.",
    image: "https://picsum.photos/seed/yannick/200/200"
  },
  {
    name: "Fatou Diop",
    country: "Sénégal",
    text: "Grâce à l'AMA, j'ai pu réaliser mon rêve de devenir une experte en intelligence artificielle. Les mentors sont incroyables et le programme est de classe mondiale.",
    image: "https://picsum.photos/seed/fatou/200/200",
    isFeatured: true
  },
  {
    name: "Koffi N'Guessan",
    country: "Bénin",
    text: "Je recommande vivement l'AMA à tous les jeunes africains passionnés par les données. C'est une opportunité unique d'apprendre des meilleurs et de se connecter avec un réseau panafricain.",
    image: "https://picsum.photos/seed/koffi/200/200"
  }
];

const amaCountries = [
  'Benin', 'Burkina Faso', 'Cameroon', 'Ivory Coast',
  'Mali', 'Mauritania', 'Senegal', 'Togo'
];

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const StatCard: React.FC<{ icon: React.ReactNode, value: number, label: string, delay: string }> = ({ icon, value, label, delay }) => (
    <motion.div
        className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: parseFloat(delay) }}
        viewport={{ once: true }}
    >
        <div className="text-ama-orange text-6xl mb-4 flex justify-center">{icon}</div>
        <p className="text-5xl font-black text-ama-blue"><Counter from={0} to={value} /></p>
        <p className="text-gray-700 mt-2 font-bold text-lg">{label}</p>
    </motion.div>
);

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  // --- MODIFICATION --- : État pour le pays survolé pour le tooltip
  const [hoveredCountry, setHoveredCountry] = useState<string>('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      {/* Hero Section */}
      <section className="bg-ama-blue text-white min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <motion.img
          src="https://picsum.photos/seed/african-tech/1920/1080"
          alt="African Tech Students"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
        />
        <motion.div
          className="container mx-auto px-6 text-center relative z-10"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black mb-4 tracking-tight leading-tight">Former l'excellence africaine en <span className="text-ama-orange">Data Science et IA</span></motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">Le pont entre les mathématiques appliquées, l'intelligence artificielle, les sciences de données et l'innovation en Afrique.</motion.p>
          <motion.div variants={itemVariants} className="space-x-4">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setCurrentPage('admission')} className="bg-ama-orange text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300">Postuler maintenant</motion.button>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setCurrentPage('about')} className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-ama-blue transition-colors duration-300">En savoir plus</motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Motto Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Notre devise</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="text-ama-orange text-5xl mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg></div>
              <h3 className="text-2xl font-bold text-ama-orange mb-4">Rigueur</h3>
              <p className="text-gray-700">À l’AMA, la rigueur est au cœur de la formation. Chaque étudiant est préparé à affronter les défis scientifiques et technologiques avec une méthode de travail exigeante, une discipline intellectuelle solide et un sens aigu de la précision. Cette culture de l’excellence permet d’aborder les problématiques complexes avec clarté et efficacité.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="text-ama-orange text-5xl mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
              <h3 className="text-2xl font-bold text-ama-orange mb-4">Innovation</h3>
              <p className="text-gray-700">L’AMA cultive l’esprit d’innovation à travers des projets concrets, des recherches appliquées et des partenariats stratégiques. Les étudiants sont encouragés à repousser les limites du possible, à imaginer de nouvelles approches et à développer des solutions originales adaptées aux réalités du monde actuel.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="text-ama-orange text-5xl mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
              <h3 className="text-2xl font-bold text-ama-orange mb-4">Succès</h3>
              <p className="text-gray-700">Fruit de la rigueur et de l’innovation, le succès est la marque de l’AMA. Nos diplômés s’illustrent par leur compétence, leur créativité et leur capacité à impacter positivement la société. L’Académie forme des leaders capables de transformer les défis en opportunités et de tracer la voie vers un avenir meilleur.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mots du Coordonnateur de l'AMA */}
      <motion.section
        className="py-20 bg-gray-100"
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-ama-blue mb-4">Mots du Coordonnateur de l'AMA</h2>
              <p className="text-gray-700 mb-4 text-lg">L'Académie des Mathématiques Appliquées (AMA) se positionne comme un écosystème d'excellence dédié à la transformation du potentiel académique des jeunes talents scientifiques en compétences pratiques.</p>
              <p className="text-gray-700 font-semibold text-ama-blue bg-orange-50 border-l-4 border-ama-orange p-4 rounded-r-lg text-lg">Face au double défi du déficit de profils techniques et de l'inadéquation entre la formation universitaire et le marché de l'emploi en Afrique, l'AMA apporte une réponse concrète en outillant les étudiants et diplômés de savoir-faire opérationnels.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.img whileHover={{ scale: 1.03 }} src="https://picsum.photos/seed/coordinator/600/400" alt="Coordonnateur de l'AMA" className="rounded-lg shadow-xl" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black text-center text-ama-blue mb-16">Quelques Chiffres</h2>
            <div className="grid md:grid-cols-3 gap-10">
                <StatCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.28-1.25-.743-1.674M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.28-1.25.743-1.674M12 15c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm0 0c-2.651 0-5 2.149-5 4.8V20h10v-2.2c0-2.651-2.349-4.8-5-4.8z" /></svg>}
                    value={39}
                    label="Boursiers Retenus"
                    delay="0"
                />
                <StatCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
                    value={8}
                    label="Pays Représentés"
                    delay="0.2"
                />
                <StatCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h4M8 7a2 2 0 012-2h4a2 2 0 012 2v8a2 2 0 01-2 2h-4a2 2 0 01-2-2z" /></svg>}
                    value={105}
                    label="Candidatures Reçues"
                    delay="0.4"
                />
            </div>
        </div>
      </section>

      {/* --- SECTION MODIFIÉE : Presence in Africa Section AVEC PLUS DE DYNAMISME --- */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl font-black text-center text-ama-blue mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Notre Présence et Impact en Afrique
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* --- CARTE INTERACTIVE --- */}
            <motion.div
              variants={itemVariants}
              className="w-full h-auto max-h-[600px] aspect-video border border-gray-200 rounded-lg shadow-xl overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <ComposableMap
                  projection="geoMercator"
                  projectionConfig={{
                    rotate: [-15.0, 0.0, 0], // Ajusté pour un meilleur centrage de l'Afrique
                    center: [0, 0],
                    scale: 450 // Zoom légèrement plus grand
                  }}
                  style={{ width: "100%", height: "100%" }} // Remplit le conteneur
              >
                <ZoomableGroup zoom={1.15} center={[20, 0]}> {/* Zoom initial et centrage affiné */}
                  <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const isAmaCountry = amaCountries.includes(geo.properties.name);
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={isAmaCountry ? "#f5a623" : "#E5E7EB"} // Orange AMA, gris clair sinon
                            stroke="#FFFFFF"
                            strokeWidth={0.5}
                            onMouseEnter={() => {
                              // Affiche le nom du pays au survol
                              setHoveredCountry(geo.properties.name);
                            }}
                            onMouseLeave={() => {
                              // Cache le nom du pays quand la souris quitte
                              setHoveredCountry('');
                            }}
                            style={{
                              default: { outline: 'none', transition: 'fill 0.3s ease-in-out' },
                              hover: { fill: isAmaCountry ? "#D97706" : "#D1D5DB", outline: 'none', cursor: 'pointer' },
                              pressed: { fill: isAmaCountry ? "#B45309" : "#9CA3AF", outline: 'none' },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>
              {hoveredCountry && (
                <div 
                  className="absolute p-2 bg-gray-800 text-white text-sm rounded-md shadow-lg pointer-events-none"
                  style={{ top: '10px', left: '10px' }} // Position fixe en haut à gauche
                >
                  {hoveredCountry === 'Ivory Coast' ? "Côte d'Ivoire" : hoveredCountry}
                </div>
              )}
            </motion.div>
            {/* --- FIN CARTE INTERACTIVE --- */}

            <motion.div variants={itemVariants} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                L'Académie des Mathématiques Appliquées est fière de déployer son influence à travers 8 nations dynamiques du continent africain. Notre mission est de catalyser l'émergence d'une nouvelle génération de leaders en science des données et en intelligence artificielle, dotés des compétences nécessaires pour transformer les défis locaux en opportunités innovantes et durables.
                Chaque pays que nous touchons représente un terreau fertile pour l'innovation, où nos boursiers apportent des solutions concrètes aux problématiques spécifiques de leurs communautés.
              </p>
              <h3 className="text-xl font-bold text-ama-blue mb-4">Pays où l'AMA est fièrement représentée :</h3>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-lg font-semibold text-gray-800">
                {amaCountries.map(country => (
                  <motion.p
                    key={country}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * amaCountries.indexOf(country) }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="inline-block w-2 h-2 bg-ama-orange rounded-full mr-2"></span>
                    {country === 'Ivory Coast' ? "Côte d'Ivoire" : country}
                  </motion.p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* --- FIN SECTION MODIFIÉE --- */}


      {/* Partners Section */}
      <motion.section className="py-20 bg-gray-100"
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Nos Partenaires de Confiance</h2>
              <div className="relative overflow-hidden group">
                  <motion.div className="flex" animate={{ x: ['0%', '-100%'] }} transition={{ ease: 'linear', duration: 25, repeat: Infinity }}>
                      {[...partners, ...partners].map((partner, index) => (
                          <div key={index} className="flex-shrink-0 mx-8">
                              <img src={partner.logo} alt={partner.name} title={partner.name} className="h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                          </div>
                      ))}
                  </motion.div>
              </div>
          </div>
      </motion.section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black text-center text-ama-blue mb-16">Témoignages</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} isFeatured={testimonial.isFeatured} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
       <motion.section className="py-20 bg-ama-blue text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Restez Connecté à l'AMA</h2>
          <p className="max-w-3xl mx-auto text-gray-200 mb-8 text-lg">Inscrivez-vous à notre newsletter pour recevoir les dernières actualités sur nos programmes, nos boursiers et nos événements.</p>
          <form className="max-w-xl mx-auto flex">
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="w-full px-6 py-3 rounded-l-full text-gray-800 focus:outline-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-ama-orange text-white font-bold py-3 px-8 rounded-r-full"
            >
              S'inscrire
            </motion.button>
          </form>
        </div>
      </motion.section>

    </motion.div>
  );
};

export default HomePage;