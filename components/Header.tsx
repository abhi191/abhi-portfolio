import React from 'react';
import { MenuIcon, CloseIcon } from './icons';

interface HeaderProps {
  setCurrentPage: (page: 'home' | 'about') => void;
}

const Header: React.FC<HeaderProps> = ({ setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const headerRef = React.useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = React.useState(0);

  React.useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    // Disable body scroll when the mobile menu is open
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const handleNavClick = (page: 'home' | 'about') => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to top on page change
  };


  return (
    <>
      <div style={{ height: headerHeight }} />
      <header
        ref={headerRef}
        className={`w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'fixed top-0 bg-brand-background/80 backdrop-blur-lg shadow-sm'
            : 'absolute top-0 bg-brand-background'
        }`}
      >
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 flex items-center justify-between py-5">
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="text-xl font-medium tracking-tighter">
            <span className="font-sans font-bold">ABHINAV GUPTA</span>
          </a>
          
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation & Button */}
            <nav className="hidden md:flex items-center space-x-4">
              <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} className="text-sm font-medium text-brand-dark/80 px-3 py-2 rounded-md hover:bg-brand-card hover:text-brand-dark transition-colors">
                About me
              </a>
              <button className="bg-brand-dark text-white text-sm font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                Resume
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-3 rounded-md hover:bg-brand-card transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-background flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-3"
          aria-label="Close menu"
        >
          <CloseIcon className="h-7 w-7" />
        </button>
        <nav className="flex flex-col items-center space-y-8 text-center">
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} className="text-2xl font-medium text-brand-dark hover:text-brand-accent transition-colors">About me</a>
          <button className="bg-brand-dark text-white text-lg font-semibold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity mt-8">
            Resume
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;