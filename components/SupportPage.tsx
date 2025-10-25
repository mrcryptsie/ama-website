
import React from 'react';

const SupportPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-ama-blue mb-4">Soutenez l'Excellence Africaine</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Votre soutien est essentiel pour nous permettre de continuer à former les leaders technologiques de demain en Afrique. Découvrez comment vous pouvez contribuer.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-ama-blue mb-4">Pourquoi Soutenir l'AMA ?</h2>
            <p className="text-gray-700 text-lg mb-4">
              En soutenant l'AMA, vous investissez directement dans le capital humain du continent. Vous permettez à des jeunes talents brillants de recevoir une formation de classe mondiale et de devenir des acteurs clés de l'innovation.
            </p>
            <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="font-bold text-ama-green mr-2 mt-1">&#10003;</span><span><strong className="font-semibold">Former des experts :</strong> Financez des bourses complètes pour des étudiants méritants.</span></li>
                <li className="flex items-start"><span className="font-bold text-ama-green mr-2 mt-1">&#10003;</span><span><strong className="font-semibold">Stimuler l'innovation :</strong> Soutenez des projets concrets qui répondent à des défis locaux.</span></li>
                <li className="flex items-start"><span className="font-bold text-ama-green mr-2 mt-1">&#10003;</span><span><strong className="font-semibold">Construire un écosystème :</strong> Renforcez le réseau de talents et d'entreprises panafricain.</span></li>
            </ul>
          </div>
          <div>
            <img src="https://picsum.photos/seed/support-impact/600/400" alt="Impact du soutien" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Faire un Don */}
            <div className="bg-white p-10 rounded-lg shadow-lg text-center border-t-4 border-ama-orange">
              <h2 className="text-3xl font-bold text-ama-blue mb-4">Faire un Don</h2>
              <p className="text-gray-600 mb-8">
                Chaque contribution, quelle que soit sa taille, a un impact direct sur la vie d'un étudiant. Votre don aide à couvrir les frais de formation, l'accès aux ressources et le mentorat.
              </p>
              <button className="bg-ama-orange text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                Donner Maintenant
              </button>
            </div>

            {/* Devenir Sponsor */}
            <div className="bg-white p-10 rounded-lg shadow-lg text-center border-t-4 border-ama-blue">
              <h2 className="text-3xl font-bold text-ama-blue mb-4">Devenir Sponsor</h2>
              <p className="text-gray-600 mb-8">
                Associez votre entreprise à une initiative d'excellence. En tant que sponsor, vous gagnez en visibilité, accédez à un vivier de talents et participez à des événements exclusifs.
              </p>
               <button className="bg-ama-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                Contact Partenariats
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SupportPage;
