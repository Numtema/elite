
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Logo } from './Logo';
import { THEME } from '../theme';

interface AuthViewProps {
  onBack: () => void;
}

export const AuthView: React.FC<AuthViewProps> = ({ onBack }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const t = THEME.content.login;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white flex flex-col md:flex-row font-['Poppins']"
    >
      {/* Colonne Formulaire */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-10 overflow-y-auto">
        <div className="max-w-md w-full mx-auto md:mx-0">
          <button 
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-slate-400 hover:text-red-500 font-bold text-xs uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Retour au site
          </button>
          
          <header className="mb-12">
            <Logo />
          </header>

          <div className="mb-10">
            <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">
              {isLogin ? t.title : "Créer un compte"}
            </h2>
            <p className="text-slate-500 font-medium">
              {isLogin ? t.signupPrompt : "Déjà membre ? "}{' '}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="font-bold text-red-500 hover:text-red-600 transition-colors underline underline-offset-4"
              >
                {isLogin ? t.signupLink : "Se connecter"}
              </button>
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">Nom complet</label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-red-500/20 focus:bg-white focus:ring-4 focus:ring-red-500/5 transition-all outline-none font-medium"
                />
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{t.emailLabel}</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-red-500" />
                <input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-red-500/20 focus:bg-white focus:ring-4 focus:ring-red-500/5 transition-all outline-none font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{t.passwordLabel}</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-red-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={t.passwordPlaceholder}
                  className="w-full pl-12 pr-12 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-red-500/20 focus:bg-white focus:ring-4 focus:ring-red-500/5 transition-all outline-none font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button className="w-full py-5 bg-red-500 hover:bg-red-600 text-white font-black text-lg rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-red-500/25 transition-all active:scale-[0.98]">
              {isLogin ? t.submitBtn : "Finaliser l'inscription"}
              <ArrowRight size={22} strokeWidth={3} />
            </button>
          </form>
        </div>
      </div>

      {/* Colonne Visuelle */}
      <div className="hidden md:flex w-1/2 p-6">
        <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" 
            alt="Elite Academy" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 via-red-500/20 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <h3 className="text-4xl font-black mb-4 leading-none">L'EXCELLENCE À PORTÉE DE MAIN</h3>
            <p className="text-lg font-medium opacity-90">Rejoignez la communauté Elite et transformez votre vision de l'Intelligence Artificielle.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
