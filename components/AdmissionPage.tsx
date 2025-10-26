import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Les données des étapes (inchangées) ---
const admissionStepsData = [
  {
    title: "Test Technique d'Admission",
    description: "Évaluation de vos compétences fondamentales.",
    details: (
      <>
        <p className="font-semibold text-gray-700 mb-2">
          Prouvez votre potentiel en mathématiques, logique et Python.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Test en ligne chronométré : 90 minutes.</li>
          <li>Questions à choix multiples & exercices de codage.</li>
          <li>Thèmes : Algèbre linéaire, probabilités, Python avancé.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Candidature en Ligne Complète',
    description: 'Soumettez un dossier qui reflète votre personnalité.',
    details: (
      <>
        <p className="font-semibold text-gray-700 mb-2">
          Votre dossier est votre passeport pour la prochaine étape.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>CV détaillé mettant en avant vos projets significatifs.</li>
          <li>Lettre de motivation percutante et personnalisée.</li>
          <li>Relevés de notes universitaires et diplômes pertinents.</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Étude de Cas Pratique',
    description: 'Démontrez votre savoir-faire en 48h.',
    details: (
      <>
        <p className="font-semibold text-gray-700 mb-2">
          Un défi technique pour évaluer votre esprit critique.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Analyse approfondie d'un jeu de données complexe.</li>
          <li>Conception d'un modèle prédictif innovant.</li>
          <li>Présentation vidéo concise de vos résultats.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Entretien Approfondi avec le Jury",
    description: "Un échange pour évaluer votre parcours et vision.",
    details: (
      <>
        <p className="font-semibold text-gray-700 mb-2">
          Rencontrez nos experts et partagez votre passion.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Discussion détaillée de votre approche sur l'étude de cas.</li>
          <li>Questions techniques et conceptuelles ciblées.</li>
          <li>Évaluation de votre adéquation avec la culture de l'AMA.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Décision Finale & Bienvenue",
    description: "Le moment clé : la décision du comité.",
    details: (
      <p className="font-semibold text-gray-700">
        Après délibération, le comité sélectionne les talents les plus
        prometteteurs. La décision est communiquée rapidement.
        Préparez-vous à débuter une transformation !
      </p>
    ),
  },
];

// --- Paramètres d'Animation pour les Cartes ---
const CARD_STACK_OFFSET = 12;
const CARD_SCALE_FACTOR = 0.05;
const CARD_TILT_DEGREES = -10;

// --- Fond animé gris clair avec bulles (inchangé) ---
const AnimatedBackground = () => {
  const numBubbles = 15;
  const bubbleColors = ['bg-blue-200', 'bg-orange-200', 'bg-purple-200', 'bg-green-200'];

  const generateRandomPosition = () => ({
    x: `${Math.random() * 100}vw`,
    y: `${Math.random() * 100}vh`,
  });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-gray-100">
      {Array.from({ length: numBubbles }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-60 ${bubbleColors[i % bubbleColors.length]}`}
          style={{
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            ...generateRandomPosition(),
          }}
          animate={{
            x: [`${Math.random() * 200 - 100}px`, `${Math.random() * 200 - 100}px`],
            y: [`${Math.random() * 200 - 100}px`, `${Math.random() * 200 - 100}px`],
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};


const AdmissionPage: React.FC = () => {
  const [activeSteps, setActiveSteps] = useState(admissionStepsData);

  const handleNextStep = () => {
    if (activeSteps.length === 0) return;
    setActiveSteps((prev) => prev.slice(1));
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      
      {/* Fond gris clair avec bulles */}
      <AnimatedBackground />

      {/* --- MODIFICATION ICI : Section Header avec image de fond et overlay --- */}
      <section 
        className="py-20 relative overflow-hidden min-h-[40vh] flex items-center justify-center text-center" // Ajout de flex/center/text-center
      >
        <motion.img
            // Image de fond différente pour la page Admission
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw1fHxjb2Rpbmd8ZW58MXx8fHwxNzE3ODY3MTQwfDA&ixlib=rb-4.0.3&q=80&w=1080" 
            alt="Coding challenge interface"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 12, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }} // Animation lente
          />
          {/* Overlay semi-transparent */}
          <div className="absolute inset-0 bg-[#0A2540] opacity-85"></div> {/* Utilise votre couleur bleue */}
          
        <div className="container mx-auto px-6 relative z-10"> {/* z-10 pour que le texte soit au-dessus */}
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 10, delay: 0.2 } }}
            // Texte blanc
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Le Chemin Vers l'Excellence
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 10, delay: 0.4 } }}
            // Texte gris clair
            className="text-lg max-w-2xl mx-auto text-gray-200"
          >
            Découvrez notre processus d'admission interactif en 5 étapes.
          </motion.p>
        </div>
      </section>
       {/* --- FIN DE LA MODIFICATION --- */}


      {/* --- Section "Jeu de Cartes" 3D (inchangée) --- */}
      <section className="flex-grow flex items-center justify-center container mx-auto px-6 pb-20 relative z-10">
        <div
          className="relative w-full max-w-xl h-[500px]"
          style={{
            perspective: '1200px',
            transformStyle: 'preserve-3d',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <AnimatePresence>
            {activeSteps.map((step, index) => {
              const isTopCard = index === 0;
              const distance = index; 
              const originalStepNumber = admissionStepsData.findIndex(s => s.title === step.title) + 1;

              return (
                <motion.div
                  key={step.title}
                  layoutId={step.title} 
                  
                  initial={{ z: -200, opacity: 0, scale: 0.7 }}
                  animate={{
                    x: 0,
                    y: -distance * CARD_STACK_OFFSET,
                    z: -distance * 20,
                    scale: 1 - distance * CARD_SCALE_FACTOR,
                    zIndex: admissionStepsData.length - distance,
                    opacity: distance < 4 ? 1 : 0.2,
                    rotateX: CARD_TILT_DEGREES,
                    filter: distance > 0 ? `blur(${distance * 1.5}px)` : 'none',
                    boxShadow: isTopCard 
                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.4), 0 0 40px rgba(245, 166, 35, 0.6)' 
                        : '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
                  }}
                  exit={{
                    x: 400, y: -50, z: 500,
                    opacity: 0, scale: 0.5,
                    rotateX: 45, rotateY: 30,
                    transition: { duration: 0.5, ease: 'easeOut' },
                  }}
                  transition={{ type: 'spring', stiffness: 150, damping: 20 }}
                  onClick={isTopCard ? handleNextStep : undefined}
                  
                  className={`
                    absolute w-full h-[400px] md:h-[450px] p-8 bg-white
                    rounded-3xl shadow-3xl flex flex-col justify-between
                    ${isTopCard ? 'cursor-pointer' : 'pointer-events-none'}
                  `}
                  style={{ transformOrigin: 'center center' }}
                  whileHover={isTopCard ? { scale: 1.02, y: - (distance * CARD_STACK_OFFSET) - 10, rotateX: CARD_TILT_DEGREES + 2 } : {}}
                >
                  
                  {/* Contenu de la carte (inchangé) */}
                  <div className="flex-shrink-0 flex items-center gap-6 mb-4 relative z-10">
                    <motion.div 
                      className="text-4xl md:text-5xl font-black text-[#f5a623]"
                      key={`num-${originalStepNumber}`} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0, transition: { delay: 0.1 } }}
                    >
                      {`0${originalStepNumber}`}
                    </motion.div>
                    <div>
                      <motion.h3 
                        key={`title-${originalStepNumber}`} 
                        className="text-2xl md:text-3xl font-bold text-[#0A2540]"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p 
                        key={`desc-${originalStepNumber}`} 
                        className="text-gray-600 text-lg"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </div>
                  <motion.div 
                    key={`details-${originalStepNumber}`} 
                    className="flex-grow text-gray-700 relative z-10 overflow-y-auto custom-scrollbar pr-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
                  >
                    {step.details}
                  </motion.div>
                  {isTopCard && (
                    <motion.div 
                      className="mt-4 text-center text-sm font-semibold text-[#f5a623] relative z-10"
                      animate={{ opacity: [0.5, 1, 0.5], transition: { repeat: Infinity, duration: 2 } }}
                    >
                      (Cliquez pour continuer)
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* --- La Carte de Fin (inchangée) --- */}
          <AnimatePresence>
            {activeSteps.length === 0 && (
              <motion.div
                className="absolute w-full h-[400px] md:h-[450px] p-8 bg-white
                           rounded-3xl shadow-3xl flex flex-col justify-center items-center text-center"
                initial={{ opacity: 0, scale: 0.7, rotateY: 180 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  rotateY: 0,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 50px rgba(245, 166, 35, 0.8)'
                }}
                transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.3 }}
              >
                <motion.h2 
                  className="text-4xl font-black text-[#0A2540] mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
                >
                  Processus Terminé !
                </motion.h2>
                <motion.p 
                  className="text-lg text-gray-600 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
                >
                  Vous avez exploré toutes les étapes. Prêt à relever le défi ?
                </motion.p>
                
                <motion.button
                  className="bg-[#f5a623] text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg"
                  whileHover={{ scale: 1.08, y: -5, boxShadow: '0 10px 20px rgba(245, 166, 35, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1, transition: { delay: 0.9, type: 'spring' } }}
                >
                  Postuler maintenant
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>
      
    </div>
  );
};

export default AdmissionPage;