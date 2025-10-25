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

const ContactPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <section className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-center text-ama-blue mb-4">Contactez-nous</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-600">
            Une question ? Une proposition de partenariat ? N'hésitez pas à nous contacter.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-ama-blue mb-6">Envoyez-nous un message</h2>
                <form className="space-y-6 bg-white p-8 shadow-lg rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1">Votre Nom</label>
                            <input type="text" id="name" placeholder="John Doe" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ama-orange" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Votre Email</label>
                            <input type="email" id="email" placeholder="john.doe@email.com" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ama-orange" />
                        </div>
                    </div>
                     <div>
                        <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-1">Sujet</label>
                        <input type="text" id="subject" placeholder="Sujet de votre message" className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ama-orange" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                        <textarea id="message" rows={6} placeholder="Écrivez votre message ici..." className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ama-orange"></textarea>
                    </div>
                    <div className="text-left">
                        <button type="submit" className="bg-ama-orange text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
            
            <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-bold text-ama-blue mb-3">Informations de Contact</h3>
                    <div className="space-y-3 text-gray-700">
                        <p className="flex items-center">
                            <svg className="w-5 h-5 text-ama-orange mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            +229 01 43 51 08 15
                        </p>
                        <p className="flex items-center">
                            <svg className="w-5 h-5 text-ama-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            admissions.ama@titolucien.site
                        </p>
                        <p className="flex items-start">
                           <svg className="w-5 h-5 text-ama-orange mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                           Abomey-Calavi, Zogbadjè
                        </p>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold text-ama-blue mb-3">Suivez-nous</h3>
                    <div className="flex space-x-4">
                        <a href="https://linkedin.com/company/bourseama" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ama-orange"><span className="sr-only">LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a>
                        <a href="#" className="text-gray-500 hover:text-ama-orange"><span className="sr-only">Facebook</span><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg></a>
                        <a href="#" className="text-gray-500 hover:text-ama-orange"><span className="sr-only">Twitter</span><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.624 4.22 3.778 4.664-.468.127-.96.195-1.464.195-.299 0-.586-.029-.865-.083.615 1.956 2.404 3.379 4.529 3.419-1.78 1.396-4.032 2.226-6.484 2.226-.417 0-.83-.024-1.237-.074 2.298 1.474 5.021 2.34 8.001 2.34 9.605 0 14.856-7.85 14.556-14.596.983-.703 1.828-1.583 2.511-2.59z"/></svg></a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

       <section className="py-20 bg-ama-gray">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-ama-blue mb-12">Foire Aux Questions</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <FAQItem q="Où est basée l'Académie ?" a="Notre administration principale est située à Abomey-Calavi, au Bénin, mais nos programmes attirent des talents de toute l'Afrique francophone." />
                <FAQItem q="Quelle est la langue d'instruction ?" a="Tous nos cours et communications se déroulent en français. Une maîtrise de l'anglais technique est un plus." />
                <FAQItem q="L'AMA délivre-t-elle des diplômes reconnus ?" a="Nous délivrons des certifications de haut niveau, incluant une certification de Harvard et une certification de l'AMA et ses partenaires, qui sont très appréciées dans l'industrie." />
                 <FAQItem q="Comment puis-je devenir partenaire de l'AMA ?" a="Nous sommes toujours ouverts à de nouvelles collaborations. Veuillez nous contacter via le formulaire sur cette page avec votre proposition." />
            </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;