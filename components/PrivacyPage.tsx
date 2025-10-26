import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.7 }}
      className="bg-white"
    >
      <div className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-ama-blue">Politique de Confidentialité</h1>
        </div>
      </div>

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
          Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. L'accès à vos informations est limité au personnel autorisé qui a besoin de les connaître pour effectuer une tâche spécifique.
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
