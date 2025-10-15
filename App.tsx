import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import PasswordPrompt from './components/PasswordPrompt';
import { projects } from './data/projects';
import type { Project } from './data/types';

export interface Route {
  page: 'projects' | 'about' | 'projectDetail';
  slug?: string;
}

// Simple hash parser to determine the current page from the URL
const parseRoute = (): Route => {
  const hash = window.location.hash.replace(/^#\/?|\/$/g, '').split('/');
  
  if (hash[0] === 'about') {
    return { page: 'about' };
  }
  
  if (hash[0] === 'projects' && hash[1]) {
    return { page: 'projectDetail', slug: hash[1] };
  }
  
  return { page: 'projects' };
};

const App: React.FC = () => {
  const [route, setRoute] = React.useState(parseRoute());
  // State for unlocked projects is now reset on every page load.
  const [unlockedProjects, setUnlockedProjects] = React.useState<Record<string, boolean>>({});
  const [projectToUnlock, setProjectToUnlock] = React.useState<Project | null>(null);

  // Listen for changes in the URL hash to navigate between pages
  React.useEffect(() => {
    const handleHashChange = () => {
      setRoute(parseRoute());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handlePasswordSubmit = (password: string): boolean => {
    if (!projectToUnlock) return false;

    if (password === projectToUnlock.password) {
      const newUnlocked = { ...unlockedProjects, [projectToUnlock.slug]: true };
      setUnlockedProjects(newUnlocked);
      // Removed sessionStorage logic to ensure password is required every time.
      setProjectToUnlock(null); // Close prompt, which triggers a re-render to show the page
      return true;
    }
    return false;
  };

  const handleClosePrompt = () => {
    setProjectToUnlock(null);
    // If a user closes the prompt on a project page, navigate them back home
    // so they aren't left on a blank screen.
    if(route.page === 'projectDetail') {
        window.location.hash = '#/';
    }
  };
  
  const renderPage = () => {
    switch (route.page) {
      case 'about':
        return <AboutPage />;
      
      case 'projectDetail':
        const project = projects.find(p => p.slug === route.slug);
        
        if (!project) {
          // Fallback to projects list if project slug is invalid
          return (
            <>
              <Hero />
              <FeaturedSection />
            </>
          );
        }

        // Check if the project is password-protected and if it has been unlocked
        const isUnlocked = unlockedProjects[project.slug];
        if (project.password && !isUnlocked) {
          // If the password prompt isn't already open for this specific project, open it.
          // This logic prevents infinite loops.
          if (!projectToUnlock || projectToUnlock.id !== project.id) {
            // Deferring state update to prevent React error during render
            setTimeout(() => setProjectToUnlock(project), 0);
          }
          // Render nothing while the password prompt is being displayed
          return null;
        }

        return <ProjectPage project={project} />;

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
      <Header currentRoute={route} />
      <main className="flex-grow container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        {renderPage()}
      </main>
      <Footer />

      {/* Render password prompt when a project needs to be unlocked */}
      {projectToUnlock && (
        <PasswordPrompt
          onSubmit={handlePasswordSubmit}
          onClose={handleClosePrompt}
        />
      )}
    </div>
  );
};

export default App;