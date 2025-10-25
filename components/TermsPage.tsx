
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-center text-ama-blue mb-4">Conditions d'Utilisation</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-600">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl prose lg:prose-lg">
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
      </section>
    </div>
  );
};

export default TermsPage;
