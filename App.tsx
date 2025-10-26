import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProgramsPage from './components/ProgramsPage';
import AdmissionPage from './components/AdmissionPage';
import ScholarshipsPage from './components/ScholarshipsPage';
import AlumniPage from './components/AlumniPage';
import NewsPage from './components/NewsPage';
import ContactPage from './components/ContactPage';
import CohortPage from './components/CohortPage';
import TestimonialsPage from './components/TestimonialsPage';
import SupportPage from './components/SupportPage';
import JoinUsPage from './components/JoinUsPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'programs':
        return <ProgramsPage />;
      case 'admission':
        return <AdmissionPage />;
      case 'scholarships':
        return <ScholarshipsPage />;
      case 'alumni':
        return <AlumniPage />;
      case 'news':
        return <NewsPage />;
      case 'contact':
        return <ContactPage />;
      case 'cohort':
        return <CohortPage />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'support':
        return <SupportPage />;
      case 'join':
        return <JoinUsPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;
