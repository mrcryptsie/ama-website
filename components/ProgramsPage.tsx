import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  offscreen: { opacity: 0, y: 30 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ProgramsPage: React.FC = () => {
  return (
    <motion.div initial="offscreen" animate="onscreen" variants={sectionVariants}>
      {/* Hero Section */}
      <motion.section className="py-20 bg-ama-blue text-white" variants={itemVariants}>
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Le Cursus d'Excellence</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-200">
            Un programme intensif de 18 mois conçu pour vous transformer en expert de la Data Science et de l'Intelligence Artificielle.
          </p>
        </div>
      </motion.section>

      {/* Structure Section */}
      <motion.section
        className="py-20 bg-white"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Structure du Programme</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div className="bg-gray-50 p-8 rounded-lg" variants={itemVariants}>
              <div className="text-ama-orange text-4xl font-bold">Phase 1</div>
              <h3 className="text-xl font-bold text-ama-blue my-3">Formation d'Introduction (3 mois)</h3>
              <p className="text-gray-600">Acquisition des fondamentaux en mathématiques, statistiques et programmation (Python).</p>
            </motion.div>
            <motion.div className="bg-gray-50 p-8 rounded-lg" variants={itemVariants}>
              <div className="text-ama-orange text-4xl font-bold">Phase 2</div>
              <h3 className="text-xl font-bold text-ama-blue my-3">Tronc Commun (9 mois)</h3>
              <p className="text-gray-600">Maîtrise des concepts clés de la Data Science et du Machine Learning à travers des modules spécialisés.</p>
            </motion.div>
            <motion.div className="bg-gray-50 p-8 rounded-lg" variants={itemVariants}>
              <div className="text-ama-orange text-4xl font-bold">Phase 3</div>
              <h3 className="text-xl font-bold text-ama-blue my-3">Spécialisation & Bootcamp (6 mois)</h3>
              <p className="text-gray-600">Approfondissement dans un domaine de pointe et projet intensif en mode entreprise.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Modules Section */}
      <motion.section
        className="py-20 bg-ama-gray"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Modules du Tronc Commun</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Probabilités et Statistiques Appliquées",
              "Analyse de Données et Visualisation",
              "Machine Learning : Fondamentaux",
              "Deep Learning pour la Vision et le NLP",
              "Bases de Données et Big Data",
              "Déploiement de Modèles (MLOps)",
            ].map(module => (
              <motion.div key={module} className="bg-white p-6 rounded-md shadow-sm" variants={itemVariants}>
                <p className="font-semibold text-ama-blue">{module}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Specialisations Section */}
      <motion.section
        className="py-20 bg-white"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Spécialisations Avancées</h2>
          <p className="text-center max-w-2xl mx-auto text-gray-700 mb-10">
            Après le tronc commun, chaque boursier choisit une spécialisation pour développer une expertise de pointe.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div className="bg-ama-gray p-8 rounded-lg" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-ama-blue mb-4">Ingénierie de la Donnée (Data Engineering)</h3>
              <p className="text-gray-700">Concevoir, construire et maintenir des pipelines de données robustes et scalables. Maîtrise des architectures Big Data, des ETL et des solutions cloud.</p>
            </motion.div>
            <motion.div className="bg-ama-gray p-8 rounded-lg" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-ama-blue mb-4">Science de la Donnée et IA (Data Science & AI)</h3>
              <p className="text-gray-700">Développer et déployer des modèles de Machine Learning et de Deep Learning complexes pour résoudre des problèmes concrets (vision, NLP, prédiction).</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Bootcamp Section */}
       <motion.section
        className="py-20 bg-ama-gray"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 text-center">
            <motion.div className="bg-ama-blue text-white p-12 rounded-lg shadow-2xl max-w-4xl mx-auto" variants={itemVariants}>
                <h2 className="text-3xl font-bold mb-4">Bootcamp Final : L'Expérience Professionnelle</h2>
                <p className="text-gray-200 text-lg">
                    Le dernier trimestre est un bootcamp intensif où les boursiers, en équipe, travaillent sur un projet réel fourni par une entreprise partenaire. C'est le pont direct vers l'employabilité.
                </p>
                <motion.button 
                    className="mt-8 bg-ama-orange text-white font-bold py-3 px-8 rounded-full text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Découvrir les Projets
                </motion.button>
            </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ProgramsPage;
