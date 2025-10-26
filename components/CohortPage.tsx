import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryMember, ScholarByCountry } from '../types';

// ... (data remains the same)
const scholarsByCountry: ScholarByCountry[] = [
    { country: 'Bénin', scholars: [
        { name: 'Koffi Agossou', major: 'Mathématiques Appliquées' },
        { name: 'Biaou Boni', major: 'Informatique' },
        { name: 'Sossou Chloé', major: 'Statistiques' },
        { name: 'Zinsou David', major: 'Physique' },
        { name: 'Agboola Esther', major: 'Actuariat' },
        { name: 'Hounkpe Fiacre', major: 'Génie Logiciel' },
        { name: 'Dansou Gilles', major: 'Économétrie' },
        { name: 'Ekou Hélène', major: 'Recherche Opérationnelle' },
    ]},
    { country: 'Burkina Faso', scholars: [
        { name: 'Ouédraogo Adama', major: 'Informatique' },
        { name: 'Sawadogo Bintou', major: 'Maths-Info' },
        { name: 'Kaboré Cédric', major: 'Statistiques' },
        { name: 'Diallo Djenabou', major: 'Physique' },
        { name: 'Traoré Etienne', major: 'Génie Civil' },
    ]},
    { country: 'Côte d\'Ivoire', scholars: [
        { name: 'Kouassi Jean-Luc', major: 'Mathématiques Appliquées' },
        { name: 'Yao Aya', major: 'Informatique' },
        { name: 'Konan Célestin', major: 'Statistiques' },
        { name: 'Dosso Drissa', major: 'Électronique' },
        { name: 'Fofana Fatoumata', major: 'Data Science' },
        { name: 'Gueï François', major: 'Réseaux & Télécoms' },
    ]},
    { country: 'Guinée', scholars: [
        { name: 'Diallo Alpha', major: 'Informatique' },
        { name: 'Camara Binta', major: 'Mathématiques' },
        { name: 'Sylla Cheick', major: 'Génie Logiciel' },
        { name: 'Barry Daouda', major: 'Physique' },
    ]},
    { country: 'Mali', scholars: [
        { name: 'Traoré Aminata', major: 'Mathématiques Appliquées' },
        { name: 'Keita Boubacar', major: 'Informatique' },
        { name: 'Diarra Coumba', major: 'Statistiques' },
        { name: 'Sidibé Djibril', major: 'Génie Électrique' },
        { name: 'Coulibaly Emmanuel', major: 'Informatique' },
    ]},
    { country: 'Niger', scholars: [
        { name: 'Abdou Abdoul', major: 'Mathématiques' },
        { name: 'Moussa Mariama', major: 'Informatique' },
        { name: 'Salifou Saley', major: 'Physique' },
    ]},
    { country: 'Sénégal', scholars: [
        { name: 'Diop Aïssatou', major: 'Mathématiques Appliquées' },
        { name: 'Ndiaye Babacar', major: 'Informatique' },
        { name: 'Fall Codou', major: 'Statistiques' },
        { name: 'Sow Demba', major: 'Génie Logiciel' },
        { name: 'Gueye El Hadji', major: 'Data Science' },
    ]},
    { country: 'Togo', scholars: [
        { name: 'Amegan Akouvi', major: 'Informatique' },
        { name: 'Koffi Komlan', major: 'Mathématiques' },
        { name: 'Lawson Laté', major: 'Physique' },
    ]},
];

const galleryMembers: GalleryMember[] = scholarsByCountry.flatMap(country => 
    country.scholars.map(scholar => ({
        name: scholar.name,
        image: `https://picsum.photos/seed/${scholar.name.replace(/\s/g, '-')}/300/300`
    }))
);

const pageVariants = {
  initial: { opacity: 0 },
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const sectionVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } }
};

const itemVariants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const CohortPage: React.FC = () => {
  const [filter, setFilter] = useState('Tous');
  const countries = ['Tous', ...scholarsByCountry.map(c => c.country)];

  const filteredScholars = useMemo(() => {
    if (filter === 'Tous') return scholarsByCountry;
    return scholarsByCountry.filter(group => group.country === filter);
  }, [filter]);

  return (
    <motion.div 
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <motion.section 
        className="py-20 bg-ama-gray"
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1 className="text-4xl md:text-5xl font-black text-ama-blue mb-4" variants={itemVariants}>La Première Cohorte (2025)</motion.h1>
          <motion.p className="text-lg max-w-3xl mx-auto text-gray-600" variants={itemVariants}>
            Découvrez les 39 pionniers qui forment la première promotion de l'Académie des Mathématiques Appliquées, sélectionnés parmi plus de 100 candidats à travers 8 pays.
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="py-20 bg-white"
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
            <motion.h2 className="text-3xl font-bold text-center text-ama-blue mb-12" variants={itemVariants}>Album Photos de la Promotion</motion.h2>
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
              variants={sectionVariants}
            >
                {galleryMembers.slice(0, 18).map((member, index) => (
                    <motion.div 
                      key={index} 
                      className="group text-center"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <div className="overflow-hidden rounded-lg shadow-lg">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover aspect-square" />
                        </div>
                        <h4 className="mt-4 font-bold text-sm text-ama-blue transition-colors group-hover:text-ama-orange">{member.name}</h4>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="py-20 bg-ama-gray"
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <motion.h2 className="text-3xl font-bold text-center text-ama-blue mb-12" variants={itemVariants}>Rapport sur la cohorte</motion.h2>
          <motion.div className="flex justify-center" variants={itemVariants}>
            <iframe width="600" height="450" src="https://lookerstudio.google.com/embed/reporting/c206a7fe-d833-4599-8fb7-06a277679dc1/page/guxWF" frameBorder="0" style={{ border:0 }} allowFullScreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>
          </motion.div>
        </div>
      </motion.section>
      
      <motion.section 
        className="py-20 bg-white"
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <motion.h2 className="text-3xl font-bold text-center text-ama-blue mb-12" variants={itemVariants}>Liste des Boursiers par Pays</motion.h2>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {countries.map(country => (
              <motion.button
                key={country}
                onClick={() => setFilter(country)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
                  filter === country
                    ? 'bg-ama-blue text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {country}
              </motion.button>
            ))}
          </div>

          <motion.div className="space-y-12" layout>
            <AnimatePresence mode="wait">
            {filteredScholars.map(group => (
              <motion.div 
                key={group.country}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{duration: 0.3}}
              >
                <h3 className="text-2xl font-bold text-ama-orange mb-6 border-b-2 border-ama-orange pb-2">{group.country}</h3>
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4"
                  variants={sectionVariants}
                >
                  {group.scholars.map(scholar => (
                    <motion.div 
                      key={scholar.name} 
                      className="bg-gray-50 p-4 rounded-md shadow-sm"
                      variants={itemVariants}
                      whileHover={{ backgroundColor: '#ffffff', scale: 1.03 }}
                    >
                      <p className="font-bold text-ama-blue">{scholar.name}</p>
                      <p className="text-sm text-gray-600">{scholar.major}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default CohortPage;
