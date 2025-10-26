
import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../types';

const allTeamMembers: TeamMember[] = [
    // ... (team members data remains the same)
    { name: "M. Lucien TITO", title: "Data Scientist Freelance – Upwork", bio: "Promoteur de la startup UDI-AFRICA et concepteur de la solution Orienty. Lauréat de multiples hackathons, Lucien incarne la nouvelle génération de talents africains en IA.", image: "https://picsum.photos/seed/lucien-tito/400/400", category: "pedagogy" },
    { name: "Ir. Sèdjro Abraham Zacharie KOLOBOE", title: "Data Engineer & Machine Learning Engineer", bio: "Diplômé en Modélisation Mathématique, Abraham est passionné par la valorisation des données et conçoit des architectures de données performantes pour les entreprises africaines.", image: "https://picsum.photos/seed/sedjro-koloboe/400/400", category: "pedagogy" },
    { name: "M. Mahoudjro Charbel ASSOGBA", title: "Ingénieur Logiciel Polyvalent, Data Scientist", bio: "Spécialisé en JavaScript et PHP, il maîtrise les technologies modernes comme React.js et Node.js. Son intérêt pour la Vision par Ordinateur l'a conduit à développer des compétences en apprentissage automatique.", image: "https://picsum.photos/seed/charbel-assogba/400/400", category: "pedagogy" },
    { name: "M. Said GBEMAHLOUE", title: "Statisticien", bio: "Formé à l'École Nationale de Statistique (ENSPD) du Bénin, il possède une solide formation en analyse de données, statistiques appliquées et planification démographique.", image: "https://picsum.photos/seed/said-gbemahloue/400/400", category: "pedagogy" },
    { name: "Mlle Christy KOTY", title: "Experte en Marketing Digital & Communication Stratégique", bio: "Présidente et Cofondatrice de The Digital Queens, elle possède une expertise approfondie en branding, storytelling, et communication stratégique.", image: "https://picsum.photos/seed/christy-koty/400/400", category: "pedagogy" },
    { name: "Mlle Consolas HODONOU", title: "Data Scientist | MSc en Biostatistique", bio: "Directrice Technique à l'ONG ICT4U, elle s'engage à promouvoir l'innovation technologique et à inspirer davantage de femmes dans les STIM.", image: "https://picsum.photos/seed/consolas-hodonou/400/400", category: "pedagogy" },
    { name: "M. Charbel MAMLANKOU", title: "Chercheur en Intelligence Artificielle", bio: "Spécialisé en Modélisation Computationnelle et Simulation Numérique, son travail combine les méthodes numériques classiques et le machine learning pour résoudre des équations complexes.", image: "https://picsum.photos/seed/charbel-mamlankou/400/400", category: "pedagogy" },
    // Équipe de Mentorat
    { name: "Mlle. Inès TCHEKPO", title: "Développeuse IA à TAMEBI SAS", bio: "Experte en développement IA, passionnée par la transmission du savoir.", image: "https://picsum.photos/seed/ines-tchekpo/200/200", category: "mentor" },
    { name: "Mlle. Stella AGUEMON", title: "Développeuse Full-Stack à Véone Bénin", bio: "Spécialiste du développement web et mobile, guide les étudiants dans la création d'interfaces.", image: "https://picsum.photos/seed/stella-aguemon/200/200", category: "mentor" },
    { name: "M. Romuald AMEGBEDJI", title: "Machine Learning Engineer à eTihuku", bio: "Ingénieur ML chevronné, il accompagne les boursiers dans la mise en œuvre de modèles prédictifs.", image: "https://picsum.photos/seed/romuald-amegbedji/200/200", category: "mentor" },
    { name: "M. Ghilth GBAGUIDI", title: "Développeur IA à l'ASIN", bio: "Spécialiste en systèmes d'informations et du numérique, il apporte une expertise gouvernementale.", image: "https://picsum.photos/seed/ghilth-gbaguidi/200/200", category: "mentor" },
    { name: "M. Farid MAMADOU", title: "Développeur IA à Durabilus", bio: "Un expert en IA appliquée, aidant les boursiers à résoudre des problèmes complexes.", image: "https://picsum.photos/seed/farid-mamadou/200/200", category: "mentor" },
    { name: "M. Yoann OZA", title: "Développeur IA à TAMEBI SAS", bio: "Passionné d'IA, il partage son expérience pratique en développement de solutions intelligentes.", image: "https://picsum.photos/seed/yoann-oza/200/200", category: "mentor" },
    { name: "M. Arix ALIMAGNIDOKPO", title: "Consultant en IA au Ministère des Affaires Étrangères", bio: "Apporte une perspective unique sur l'application de l'IA dans les politiques publiques et les relations internationales.", image: "https://picsum.photos/seed/arix-alimagnidokpo/200/200", category: "mentor" },
];

const team = allTeamMembers.filter(m => m.category === 'pedagogy');
const mentors = allTeamMembers.filter(m => m.category === 'mentor');

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ValueCard: React.FC<{ title: string, description: string, icon: React.ReactNode }> = ({ title, description, icon }) => (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md text-center h-full"
      variants={itemVariants}
    >
        <div className="text-ama-orange text-4xl mb-4 flex justify-center">{icon}</div>
        <h3 className="text-xl font-bold text-ama-blue mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-xl overflow-hidden text-center flex flex-col"
    variants={itemVariants}
    whileHover={{ y: -8, transition: { duration: 0.2 }}}
  >
    <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-ama-blue">{member.name}</h3>
      <p className="text-ama-orange font-semibold text-sm mb-3">{member.title}</p>
      <p className="text-gray-600 text-sm flex-grow">{member.bio}</p>
    </div>
  </motion.div>
);

const AboutPage: React.FC = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.section className="py-20 bg-ama-gray" variants={itemVariants}>
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-center text-ama-blue mb-4">À Propos de l'AMA</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-600">Découvrez notre histoire, notre mission et les valeurs qui nous animent pour façonner l'avenir de la technologie en Afrique.</p>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-white" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-ama-blue mb-4">Notre Mission</h2>
              <p className="text-gray-700 mb-4 text-lg">Face au double défi du déficit de profils techniques en Afrique et de l'inadéquation entre la formation universitaire et le marché de l'emploi, l'AMA apporte une réponse concrète.</p>
              <p className="text-gray-700 font-semibold text-ama-blue bg-orange-50 border-l-4 border-ama-orange p-4 rounded-r-lg text-lg">Notre mission est de former des experts capables de répondre efficacement aux exigences du monde professionnel, en leur offrant des programmes innovants et alignés sur les standards internationaux.</p>
            </motion.div>
            <motion.div variants={itemVariants}>
                <img src="https://picsum.photos/seed/about-vision/600/400" alt="Vision de l'AMA" className="rounded-lg shadow-xl" />
            </motion.div>
          </div>
           <motion.div className="mt-20 text-center bg-ama-blue text-white p-10 rounded-lg shadow-2xl" initial={{opacity: 0, y: 50}} whileInView={{opacity: 1, y: 0}} viewport={{once: true, amount: 0.5}} transition={{duration: 0.5}}>
              <h2 className="text-3xl font-bold mb-4">Notre Vision à l'Horizon 2030</h2>
              <p className="text-xl max-w-4xl mx-auto text-gray-200">Bâtir l'écosystème de référence en Afrique pour le développement et la valorisation des talents scientifiques, avec pour ambition de certifier plus de 1 000 jeunes et de faciliter leur insertion durable dans le marché de l'emploi.</p>
           </motion.div>
        </div>
      </motion.section>
      
      <motion.section className="py-20 bg-ama-gray" initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true, amount: 0.3}} transition={{duration: 0.5}}>
          <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Notre Histoire</h2>
              <div className="max-w-3xl mx-auto">
                  <motion.div className="relative border-l-2 border-ama-orange pl-8 space-y-12" variants={containerVariants}>
                      <motion.div className="relative" variants={itemVariants}>
                          <div className="absolute -left-10 top-1.5 w-4 h-4 bg-ama-orange rounded-full border-4 border-white"></div>
                          <h3 className="text-xl font-bold text-ama-blue">Août 2025</h3>
                          <p className="text-gray-600 mt-1">Lancement des candidatures pour la première cohorte, recevant plus de 100 candidatures de 8 pays.</p>
                      </motion.div>
                      <motion.div className="relative" variants={itemVariants}>
                          <div className="absolute -left-10 top-1.5 w-4 h-4 bg-ama-orange rounded-full border-4 border-white"></div>
                          <h3 className="text-xl font-bold text-ama-blue">Septembre 2025</h3>
                          <p className="text-gray-600 mt-1">Lancement officiel de la Formation d'Introduction à l'Intelligence Artificielle (FIIA) avec 39 boursiers sélectionnés.</p>
                      </motion.div>
                      <motion.div className="relative" variants={itemVariants}>
                          <div className="absolute -left-10 top-1.5 w-4 h-4 bg-ama-orange rounded-full border-4 border-white"></div>
                          <h3 className="text-xl font-bold text-ama-blue">Octobre 2025</h3>
                          <p className="text-gray-600 mt-1">Publication du premier rapport d'activités, validant la pertinence du modèle pédagogique et l'engagement des lauréats.</p>
                      </motion.div>
                  </motion.div>
              </div>
          </div>
      </motion.section>

       <motion.section className="py-20 bg-white" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}} variants={containerVariants}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Le Corps Professoral</h2>
          <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">La qualité de notre programme dépend directement de celle de nos formateurs. Nous sommes fiers de rassembler des profils hautement spécialisés pour offrir le meilleur accompagnement possible.</p>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" variants={containerVariants}>
            {team.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </motion.div>
        </div>
      </motion.section>
      
       <motion.section className="py-20 bg-ama-gray" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}} variants={containerVariants}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Notre Équipe de Mentorat Dédiée</h2>
          <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">Composée d'experts et d'étudiants avancés, cette équipe constitue un relais essentiel entre les apprenants et la coordination académique, garantissant un suivi efficace et continu.</p>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" variants={containerVariants}>
            {mentors.map((mentor) => (
              <motion.div key={mentor.name} className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4" variants={itemVariants} whileHover={{scale: 1.05}}>
                <img src={mentor.image} alt={mentor.name} className="w-20 h-20 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-ama-blue">{mentor.name}</h4>
                  <p className="text-sm text-ama-orange font-semibold">{mentor.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="py-20 bg-white" initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.3}} variants={containerVariants}>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Nos Valeurs Fondamentales</h2>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants}>
            <ValueCard 
                title="Excellence" 
                description="Nous visons les plus hauts standards académiques et professionnels dans toutes nos formations."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
            />
            <ValueCard 
                title="Innovation" 
                description="Nous encourageons la créativité et la recherche de solutions nouvelles aux défis africains."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
            />
            <ValueCard 
                title="Panafricanisme" 
                description="Nous bâtissons un réseau solide de talents à travers tout le continent francophone."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M12 12a5 5 0 110-10 5 5 0 010 10z" /></svg>}
            />
            <ValueCard 
                title="Inclusion" 
                description="Nous nous engageons à promouvoir la diversité, en encourageant particulièrement les femmes à nous rejoindre."
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
            />
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AboutPage;
