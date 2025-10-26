import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ page, setCurrentPage, children, onClick, className = '' }) => {
  return (
    <motion.a
      href={`#${page}`}
      onClick={(e) => {
        e.preventDefault();
        setCurrentPage(page);
        if (onClick) onClick();
      }}
      className={`block text-sm font-bold transition-colors duration-300 ${className}`}
      whileHover={{ color: '#FF7A00' }}
    >
      {children}
    </motion.a>
  );
};

const Dropdown: React.FC<{
    title: string;
    children: React.ReactNode;
    isMobile?: boolean;
    // Ajout d'une prop pour les variants du menu mobile
    variants?: any; 
}> = ({ title, children, isMobile, variants }) => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownVariants = {
      hidden: { opacity: 0, y: -10 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
      exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
    };
    
    if (isMobile) {
        return (
            // Correction : Le conteneur doit être un motion.div pour le stagger
            <motion.div variants={variants}> 
                <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left px-4 py-2 rounded-md text-sm font-bold text-white flex justify-between items-center">
                    <span>{title}</span>
                    {/* Correction : suppression de la classe 'transform' redondante */}
                    <motion.svg animate={{ rotate: isOpen ? 180 : 0 }} className={`w-4 h-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></motion.svg>
                </button>
                <AnimatePresence>
                {isOpen && (
                    <motion.div 
                      className="pl-4 border-l-2 border-ama-orange ml-4"
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={{
                        hidden: { opacity: 0, height: 0 },
                        visible: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.05 } }, // Ajout d'un stagger pour les sous-liens
                        exit: { opacity: 0, height: 0 }
                      }}
                    >
                      {/* On s'assure que les children reçoivent les variants pour le stagger */}
                      {React.Children.map(children, child =>
                        React.isValidElement(child)
                          ? React.cloneElement(child as React.ReactElement, {
                              variants: {
                                hidden: { opacity: 0, x: -10 },
                                visible: { opacity: 1, x: 0 },
                                exit: { opacity: 0, x: -10 }
                              }
                            })
                          : child
                      )}
                    </motion.div>
                )}
                </AnimatePresence>
            </motion.div>
        )
    }

    return (
        <div className="relative" onMouseLeave={() => setIsOpen(false)}>
            <button 
                onMouseEnter={() => setIsOpen(true)}
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 rounded-md text-sm font-bold text-white hover:text-ama-orange transition-colors duration-300 flex items-center"
            >
                {title}
                <motion.svg animate={{ rotate: isOpen ? 180 : 0 }} className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></motion.svg>
            </button>
            <AnimatePresence>
            {isOpen && (
                 <motion.div 
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 py-1"
                 >
                    {children}
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    );
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const closeMobileMenu = () => setIsMenuOpen(false);

  // Correction : Variante pour l'animation stagger du menu mobile
  const mobileItemVariant = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  const renderNavLinks = (isMobile = false) => {
    const linkClass = isMobile 
        ? 'text-white hover:text-ama-orange px-4 py-2 rounded-md' // Classe pour sous-lien mobile
        : 'text-gray-700 hover:bg-gray-100 hover:text-ama-blue px-3 py-2 rounded-md'; // Classe pour sous-lien desktop
    const activeLinkClass = 'text-ama-orange'; // Classe active uniforme
    
    const simpleNavLink = (page: Page, label: string) => (
        <motion.a href={`#${page}`} onClick={(e) => { e.preventDefault(); setCurrentPage(page); closeMobileMenu(); }} 
            // Correction : Ajout de la variante pour l'animation stagger
            variants={isMobile ? mobileItemVariant : undefined}
            className={`block text-sm font-bold transition-colors duration-300 ${isMobile ? 'px-4 py-2 rounded-md' : ''} ${currentPage === page ? activeLinkClass : (isMobile ? 'text-white' : 'text-white')}`}
            whileHover={{color: '#FF7A00'}}
            >
            {label}
        </motion.a>
    );

    // Fonction pour cloner NavLink avec les bons variants (pour les sous-menus)
    const dropdownNavLink = (page: Page, label: string, childVariants: any) => (
      <motion.div variants={childVariants}>
        <NavLink 
          page={page} 
          setCurrentPage={setCurrentPage} 
          onClick={closeMobileMenu} 
          // Correction : Utilisation de activeLinkClass au lieu de text-ama-blue
          className={`${linkClass} ${currentPage === page ? activeLinkClass : ''}`}
        >
          {label}
        </NavLink>
      </motion.div>
    );
    
    // Les variants pour les enfants du dropdown mobile (nécessaire car Dropdown gère son propre stagger)
    const mobileDropdownChildVariants = {
      hidden: { opacity: 0, x: -10 },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -10 }
    };
    const childVariants = isMobile ? mobileDropdownChildVariants : undefined;


    return (
        <>
            {simpleNavLink('home', 'Accueil')}
            <Dropdown title="L'Académie" isMobile={isMobile} variants={isMobile ? mobileItemVariant : undefined}>
                {dropdownNavLink('about', 'À propos', childVariants)}
                {dropdownNavLink('cohort', 'Cohorte 2025', childVariants)}
                {dropdownNavLink('testimonials', 'Témoignages', childVariants)}
                {dropdownNavLink('news', 'Actualités', childVariants)}
            </Dropdown>
            <Dropdown title="Candidature" isMobile={isMobile} variants={isMobile ? mobileItemVariant : undefined}>
                {dropdownNavLink('admission', 'Admission', childVariants)}
                {dropdownNavLink('scholarships', 'Bourses', childVariants)}
            </Dropdown>
            <Dropdown title="S'impliquer" isMobile={isMobile} variants={isMobile ? mobileItemVariant : undefined}>
                {dropdownNavLink('support', 'Nous soutenir', childVariants)}
                {dropdownNavLink('join', 'Devenir Mentor', childVariants)}
                {dropdownNavLink('alumni', 'Alumni', childVariants)}
            </Dropdown>
            {simpleNavLink('contact', 'Contact')}
        </>
    )
  }

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0, transition: { when: "afterChildren" } },
    // Correction : Ajout du staggerChildren pour animer les liens
    open: { opacity: 1, height: "auto", transition: { staggerChildren: 0.05, delayChildren: 0.1, when: "beforeChildren" } }
  };

  return (
    <header className="bg-ama-blue sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
           <motion.a href="#home" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="text-white font-display font-black text-2xl tracking-wider" whileHover={{scale: 1.05}}>
             AMA
           </motion.a>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          {renderNavLinks(false)}
        </nav>

        <div className="hidden md:block">
          <motion.button 
            onClick={() => setCurrentPage('admission')} 
            className="bg-ama-orange text-white font-bold py-2 px-6 rounded-full"
            whileHover={{ scale: 1.05, backgroundColor: "#E66F00" }} 
            whileTap={{ scale: 0.95 }}
          >
            Postuler
          </motion.button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-ama-blue"
          initial="closed"
          animate="open"
          exit="closed"
          variants={mobileMenuVariants}
        >
          <nav className="flex flex-col space-y-1 pb-4">
            {renderNavLinks(true)}
            {/* Correction : Remplacement de l'animation en ligne par le variant */}
            <motion.div className="mt-4 px-4" variants={mobileItemVariant}>
                <button 
                  onClick={() => { setCurrentPage('admission'); setIsMenuOpen(false); }} 
                  className="w-full bg-ama-orange text-white font-bold py-2 px-6 rounded-full"
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                >
                  Postuler
                </button>
            </motion.div>
          </nav>
        </motion.div>
      )}
      </AnimatePresence>
    </header>
  );
};

export default Header;