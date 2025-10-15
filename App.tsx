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
  const [unlockedProjects, setUnlockedProjects] = React.useState<Record<string, boolean>>({});
  const [projectToUnlock, setProjectToUnlock] = React.useState<Project | null>(null);

  // Listen for changes in the URL hash to navigate between pages
  React.useEffect(() => {
    const handleHashChange = () => {
      const newRoute = parseRoute();
      // If navigating away from a project detail page, ensure the prompt state is cleared.
      // This prevents the prompt from lingering over other pages and fixes the bug.
      if (newRoute.page !== 'projectDetail') {
        setProjectToUnlock(null);
      }
      setRoute(newRoute);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Effect to manage when to show the password prompt based on the current route.
  React.useEffect(() => {
    if (route.page === 'projectDetail') {
      const project = projects.find(p => p.slug === route.slug);
      if (project && project.password && !unlockedProjects[project.slug]) {
        setProjectToUnlock(project);
      }
    }
  }, [route, unlockedProjects]);


  const handlePasswordSubmit = (password: string): boolean => {
    if (!projectToUnlock) return false;

    if (password === projectToUnlock.password) {
      const newUnlocked = { ...unlockedProjects, [projectToUnlock.slug]: true };
      setUnlockedProjects(newUnlocked);
      setProjectToUnlock(null); // Close prompt on success
      return true;
    }
    return false;
  };
  
  // Simplified handleClosePrompt to just navigate.
  // The state cleanup is handled by the hash change listener.
  const handleClosePrompt = () => {
    window.location.hash = '#/';
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
        // If password required and not unlocked, render nothing.
        // The useEffect handles setting `projectToUnlock`, which displays the prompt overlay.
        if (project.password && !isUnlocked) {
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
