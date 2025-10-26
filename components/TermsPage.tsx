import React from 'react';
import { motion } from 'framer-motion'; // Importer motion

// Ajouter des variantes pour l'animation d'entrée
const sectionVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const itemVariants = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
};


const TermsPage: React.FC = () => {
  return (
    // Remplacer div par motion.div et appliquer les variantes
    <motion.div
      initial="offscreen"
      animate="onscreen" // Animer directement au chargement
      variants={sectionVariants} // Utilise la variante de section pour l'ensemble
      className="bg-white" // Garde le fond blanc pour le contenu
    >
        {/* --- MODIFICATION ICI : Section Header avec image de fond et overlay --- */}
      <motion.section
        className="py-20 relative overflow-hidden min-h-[40vh] flex items-center justify-center" // Ajout de flex et justify-center
        variants={sectionVariants} // Appliquer la variante ici aussi pour l'entrée
      >
        <motion.img
          // Image de fond différente pour la page Conditions
          src="https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxkb2N1bWVudHN8ZW58MXx8fHwxNzE3ODcwNjc2fDA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Abstract legal documents"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.05, filter: 'blur(1px)' }}
          animate={{ scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 5, ease: "easeInOut" }} // Transition douce
        />
        {/* Overlay semi-transparent */}
        <div className="absolute inset-0 bg-[#0A2540] opacity-85"></div> {/* Utilise votre couleur bleue */}

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            // Texte blanc
            className="text-4xl md:text-5xl font-black text-white mb-4"
            variants={itemVariants} // Animation pour le titre
          >
            Conditions d'Utilisation
          </motion.h1>
          <motion.p
            // Texte gris clair
            className="text-lg text-center max-w-3xl mx-auto text-gray-200"
            variants={itemVariants} // Animation pour le paragraphe
          >
            {/* Affichage de la date actuelle formatée */}
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </motion.p>
        </div>
      </motion.section>
        {/* --- FIN DE LA MODIFICATION --- */}


      {/* Utiliser motion.section pour animer le contenu */}
      <motion.section
        className="py-20 bg-white"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }} // Déclencher l'animation un peu plus tôt
        variants={sectionVariants} // Variante pour l'animation de la section
      >
        <div className="container mx-auto px-6 max-w-4xl prose lg:prose-lg text-gray-700">
          {/* Les styles prose de Tailwind s'appliqueront ici */}
          <h2>1. Acceptation des Conditions</h2>
          <p>
            En accédant et en utilisant le site web de l'Académie des Mathématiques Appliquées (le "Site"), vous acceptez d'être lié par les présentes Conditions d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Site.
          </p>

          <h2>2. Propriété Intellectuelle</h2>
          <p>
            Le contenu de ce Site, y compris les textes, graphiques, logos, images et logiciels, est la propriété de l'Académie des Mathématiques Appliquées ou de ses fournisseurs de contenu et est protégé par les lois sur la propriété intellectuelle. Toute utilisation non autorisée du contenu peut violer ces lois.
          </p>

          <h2>3. Utilisation du Site</h2>
          <p>
            Vous êtes autorisé à utiliser le Site à des fins personnelles et non commerciales. Vous vous engagez à ne pas :
          </p>
          <ul>
            <li>Utiliser le Site d'une manière qui pourrait l'endommager, le désactiver ou le surcharger.</li>
            <li>Tenter d'obtenir un accès non autorisé à toute partie du Site.</li>
            <li>Utiliser le Site à des fins illégales ou interdites par ces Conditions.</li>
          </ul>

          <h2>4. Liens vers des Sites Tiers</h2>
          <p>
            Le Site peut contenir des liens vers des sites web de tiers. Ces liens sont fournis pour votre commodité uniquement. Nous n'avons aucun contrôle sur le contenu de ces sites et n'assumons aucune responsabilité à leur égard.
          </p>

          <h2>5. Limitation de Responsabilité</h2>
          <p>
            Le Site et son contenu sont fournis "en l'état". L'Académie des Mathématiques Appliquées ne garantit pas que le Site sera exempt d'erreurs ou ininterrompu. En aucun cas, nous ne serons responsables des dommages directs, indirects, consécutifs ou autres résultant de l'utilisation ou de l'incapacité d'utiliser le Site.
          </p>

          <h2>6. Modification des Conditions</h2>
          <p>
            Nous nous réservons le droit de modifier ces Conditions d'Utilisation à tout moment. Votre utilisation continue du Site après de telles modifications constitue votre acceptation des nouvelles conditions.
          </p>

          <h2>7. Droit Applicable</h2>
          <p>
            Ces Conditions d'Utilisation sont régies par les lois en vigueur au Bénin.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default TermsPage;