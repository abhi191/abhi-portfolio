
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';

const App: React.FC = () => {
  // FIX: Explicitly type the state to match the expected props of the Header component.
  const [currentPage, setCurrentPage] = React.useState<'projects' | 'about'>('projects');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'projects':
      default:
        return (
          <>
            <Hero />
            <FeaturedSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;