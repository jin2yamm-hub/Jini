import React from 'react';
import { PERSONAL_INFO, CAREER_HISTORY } from '../data/portfolioData';

export const CareerSection: React.FC = () => {
  return (
    <section id="career" className="py-16 sm:py-24 border-b border-paper-300 bg-paper-50 text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-paper-300 gap-6 text-left">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-charcoal-900 bg-white px-2 py-0.5 border border-paper-300">
                SECTION 03
              </span>
              <span className="font-mono text-xs tracking-wider uppercase text-charcoal-500">
                CURRICULUM VITAE & EXPERIENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-950 tracking-tight break-keep">
              경력 및 기획 경험
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-md break-keep leading-relaxed text-left">
            실제 서비스 기획 프로젝트를 수행하며 축적한 도메인 지식과 실무 역량 요약입니다.
          </p>
        </div>

        {/* Swiss Grid CV Card */}
        <div className="bg-white border border-paper-300 text-left">
          
          {/* Top CV Masthead Bar */}
          <div className="p-6 sm:p-8 border-b border-paper-300 bg-paper-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold bg-charcoal-950 text-white px-2 py-0.5">
                  SERVICE MANAGER & SERVICE PLANNER
                </span>
                <span className="font-mono text-xs text-charcoal-600">
                  {PERSONAL_INFO.experience}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-950 tracking-tight pt-1">
                {PERSONAL_INFO.name} <span className="font-normal text-charcoal-500 text-xl">({PERSONAL_INFO.nameEn})</span>
              </h3>
            </div>

            <div className="font-mono text-xs text-charcoal-500 text-left sm:text-right space-y-1">
              <div>DOMAINS: COMMERCE · SYSTEM · B2C</div>
              <div>VERIFIED AGAINST ORIGINAL RESUME</div>
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8 space-y-8 text-left">
            {CAREER_HISTORY.map((item, idx) => (
              <div key={idx} className="space-y-6 text-left">
                
                {/* Section within CV */}
                <div className="space-y-3">
                  <div className="font-mono text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                    주요 실무 업무 및 기획 역량
                  </div>

                  <div className="bg-paper-50 border border-paper-200 p-5 sm:p-6 text-left">
                    <ul className="space-y-3 text-left">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="text-xs sm:text-sm text-charcoal-900 flex items-start gap-3 leading-relaxed break-keep text-left">
                          <span className="font-mono text-xs font-bold text-charcoal-900 mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Verified Disclaimer Note */}
                {item.verifiedNote && (
                  <div className="pt-4 border-t border-paper-200 text-left">
                    <p className="text-[11px] sm:text-xs text-charcoal-500 leading-relaxed font-mono break-keep">
                      * {item.verifiedNote}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
