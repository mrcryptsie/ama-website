
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
}> = ({ title, children, isMobile }) => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownVariants = {
      hidden: { opacity: 0, y: -10 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
      exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
    };
    
    if (isMobile) {
        return (
             <div>
                <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left px-4 py-2 rounded-md text-sm font-bold text-white flex justify-between items-center">
                    <span>{title}</span>
                     <motion.svg animate={{ rotate: isOpen ? 180 : 0 }} className={`w-4 h-4 transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></motion.svg>
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
                      visible: { opacity: 1, height: 'auto' },
                      exit: { opacity: 0, height: 0 }
                    }}
                  >
                    {children}
                  </motion.div>
                )}
                </AnimatePresence>
            </div>
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

  const renderNavLinks = (isMobile = false) => {
    const linkClass = isMobile 
        ? 'text-white hover:text-ama-orange px-4 py-2 rounded-md'
        : 'text-gray-700 hover:bg-gray-100 hover:text-ama-blue px-3 py-2 rounded-md';
    const activeLinkClass = isMobile ? 'text-ama-orange' : 'text-ama-orange';
    
    const simpleNavLink = (page: Page, label: string) => (
        <motion.a href={`#${page}`} onClick={(e) => { e.preventDefault(); setCurrentPage(page); closeMobileMenu(); }} 
            className={`block text-sm font-bold transition-colors duration-300 ${isMobile ? 'px-4 py-2 rounded-md' : ''} ${currentPage === page ? activeLinkClass : (isMobile ? 'text-white' : 'text-white')}`}
            whileHover={{color: '#FF7A00'}}
            >
            {label}
        </motion.a>
    );

    return (
        <>
            {simpleNavLink('home', 'Accueil')}
            <Dropdown title="L'Académie" isMobile={isMobile}>
                <NavLink page="about" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'about' ? 'text-ama-blue' : ''}`}>À propos</NavLink>
                <NavLink page="cohort" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'cohort' ? 'text-ama-blue' : ''}`}>Cohorte 2025</NavLink>
                <NavLink page="testimonials" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'testimonials' ? 'text-ama-blue' : ''}`}>Témoignages</NavLink>
                <NavLink page="news" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'news' ? 'text-ama-blue' : ''}`}>Actualités</NavLink>
            </Dropdown>
            {simpleNavLink('programs', 'Programme')}
            <Dropdown title="Candidature" isMobile={isMobile}>
                <NavLink page="admission" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'admission' ? 'text-ama-blue' : ''}`}>Admission</NavLink>
                <NavLink page="scholarships" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'scholarships' ? 'text-ama-blue' : ''}`}>Bourses</NavLink>
            </Dropdown>
            <Dropdown title="S'impliquer" isMobile={isMobile}>
                <NavLink page="support" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'support' ? 'text-ama-blue' : ''}`}>Nous soutenir</NavLink>
                <NavLink page="join" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'join' ? 'text-ama-blue' : ''}`}>Devenir Mentor</NavLink>
                <NavLink page="alumni" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'alumni' ? 'text-ama-blue' : ''}`}>Alumni</NavLink>
            </Dropdown>
            {simpleNavLink('contact', 'Contact')}
        </>
    )
  }

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto", transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
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
            <motion.div className="mt-4 px-4" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.3}}>
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
