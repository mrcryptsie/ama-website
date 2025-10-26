import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
};

const itemVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const JoinUsPage: React.FC = () => {
    return (
        <motion.div initial="offscreen" animate="onscreen" variants={sectionVariants}>
             {/* --- MODIFICATION ICI : Section Header avec image de fond et overlay --- */}
            <motion.section 
              className="py-20 relative overflow-hidden min-h-[40vh] flex items-center justify-center" // Ajout de flex et justify-center
              variants={itemVariants} // Utilise itemVariants pour l'animation de base
            >
                <motion.img
                  // Image de fond différente pour la page JoinUs
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx0ZWFjaGluZyUyMGFmcmljYXxlbnwxfHx8fDE3MTc4NjkyNDl8MA&ixlib=rb-4.0.3&q=80&w=1080" 
                  alt="Teaching or mentoring session"
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1.05, y: -10 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ duration: 10, ease: "easeInOut" }} // Transition douce
                />
                {/* Overlay semi-transparent */}
                <div className="absolute inset-0 bg-ama-blue opacity-85"></div> 

                <div className="container mx-auto px-6 text-center relative z-10"> 
                    <motion.h1 
                      className="text-4xl md:text-5xl font-black text-white mb-4"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Rejoignez Notre Mission
                    </motion.h1>
                    <motion.p 
                      className="text-lg max-w-3xl mx-auto text-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Vous êtes un expert passionné par la transmission du savoir ? Aidez-nous à former la prochaine génération de leaders technologiques en Afrique.
                    </motion.p>
                </div>
            </motion.section>
            {/* --- FIN DE LA MODIFICATION --- */}


            <motion.section 
                className="py-20 bg-white"
                initial="offscreen" 
                whileInView="onscreen" 
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                    {/* Devenir Formateur */}
                    <motion.div variants={itemVariants}>
                        <h2 className="text-3xl font-bold text-ama-blue mb-6">Devenir Formateur</h2>
                        <p className="text-gray-700 mb-6">
                            Partagez votre expertise en rejoignant notre corps professoral. Nous recherchons des professionnels et des universitaires de haut niveau pour animer nos modules de formation et nos masterclass.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="font-bold text-lg text-ama-blue mb-3">Profil Recherché :</h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Expertise avérée en Data Science, IA, Machine Learning, etc.</li>
                                <li>Expérience pédagogique ou forte volonté de transmettre.</li>
                                <li>Excellentes capacités de communication en français.</li>
                                <li>Alignement avec les valeurs de l'AMA.</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Devenir Mentor */}
                     <motion.div variants={itemVariants}>
                        <h2 className="text-3xl font-bold text-ama-blue mb-6">Devenir Mentor</h2>
                        <p className="text-gray-700 mb-6">
                            Guidez un ou plusieurs boursiers tout au long de leur parcours. Le mentorat à l'AMA est un engagement flexible mais à fort impact, qui aide nos étudiants à naviguer leurs défis académiques et professionnels.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <h4 className="font-bold text-lg text-ama-blue mb-3">Rôle du Mentor :</h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Suivi régulier (visioconférences).</li>
                                <li>Conseils sur les projets et la carrière.</li>
                                <li>Partage d'expérience et de réseau.</li>
                                <li>Motivation et soutien personnel.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section 
                className="py-20 bg-ama-gray"
                initial="offscreen" 
                whileInView="onscreen" 
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionVariants}
            >
                <div className="container mx-auto px-6 text-center">
                    <motion.h2 className="text-3xl font-bold text-ama-blue mb-4" variants={itemVariants}>Prêt à Avoir un Impact ?</motion.h2>
                    <motion.p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto" variants={itemVariants}>Nous serions ravis d'en savoir plus sur vous. Envoyez-nous votre profil et vos motivations.</motion.p>
                    <motion.button 
                        className="bg-ama-orange text-white font-bold py-3 px-8 rounded-full text-lg"
                        whileHover={{ scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        variants={itemVariants}
                    >
                        Proposer ma Candidature
                    </motion.button>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default JoinUsPage;