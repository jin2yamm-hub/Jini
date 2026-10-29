import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Layers, Code, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onExploreResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreResume }) => {
  const profileDetails = [
    { label: 'Name', value: `${PERSONAL_INFO.name} (${PERSONAL_INFO.nameEn})` },
    { label: 'Role', value: PERSONAL_INFO.role },
    { label: 'Experience', value: PERSONAL_INFO.experience },
    { label: 'Location', value: 'Seoul / Seongnam, Korea' },
    { label: 'Email', value: PERSONAL_INFO.email },
    { label: 'Specialty', value: 'IA 구조화 · 180+ API 분석 · 어드민 기획' },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-canvas border-b border-line text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header: Swiss Grid Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 border-b border-line gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-slate bg-canvas-pure px-2.5 py-0.5 border border-line rounded">
                № 01
              </span>
              <span className="font-mono text-xs tracking-wider uppercase text-ink-muted">
                PROFILE & IDENTITY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              About Me
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted md:whitespace-nowrap leading-relaxed break-keep">
            복잡한 비즈니스 정책을 명쾌한 화면 구조와 실행 가능한 시스템 플로우로 설계합니다.
          </p>
        </div>

        {/* 2-Column Swiss Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Editorial Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-canvas-card border border-line p-6 sm:p-8 rounded-lg shadow-card space-y-6">
              
              {/* Profile Card Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-line">
                <div className="w-14 h-14 rounded bg-slate flex items-center justify-center text-white font-bold text-xl font-mono">
                  KJ
                </div>
                <div>
                  <h3 className="text-lg font-bold text-ink tracking-tight">
                    {PERSONAL_INFO.name} <span className="font-normal text-ink-muted text-sm">({PERSONAL_INFO.nameEn})</span>
                  </h3>
                  <p className="text-xs font-mono font-medium text-slate uppercase tracking-wider">
                    {PERSONAL_INFO.role}
                  </p>
                  <p className="text-[11px] text-ink-subtle font-mono mt-0.5">
                    {PERSONAL_INFO.experience}
                  </p>
                </div>
              </div>

              {/* Core Competencies Items */}
              <div className="space-y-4 py-2 border-b border-line">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-slate-tint text-slate mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-ink">IA 및 서비스 구조화</h4>
                    <p className="text-[11px] text-ink-muted leading-normal">
                      사용자 여정 및 정책에 맞춘 정보 구조(IA) 및 화면별 플로우 체계화
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-slate-tint text-slate mt-0.5">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-ink">180+ API 분석 & 매핑</h4>
                    <p className="text-[11px] text-ink-muted leading-normal">
                      입출력 파라미터 및 통신 실패 예외 케이스 전수 명세
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-slate-tint text-slate mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-ink">어드민 & 대기열 시스템</h4>
                    <p className="text-[11px] text-ink-muted leading-normal">
                      운영 효율화 및 고트래픽 대응 백오피스 설계
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Verification Note */}
              <div className="flex items-center justify-between text-xs text-ink-muted font-mono pt-1">
                <span className="flex items-center gap-1.5 text-slate font-medium">
                  ✓ 실무 검증 완료 포트폴리오
                </span>
                <span className="text-[11px] text-ink-subtle">VERIFIED 2026</span>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Metadata Specs */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-ink-subtle block">
                CAREER PHILOSOPHY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight leading-snug break-keep">
                "복잡한 정책과 개발 언어를<br className="hidden sm:inline" />
                명확한 화면과 데이터 흐름으로 전환합니다."
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed break-keep">
                총 4년 7개월간 이커머스, 게이미피케이션 인앱 이벤트, 대규모 트래픽 입장 대기열 시스템 등 
                다양한 도메인에서 기획을 주도해 왔습니다. 180개 이상의 API를 전수 분석하여 개발팀과 기술적 싱크를 맞추고,
                운영 이슈와 예외 상황까지 고려한 완성도 높은 기획 산출물을 만듭니다.
              </p>
            </div>

            {/* Profile Info Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 py-4 border-y border-line">
              {profileDetails.map((item, idx) => (
                <div key={idx} className="flex items-baseline text-xs sm:text-sm">
                  <span className="font-mono font-bold text-ink-muted w-24 shrink-0">
                    {item.label}:
                  </span>
                  <span className="text-ink font-medium break-all">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Counter Summary Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate font-mono leading-none">
                    180<span className="text-lg">+</span>
                  </div>
                  <span className="text-xs text-ink-muted mt-1 block">API 분석 완료</span>
                </div>

                <div className="h-8 w-px bg-line" />

                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-ink font-mono leading-none">
                    15<span className="text-lg text-slate">+</span>
                  </div>
                  <span className="text-xs text-ink-muted mt-1 block">완료된 프로젝트</span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onExploreResume}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-mono font-bold text-white bg-slate hover:bg-slate-hover rounded transition-colors shadow-subtle"
                >
                  <span>경력 & 스킬 상세 보기</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
