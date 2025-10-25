
import React from 'react';

const PrivacyPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-center text-ama-blue mb-4">Politique de Confidentialité</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-600">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl prose lg:prose-lg">
          <h2>Introduction</h2>
          <p>
            L'Académie des Mathématiques Appliquées ("nous", "notre", "nos") s'engage à protéger la vie privée des visiteurs de notre site web et des participants à nos programmes. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations.
          </p>

          <h2>Collecte des Informations</h2>
          <p>Nous collectons des informations lorsque vous :</p>
          <ul>
            <li>Postulez à nos programmes via nos formulaires en ligne.</li>
            <li>Vous inscrivez à notre newsletter.</li>
            <li>Nous contactez via notre formulaire de contact.</li>
            <li>Naviguez sur notre site web (via les cookies).</li>
          </ul>
          <p>
            Les informations collectées peuvent inclure votre nom, votre adresse e-mail, votre parcours académique et professionnel, et toute autre information que vous choisissez de nous fournir.
          </p>

          <h2>Utilisation des Informations</h2>
          <p>Vos informations sont utilisées pour :</p>
          <ul>
            <li>Traiter votre candidature à nos programmes.</li>
            <li>Vous envoyer des communications, y compris notre newsletter.</li>
            <li>Répondre à vos questions et demandes.</li>
            <li>Améliorer notre site web et nos services.</li>
          </ul>

          <h2>Partage des Informations</h2>
          <p>
            Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Vos informations peuvent être partagées avec nos partenaires de confiance (par exemple, les membres du comité de sélection ou les institutions partenaires) uniquement dans le cadre de la gestion de votre candidature et de votre participation au programme.
          </p>

          <h2>Sécurité des Données</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité pour protéger vos informations contre l'accès, la modification, la divulgation ou la destruction non autorisés.
          </p>
          
          <h2>Vos Droits</h2>
          <p>
            Vous avez le droit d'accéder, de rectifier ou de supprimer vos informations personnelles. Pour exercer ces droits, veuillez nous contacter à l'adresse indiquée sur notre page de contact.
          </p>

          <h2>Modifications de cette Politique</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
