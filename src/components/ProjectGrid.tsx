import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react';

interface ProjectGridProps {
  onSelectProject: (project: Project) => void;
}

// 정보 박스(Info Box) 개수에 따른 반응형 그리드 열 수 계산
const getInfoBoxGridCols = (count: number): string => {
  if (count === 1) return 'grid-cols-1';
  if (count === 2) return 'grid-cols-2';
  if (count === 3) return 'grid-cols-1 sm:grid-cols-3';
  return 'grid-cols-2';
};

export const ProjectGrid: React.FC<ProjectGridProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'all') return true;
    return proj.category === selectedCategory;
  });

  const categories: { key: ProjectCategory; label: string; count: number }[] = [
    { key: 'all', label: '전체 프로젝트', count: PROJECTS.length },
    { key: 'commerce', label: '커머스 & 플랫폼', count: PROJECTS.filter(p => p.category === 'commerce').length },
    { key: 'system', label: '시스템 & 어드민', count: PROJECTS.filter(p => p.category === 'system').length },
    { key: 'interaction', label: 'B2C & 인터랙션', count: PROJECTS.filter(p => p.category === 'interaction').length },
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 bg-canvas border-b border-line text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header: Swiss Grid Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-10 border-b border-line gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-slate bg-canvas-pure px-2.5 py-0.5 border border-line rounded">
                № 03
              </span>
              <span className="font-mono text-xs tracking-wider uppercase text-ink-muted">
                SELECTED PROJECT CASES / 08 ARCHIVES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted max-w-md leading-relaxed break-keep">
            180+ API 분석과 IA 설계를 통해 실제 런칭 및 운영된 기획 프로젝트 모음입니다.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded text-xs font-mono transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-slate text-white font-bold shadow-subtle'
                    : 'bg-canvas-pure text-ink-muted hover:text-ink border border-line'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1 py-0.2 rounded ${isActive ? 'bg-white/20 text-white' : 'bg-canvas-sub text-ink-muted'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, pIndex) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-lg bg-canvas-card border border-line hover:border-slate transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-card hover:shadow-card-hover"
            >
              <div>
                {/* Visual Header Area */}
                <div className="relative p-5 bg-canvas-sub/30 border-b border-line flex flex-col justify-between h-40">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-slate bg-canvas-pure border border-line px-2 py-0.5 rounded uppercase">
                      № 0{pIndex + 1} · {project.categoryLabel}
                    </span>

                    {project.featured && (
                      <span className="text-[10px] font-mono font-bold text-slate bg-slate-tint border border-slate/30 px-2 py-0.5 rounded flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-slate" />
                        KEY
                      </span>
                    )}
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-xs text-ink-muted font-medium">
                        {project.role} · {project.contribution}
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded bg-canvas-pure border border-line flex items-center justify-center text-slate group-hover:bg-slate group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg font-bold text-ink tracking-tight group-hover:text-slate transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-ink-muted leading-relaxed line-clamp-3 break-keep">
                    {project.summary}
                  </p>

                  {/* Info Boxes (Metrics Grid) */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className={`grid ${getInfoBoxGridCols(project.metrics.length)} gap-2 pt-2 items-stretch`}>
                      {project.metrics.map((m, idx) => (
                        <div
                          key={idx}
                          className="h-full p-2.5 rounded bg-canvas-pure border border-line text-left flex flex-col justify-start"
                        >
                          <span className="text-[10px] font-mono text-ink-subtle uppercase tracking-wider block mb-1">
                            {m.label}
                          </span>
                          <span className="text-xs font-mono font-bold text-ink leading-snug break-keep [overflow-wrap:anywhere]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-5 py-3.5 border-t border-line/80 flex items-center justify-between bg-canvas-card">
                <div className="flex flex-wrap gap-1.5 max-w-[75%]">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-ink-muted bg-canvas-pure px-1.5 py-0.5 rounded border border-line"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-bold text-slate flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                  상세 <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
