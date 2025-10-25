import React, { useState } from 'react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-4">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
                <h4 className="font-semibold text-lg text-ama-blue">{q}</h4>
                <svg className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isOpen && <p className="mt-2 text-gray-600 pr-6">{a}</p>}
        </div>
    );
};


const AdmissionPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-center text-ama-blue mb-4">Processus d'Admission</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-600">
            Rejoignez l'élite de la data science en Afrique. Découvrez les étapes pour postuler à notre programme d'excellence.
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-ama-blue mb-8">Votre Parcours de Candidature</h2>
              
              <div className="space-y-8 relative border-l-2 border-ama-orange pl-8">
                <div className="relative">
                  <div className="absolute -left-10 top-1.5 w-4 h-4 bg-ama-orange rounded-full border-4 border-white shadow"></div>
                  <h3 className="text-xl font-bold text-ama-blue">Étape 1: Candidature en Ligne</h3>
                  <p className="text-gray-600 mt-2">Soumettez votre candidature via notre formulaire en ligne. La première sélection est effectuée sur la base de la qualité de votre motivation.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 top-1.5 w-4 h-4 bg-ama-orange rounded-full border-4 border-white shadow"></div>
                  <h3 className="text-xl font-bold text-ama-blue">Étape 2: Présélection & Complément de Dossier</h3>
                  <p className="text-gray-600 mt-2">Les candidats présélectionnés sont invités à compléter leurs dossiers avec les justificatifs de leur niveau d'études et de leurs compétences scientifiques.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-10 top-1.5 w-4 h-4 bg-ama-orange rounded-full border-4 border-white shadow"></div>
                  <h3 className="text-xl font-bold text-ama-blue">Étape 3: Examen Complet des Dossiers</h3>
                  <p className="text-gray-600 mt-2">L'ensemble des dossiers est traité avec la plus grande rigueur pour garantir une sélection transparente et conforme à nos standards d'excellence.</p>
                </div>
                <div className="relative">
                   <div className="absolute -left-10 top-1.5 w-4 h-4 bg-ama-orange rounded-full border-4 border-white shadow"></div>
                  <h3 className="text-xl font-bold text-ama-blue">Étape 4: Sélection Finale</h3>
                  <p className="text-gray-600 mt-2">À l'issue de l'examen et de l'évaluation des compétences, la sélection finale est effectuée afin de retenir les candidats les mieux qualifiés, assurant une intégration optimale.</p>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                 <h3 className="text-2xl font-bold text-ama-blue mb-4">Documents Requis</h3>
                 <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Curriculum Vitae (CV) à jour</li>
                    <li>Lettre de motivation expliquant votre projet professionnel</li>
                    <li>Copies de vos diplômes et relevés de notes</li>
                    <li>Lettres de recommandation (facultatif mais recommandé)</li>
                 </ul>
              </div>

            </div>
            
            <div>
              <div className="bg-ama-blue text-white p-8 rounded-lg shadow-xl sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Critères d'Éligibilité</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-ama-orange mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span><span className="font-bold">Diplôme :</span> Diplômés en mathématiques, informatique, statistiques, physique ou domaines connexes.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-ama-orange mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span><span className="font-bold">Compétences :</span> Solides bases en mathématiques et en programmation.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-ama-orange mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span><span className="font-bold">Motivation :</span> Passion pour la data science et l'IA, avec un projet professionnel clair et une volonté d'impact en Afrique.</span>
                  </li>
                   <li className="flex items-start">
                    <svg className="w-6 h-6 text-ama-orange mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span><span className="font-bold">Localisation :</span> Priorité aux candidats résidant en Afrique francophone.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Foire Aux Questions - Admission</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <FAQItem q="Quelle est la date limite pour les candidatures ?" a="Les dates pour la prochaine cohorte seront annoncées prochainement. Inscrivez-vous à notre newsletter pour être notifié." />
                <FAQItem q="Le programme est-il entièrement en français ?" a="Oui, la langue principale d'enseignement et de communication est le français. Une bonne maîtrise de l'anglais technique est cependant un atout." />
                <FAQItem q="Y a-t-il des frais de candidature ?" a="Non, le processus de candidature à l'AMA est entièrement gratuit." />
                <FAQItem q="Puis-je postuler si je suis en dernière année d'études ?" a="Oui, les étudiants en dernière année de leur cursus peuvent postuler, à condition d'être diplômés avant le début de la formation." />
            </div>
        </div>
      </section>

       <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-ama-blue mb-4">Prêt à Transformer Votre Avenir ?</h2>
             <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Les candidatures pour la cohorte 2026 ouvriront bientôt. Laissez-nous votre email pour être notifié en priorité.</p>
            <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
                <input type="email" placeholder="Votre adresse email" className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ama-orange" />
                <button type="submit" className="bg-ama-orange text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                    Me notifier
                </button>
            </form>
        </div>
      </section>
    </div>
  );
};

export default AdmissionPage;