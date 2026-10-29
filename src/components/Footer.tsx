import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-canvas border-t border-line text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        
        {/* Brand identity */}
        <div className="space-y-1">
          <div className="text-base font-bold text-ink">
            {PERSONAL_INFO.name} <span className="font-mono text-xs font-normal text-ink-muted">({PERSONAL_INFO.nameEn})</span>
          </div>
          <p className="text-xs text-ink-muted">
            {PERSONAL_INFO.role} · {PERSONAL_INFO.experience}
          </p>
        </div>

        {/* Quick Links & Copyright */}
        <div className="flex flex-col sm:items-end gap-2 text-xs text-ink-muted font-mono">
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:underline flex items-center gap-1 font-medium"
            >
              <span>Figma 포트폴리오</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span className="text-line">|</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-ink-muted hover:text-slate"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
          <p className="text-[11px] text-ink-subtle">
            Copyright &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};
