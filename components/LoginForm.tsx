
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { THEME } from '../theme';
import { motion } from 'framer-motion';

export const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const t = THEME.content.login;

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">
          {t.emailLabel}
        </label>
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
          <input
            type="email"
            placeholder={t.emailPlaceholder}
            className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-red-500/20 focus:bg-white focus:ring-4 focus:ring-red-500/5 transition-all outline-none font-medium text-slate-900 placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">
          {t.passwordLabel}
        </label>
        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-red-500 transition-colors" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder={t.passwordPlaceholder}
            className="w-full pl-12 pr-12 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-red-500/20 focus:bg-white focus:ring-4 focus:ring-red-500/5 transition-all outline-none font-medium text-slate-900 placeholder:text-slate-400"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500 transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
        <div className="flex flex-col">
          <span className="text-sm font-bold text-slate-900">{t.rememberMe}</span>
          <span className="text-[10px] text-slate-500 font-medium uppercase tracking-tight">{t.rememberMeSub}</span>
        </div>
        <button
          type="button"
          onClick={() => setRememberMe(!rememberMe)}
          className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${rememberMe ? 'bg-red-500' : 'bg-slate-300'}`}
        >
          <motion.span 
            animate={{ x: rememberMe ? 22 : 2 }}
            className="absolute top-1 left-0 h-4 w-4 rounded-full bg-white shadow-sm"
          />
        </button>
      </div>

      <div className="flex justify-end">
        <a href="#" className="text-sm font-bold text-slate-900 hover:text-red-500 transition-colors underline underline-offset-4">
          {t.forgotPassword}
        </a>
      </div>

      <button
        type="submit"
        className="w-full py-5 bg-red-500 hover:bg-red-600 text-white font-black text-lg rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-red-500/25 transition-all active:scale-[0.98]"
      >
        {t.submitBtn}
        <ArrowRight size={22} strokeWidth={3} />
      </button>
    </form>
  );
};
