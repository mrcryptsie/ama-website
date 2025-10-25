
import React, { useState, useMemo } from 'react';
import { GalleryMember, ScholarByCountry } from '../types';

const scholarsByCountry: ScholarByCountry[] = [
    { country: 'Bénin', scholars: [
        { name: 'Koffi Agossou', major: 'Mathématiques Appliquées' },
        { name: 'Biaou Boni', major: 'Informatique' },
        { name: 'Sossou Chloé', major: 'Statistiques' },
        { name: 'Zinsou David', major: 'Physique' },
        { name: 'Agboola Esther', major: 'Actuariat' },
        { name: 'Hounkpe Fiacre', major: 'Génie Logiciel' },
        { name: 'Dansou Gilles', major: 'Économétrie' },
        { name: 'Ekou Hélène', major: 'Recherche Opérationnelle' },
    ]},
    { country: 'Burkina Faso', scholars: [
        { name: 'Ouédraogo Adama', major: 'Informatique' },
        { name: 'Sawadogo Bintou', major: 'Maths-Info' },
        { name: 'Kaboré Cédric', major: 'Statistiques' },
        { name: 'Diallo Djenabou', major: 'Physique' },
        { name: 'Traoré Etienne', major: 'Génie Civil' },
    ]},
    { country: 'Côte d\'Ivoire', scholars: [
        { name: 'Kouassi Jean-Luc', major: 'Mathématiques Appliquées' },
        { name: 'Yao Aya', major: 'Informatique' },
        { name: 'Konan Célestin', major: 'Statistiques' },
        { name: 'Dosso Drissa', major: 'Électronique' },
        { name: 'Fofana Fatoumata', major: 'Data Science' },
        { name: 'Gueï François', major: 'Réseaux & Télécoms' },
    ]},
    { country: 'Guinée', scholars: [
        { name: 'Diallo Alpha', major: 'Informatique' },
        { name: 'Camara Binta', major: 'Mathématiques' },
        { name: 'Sylla Cheick', major: 'Génie Logiciel' },
        { name: 'Barry Daouda', major: 'Physique' },
    ]},
    { country: 'Mali', scholars: [
        { name: 'Traoré Aminata', major: 'Mathématiques Appliquées' },
        { name: 'Keita Boubacar', major: 'Informatique' },
        { name: 'Diarra Coumba', major: 'Statistiques' },
        { name: 'Sidibé Djibril', major: 'Génie Électrique' },
        { name: 'Coulibaly Emmanuel', major: 'Informatique' },
    ]},
    { country: 'Niger', scholars: [
        { name: 'Abdou Abdoul', major: 'Mathématiques' },
        { name: 'Moussa Mariama', major: 'Informatique' },
        { name: 'Salifou Saley', major: 'Physique' },
    ]},
    { country: 'Sénégal', scholars: [
        { name: 'Diop Aïssatou', major: 'Mathématiques Appliquées' },
        { name: 'Ndiaye Babacar', major: 'Informatique' },
        { name: 'Fall Codou', major: 'Statistiques' },
        { name: 'Sow Demba', major: 'Génie Logiciel' },
        { name: 'Gueye El Hadji', major: 'Data Science' },
    ]},
    { country: 'Togo', scholars: [
        { name: 'Amegan Akouvi', major: 'Informatique' },
        { name: 'Koffi Komlan', major: 'Mathématiques' },
        { name: 'Lawson Laté', major: 'Physique' },
    ]},
];

const galleryMembers: GalleryMember[] = scholarsByCountry.flatMap(country => 
    country.scholars.map(scholar => ({
        name: scholar.name,
        image: `https://picsum.photos/seed/${scholar.name.replace(/\s/g, '-')}/300/300`
    }))
);


const CohortPage: React.FC = () => {
  const [filter, setFilter] = useState('Tous');
  const countries = ['Tous', ...scholarsByCountry.map(c => c.country)];

  const filteredScholars = useMemo(() => {
    if (filter === 'Tous') return scholarsByCountry;
    return scholarsByCountry.filter(group => group.country === filter);
  }, [filter]);

  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-ama-blue mb-4">La Première Cohorte (2025)</h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Découvrez les 39 pionniers qui forment la première promotion de l'Académie des Mathématiques Appliquées, sélectionnés parmi plus de 100 candidats à travers 8 pays.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Album Photos de la Promotion</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {galleryMembers.slice(0, 18).map((member, index) => ( // Show a selection
                    <div key={index} className="group text-center">
                        <div className="overflow-hidden rounded-lg shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover aspect-square" />
                        </div>
                        <h4 className="mt-4 font-bold text-sm text-ama-blue">{member.name}</h4>
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      <section className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Liste des Boursiers par Pays</h2>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {countries.map(country => (
              <button
                key={country}
                onClick={() => setFilter(country)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-colors ${
                  filter === country
                    ? 'bg-ama-blue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {country}
              </button>
            ))}
          </div>

          <div className="space-y-12">
            {filteredScholars.map(group => (
              <div key={group.country}>
                <h3 className="text-2xl font-bold text-ama-orange mb-6 border-b-2 border-ama-orange pb-2">{group.country}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                  {group.scholars.map(scholar => (
                    <div key={scholar.name} className="bg-white p-4 rounded-md shadow-sm">
                      <p className="font-bold text-ama-blue">{scholar.name}</p>
                      <p className="text-sm text-gray-600">{scholar.major}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CohortPage;
