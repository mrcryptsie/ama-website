import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="bg-white" // Garde le fond blanc pour le reste du contenu
    >
      {/* --- MODIFICATION ICI : Section Header avec image de fond et overlay --- */}
      <motion.section
        className="py-20 relative overflow-hidden min-h-[40vh] flex items-center justify-center" // Ajout de flex et justify-center
        initial={{ opacity: 0 }} // Animation d'entrée pour la section
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          // Image de fond différente pour la page Confidentialité
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxwcml2YWN5JTIwc2VjdXJpdHl8ZW58MXx8fHwxNzE3ODY5ODIyfDA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Data privacy and security concept"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.05, filter: 'grayscale(30%)' }}
          animate={{ scale: 1, filter: 'grayscale(0%)' }}
          transition={{ duration: 10, ease: "easeInOut" }} // Transition douce
        />
        {/* Overlay semi-transparent */}
        <div className="absolute inset-0 bg-[#0A2540] opacity-85"></div> {/* Utilise votre couleur bleue */}

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            // Texte blanc
            className="text-4xl md:text-5xl font-black text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Politique de Confidentialité
          </motion.h1>
          {/* Optionnel : Ajouter un sous-titre si désiré */}
          {/* <motion.p
            className="text-lg max-w-2xl mx-auto text-gray-200 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Votre confiance est notre priorité.
          </motion.p> */}
        </div>
      </motion.section>
      {/* --- FIN DE LA MODIFICATION --- */}


      <div className="container mx-auto px-6 py-12 text-gray-700 max-w-4xl">
        <p className="mb-4 font-semibold">Dernière mise à jour : 25 Juillet 2024</p>

        <p className="mb-6">
          L'Académie des Mathématiques Appliquées (ci-après "AMA", "nous", "notre") s'engage à protéger la confidentialité des informations personnelles de ses utilisateurs, candidats, boursiers et partenaires. Cette politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons vos informations.
        </p>

        <h2 className="text-2xl font-bold text-ama-blue mt-8 mb-4">1. Collecte de l'Information</h2>
        <p className="mb-4">
          Nous collectons des informations lorsque vous interagissez avec notre site, notamment :
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Informations fournies directement :</strong> Nom, adresse e-mail, numéro de téléphone, parcours académique et professionnel, et toute autre information que vous soumettez via nos formulaires de contact ou de candidature.</li>
          <li><strong>Informations collectées automatiquement :</strong> Nous pouvons collecter des informations sur votre appareil et votre navigation (adresse IP, type de navigateur, pages visitées) à des fins d'analyse et d'amélioration de notre site.</li>
        </ul>

        <h2 className="text-2xl font-bold text-ama-blue mt-8 mb-4">2. Utilisation de l'Information</h2>
        <p className="mb-4">
          Les informations que nous collectons sont utilisées pour :
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Traiter et évaluer votre candidature à nos programmes.</li>
          <li>Communiquer avec vous concernant nos programmes, événements et actualités.</li>
          <li>Améliorer l'expérience utilisateur et la qualité de notre site.</li>
          <li>Répondre à vos demandes d'information ou de partenariat.</li>
          <li>Respecter nos obligations légales et administratives.</li>
        </ul>

        <h2 className="text-2xl font-bold text-ama-blue mt-8 mb-4">3. Partage de l'Information</h2>
        <p className="mb-6">
          Nous ne vendons, n'échangeons ni ne transférons vos informations personnelles identifiables à des tiers sans votre consentement, sauf dans les cas suivants :
        </p>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>Comité de sélection et partenaires académiques :</strong> Vos informations de candidature peuvent être partagées avec les membres du comité de sélection et nos partenaires académiques (comme Harvard) dans le cadre du processus d'évaluation.</li>
          <li><strong>Obligations légales :</strong> Si la loi l'exige ou pour protéger nos droits, notre propriété ou notre sécurité.</li>
        </ul>

        <h2 className="text-2xl font-bold text-ama-blue mt-8 mb-4">4. Sécurité de l'Information</h2>
        <p className="mb-6">
          Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. L'accès à vos informations est limité au personnel autorisé qui a besoin de les connaître pour effectuer une tâche spécifiques.
        </p>

        <h2 className="text-2xl font-bold text-ama-blue mt-8 mb-4">5. Vos Droits</h2>
        <p className="mb-6">
          Conformément à la législation en vigueur, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant. Pour exercer ces droits, veuillez nous contacter à l'adresse e-mail suivante : <a href="mailto:admissions.ama@titolucien.site" className="text-ama-orange hover:underline">admissions.ama@titolucien.site</a>.
        </p>

        <h2 className="text-2xl font-bold text-ama-blue mt-8 mb-4">6. Modifications de cette Politique</h2>
        <p className="mb-6">
          Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec la date de la dernière mise à jour.
        </p>

        <h2 className="text-2xl font-bold text-ama-blue mt-8 mb-4">Contact</h2>
        <p>
          Pour toute question relative à cette politique de confidentialité, veuillez nous contacter à l'adresse indiquée ci-dessus.
        </p>
      </div>
    </motion.div>
  );
};

export default PrivacyPage;