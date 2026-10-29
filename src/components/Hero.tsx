import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreProjects: () => void;
  onExploreAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onExploreAbout }) => {
  const roles = [
    '서비스 매니저 & 서비스 기획자 (Service Manager & Service Planner)',
    '180+ API 분석 & 화면 매핑 전문가',
    '총 4년 7개월 실무 프로젝트 기획자',
    '어드민 & 비즈니스 구조 설계자'
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-14 sm:pt-28 sm:pb-16 bg-canvas border-b border-line text-center"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full flex flex-col items-center">
        
        {/* Magazine Editorial Top Metadata Bar */}
        <div className="w-full flex flex-wrap items-center justify-between gap-3 pb-4 mb-10 sm:mb-14 border-b border-line text-left">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-slate bg-canvas-pure px-2.5 py-0.5 border border-line rounded">
              № 00
            </span>
            <span className="font-mono text-xs text-ink-muted uppercase tracking-wider">
              PORTFOLIO 2026
            </span>
            <span className="text-line">/</span>
            <span className="font-mono text-xs text-ink-muted hidden sm:inline-block">
              SERVICE MANAGER & SERVICE PLANNER
            </span>
          </div>

          <div className="font-mono text-xs text-ink-muted flex items-center gap-3">
            <span>SEOUL · SEONGNAM, KR</span>
            <span className="text-line">/</span>
            <span className="font-semibold text-ink">{PERSONAL_INFO.experience}</span>
          </div>
        </div>

        {/* Hero Main Content (Centered) */}
        <div className="max-w-4xl mx-auto space-y-6 flex flex-col items-center text-center">
          
          {/* Identity & Role Badge */}
          <div className="flex items-center justify-center gap-2.5">
            <span className="font-mono text-xs font-bold bg-slate text-white px-2.5 py-0.5 rounded">
              SERVICE MANAGER & SERVICE PLANNER
            </span>
            <span className="font-mono text-xs text-ink-muted uppercase tracking-wider">
              {PERSONAL_INFO.experience}
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-ink tracking-tight leading-[1.18] break-keep text-center">
            복잡한 요구사항을<br />
            <span className="text-slate">명확한 서비스 구조</span>로 설계합니다.
          </h1>

          {/* Dynamic Typing Title */}
          <div className="h-8 sm:h-9 flex items-center justify-center text-base sm:text-xl font-medium text-ink">
            <span className="text-ink-muted mr-2 font-light">I'm a</span>
            <span className="text-slate font-bold">
              {displayedText}
            </span>
            <span className="cursor-blink h-5 sm:h-6" />
          </div>

          {/* Subtitle description */}
          <p className="text-sm sm:text-base md:text-lg text-ink-muted max-w-2xl mx-auto leading-relaxed break-keep font-normal text-center">
            {PERSONAL_INFO.subheadline}
          </p>

          {/* Swiss Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-slate hover:bg-slate-hover rounded transition-colors shadow-subtle flex items-center gap-2"
            >
              <span>프로젝트 둘러보기</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href={PERSONAL_INFO.notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-medium uppercase tracking-wider text-ink bg-canvas-pure border border-line hover:border-slate hover:text-slate rounded transition-colors shadow-subtle"
            >
              <span>Notion 원본 포트폴리오</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate" />
            </a>
          </div>

          {/* Core Strengths Tag List (2x2 Balanced Grid) */}
          <div className="pt-6 border-t border-line/70 max-w-2xl w-full mx-auto">
            <div className="text-[11px] font-mono text-ink-subtle uppercase tracking-wider mb-3 text-center">
              CORE EXPERTISE & DOMAIN MAPPING
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {PERSONAL_INFO.coreStrengths.map((str, idx) => (
                <div
                  key={idx}
                  className="text-xs text-ink bg-canvas-card border border-line px-3.5 py-2.5 rounded flex items-center justify-center text-center font-medium shadow-card"
                >
                  <span className="text-slate mr-1.5 font-bold">✓</span>
                  <span>{str}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Scroll Indicator (Centered) */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full pt-10 flex flex-col items-center justify-center text-xs font-mono text-ink-subtle relative min-h-[56px]">
        <button
          onClick={onExploreAbout}
          className="flex flex-col items-center gap-2 text-ink-muted hover:text-slate transition-colors group cursor-pointer"
          aria-label="아래로 스크롤하여 소개 보기"
        >
          <div className="w-4 h-6 rounded-full border border-line-dark flex justify-center p-0.5 group-hover:border-slate transition-colors">
            <div className="w-1 h-1.5 bg-slate rounded-full animate-mouse-wheel" />
          </div>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-mono">
            SCROLL TO READ
          </span>
        </button>

        <span className="hidden sm:inline-block text-[11px] absolute right-5 sm:right-8 top-1/2 -translate-y-1/2 text-ink-subtle">
          PROJECT CASES: 08 ARCHIVES AVAILABLE
        </span>
      </div>

    </section>
  );
};
