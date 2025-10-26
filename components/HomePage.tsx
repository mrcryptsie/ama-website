
import React from 'react';
import { motion } from 'framer-motion';
import { Page } from '../types';
import { Counter } from './Counter';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const scholarsPreview = [
    { name: 'Kouassi Jean-Luc', image: 'https://picsum.photos/seed/kouassi/300/300' },
    { name: 'Awa Traoré', image: 'https://picsum.photos/seed/traore/300/300' },
    { name: 'Fodé Camara', image: 'https://picsum.photos/seed/camara/300/300' },
    { name: 'Binta Diallo', image: 'https://picsum.photos/seed/diallo/300/300' },
    { name: 'Oumar Sow', image: 'https://picsum.photos/seed/sow/300/300' },
    { name: 'Mariam Koné', image: 'https://picsum.photos/seed/kone/300/300' },
];

const StatCard: React.FC<{ icon: React.ReactNode, value: number, label: string, delay: string }> = ({ icon, value, label, delay }) => (
    <motion.div 
        className="bg-white p-6 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: parseFloat(delay) }}
        viewport={{ once: true }}
    >
        <div className="text-ama-orange text-5xl mb-4 flex justify-center">{icon}</div>
        <p className="text-4xl font-black text-ama-blue"><Counter from={0} to={value} /></p>
        <p className="text-gray-600 mt-1 font-semibold">{label}</p>
    </motion.div>
);

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {

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

      {/* Aperçu Global de l'AMA */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-ama-blue mb-4">Aperçu Global de l'AMA</h2>
              <p className="text-gray-700 mb-4 text-lg">L'Académie des Mathématiques Appliquées (AMA) se positionne comme un écosystème d'excellence dédié à la transformation du potentiel académique des jeunes talents scientifiques en compétences pratiques.</p>
              <p className="text-gray-700 font-semibold text-ama-blue bg-orange-50 border-l-4 border-ama-orange p-4 rounded-r-lg text-lg">Face au double défi du déficit de profils techniques et de l'inadéquation entre la formation universitaire et le marché de l'emploi en Afrique, l'AMA apporte une réponse concrète en outillant les étudiants et diplômés de savoir-faire opérationnels.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <motion.img whileHover={{ scale: 1.03 }} src="https://picsum.photos/seed/students-studying/600/400" alt="Étudiants de l'AMA en session de travail" className="rounded-lg shadow-xl" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">La Première Cohorte (2025) en Chiffres</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <StatCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.975 5.975 0 0112 13a5.975 5.975 0 013 5.197M15 21a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197" /></svg>}
                    value={39}
                    label="Boursiers Retenus"
                    delay="0"
                />
                <StatCard 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.881 4.102l.267-.267a2 2 0 012.828 0l.267.267M16.119 4.102l-.267-.267a2 2 0 00-2.828 0l-.267.267m0 0l-2.176 2.176m2.176-2.176l2.176 2.176M12 21.881l-2.176-2.176m2.176 2.176L14.176 19.705" /></svg>}
                    value={8}
                    label="Pays Représentés"
                    delay="0.2"
                />
                <StatCard
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                    value={105}
                    label="Candidatures Reçues"
                    delay="0.4"
                />
            </div>
        </div>
      </section>

      {/* ... Rest of the page with similar animation patterns ... */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl font-bold text-ama-blue mb-4">Notre Programme Phare</h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">Formation d'Introduction à l'Intelligence Artificielle (FIIA)</h3>
              <p className="max-w-3xl mx-auto text-gray-600 mb-8 text-lg">
                  Un programme intensif de 10 semaines conçu pour poser les fondations essentielles de l'IA. Il couvre tout, de la recherche opérationnelle et l'optimisation jusqu'aux techniques avancées d'apprentissage profond.
              </p>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setCurrentPage('programs')} className="bg-ama-blue text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300">
                  Découvrir le Cursus
              </motion.button>
          </div>
      </motion.section>
      
      <motion.section className="py-20 bg-ama-gray"
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Rencontrez Nos Boursiers</h2>
              <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4" variants={containerVariants}>
                  {scholarsPreview.map((scholar, index) => (
                      <motion.div key={index} className="group text-center" variants={itemVariants}>
                          <motion.div whileHover={{ y: -10 }} className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300">
                              <img src={scholar.image} alt={scholar.name} className="w-full h-full object-cover aspect-square" />
                          </motion.div>
                          <h4 className="mt-4 font-bold text-ama-blue">{scholar.name}</h4>
                      </motion.div>
                  ))}
              </motion.div>
              <div className="text-center mt-12">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setCurrentPage('cohort')} className="bg-ama-orange text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300">
                      Découvrir toute la promotion
                  </motion.button>
              </div>
          </div>
      </motion.section>

       <motion.section className="py-20 bg-ama-blue text-white"        
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Devenez Partenaire de l'Excellence</h2>
          <p className="max-w-3xl mx-auto text-gray-200 mb-8 text-lg">Rejoignez-nous pour renforcer la formation, promouvoir l'innovation et créer un écosystème d'excellence scientifique et technologique en Afrique.</p>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setCurrentPage('support')} className="bg-ama-orange text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300">Soutenir l'AMA</motion.button>
        </div>
      </motion.section>

    </motion.div>
  );
};

export default HomePage;
