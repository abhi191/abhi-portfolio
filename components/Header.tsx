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

  const navLinkStyle = (active: boolean) => ({
    color: active ? 'var(--fg)' : 'var(--muted)',
    background: active ? 'var(--surface)' : 'transparent',
  });

  return (
    <>
      <div style={{ height: headerHeight }} />
      <header
        ref={headerRef}
        className={`w-full z-50 transition-all duration-200 ease-in-out backdrop-blur-md ${
          isScrolled ? 'fixed top-0' : 'absolute top-0'
        }`}
        style={{
          background: 'rgba(255,255,255,0.90)',
          boxShadow: 'var(--shadow-border)',
        }}
      >
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 flex items-center justify-between py-4">
          <div
            onClick={() => (window.location.hash = '#/')}
            className="flex items-center gap-3 cursor-pointer"
            role="link"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') window.location.hash = '#/'; }}
          >
            <NameLogoIcon className="h-5 w-auto" style={{ color: 'var(--fg)' }} />
            <span className="font-sans font-semibold text-sm tracking-tight" style={{ color: 'var(--fg)' }}>
              ABHINAV GUPTA
            </span>
          </div>

          <div className="flex items-center space-x-1">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => (window.location.hash = '#/')}
                className="text-sm font-medium px-3 py-1.5 rounded-md transition-colors duration-150"
                style={navLinkStyle(currentRoute.page === 'projects' || currentRoute.page === 'projectDetail')}
                onMouseEnter={e => { if (currentRoute.page !== 'projects' && currentRoute.page !== 'projectDetail') { (e.currentTarget as HTMLElement).style.color = 'var(--fg)'; (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; } }}
                onMouseLeave={e => { if (currentRoute.page !== 'projects' && currentRoute.page !== 'projectDetail') { (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; } }}
              >
                Work
              </button>
              <button
                onClick={() => (window.location.hash = '#/about')}
                className="text-sm font-medium px-3 py-1.5 rounded-md transition-colors duration-150"
                style={navLinkStyle(currentRoute.page === 'about')}
                onMouseEnter={e => { if (currentRoute.page !== 'about') { (e.currentTarget as HTMLElement).style.color = 'var(--fg)'; (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; } }}
                onMouseLeave={e => { if (currentRoute.page !== 'about') { (e.currentTarget as HTMLElement).style.color = 'var(--muted)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; } }}
              >
                About
              </button>

              <button
                onClick={() => (window.location.hash = '#/resume')}
                className="ml-1 text-sm font-medium py-2 px-4 rounded-md transition-colors duration-150"
                style={{ background: 'var(--fg)', color: 'var(--bg)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
              >
                Resume
              </button>
            </nav>

            {/* Mobile: hamburger */}
            <div className="md:hidden flex items-center gap-1">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md transition-colors"
                style={{ color: 'var(--fg)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <MenuIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-opacity duration-200 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ background: 'var(--bg)' }}
      >
        <button
          onClick={closeMenu}
          className="absolute top-5 right-6 p-2 rounded-md transition-colors"
          style={{ color: 'var(--fg)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--surface)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          aria-label="Close menu"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
        <nav className="flex flex-col items-center space-y-6 text-center">
          <button
            onClick={() => { window.location.hash = '#/'; closeMenu(); }}
            className="text-2xl font-semibold tracking-tight transition-colors"
            style={{ color: currentRoute.page === 'projects' || currentRoute.page === 'projectDetail' ? 'var(--fg)' : 'var(--muted)' }}
          >
            Work
          </button>
          <button
            onClick={() => { window.location.hash = '#/about'; closeMenu(); }}
            className="text-2xl font-semibold tracking-tight transition-colors"
            style={{ color: currentRoute.page === 'about' ? 'var(--fg)' : 'var(--muted)' }}
          >
            About
          </button>
          <button
            onClick={() => { window.location.hash = '#/resume'; closeMenu(); }}
            className="text-lg font-medium py-3 px-8 rounded-md transition-colors mt-4"
            style={{ background: 'var(--fg)', color: 'var(--bg)' }}
          >
            Resume
          </button>
        </nav>
      </div>
    </>
  );
};

export default Header;
