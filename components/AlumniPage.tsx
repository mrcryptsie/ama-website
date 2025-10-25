import React from 'react';

const AlumniPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-ama-blue text-white relative overflow-hidden">
        <img src="https://picsum.photos/seed/graduation-cap/1920/1080" alt="Graduation" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Programme AMA Alumni</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-200">
            Notre vision : non seulement former des experts, mais préparer des professionnels complets, capables de transformer leurs connaissances en solutions concrètes pour les entreprises et la société.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-ama-blue mb-4">Un Accompagnement Post-Formation</h2>
            <p className="text-gray-700 mb-4 text-lg">
              Le programme AMA Alumni est spécialement conçu pour accompagner les boursiers dans leur spécialisation tout en facilitant leur insertion professionnelle dans le secteur technologique et scientifique.
            </p>
            <p className="text-gray-700 text-lg">
              Dans un premier temps, le programme se concentre sur la spécialisation des boursiers dans un domaine de leur choix, leur permettant de développer des compétences pointues et directement applicables dans un contexte professionnel.
            </p>
          </div>
          <div>
            <img src="https://picsum.photos/seed/professional-network/600/400" alt="Professional Networking" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Les Piliers du Programme Alumni</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center text-ama-orange mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                <h3 className="text-xl font-bold text-ama-blue mb-2">Expérience Pratique</h3>
                <p className="text-gray-600">Une phase d'alternance au sein d'entreprises partenaires de l'AMA offre une expérience concrète qui complète la formation académique.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center text-ama-orange mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>
                <h3 className="text-xl font-bold text-ama-blue mb-2">Développement Professionnel</h3>
                <p className="text-gray-600">Ateliers, sessions de mentorat avec des experts de l'industrie, et masterclass sur les tendances émergentes pour maximiser votre employabilité.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex justify-center text-ama-orange mb-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                <h3 className="text-xl font-bold text-ama-blue mb-2">Réseau Solide</h3>
                <p className="text-gray-600">Les participants bénéficient d'un réseau professionnel solide, favorisant l'échange de connaissances et l'accès à des opportunités diversifiées.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <img src="https://picsum.photos/seed/alumni1/120/120" alt="Alumni 1" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-ama-orange"/>
              <h4 className="font-bold text-lg text-ama-blue">Kadia Cissé</h4>
              <p className="text-sm text-gray-500 mb-2">Data Scientist, Tech Innovate, Abidjan</p>
              <p className="text-sm text-gray-700 italic">"L'AMA m'a donné les compétences et la confiance pour transformer ma passion pour les données en une carrière à impact."</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <img src="https://picsum.photos/seed/alumni2/120/120" alt="Alumni 2" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-ama-orange"/>
              <h4 className="font-bold text-lg text-ama-blue">Moussa Diop</h4>
              <p className="text-sm text-gray-500 mb-2">ML Engineer, FinTech Solutions, Dakar</p>
              <p className="text-sm text-gray-700 italic">"Le bootcamp final a été un véritable tremplin. J'ai été recruté par une entreprise partenaire avant même la fin du programme."</p>
            </div>
             <div className="bg-gray-50 p-6 rounded-lg text-center">
              <img src="https://picsum.photos/seed/alumni3/120/120" alt="Alumni 3" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-ama-orange"/>
              <h4 className="font-bold text-lg text-ama-blue">Binta Adebayo</h4>
              <p className="text-sm text-gray-500 mb-2">AI Researcher, Health AI Lab, Cotonou</p>
              <p className="text-sm text-gray-700 italic">"Le réseau de l'AMA est inestimable. J'ai pu collaborer sur des projets de recherche panafricains passionnants grâce aux contacts noués."</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6 text-center">
          <div className="bg-ama-blue text-white p-12 rounded-lg shadow-2xl max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Créer une Communauté d'Experts</h2>
            <p className="text-gray-200 text-lg">
              L'AMA entend ainsi créer une communauté de scientifiques et d'experts opérationnels, capables de contribuer significativement au développement technologique et scientifique du continent.
            </p>
            <button
                onClick={() => { /* Potentially navigate to contact or a partnership page */ }}
                className="mt-8 bg-ama-orange text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform duration-300 hover:scale-105"
            >
                Rejoignez notre réseau
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlumniPage;