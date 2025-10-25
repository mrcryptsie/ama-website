import React, { useState } from 'react';

const programTimeline = [
  { week: 0, title: "Local Search", details: "Search Problems, Depth-First, Breadth-First, A* Search, Minimax. MasterClass: Introduction to Python Basics." },
  { week: 1, title: "Knowledge", details: "Propositional Logic, Inference, First Order Logic. MasterClass: Personal Branding." },
  { week: 2, title: "Uncertainty", details: "Probability, Bayes' Rule, Bayesian Networks, Markov Models. MasterClass: AI Careers and Opportunities." },
  { week: 3, title: "Optimization", details: "Local Search, Hill Climbing, Simulated Annealing, Linear Programming, Constraint Satisfaction. Special Panel on Networking in AI." },
  { week: 4, title: "Learning", details: "Supervised Learning, SVMs, Regression, Reinforcement Learning, Unsupervised Learning. MasterClass on AI Challenges." },
  { week: 5, title: "Neural Networks", details: "Artificial Neural Networks, Gradient Descent, Backpropagation, TensorFlow, CNNs, RNNs. MasterClass: Data Project Lifecycle." },
  { week: 6, title: "Language", details: "Syntax, Semantics, Bag-of-Words, word2vec, Attention, Transformers. MasterClass: Turning Models into Interfaces." },
  { week: 7, title: "Computer Vision", details: "Pixels, Filters, Convolution, Feature Maps, Transfer Learning, GANs, Vision Transformers. Final MathsJAM." },
];

const TimelineItem: React.FC<{ item: typeof programTimeline[0], isLast: boolean }> = ({ item, isLast }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-ama-orange after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-lg font-semibold w-28 h-8 mb-3 sm:mb-0 text-white bg-ama-blue rounded-full">WEEK {item.week}</div>
      <div className="text-xl font-bold text-ama-blue">{item.title}</div>
    </div>
    <div className="text-slate-500 ml-8 sm:ml-32">{item.details}</div>
  </div>
);

const ProgramsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('fiia');

  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-ama-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Nos Programmes de Formation</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-200">
            Un curriculum complet conçu pour vous transformer en expert de la data science et de l'intelligence artificielle.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('fiia')}
              className={`${activeTab === 'fiia' ? 'border-ama-orange text-ama-blue' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-bold text-lg transition-colors`}
            >
              Formation Introduction à l'IA (FIIA)
            </button>
            <button
              onClick={() => setActiveTab('future')}
               className={`${activeTab === 'future' ? 'border-ama-orange text-ama-blue' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-bold text-lg transition-colors`}
            >
              Programmes Futurs
            </button>
          </nav>
        </div>

        <div className="py-10">
          {activeTab === 'fiia' && (
            <div>
              <section id="fiia-details" className="bg-white">
                <div className="text-center mb-16">
                   <h2 className="text-3xl font-bold text-ama-blue mb-4">Tout Savoir sur la FIIA</h2>
                   <p className="max-w-3xl mx-auto text-gray-600 text-lg">
                    La Formation d'Introduction à l'Intelligence Artificielle (FIIA) est un programme rigoureux et intensif de <span className="font-bold text-ama-orange">10 semaines</span>, conçu pour poser les fondations essentielles de l'IA chez les passionnés et les débutants du domaine.
                   </p>
                </div>
                
                {/* Public Cible */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <img src="https://picsum.photos/seed/target-audience/600/400" alt="Candidats de l'AMA" className="rounded-lg shadow-xl"/>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-ama-blue mb-4">Profil des Candidats</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start"><span className="font-bold text-ama-orange mr-2 mt-1">&#10140;</span><span><strong className="font-semibold">Niveau :</strong> Diplômés en mathématiques, informatique, statistiques, physique ou domaines connexes.</span></li>
                            <li className="flex items-start"><span className="font-bold text-ama-orange mr-2 mt-1">&#10140;</span><span><strong className="font-semibold">Compétences :</strong> Solides bases en mathématiques et programmation.</span></li>
                            <li className="flex items-start"><span className="font-bold text-ama-orange mr-2 mt-1">&#10140;</span><span><strong className="font-semibold">Motivation :</strong> Passion pour la data science et l'IA, volonté d'impact en Afrique.</span></li>
                        </ul>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-center text-ama-blue mb-8">Chronogramme de la Formation</h3>
                    {programTimeline.map((item, index) => (
                      <TimelineItem key={item.week} item={item} isLast={index === programTimeline.length - 1} />
                    ))}
                </div>
              </section>

              <section className="py-20 bg-ama-gray mt-16 rounded-lg">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-ama-blue mb-4">AMA Bootcamp & Demo Day</h3>
                    <p className="text-gray-700 mb-4">
                      La formation se clôture par un Bootcamp immersif de cinq jours. Les boursiers sont confrontés à des problématiques réelles de nos entreprises partenaires et y apportent des solutions concrètes.
                    </p>
                    <p className="text-gray-700">
                      Le dernier jour est le Demo Day, où chaque groupe présente son projet devant le Comité Scientifique de l'AMA pour valider sa certification et devenir Alumni AMA.
                    </p>
                  </div>
                   <div>
                      <img src="https://picsum.photos/seed/demoday/600/400" alt="Demo Day Presentation" className="rounded-lg shadow-xl" />
                  </div>
                </div>
              </section>

              <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                  <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Notre Approche Pédagogique</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                      <h4 className="font-bold text-lg text-ama-blue mb-2">Apprentissage par Projet</h4>
                      <p className="text-sm text-gray-600">Projets concrets sur des problématiques africaines pour une application directe des compétences.</p>
                    </div>
                     <div className="text-center p-6 border border-gray-200 rounded-lg">
                      <h4 className="font-bold text-lg text-ama-blue mb-2">Masterclass d'Experts</h4>
                      <p className="text-sm text-gray-600">Sessions exclusives avec des experts internationaux pour une vision pointue du secteur.</p>
                    </div>
                     <div className="text-center p-6 border border-gray-200 rounded-lg">
                      <h4 className="font-bold text-lg text-ama-blue mb-2">Hackathons & Compétitions</h4>
                      <p className="text-sm text-gray-600">Défis stimulants pour encourager l'innovation, la collaboration et le dépassement de soi.</p>
                    </div>
                     <div className="text-center p-6 border border-gray-200 rounded-lg">
                      <h4 className="font-bold text-lg text-ama-blue mb-2">Mentorat Personnalisé</h4>
                      <p className="text-sm text-gray-600">Un suivi individuel par des professionnels pour guider votre parcours académique et professionnel.</p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="py-20">
                 <div className="text-center">
                    <h3 className="text-3xl font-bold text-ama-blue mb-4">Une Double Certification Prestigieuse</h3>
                    <p className="max-w-3xl mx-auto text-gray-600 mb-8">
                      À l'issue de la formation, les boursiers reçoivent une double certification qui atteste de leur parcours exceptionnel et de leurs compétences acquises.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                       <div className="p-6 border-2 border-ama-blue rounded-lg text-center">
                          <p className="text-xl font-bold text-gray-500">Certification de</p>
                          <p className="text-3xl font-black text-ama-blue">HARVARD</p>
                       </div>
                       <span className="text-4xl font-light text-gray-400">&</span>
                       <div className="p-6 border-2 border-ama-orange rounded-lg text-center">
                          <p className="text-xl font-bold text-gray-500">Certification de</p>
                          <p className="text-3xl font-black text-ama-orange">l'AMA & Partenaires</p>
                       </div>
                    </div>
                 </div>
              </section>

              <section className="py-20 bg-ama-gray rounded-lg">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl font-bold text-ama-blue mb-4">Débouchés Professionnels</h3>
                    <p className="max-w-3xl mx-auto text-gray-600 mb-8">
                      Nos lauréats sont préparés pour des carrières de premier plan dans le domaine de la technologie.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-white text-ama-blue font-semibold py-2 px-4 rounded-full shadow-sm">Data Scientist</span>
                        <span className="bg-white text-ama-blue font-semibold py-2 px-4 rounded-full shadow-sm">Machine Learning Engineer</span>
                        <span className="bg-white text-ama-blue font-semibold py-2 px-4 rounded-full shadow-sm">Data Analyst</span>
                        <span className="bg-white text-ama-blue font-semibold py-2 px-4 rounded-full shadow-sm">AI Researcher</span>
                        <span className="bg-white text-ama-blue font-semibold py-2 px-4 rounded-full shadow-sm">Consultant BI</span>
                    </div>
                </div>
              </section>
            </div>
          )}
          {activeTab === 'future' && (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold text-ama-blue mb-4">Programmes à Venir</h2>
              <p className="text-gray-600 text-lg">De nouveaux programmes spécialisés sont en cours de développement. Restez connectés !</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;