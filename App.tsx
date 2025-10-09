import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'home':
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
      <Header setCurrentPage={setCurrentPage} />
      <main className="flex-grow container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;