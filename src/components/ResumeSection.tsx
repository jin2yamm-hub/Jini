import React, { useState } from 'react';
import { CAREER_HISTORY, CAPABILITIES, SKILL_PERCENTAGES, EDUCATION_AND_DOMAINS } from '../data/portfolioData';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ResumeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'skills' | 'capabilities' | 'domains'>('experience');

  const tabs = [
    { id: 'experience' as const, label: 'Experience', desc: '경력 사항' },
    { id: 'skills' as const, label: 'Skills', desc: '실무 스킬' },
    { id: 'capabilities' as const, label: 'Capabilities', desc: '핵심 역량' },
    { id: 'domains' as const, label: 'Domains & Tools', desc: '도메인 & 툴' },
  ];

  return (
    <section id="resume" className="py-20 sm:py-28 bg-canvas border-b border-line text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header: Swiss Grid Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 border-b border-line gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-slate bg-canvas-pure px-2.5 py-0.5 border border-line rounded">
                № 02
              </span>
              <span className="font-mono text-xs tracking-wider uppercase text-ink-muted">
                CURRICULUM VITAE & QUALIFICATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              Resume & Skills
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted max-w-md leading-relaxed break-keep">
            4년 7개월간의 실무 프로젝트를 통해 축적한 서비스 매니징 및 기획 경력과 숙련도입니다.
          </p>
        </div>

        {/* Swiss Grid Layout: Left Sticky Nav + Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Sticky Tab Navigation */}
          <div className="lg:col-span-3 lg:sticky lg:top-24 z-20 space-y-3">
            <div className="bg-canvas-card border border-line p-2 rounded-lg shadow-card flex lg:flex-col gap-1 overflow-x-auto">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 lg:flex-none text-left px-3.5 py-2.5 rounded transition-all duration-150 flex items-center justify-between whitespace-nowrap ${
                      isActive
                        ? 'bg-slate text-white font-bold shadow-subtle'
                        : 'text-ink-muted hover:text-ink hover:bg-canvas-sub/40'
                    }`}
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-mono tracking-tight">
                        {tab.label}
                      </div>
                      <div className={`text-[10px] hidden sm:block ${isActive ? 'text-white/80' : 'text-ink-subtle'}`}>
                        {tab.desc}
                      </div>
                    </div>
                    {isActive && (
                      <span className="hidden lg:block w-1.5 h-1.5 rounded-full bg-white ml-2" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Tab Panels */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* 1. Experience Panel */}
            {activeTab === 'experience' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                {CAREER_HISTORY.map((item, index) => (
                  <div
                    key={index}
                    className="p-6 sm:p-8 rounded-lg bg-canvas-card border border-line shadow-card space-y-4"
                  >
                    {/* Period Badge */}
                    <div className="inline-block px-2.5 py-1 text-xs font-mono font-bold text-slate bg-canvas-pure border border-line rounded">
                      {item.period}
                    </div>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight mb-0.5">
                        {item.role}
                      </h3>
                      <div className="text-xs font-mono text-ink-muted">
                        {item.organization}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-ink leading-relaxed break-keep bg-canvas-pure p-3.5 rounded border border-line">
                      💡 {item.tagline}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-ink-subtle">
                        KEY ACHIEVEMENTS & CONTRIBUTIONS
                      </div>
                      <ul className="space-y-2">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-xs sm:text-sm text-ink flex items-start gap-2.5 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate mt-2 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 2. Skills with Percentage (Slate Progress Bar) */}
            {activeTab === 'skills' && (
              <div className="p-6 sm:p-8 rounded-lg bg-canvas-card border border-line shadow-card animate-in fade-in duration-200">
                <div className="mb-6 pb-4 border-b border-line">
                  <h3 className="text-lg sm:text-xl font-bold text-ink tracking-tight mb-1">
                    실무 기획 스킬 숙련도
                  </h3>
                  <p className="text-xs text-ink-muted">
                    실제 실무에서 주도적으로 활용하는 핵심 기획 역량별 숙련도 지표입니다.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {SKILL_PERCENTAGES.map((skill, index) => (
                    <div key={index} className="space-y-1.5">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs sm:text-sm font-bold text-ink">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm font-mono font-bold text-slate">
                          {skill.percent}%
                        </span>
                      </div>

                      {/* Slate Progress Bar */}
                      <div className="h-2 w-full bg-line rounded-full overflow-hidden">
                        <div
                          className="h-full bg-slate rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${skill.percent}%` }}
                        />
                      </div>

                      <p className="text-[11px] text-ink-muted leading-normal">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Capabilities Panel */}
            {activeTab === 'capabilities' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-in fade-in duration-200">
                {CAPABILITIES.map((cap, index) => (
                  <div
                    key={cap.id}
                    className="p-5 sm:p-6 rounded-lg bg-canvas-card border border-line shadow-card space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono font-bold text-slate bg-canvas-pure border border-line px-2 py-0.5 rounded">
                        № 0{index + 1}
                      </span>
                      <span className="text-[10px] font-mono text-ink-subtle uppercase">
                        {cap.englishTitle}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-ink tracking-tight">
                      {cap.title}
                    </h4>

                    <p className="text-xs text-ink-muted leading-relaxed break-keep">
                      {cap.description}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      {cap.points.map((pt, pIdx) => (
                        <div key={pIdx} className="text-xs text-ink flex items-start gap-1.5 leading-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 text-slate shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-line">
                      {cap.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono text-ink-muted bg-canvas-pure px-2 py-0.5 rounded border border-line"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 4. Domains & Tools Panel */}
            {activeTab === 'domains' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {EDUCATION_AND_DOMAINS.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-lg bg-canvas-card border border-line shadow-card space-y-2 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="inline-block px-2.5 py-0.5 text-xs font-mono font-bold text-slate bg-canvas-pure border border-line rounded">
                          {item.period}
                        </div>
                        <h4 className="text-base font-bold text-ink">
                          {item.title}
                        </h4>
                        <div className="text-xs font-mono text-ink-muted">
                          {item.institution}
                        </div>
                        <p className="text-xs sm:text-sm text-ink leading-relaxed break-keep pt-1">
                          {item.desc}
                        </p>
                      </div>

                      {item.link && (
                        <div className="pt-3 mt-2 border-t border-line/60">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate hover:underline"
                          >
                            <span>Figma 포트폴리오 바로가기</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Additional Tools Showcase Box */}
                <div className="p-5 sm:p-6 rounded-lg bg-canvas-card border border-line flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-ink mb-1">
                      도구 및 산출물 레퍼런스
                    </h4>
                    <p className="text-xs text-ink-muted">
                      Figma 화면설계서, Swagger API 매핑 문서, 정책 정의서 등 실제 산출물 기반 협업
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                    <a
                      href={PERSONAL_INFO.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold text-white bg-slate hover:bg-slate-hover rounded transition-colors shadow-subtle"
                    >
                      <span>Figma 산출물 확인</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
