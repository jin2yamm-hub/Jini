import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CounterSection } from './components/CounterSection';
import { ResumeSection } from './components/ResumeSection';
import { ProjectGrid } from './components/ProjectGrid';
import { HireMeSection } from './components/HireMeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project } from './types';
import { PROJECTS } from './data/portfolioData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // URL hash routing for direct project modal deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('project=')) {
        const projectId = hash.replace('project=', '');
        const matched = PROJECTS.find((p) => p.id === projectId);
        if (matched) {
          setSelectedProject(matched);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when modal opens/closes
  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    window.location.hash = `project=${project.id}`;
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    history.replaceState(null, '', window.location.pathname + window.location.search);
  };

  // Scroll Spy: Synchronize active section with scroll position
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'resume', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
      setActiveSection('hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-canvas text-ink font-sans selection:bg-slate selection:text-white relative">
      
      {/* Top Fixed Header GNB */}
      <Header onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onExploreAbout={() => scrollToSection('about')}
        />

        {/* 2. About Me Section */}
        <AboutSection onExploreResume={() => scrollToSection('resume')} />

        {/* 3. Counter Metric Stats Section */}
        <CounterSection />

        {/* 4. Resume Section (Timeline & Skill Progress Bars) */}
        <ResumeSection />

        {/* 5. Projects Section */}
        <ProjectGrid onSelectProject={handleOpenProject} />

        {/* 6. Hire Me CTA Banner */}
        <HireMeSection onContactClick={() => scrollToSection('contact')} />

        {/* 7. Contact Section */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={handleCloseProject}
        onSelectProject={handleOpenProject}
      />

      {/* Global Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

    </div>
  );
}

export default App;
