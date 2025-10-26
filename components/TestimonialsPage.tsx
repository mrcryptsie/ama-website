import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
    quote: string;
    name: string;
    role: string;
    image: string;
    type: 'Boursier' | 'Mentor' | 'Partenaire';
}

// ... (data remains the same)
const testimonials: Testimonial[] = [
    {
        quote: "La clarté des explications était remarquable. Le formateur a su rendre simples des concepts très complexes et a répondu à toutes nos questions avec patience et expertise. J'ai énormément appris.",
        name: "Aïcha Diallo",
        role: "Boursière, Cohorte 2025",
        image: "https://picsum.photos/seed/aicha-diallo/150/150",
        type: 'Boursier'
    },
    {
        quote: "Le programme AMA est une initiative exceptionnelle. En tant que partenaire, nous avons été impressionnés par le calibre des projets présentés lors du Demo Day. C'est un vivier de talents pour l'écosystème tech africain.",
        name: "Dr. Emmanuel Okoro",
        role: "CEO, Innovatech Africa",
        image: "https://picsum.photos/seed/emmanuel-okoro/150/150",
        type: 'Partenaire'
    },
    {
        quote: "Mentorer ces jeunes esprits brillants est une expérience incroyablement enrichissante. Leur soif d'apprendre et leur détermination sont une véritable source d'inspiration.",
        name: "Inès Tchekpo",
        role: "Développeuse IA & Mentor AMA",
        image: "https://picsum.photos/seed/ines-tchekpo/150/150",
        type: 'Mentor'
    },
    {
        quote: "Grâce à l'AMA, j'ai non seulement acquis des compétences techniques solides, mais j'ai aussi développé un réseau panafricain. C'est une opportunité qui a changé la trajectoire de ma carrière.",
        name: "Fodé Camara",
        role: "Boursier, Cohorte 2025",
        image: "https://picsum.photos/seed/fode-camara/150/150",
        type: 'Boursier'
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

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <motion.div 
        className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
        variants={itemVariants}
        whileHover={{ y: -8, boxShadow: '0px 15px 25px rgba(0,0,0,0.1)' }}
        transition={{ duration: 0.3 }}
    >
        <div className="p-8 border-l-4 border-ama-orange bg-gray-50 flex-grow">
            <p className="text-gray-700 italic text-lg">"{testimonial.quote}"</p>
        </div>
        <div className="p-6 bg-white flex items-center space-x-4">
            <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover border-2 border-ama-blue" />
            <div>
                <p className="font-bold text-ama-blue text-xl">{testimonial.name}</p>
                <p className="font-semibold text-gray-600">{testimonial.role}</p>
            </div>
        </div>
    </motion.div>
);

const TestimonialsPage: React.FC = () => {
    return (
        <motion.div initial="offscreen" animate="onscreen" variants={sectionVariants}>
            <motion.section className="py-20 bg-ama-blue text-white" variants={itemVariants}>
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">Paroles de notre Communauté</h1>
                    <p className="text-lg max-w-3xl mx-auto text-gray-200">
                        Découvrez ce que nos boursiers, mentors et partenaires pensent de l'expérience AMA.
                    </p>
                </div>
            </motion.section>

            <motion.section 
                className="py-20 bg-ama-gray"
                variants={sectionVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default TestimonialsPage;
