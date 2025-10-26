
import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial, ChartData } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "La qualité de l'explication était à la fois claire, explicite et simple. L'ingénieur a répondu à toutes les questions correctement. J'ai tout compris et j'ai trouvé les notions abordées très intéressantes.",
    name: "Un Boursier de la Cohorte 1",
    role: "Boursier 2025",
    country: "Bénin",
    image: "https://picsum.photos/seed/benin-scholar/100/100",
  },
  {
    quote: "Grâce à la bourse AMA, j'ai pu me concentrer à 100% sur mes études sans me soucier des contraintes financières. C'est une chance inouïe qui ouvre des portes que je n'aurais jamais imaginées.",
    name: "Jean-David Kouamé",
    role: "Boursier 2025",
    country: "Côte d'Ivoire",
    image: "https://picsum.photos/seed/ivory-coast-man/100/100",
  },
];

const chartData: ChartData[] = [
    {
        title: "La qualité générale du cours",
        data: [
            { label: "Très satisfaisant", value: 70.4, color: "#003366" },
            { label: "Satisfaisante", value: 18.5, color: "#FF8C00" },
            { label: "Moyenne", value: 7.4, color: "#00A86B" },
            { label: "Insatisfaisante", value: 3.7, color: "#CCCCCC" }, // Estimated from slice
        ],
    },
    {
        title: "La clarté des explications",
        data: [
            { label: "Très claire", value: 66.7, color: "#003366" },
            { label: "Claire", value: 18.5, color: "#FF8C00" },
            { label: "Peu claire", value: 14.8, color: "#00A86B" },
        ],
    },
];

const sectionVariants = {
    offscreen: { opacity: 0, y: 50 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } }
};

const itemVariants = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const PieChart: React.FC<{ data: ChartData }> = ({ data }) => {
    return (
        <motion.div className="bg-white p-6 rounded-lg shadow-lg text-center" variants={itemVariants}>
            <h4 className="font-bold text-lg text-ama-blue mb-4">{data.title}</h4>
            <svg viewBox="0 0 100 100" className="w-48 h-48 mx-auto">
                <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
                    {(() => {
                        let cumulativePercent = 0;
                        return data.data.map((item, index) => {
                            const percent = item.value;
                            const startAngle = cumulativePercent * 3.6;
                            const endAngle = (cumulativePercent + percent) * 3.6;
                            cumulativePercent += percent;

                            const x1 = 50 + 40 * Math.cos(Math.PI * startAngle / 180);
                            const y1 = 50 + 40 * Math.sin(Math.PI * startAngle / 180);
                            const x2 = 50 + 40 * Math.cos(Math.PI * endAngle / 180);
                            const y2 = 50 + 40 * Math.sin(Math.PI * endAngle / 180);
                            const largeArcFlag = percent > 50 ? 1 : 0;

                            const pathData = `M 50,50 L ${x1},${y1} A 40,40 0 ${largeArcFlag},1 ${x2},${y2} Z`;

                            return (
                                <motion.path
                                    key={index}
                                    d={pathData}
                                    fill={item.color}
                                    initial={{ opacity: 0, pathLength: 0 }}
                                    animate={{ opacity: 1, pathLength: 1 }}
                                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2, ease: "easeInOut" }}
                                />
                            );
                        });
                    })()}
                </motion.g>
            </svg>
            <motion.div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2" variants={sectionVariants}>
                {data.data.map(item => (
                    <motion.div key={item.label} className="flex items-center text-sm" variants={itemVariants}>
                        <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                        <span>{item.label} ({item.value}%)</span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

const ScholarshipsPage: React.FC = () => {
  return (
    <motion.div initial="offscreen" animate="onscreen" variants={sectionVariants}>
      <motion.section className="py-20 bg-ama-blue text-white" variants={itemVariants}>
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Programme de Bourses d'Excellence</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-200">Nous nous engageons à former les meilleurs talents africains, indépendamment de leur situation financière.</p>
        </div>
      </motion.section>

      <motion.section 
        className="py-20 bg-white"
        initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-ama-blue mb-4">Notre Engagement envers le Talent</h2>
            <p className="text-gray-700 text-lg mb-4">Les bourses complètes sont offertes à tous les candidats sélectionnés sur la base du mérite. Nous croyons que le talent ne devrait avoir aucune barrière.</p>
            <p className="text-gray-700 text-lg">Notre programme de bourses est conçu pour vous permettre de vous consacrer pleinement à votre formation et à la réalisation de votre potentiel.</p>
          </motion.div>
          <motion.div className="bg-ama-gray p-8 rounded-lg" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-ama-blue mb-4">Qu'est-ce que la Bourse Couvre ?</h3>
            <motion.ul className="space-y-3" variants={sectionVariants}>
              <motion.li className="flex items-center text-gray-700" variants={itemVariants}><svg className="w-5 h-5 text-ama-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Frais de formation complets</motion.li>
              <motion.li className="flex items-center text-gray-700" variants={itemVariants}><svg className="w-5 h-5 text-ama-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Accès aux ressources pédagogiques premium</motion.li>
              <motion.li className="flex items-center text-gray-700" variants={itemVariants}><svg className="w-5 h-5 text-ama-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Accompagnement personnalisé et mentorat</motion.li>
              <motion.li className="flex items-center text-gray-700" variants={itemVariants}><svg className="w-5 h-5 text-ama-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Opportunités de stage et d'emploi</motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        className="py-20 bg-ama-gray"
        initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Comment Postuler à la Bourse ?</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
              <motion.div className="flex flex-col items-center" variants={itemVariants}>
                  <div className="bg-ama-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
                  <h3 className="font-bold text-lg text-ama-blue mb-2">Postulez au Programme</h3>
                  <p className="text-gray-600">Soumettez votre candidature à l'un de nos programmes via la page d'admission.</p>
              </motion.div>
              <motion.div className="flex flex-col items-center" variants={itemVariants}>
                  <div className="bg-ama-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
                  <h3 className="font-bold text-lg text-ama-blue mb-2">Passez la Sélection</h3>
                  <p className="text-gray-600">Votre dossier est évalué selon nos critères d'excellence académique et de motivation.</p>
              </motion.div>
              <motion.div className="flex flex-col items-center" variants={itemVariants}>
                  <div className="bg-ama-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
                  <h3 className="font-bold text-lg text-ama-blue mb-2">Recevez la Bourse</h3>
                  <p className="text-gray-600">Tous les candidats admis au programme reçoivent automatiquement une bourse complète. Aucune démarche supplémentaire n'est requise.</p>
              </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-20 bg-white"
        initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">La Satisfaction de nos Boursiers (Cohorte 1)</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {chartData.map(chart => (
                    <PieChart key={chart.title} data={chart} />
                ))}
            </div>
        </div>
      </motion.section>

      <motion.section 
        className="py-20 bg-ama-gray"
        initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Témoignages de Boursiers</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-ama-orange" variants={itemVariants}>
                <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                  <div>
                    <p className="font-bold text-ama-blue text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 font-semibold">{testimonial.role}, {testimonial.country}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

    </motion.div>
  );
};

export default ScholarshipsPage;
