import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-2 duration-150">
      <div className="bg-ink text-canvas-card px-4 py-3 rounded border border-line shadow-card-hover flex items-center gap-2.5 text-xs font-mono">
        <CheckCircle2 className="w-4 h-4 text-slate-subtle shrink-0" />
        <span>{message}</span>
      </div>
    </div>
  );
};
