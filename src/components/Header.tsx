import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home', code: '00' },
    { id: 'about', label: 'About', code: '01' },
    { id: 'resume', label: 'Resume', code: '02' },
    { id: 'projects', label: 'Projects', code: '03' },
    { id: 'contact', label: 'Contact', code: '04' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-canvas/95 backdrop-blur-md border-b border-line py-3 shadow-subtle'
          : 'bg-canvas/80 backdrop-blur-sm border-b border-line/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        {/* Brand: Swiss Editorial Typography */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-left group flex items-baseline gap-2.5 focus:outline-none"
        >
          <span className="font-bold tracking-tight text-ink text-base sm:text-lg">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-line-dark">/</span>
          <span className="text-xs font-mono uppercase tracking-wider text-ink-muted">
            {PERSONAL_INFO.role}
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3.5 py-1.5 text-xs font-mono transition-all rounded flex items-center gap-1.5 ${
                  isActive
                    ? 'text-slate font-bold bg-canvas-pure border border-line shadow-subtle'
                    : 'text-ink-muted hover:text-ink hover:bg-canvas-sub/40'
                }`}
              >
                <span className={`text-[10px] ${isActive ? 'text-slate' : 'text-ink-subtle'}`}>
                  {item.code}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="h-4 w-px bg-line mx-2" />

          {/* Quick Contact Button */}
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-white bg-slate hover:bg-slate-hover rounded transition-colors shadow-subtle"
          >
            <span>CONTACT</span>
          </button>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-ink hover:text-slate rounded border border-line bg-canvas-pure"
            aria-label="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-line bg-canvas-card px-5 py-4 space-y-2 animate-in slide-in-from-top-2 duration-150 shadow-lg">
          <div className="text-[10px] font-mono text-ink-subtle uppercase tracking-wider mb-2">
            NAVIGATION INDEX
          </div>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 text-xs font-mono flex items-center justify-between rounded border ${
                  isActive
                    ? 'border-slate bg-canvas-pure text-slate font-bold'
                    : 'border-line/70 bg-canvas text-ink'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-[10px] text-ink-subtle">{item.code}</span>
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full inline-flex items-center justify-center px-3 py-2.5 text-xs font-mono font-medium text-white bg-slate hover:bg-slate-hover rounded"
            >
              <span>CONTACT ME</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
