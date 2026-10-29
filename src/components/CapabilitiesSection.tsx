import React from 'react';
import { CAPABILITIES } from '../data/portfolioData';

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-16 sm:py-24 border-b border-paper-300 text-left bg-paper-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-paper-300 gap-6 text-left">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-charcoal-900 bg-white px-2 py-0.5 border border-paper-300">
                SECTION 02
              </span>
              <span className="font-mono text-xs tracking-wider uppercase text-charcoal-500">
                PLANNING CAPABILITIES & DOMAIN SKILLS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-950 tracking-tight break-keep">
              실무 기반 핵심 기획 역량
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-600 max-w-md break-keep leading-relaxed text-left">
            실제 서비스의 구조화, 180+ API 분석, 어드민 운영 설계, 개발 협업을 뒷받침하는 4가지 핵심 실무 영역입니다.
          </p>
        </div>

        {/* Swiss Grid Typographic Index List */}
        <div className="divide-y divide-paper-300 border-b border-paper-300 text-left">
          {CAPABILITIES.map((cap, index) => {
            const indexNumber = `0${index + 1}`;
            return (
              <div
                key={cap.id}
                className="py-10 first:pt-2 last:pb-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start text-left"
              >
                {/* Left Column (5 cols): Number, Category & Title */}
                <div className="md:col-span-5 space-y-2 text-left">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold bg-charcoal-950 text-white px-2 py-0.5">
                      № {indexNumber}
                    </span>
                    <span className="font-mono text-xs text-charcoal-500 uppercase tracking-wider">
                      {cap.englishTitle}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-charcoal-950 tracking-tight break-keep pt-1 text-left">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed break-keep font-normal pt-1 text-left">
                    {cap.description}
                  </p>
                </div>

                {/* Right Column (7 cols): Execution Details & Tags */}
                <div className="md:col-span-7 space-y-5 text-left">
                  <div className="bg-white border border-paper-300 p-5 sm:p-6 text-left">
                    <div className="font-mono text-[11px] font-bold text-charcoal-400 uppercase tracking-wider mb-3">
                      PRACTICAL EXECUTION POINTS
                    </div>
                    <ul className="space-y-2.5 text-left">
                      {cap.points.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="text-xs sm:text-sm text-charcoal-900 flex items-start gap-2.5 leading-relaxed break-keep text-left"
                        >
                          <span className="font-mono text-xs font-bold text-charcoal-900 mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Inline Tags */}
                  <div className="flex flex-wrap gap-1.5 text-left">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono text-charcoal-700 bg-paper-200 border border-paper-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
