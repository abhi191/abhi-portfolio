
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
        <Hero />
        <FeaturedSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
