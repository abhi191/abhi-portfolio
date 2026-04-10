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
        className={`w-full z-50 transition-all duration-200 ease-in-out bg-white/90 backdrop-blur-md ${
          isScrolled
            ? 'fixed top-0'
            : 'absolute top-0'
        }`}
        style={{ boxShadow: '0px 0px 0px 1px rgba(0,0,0,0.08)' }}
      >
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 flex items-center justify-between py-4">
          <div
            onClick={() => (window.location.hash = '#/')}
            className="flex items-center gap-3 cursor-pointer"
            role="link"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') window.location.hash = '#/'; }}
          >
            <NameLogoIcon className="h-5 w-auto" />
            <span className="font-sans font-semibold text-sm tracking-tight text-brand-dark">ABHINAV GUPTA</span>
          </div>

          <div className="flex items-center space-x-2">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => (window.location.hash = '#/')}
                className={`text-sm font-medium px-3 py-1.5 rounded-md transition-colors ${
                  currentRoute.page === 'projects' || currentRoute.page === 'projectDetail'
                    ? 'text-brand-dark bg-[#f5f5f5]'
                    : 'text-[#4d4d4d] hover:text-brand-dark hover:bg-[#f5f5f5]'
                }`}
              >
                Work
              </button>
              <button
                onClick={() => (window.location.hash = '#/about')}
                className={`text-sm font-medium px-3 py-1.5 rounded-md transition-colors ${
                  currentRoute.page === 'about'
                    ? 'text-brand-dark bg-[#f5f5f5]'
                    : 'text-[#4d4d4d] hover:text-brand-dark hover:bg-[#f5f5f5]'
                }`}
              >
                About
              </button>
              <button
                onClick={() => (window.location.hash = '#/resume')}
                className="ml-2 bg-brand-dark text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-[#2a2a2a] transition-colors"
              >
                Resume
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-[#f5f5f5] transition-colors text-brand-dark"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center transition-opacity duration-200 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-5 right-6 p-2 text-brand-dark hover:bg-[#f5f5f5] rounded-md transition-colors"
          aria-label="Close menu"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
        <nav className="flex flex-col items-center space-y-6 text-center">
          <button
            onClick={() => { window.location.hash = '#/'; closeMenu(); }}
            className={`text-2xl font-semibold tracking-tight transition-colors ${
              currentRoute.page === 'projects' || currentRoute.page === 'projectDetail'
                ? 'text-brand-dark'
                : 'text-[#4d4d4d] hover:text-brand-dark'
            }`}
          >
            Work
          </button>
          <button
            onClick={() => { window.location.hash = '#/about'; closeMenu(); }}
            className={`text-2xl font-semibold tracking-tight transition-colors ${
              currentRoute.page === 'about'
                ? 'text-brand-dark'
                : 'text-[#4d4d4d] hover:text-brand-dark'
            }`}
          >
            About
          </button>
          <button
            onClick={() => { window.location.hash = '#/resume'; closeMenu(); }}
            className="bg-brand-dark text-white text-lg font-medium py-3 px-8 rounded-md hover:bg-[#2a2a2a] transition-colors mt-4"
          >
            Resume
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
