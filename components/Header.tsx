import React, { useState, useEffect, useRef } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Set the placeholder height to prevent content jump
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Set state based on scroll position (with a small threshold)
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Placeholder div to prevent page content from jumping when header becomes fixed. */}
      <div style={{ height: headerHeight }} />
      <header
        ref={headerRef}
        className={`w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'fixed top-0 bg-brand-background/80 backdrop-blur-md shadow-sm'
            : 'absolute top-0 bg-brand-background border-b border-gray-300/50'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 xl:px-32 flex items-center justify-between py-6">
          <div className="text-xl font-medium tracking-tighter">
            <span className="font-sans font-bold">ABHINAV GUPTA</span>
          </div>
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-brand-dark/80">
            <a href="#" className="hover:text-brand-dark transition-colors">Research</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Case Studies</a>
            <a href="#" className="flex items-center hover:text-brand-dark transition-colors">
              About me
            </a>
          </nav>
          <button className="bg-brand-dark text-white text-sm font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
            Resume
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
