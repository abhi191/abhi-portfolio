import React from 'react';
import { MenuIcon, CloseIcon, NameLogoIcon } from './icons';
import { Route } from '../App';

interface HeaderProps {
  currentRoute: Route;
}

const Header: React.FC<HeaderProps> = ({ currentRoute }) => {
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
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

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
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 flex items-center justify-between py-6">
          <div
            onClick={() => (window.location.hash = '#/')}
            className="flex items-center gap-3 text-xl font-medium tracking-tight cursor-pointer"
            role="link"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') window.location.hash = '#/'; }}
          >
            <NameLogoIcon className="h-6 w-auto" />
            <span className="font-sans font-bold">ABHINAV GUPTA</span>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation & Button */}
            <nav className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => (window.location.hash = '#/')}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${currentRoute.page === 'projects' || currentRoute.page === 'projectDetail' ? 'bg-brand-card text-brand-dark' : 'text-brand-dark/80 hover:bg-brand-card hover:text-brand-dark'}`}
              >
                Work
              </button>
              <button
                onClick={() => (window.location.hash = '#/about')}
                className={`text-sm font-medium px-3 py-2 rounded-md transition-colors ${currentRoute.page === 'about' ? 'bg-brand-card text-brand-dark' : 'text-brand-dark/80 hover:bg-brand-card hover:text-brand-dark'}`}
              >
                About me
              </button>
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
          onClick={closeMenu}
          className="absolute top-6 right-6 p-3"
          aria-label="Close menu"
        >
          <CloseIcon className="h-7 w-7" />
        </button>
        <nav className="flex flex-col items-center space-y-8 text-center">
          <button
            onClick={() => { window.location.hash = '#/'; closeMenu(); }}
            className={`text-2xl font-medium transition-colors ${currentRoute.page === 'projects' || currentRoute.page === 'projectDetail' ? 'text-brand-accent' : 'text-brand-dark hover:text-brand-accent'}`}
          >
            Work
          </button>
          <button
            onClick={() => { window.location.hash = '#/about'; closeMenu(); }}
            className={`text-2xl font-medium transition-colors ${currentRoute.page === 'about' ? 'text-brand-accent' : 'text-brand-dark hover:text-brand-accent'}`}
          >
            About me
          </button>
          <button className="bg-brand-dark text-white text-lg font-semibold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity mt-8">
            Resume
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;