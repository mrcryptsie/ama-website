
import React from 'react';

const JoinUsPage: React.FC = () => {
    return (
        <div className="animate-fadeIn">
            <section className="py-20 bg-ama-blue text-white">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Rejoignez Notre Mission</h1>
                    <p className="text-lg max-w-3xl mx-auto text-gray-200">
                        Vous êtes un expert passionné par la transmission du savoir ? Aidez-nous à former la prochaine génération de leaders technologiques en Afrique.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
                    {/* Devenir Formateur */}
                    <div>
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
                    </div>

                    {/* Devenir Mentor */}
                     <div>
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
                    </div>
                </div>
            </section>

            <section className="py-20 bg-ama-gray">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-ama-blue mb-4">Prêt à Avoir un Impact ?</h2>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Nous serions ravis d'en savoir plus sur vous. Envoyez-nous votre profil et vos motivations.</p>
                    <button className="bg-ama-orange text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                        Proposer ma Candidature
                    </button>
                </div>
            </section>
        </div>
    );
};

export default JoinUsPage;
