
import React from 'react';
import { Page } from '../types';

interface FooterProps {
    setCurrentPage: (page: Page) => void;
}

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com/company/bourseama', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg> },
  { name: 'Facebook', url: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg> },
  { name: 'Twitter', url: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.299 1.624 4.22 3.778 4.664-.468.127-.96.195-1.464.195-.299 0-.586-.029-.865-.083.615 1.956 2.404 3.379 4.529 3.419-1.78 1.396-4.032 2.226-6.484 2.226-.417 0-.83-.024-1.237-.074 2.298 1.474 5.021 2.34 8.001 2.34 9.605 0 14.856-7.85 14.556-14.596.983-.703 1.828-1.583 2.511-2.59z"/></svg> },
];

const FooterLink: React.FC<{ page: Page, setCurrentPage: (page: Page) => void, children: React.ReactNode }> = ({ page, setCurrentPage, children }) => (
    <li><a href={`#${page}`} onClick={(e) => {e.preventDefault(); setCurrentPage(page)}} className="hover:text-ama-orange transition-colors duration-300 text-sm text-gray-300">{children}</a></li>
);

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-ama-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-display font-black text-xl mb-4">AMA</h3>
            <p className="text-gray-300 text-sm mb-4">Former l'excellence africaine en Data Science et IA.</p>
             <div className="flex space-x-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-ama-orange transition-colors duration-300">
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Académie</h3>
            <ul className="space-y-2">
              <FooterLink page="about" setCurrentPage={setCurrentPage}>À propos</FooterLink>
              <FooterLink page="cohort" setCurrentPage={setCurrentPage}>Cohorte 2025</FooterLink>
              <FooterLink page="news" setCurrentPage={setCurrentPage}>Actualités</FooterLink>
              <FooterLink page="contact" setCurrentPage={setCurrentPage}>Contact</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Formations</h3>
            <ul className="space-y-2">
              <FooterLink page="programs" setCurrentPage={setCurrentPage}>Programmes</FooterLink>
              <FooterLink page="admission" setCurrentPage={setCurrentPage}>Admission</FooterLink>
              <FooterLink page="scholarships" setCurrentPage={setCurrentPage}>Bourses</FooterLink>
              <FooterLink page="testimonials" setCurrentPage={setCurrentPage}>Témoignages</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">S'impliquer</h3>
            <ul className="space-y-2">
              <FooterLink page="support" setCurrentPage={setCurrentPage}>Nous Soutenir</FooterLink>
              <FooterLink page="join" setCurrentPage={setCurrentPage}>Devenir Mentor</FooterLink>
              <FooterLink page="alumni" setCurrentPage={setCurrentPage}>Alumni</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Légal</h3>
            <ul className="space-y-2">
              <FooterLink page="privacy" setCurrentPage={setCurrentPage}>Politique de Confidentialité</FooterLink>
              <FooterLink page="terms" setCurrentPage={setCurrentPage}>Conditions d'Utilisation</FooterLink>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Académie des Mathématiques Appliquées. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
