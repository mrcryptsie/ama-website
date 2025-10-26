import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
};

const itemVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const cardHover = {
  scale: 1.03,
  boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.08)'
}

const SupportPage: React.FC = () => {
  return (
    <motion.div initial="offscreen" animate="onscreen" variants={sectionVariants}>
        {/* --- MODIFICATION ICI : Section Header avec image de fond et overlay --- */}
      <motion.section
        className="py-20 relative overflow-hidden min-h-[40vh] flex items-center justify-center" // Ajout de flex et justify-center
        variants={itemVariants} // Utilise itemVariants pour l'animation de base
      >
        <motion.img
          // Image de fond différente pour la page Support
          src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxzdXBwb3J0JTIwY29tbXVuaXR5fGVufDF8fHx8MTcxNzg3MDMwMHww&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Community support and growth"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, filter: 'grayscale(40%)' }}
          animate={{ scale: 1, filter: 'grayscale(0%)' }}
          transition={{ duration: 10, ease: "easeInOut" }} // Transition douce
        />
        {/* Overlay semi-transparent */}
        <div className="absolute inset-0 bg-ama-blue opacity-85"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            // Texte blanc
            className="text-4xl md:text-5xl font-black text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Soutenez l'Excellence Africaine
          </motion.h1>
          <motion.p
            // Texte gris clair
            className="text-lg max-w-3xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Votre soutien est essentiel pour nous permettre de continuer à former les leaders technologiques de demain en Afrique. Découvrez comment vous pouvez contribuer.
          </motion.p>
        </div>
      </motion.section>
       {/* --- FIN DE LA MODIFICATION --- */}


      <motion.section
        className="py-20 bg-white"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-ama-blue mb-4">Pourquoi Soutenir l'AMA ?</h2>
            <p className="text-gray-700 text-lg mb-4">
              En soutenant l'AMA, vous investissez directement dans le capital humain du continent. Vous permettez à des jeunes talents brillants de recevoir une formation de classe mondiale et de devenir des acteurs clés de l'innovation.
            </p>
            <motion.ul className="space-y-3 text-gray-700" variants={sectionVariants}>
                <motion.li className="flex items-start" variants={itemVariants}><span className="font-bold text-ama-green mr-2 mt-1">&#10003;</span><span><strong className="font-semibold">Former des experts :</strong> Financez des bourses complètes pour des étudiants méritants.</span></motion.li>
                <motion.li className="flex items-start" variants={itemVariants}><span className="font-bold text-ama-green mr-2 mt-1">&#10003;</span><span><strong className="font-semibold">Stimuler l'innovation :</strong> Soutenez des projets concrets qui répondent à des défis locaux.</span></motion.li>
                <motion.li className="flex items-start" variants={itemVariants}><span className="font-bold text-ama-green mr-2 mt-1">&#10003;</span><span><strong className="font-semibold">Construire un écosystème :</strong> Renforcez le réseau de talents et d'entreprises panafricain.</span></motion.li>
            </motion.ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <img src="https://picsum.photos/seed/support-impact/600/400" alt="Impact du soutien" className="rounded-lg shadow-xl" />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-ama-gray"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white p-10 rounded-lg shadow-lg text-center border-t-4 border-ama-orange"
              variants={itemVariants}
              whileHover={cardHover}
            >
              <h2 className="text-3xl font-bold text-ama-blue mb-4">Faire un Don</h2>
              <p className="text-gray-600 mb-8">Chaque contribution, quelle que soit sa taille, a un impact direct sur la vie d'un étudiant. Votre don aide à couvrir les frais de formation, l'accès aux ressources et le mentorat.</p>
              <motion.button
                className="bg-ama-orange text-white font-bold py-3 px-8 rounded-full text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Donner Maintenant
              </motion.button>
            </motion.div>

            <motion.div
              className="bg-white p-10 rounded-lg shadow-lg text-center border-t-4 border-ama-blue"
              variants={itemVariants}
              whileHover={cardHover}
            >
              <h2 className="text-3xl font-bold text-ama-blue mb-4">Devenir Sponsor</h2>
              <p className="text-gray-600 mb-8">Associez votre entreprise à une initiative d'excellence. En tant que sponsor, vous gagnez en visibilité, accédez à un vivier de talents et participez à des événements exclusifs.</p>
               <motion.button
                  className="bg-ama-blue text-white font-bold py-3 px-8 rounded-full text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}>
                Contact Partenariats
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

    </motion.div>
  );
};

export default SupportPage;