import React from 'react';
import { Mail } from 'lucide-react';

interface HireMeSectionProps {
  onContactClick: () => void;
}

export const HireMeSection: React.FC<HireMeSectionProps> = ({ onContactClick }) => {
  return (
    <section className="py-16 sm:py-20 bg-canvas-card border-b border-line text-center">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        
        <span className="font-mono text-xs font-bold text-slate bg-canvas-pure border border-line px-3 py-1 rounded mb-4 inline-block uppercase tracking-wider">
          OPPORTUNITY & COLLABORATION
        </span>

        <h2 className="text-2xl sm:text-4xl font-bold text-ink tracking-tight mb-4 leading-snug break-keep">
          좋은 서비스를 함께 만들어갈<br />
          <span className="text-slate">동료가 되고 싶습니다.</span>
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-ink-muted max-w-2xl mx-auto mb-8 leading-relaxed break-keep font-normal">
          다양한 프로젝트에서 쌓은 서비스 기획 경험을 바탕으로, 복잡한 요구사항을 명확한 구조로 정리하고 실현 가능한 서비스로 연결합니다. 좋은 동료들과 함께 더 나은 서비스를 만들어가고 싶습니다.
        </p>

        <div className="flex items-center justify-center">
          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-slate hover:bg-slate-hover rounded transition-colors shadow-subtle"
          >
            <Mail className="w-4 h-4" />
            <span>연락하기 (Contact Me)</span>
          </button>
        </div>

      </div>
    </section>
  );
};
