import React from 'react';
import { STATS } from '../data/portfolioData';

export const CounterSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-canvas border-b border-line">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-lg bg-canvas-card border border-line text-left shadow-card hover:border-slate/60 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-slate mb-1">
                {stat.value}
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-ink mb-1 tracking-tight">
                {stat.label}
              </h4>
              <p className="text-[11px] sm:text-xs text-ink-muted leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
