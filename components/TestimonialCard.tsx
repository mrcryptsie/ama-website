import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    country: string;
    text: string;
    image: string;
  };
  isFeatured?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isFeatured }) => {
  const cardClasses = isFeatured
    ? "bg-ama-blue text-white shadow-2xl transform scale-105"
    : "bg-white text-gray-800 shadow-lg";

  return (
    <motion.div
      className={`p-8 rounded-xl ${cardClasses} flex flex-col items-center text-center`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mb-4 border-4 border-ama-orange" />
      <p className="text-lg font-bold mb-1">{testimonial.name}</p>
      <p className="text-sm text-gray-400 mb-4">{testimonial.country}</p>
      <p className="text-base italic">"{testimonial.text}"</p>
    </motion.div>
  );
};

export default TestimonialCard;
