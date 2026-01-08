
import React from 'react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="relative w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center rotate-3 shadow-lg shadow-red-500/20 shrink-0">
        <span className="text-white font-black text-xl -rotate-3">E</span>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-black tracking-tighter text-slate-900 dark:text-white leading-none uppercase">
          ELITE <span className="text-red-500">TRAINING</span>
        </span>
        <span className="text-[9px] font-bold tracking-[0.3em] text-slate-400 dark:text-slate-500 uppercase">
          AI Academy
        </span>
      </div>
    </div>
  );
};
