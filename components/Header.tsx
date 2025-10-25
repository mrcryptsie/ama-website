
import React, { useState, useRef, useEffect } from 'react';
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
    <a
      href={`#${page}`}
      onClick={(e) => {
        e.preventDefault();
        setCurrentPage(page);
        if (onClick) onClick();
      }}
      className={`block text-sm font-bold transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  );
};

const Dropdown: React.FC<{
    title: string;
    children: React.ReactNode;
    isMobile?: boolean;
}> = ({ title, children, isMobile }) => {
    const [isOpen, setIsOpen] = useState(false);
    const node = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: MouseEvent) => {
        if (node.current?.contains(e.target as Node)) {
            return;
        }
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);
    
    if (isMobile) {
        return (
             <div>
                <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left px-4 py-2 rounded-md text-sm font-bold text-white flex justify-between items-center">
                    <span>{title}</span>
                     <svg className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {isOpen && <div className="pl-4 border-l-2 border-ama-orange ml-4">{children}</div>}
            </div>
        )
    }

    return (
        <div className="relative" ref={node}>
            <button 
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
                onClick={() => setIsOpen(!isOpen)}
                className="px-4 py-2 rounded-md text-sm font-bold text-white hover:text-ama-orange transition-colors duration-300 flex items-center"
            >
                {title}
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
            {isOpen && (
                 <div 
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                    className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 py-1"
                 >
                    {children}
                </div>
            )}
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
    const activeLinkClass = isMobile ? 'text-ama-orange' : '';
    const simpleNavLink = (page: Page, label: string) => (
        <a href={`#${page}`} onClick={(e) => { e.preventDefault(); setCurrentPage(page); closeMobileMenu(); }} 
            className={`block text-sm font-bold transition-colors duration-300 ${isMobile ? 'px-4 py-2 rounded-md' : ''} ${currentPage === page ? (isMobile ? 'text-ama-orange' : 'text-ama-orange') : (isMobile ? 'text-white hover:text-ama-orange' : 'text-white hover:text-ama-orange')}`}>
            {label}
        </a>
    );

    return (
        <>
            {simpleNavLink('home', 'Accueil')}
            <Dropdown title="L'Académie" isMobile={isMobile}>
                <NavLink page="about" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'about' ? activeLinkClass : ''}`}>À propos</NavLink>
                <NavLink page="cohort" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'cohort' ? activeLinkClass : ''}`}>Cohorte 2025</NavLink>
                <NavLink page="testimonials" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'testimonials' ? activeLinkClass : ''}`}>Témoignages</NavLink>
                <NavLink page="news" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'news' ? activeLinkClass : ''}`}>Actualités</NavLink>
            </Dropdown>
            <Dropdown title="Formations" isMobile={isMobile}>
                <NavLink page="programs" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'programs' ? activeLinkClass : ''}`}>Programmes</NavLink>
                <NavLink page="admission" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'admission' ? activeLinkClass : ''}`}>Admission</NavLink>
                <NavLink page="scholarships" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'scholarships' ? activeLinkClass : ''}`}>Bourses</NavLink>
            </Dropdown>
            <Dropdown title="S'impliquer" isMobile={isMobile}>
                <NavLink page="support" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'support' ? activeLinkClass : ''}`}>Nous soutenir</NavLink>
                <NavLink page="join" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'join' ? activeLinkClass : ''}`}>Devenir Mentor</NavLink>
                <NavLink page="alumni" setCurrentPage={setCurrentPage} onClick={closeMobileMenu} className={`${linkClass} ${currentPage === 'alumni' ? activeLinkClass : ''}`}>Alumni</NavLink>
            </Dropdown>
            {simpleNavLink('contact', 'Contact')}
        </>
    )
  }

  return (
    <header className="bg-ama-blue sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
           <a href="#home" onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} className="text-white font-display font-black text-2xl tracking-wider">
            AMA
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-1">
          {renderNavLinks(false)}
        </nav>

        <div className="hidden md:block">
          <button 
            onClick={() => setCurrentPage('admission')} 
            className="bg-ama-orange text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105"
          >
            Postuler
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-ama-blue pb-4">
          <nav className="flex flex-col space-y-1">
            {renderNavLinks(true)}
            <div className="mt-4 px-4">
                <button 
                  onClick={() => { setCurrentPage('admission'); setIsMenuOpen(false); }} 
                  className="w-full bg-ama-orange text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105"
                >
                  Postuler
                </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
