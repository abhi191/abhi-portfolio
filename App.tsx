import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import PasswordPrompt from './components/PasswordPrompt';
import { projects } from './data/projects';

export type PageState = {
  page: 'projects' | 'about' | 'projectDetail';
  projectId?: number;
};

const App: React.FC = () => {
  const [activePage, setActivePage] = React.useState<PageState>({ page: 'projects' });
  const [showPasswordPromptFor, setShowPasswordPromptFor] = React.useState<number | null>(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const handlePageChange = (pageState: PageState) => {
    setActivePage(pageState);
  };

  const handleSelectProject = (projectId: number) => {
    const project = projects.find(p => p.id === projectId);
    // If project has a password, show prompt. Otherwise, navigate directly.
    if (project?.password) {
      setShowPasswordPromptFor(projectId);
    } else {
      setActivePage({ page: 'projectDetail', projectId });
    }
  };

  const handlePasswordSubmit = (password: string): boolean => {
    if (showPasswordPromptFor === null) return false;

    const project = projects.find(p => p.id === showPasswordPromptFor);
    const correctPassword = project?.password;

    if (password === correctPassword) {
      setActivePage({ page: 'projectDetail', projectId: showPasswordPromptFor });
      setShowPasswordPromptFor(null);
      return true;
    }
    return false;
  };

  const handleClosePrompt = () => {
    setShowPasswordPromptFor(null);
  };

  const renderPage = () => {
    switch (activePage.page) {
      case 'about':
        return <AboutPage />;
      case 'projectDetail':
        const project = projects.find(p => p.id === activePage.projectId);
        // We can only reach this state if the password was correct or not required.
        if (project) {
          return <ProjectPage project={project} />;
        }
        // Fallback to projects list if project not found
        return (
           <>
            <Hero />
            <FeaturedSection onSelectProject={handleSelectProject}/>
          </>
        )
      case 'projects':
      default:
        return (
          <>
            <Hero />
            <FeaturedSection onSelectProject={handleSelectProject} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header setActivePage={handlePageChange} activePage={activePage} />
      <main className="flex-grow container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        {renderPage()}
      </main>
      <Footer />

      {/* Render password prompt when needed */}
      {showPasswordPromptFor !== null && (
        <PasswordPrompt
          onSubmit={handlePasswordSubmit}
          onClose={handleClosePrompt}
        />
      )}
    </div>
  );
};

export default App;