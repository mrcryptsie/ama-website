
import React from 'react';
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

const PieChart: React.FC<{ data: ChartData }> = ({ data }) => {
    let cumulativePercent = 0;
    const segments = data.data.map(item => {
        const percent = item.value;
        const startAngle = cumulativePercent * 3.6;
        const endAngle = (cumulativePercent + percent) * 3.6;
        cumulativePercent += percent;
        
        const x1 = 50 + 40 * Math.cos(Math.PI * startAngle / 180);
        const y1 = 50 + 40 * Math.sin(Math.PI * startAngle / 180);
        const x2 = 50 + 40 * Math.cos(Math.PI * endAngle / 180);
        const y2 = 50 + 40 * Math.sin(Math.PI * endAngle / 180);
        const largeArcFlag = percent > 50 ? 1 : 0;

        return `M 50,50 L ${x1},${y1} A 40,40 0 ${largeArcFlag},1 ${x2},${y2} Z`;
    });

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h4 className="font-bold text-lg text-ama-blue mb-4">{data.title}</h4>
            <svg viewBox="0 0 100 100" className="w-48 h-48 mx-auto">
                {segments.map((d, i) => (
                    <path key={i} d={d} fill={data.data[i].color} />
                ))}
            </svg>
            <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
                {data.data.map(item => (
                    <div key={item.label} className="flex items-center text-sm">
                        <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                        <span>{item.label} ({item.value}%)</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ScholarshipsPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-ama-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Programme de Bourses d'Excellence</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-200">
            Nous nous engageons à former les meilleurs talents africains, indépendamment de leur situation financière.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-ama-blue mb-4">Notre Engagement envers le Talent</h2>
            <p className="text-gray-700 text-lg mb-4">
              Les bourses complètes sont offertes à tous les candidats sélectionnés sur la base du mérite. Nous croyons que le talent ne devrait avoir aucune barrière.
            </p>
            <p className="text-gray-700 text-lg">
              Notre programme de bourses est conçu pour vous permettre de vous consacrer pleinement à votre formation et à la réalisation de votre potentiel.
            </p>
          </div>
          <div className="bg-ama-gray p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-ama-blue mb-4">Qu'est-ce que la Bourse Couvre ?</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-ama-green mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Frais de formation complets</li>
              <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-ama-green mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Accès aux ressources pédagogiques premium</li>
              <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-ama-green mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Accompagnement personnalisé et mentorat</li>
              <li className="flex items-center text-gray-700"><svg className="w-5 h-5 text-ama-green mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Opportunités de stage et d'emploi</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Comment Postuler à la Bourse ?</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                  <div className="bg-ama-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">1</div>
                  <h3 className="font-bold text-lg text-ama-blue mb-2">Postulez au Programme</h3>
                  <p className="text-gray-600">Soumettez votre candidature à l'un de nos programmes via la page d'admission.</p>
              </div>
              <div className="flex flex-col items-center">
                  <div className="bg-ama-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">2</div>
                  <h3 className="font-bold text-lg text-ama-blue mb-2">Passez la Sélection</h3>
                  <p className="text-gray-600">Votre dossier est évalué selon nos critères d'excellence académique et de motivation.</p>
              </div>
              <div className="flex flex-col items-center">
                  <div className="bg-ama-orange text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4">3</div>
                  <h3 className="font-bold text-lg text-ama-blue mb-2">Recevez la Bourse</h3>
                  <p className="text-gray-600">Tous les candidats admis au programme reçoivent automatiquement une bourse complète. Aucune démarche supplémentaire n'est requise.</p>
              </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">La Satisfaction de nos Boursiers (Cohorte 1)</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {chartData.map(chart => (
                    <PieChart key={chart.title} data={chart} />
                ))}
            </div>
        </div>
      </section>

      <section className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Témoignages de Boursiers</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-ama-orange">
                <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                  <div>
                    <p className="font-bold text-ama-blue text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 font-semibold">{testimonial.role}, {testimonial.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ScholarshipsPage;
