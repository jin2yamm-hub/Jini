import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, MapPin, ExternalLink, Briefcase } from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onShowToast('이메일 주소가 클립보드에 복사되었습니다.');
    setTimeout(() => setCopied(false), 2500);
  };

  const contactBoxes = [
    {
      icon: <MapPin className="w-5 h-5 text-slate" />,
      title: 'Address',
      value: 'Seoul / Seongnam, Korea',
      desc: '판교·분당·서울 권역 출퇴근 가능'
    },
    {
      icon: <Mail className="w-5 h-5 text-slate" />,
      title: 'Email Address',
      value: PERSONAL_INFO.email,
      desc: '클릭하여 복사하거나 메일 발송',
      action: handleCopyEmail,
      isAction: true
    },
    {
      icon: <Briefcase className="w-5 h-5 text-slate" />,
      title: 'Role & Experience',
      value: `${PERSONAL_INFO.role} (약 4년 7개월)`,
      desc: '180+ API 분석, IA 및 어드민 기획'
    },
    {
      icon: <ExternalLink className="w-5 h-5 text-slate" />,
      title: 'Portfolio Site',
      value: 'Notion 원본 포트폴리오',
      desc: '상세 문서 및 프로젝트 원본',
      link: PERSONAL_INFO.notionUrl
    }
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 bg-canvas border-b border-line text-left">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header: Swiss Grid Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 mb-12 border-b border-line gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-slate bg-canvas-pure px-2.5 py-0.5 border border-line rounded">
                № 04
              </span>
              <span className="font-mono text-xs tracking-wider uppercase text-ink-muted">
                GET IN TOUCH & INQUIRY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              Contact
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-ink-muted max-w-md leading-relaxed break-keep">
            회사와 함께 성장하는 서비스 매니저 및 기획자가 되겠습니다. 편하게 연락주세요.
          </p>
        </div>

        {/* 4 Contact Info Boxes (노션 연결을 맨 오른쪽 4번째로 배치) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactBoxes.map((box, idx) => (
            <div
              key={idx}
              onClick={box.action ? box.action : undefined}
              className={`p-6 rounded-lg bg-canvas-card border border-line shadow-card flex flex-col justify-between transition-colors ${
                box.isAction || box.link ? 'cursor-pointer hover:border-slate' : ''
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded bg-canvas-pure border border-line flex items-center justify-center mb-3">
                  {box.icon}
                </div>

                <h3 className="text-[11px] font-mono font-bold uppercase tracking-wider text-ink-subtle mb-1">
                  {box.title}
                </h3>

                {box.link ? (
                  <a
                    href={box.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold text-ink hover:text-slate transition-colors break-all"
                  >
                    {box.value} ↗
                  </a>
                ) : (
                  <p className="text-xs sm:text-sm font-semibold text-ink break-all">
                    {box.value}
                  </p>
                )}
              </div>

              <div className="pt-3 mt-3 border-t border-line/60 flex items-center justify-between">
                <span className="text-[11px] text-ink-muted">
                  {box.desc}
                </span>

                {box.isAction && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate font-bold font-mono shrink-0 ml-2">
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? '복사됨' : '복사'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
