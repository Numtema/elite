
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Clock, Award, Star, TrendingUp } from 'lucide-react';

export const Overview: React.FC = () => {
  const stats = [
    { label: "Cours Actifs", value: "04", icon: <Play size={24} />, color: "bg-red-500" },
    { label: "Heures d'Étude", value: "28h", icon: <Clock size={24} />, color: "bg-slate-900 dark:bg-red-600" },
    { label: "Certificats", value: "12", icon: <Award size={24} />, color: "bg-red-500" },
    { label: "Elite XP", value: "8.4k", icon: <Star size={24} />, color: "bg-slate-900 dark:bg-red-600" },
  ];

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter uppercase">Tableau de bord</h1>
        <p className="text-slate-600 dark:text-slate-400 font-medium">Bienvenue, prêt pour votre session d'excellence aujourd'hui ?</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-[#12121A] p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all group"
          >
            <div className={`${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
              {stat.icon}
            </div>
            <p className="text-[10px] font-black text-slate-500 dark:text-slate-500 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
            <h3 className="text-4xl font-black text-slate-900 dark:text-white">{stat.value}</h3>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-slate-900 dark:bg-[#12121A] rounded-[3rem] p-10 text-white relative overflow-hidden border border-transparent dark:border-white/5 shadow-xl">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500 text-[10px] font-black uppercase tracking-widest mb-6">
              <TrendingUp size={12} /> Formation En Cours
            </div>
            <h2 className="text-4xl font-black mb-4 tracking-tight">MAÎTRISE DE CLAUDE 3.5 & GEMINI 2.0</h2>
            <p className="text-slate-300 dark:text-slate-300 font-medium mb-8 max-w-md italic">Module 3 : Architecture des Agents Autonomes et QA de prompt engineering.</p>
            <button className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all shadow-xl">
              Reprendre le cours
            </button>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-500/20 to-transparent pointer-events-none" />
        </div>

        <div className="bg-white dark:bg-[#12121A] border border-slate-200 dark:border-white/5 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center shadow-sm transition-colors duration-300">
          <div className="relative w-32 h-32 mb-6">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="10" className="text-slate-100 dark:text-white/10" />
              <circle cx="50" cy="50" r="45" fill="none" stroke="#ef4444" strokeWidth="10" strokeDasharray="210 282" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-black text-slate-900 dark:text-white">75%</span>
            </div>
          </div>
          <h4 className="text-xl font-black text-slate-900 dark:text-white mb-2">Objectif Hebdomadaire</h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Encore 2 modules pour atteindre votre cible.</p>
        </div>
      </div>
    </div>
  );
};
