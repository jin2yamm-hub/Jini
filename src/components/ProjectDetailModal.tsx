import React, { useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import {
  X,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Code,
  Award,
  Sparkles
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (!project) return;
      const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onSelectProject(PROJECTS[currentIndex - 1]);
      } else if (e.key === 'ArrowRight' && currentIndex < PROJECTS.length - 1) {
        onSelectProject(PROJECTS[currentIndex + 1]);
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, onSelectProject]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;
  const formattedIndex = String(currentIndex + 1).padStart(2, '0');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-ink/50 backdrop-blur-sm p-3 sm:p-6 md:p-8 animate-in fade-in duration-150 text-left">
      
      {/* Backdrop Dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative w-full max-w-5xl bg-canvas border border-line rounded-lg shadow-2xl z-10 overflow-hidden my-auto max-h-[92vh] flex flex-col text-left">
        
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-canvas-pure/95 backdrop-blur-md px-6 py-3.5 border-b border-line flex items-center justify-between text-left">
          
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-ink hover:text-slate bg-canvas-card hover:bg-canvas-sub border border-line px-2.5 py-1 rounded transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-slate" />
              <span>목록으로</span>
            </button>
            <span className="text-line hidden sm:inline">/</span>
            <span className="text-xs font-mono font-bold text-slate hidden sm:inline">
              PROJECT CASE № {formattedIndex} / {PROJECTS.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1.5 text-ink-muted hover:text-ink bg-canvas-card hover:bg-canvas-sub border border-line rounded transition-colors"
              aria-label="닫기"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto px-6 sm:px-10 py-8 space-y-8 text-left text-ink">
          
          {/* Article Header */}
          <header className="space-y-3 pb-6 border-b border-line">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-white bg-slate px-2.5 py-0.5 rounded uppercase">
                {project.categoryLabel}
              </span>
              <span className="text-xs font-mono font-bold text-slate bg-slate-tint border border-slate/30 px-2.5 py-0.5 rounded">
                기여도 {project.contribution}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-ink tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base font-semibold text-slate">
              {project.subtitle}
            </p>

            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            {/* Spec Sheet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 p-3.5 rounded bg-canvas-card border border-line">
              <div>
                <span className="text-[10px] font-mono text-ink-subtle uppercase block mb-0.5">담당 역할</span>
                <span className="text-xs font-semibold text-ink">{project.role}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-ink-subtle uppercase block mb-0.5">기획 기여도</span>
                <span className="text-xs font-bold text-slate">{project.contribution}</span>
              </div>
            </div>
          </header>

          {/* Project Overview */}
          <section className="space-y-2">
            <h2 className="text-sm font-mono font-bold text-slate uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate" />
              프로젝트 개요
            </h2>
            <div className="p-4 rounded bg-canvas-card border border-line text-xs sm:text-sm text-ink leading-relaxed break-keep">
              {project.overview}
            </div>
          </section>

          {/* Problem & Solution */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Problem */}
            <div className="p-5 rounded bg-canvas-card border border-line space-y-2">
              <div className="text-[11px] font-mono font-bold text-ink-muted uppercase tracking-wider">
                01. BACKGROUND & PROBLEM
              </div>
              <h3 className="text-sm font-bold text-ink">
                {project.problem.title}
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                {project.problem.desc}
              </p>
              <ul className="space-y-1 pt-1">
                {project.problem.bullets.map((b, i) => (
                  <li key={i} className="text-xs text-ink flex items-start gap-2">
                    <span className="text-slate font-bold">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution */}
            <div className="p-5 rounded bg-canvas-card border border-slate/40 space-y-2">
              <div className="text-[11px] font-mono font-bold text-slate uppercase tracking-wider">
                02. PLANNING SOLUTION & IA
              </div>
              <h3 className="text-sm font-bold text-ink">
                {project.solution.title}
              </h3>
              <p className="text-xs text-ink-muted leading-relaxed">
                {project.solution.desc}
              </p>
              <ul className="space-y-1 pt-1">
                {project.solution.bullets.map((b, i) => (
                  <li key={i} className="text-xs text-ink flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Key Requirements */}
          <section className="space-y-3">
            <h2 className="text-sm font-mono font-bold text-slate uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate" />
              핵심 기획 요구사항 및 화면 상세
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyRequirements.map((req, rIdx) => (
                <div key={rIdx} className="p-4 rounded bg-canvas-card border border-line space-y-2">
                  <h4 className="text-xs sm:text-sm font-bold text-ink flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate font-bold bg-canvas-pure border border-line px-1.5 py-0.2 rounded">
                      REQ 0{rIdx + 1}
                    </span>
                    {req.title}
                  </h4>
                  <ul className="space-y-1">
                    {req.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-xs text-ink-muted flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-line-dark mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Collaboration & Results */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Tech Collab */}
            <div className="p-5 rounded bg-canvas-card border border-line space-y-2">
              <div className="flex items-center gap-1.5 text-slate">
                <Code className="w-4 h-4" />
                <h3 className="text-xs font-mono font-bold text-ink uppercase tracking-wide">
                  {project.techCollaboration.title}
                </h3>
              </div>
              <ul className="space-y-1.5 pt-1">
                {project.techCollaboration.items.map((item, i) => (
                  <li key={i} className="text-xs text-ink-muted flex items-start gap-2">
                    <span className="text-slate font-bold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="p-5 rounded bg-canvas-card border border-line space-y-2">
              <div className="flex items-center gap-1.5 text-slate">
                <Award className="w-4 h-4" />
                <h3 className="text-xs font-mono font-bold text-ink uppercase tracking-wide">
                  {project.results.title}
                </h3>
              </div>
              <ul className="space-y-1.5 pt-1">
                {project.results.items.map((item, i) => (
                  <li key={i} className="text-xs text-ink-muted flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Insights */}
          <section className="p-5 rounded bg-canvas-card border border-line space-y-1.5">
            <div className="text-[11px] font-mono font-bold text-slate uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              SERVICE RETROSPECTIVE & INSIGHT
            </div>
            <p className="text-xs sm:text-sm text-ink italic leading-relaxed break-keep">
              "{project.insights}"
            </p>
          </section>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono text-ink-muted bg-canvas-card border border-line px-2.5 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Bottom Prev/Next Footer */}
        <div className="sticky bottom-0 z-20 bg-canvas-pure/95 backdrop-blur-md px-6 py-3 border-t border-line flex items-center justify-between text-left">
          {prevProject ? (
            <button
              onClick={() => onSelectProject(prevProject)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-ink hover:text-slate"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-slate" />
              <span className="hidden sm:inline">{prevProject.title}</span>
              <span className="sm:hidden">이전</span>
            </button>
          ) : <div />}

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded text-xs font-mono font-bold uppercase tracking-wider text-white bg-slate hover:bg-slate-hover transition-colors"
          >
            창 닫기
          </button>

          {nextProject ? (
            <button
              onClick={() => onSelectProject(nextProject)}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-ink hover:text-slate"
            >
              <span className="hidden sm:inline">{nextProject.title}</span>
              <span className="sm:hidden">다음</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate" />
            </button>
          ) : <div />}
        </div>

      </div>
    </div>
  );
};
