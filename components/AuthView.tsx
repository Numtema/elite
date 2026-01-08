
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Mail, Lock, Eye, EyeOff, User, ChevronLeft } from 'lucide-react';
import { Logo } from './Logo';
import { THEME } from '../theme';

interface AuthViewProps {
  onBack: () => void;
  onLogin: () => void;
}

type AuthMode = 'login' | 'signup' | 'forgot';

export const AuthView: React.FC<AuthViewProps> = ({ onBack, onLogin }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  
  const tLogin = THEME.content.login;
  const tSignup = THEME.content.signup;
  const tForgot = THEME.content.forgot;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici on simule une connexion réussie
    onLogin();
  };

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

          <AnimatePresence mode="wait">
            {mode === 'login' && (
              <motion.div 
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-10">
                  <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">
                    {tLogin.title}
                  </h2>
                  <p className="text-slate-500 font-medium">
                    {tLogin.signupPrompt}{' '}
                    <button 
                      onClick={() => setMode('signup')}
                      className="font-bold text-red-500 hover:text-red-600 transition-colors underline underline-offset-4"
                    >
                      {tLogin.signupLink}
                    </button>
                  </p>
                </div>

                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{tLogin.emailLabel}</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-red-500" />
                      <input
                        type="email"
                        required
                        placeholder={tLogin.emailPlaceholder}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-red-500/20 focus:bg-white focus:ring-4 focus:ring-red-500/5 transition-all outline-none font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{tLogin.passwordLabel}</label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-red-500" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder={tLogin.passwordPlaceholder}
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

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-slate-900">{tLogin.rememberMe}</span>
                      <span className="text-[10px] text-slate-500 font-medium uppercase tracking-tight">{tLogin.rememberMeSub}</span>
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
                    <button 
                      onClick={() => setMode('forgot')}
                      className="text-sm font-bold text-slate-900 hover:text-red-500 transition-colors underline underline-offset-4"
                    >
                      {tLogin.forgotPassword}
                    </button>
                  </div>

                  <button className="w-full py-5 bg-red-500 hover:bg-red-600 text-white font-black text-lg rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-red-500/25 transition-all active:scale-[0.98]">
                    {tLogin.submitBtn}
                    <ArrowRight size={22} strokeWidth={3} />
                  </button>
                </form>
              </motion.div>
            )}

            {mode === 'signup' && (
              <motion.div 
                key="signup"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-10">
                  <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">
                    {tSignup.title}
                  </h2>
                  <p className="text-slate-500 font-medium">
                    {tSignup.loginPrompt}{' '}
                    <button 
                      onClick={() => setMode('login')}
                      className="font-bold text-red-500 hover:text-red-600 transition-colors underline underline-offset-4"
                    >
                      {tSignup.loginLink}
                    </button>
                  </p>
                </div>

                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{tSignup.nameLabel}</label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-red-500" />
                      <input
                        type="text"
                        required
                        placeholder={tSignup.namePlaceholder}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-red-500/20 focus:bg-white focus:ring-4 focus:ring-red-500/5 transition-all outline-none font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{tLogin.emailLabel}</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-red-500" />
                      <input
                        type="email"
                        required
                        placeholder={tLogin.emailPlaceholder}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-red-500/20 focus:bg-white focus:ring-4 focus:ring-red-500/5 transition-all outline-none font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{tLogin.passwordLabel}</label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-red-500" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder={tLogin.passwordPlaceholder}
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
                    {tSignup.submitBtn}
                    <ArrowRight size={22} strokeWidth={3} />
                  </button>
                </form>
              </motion.div>
            )}

            {mode === 'forgot' && (
              <motion.div 
                key="forgot"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-10">
                  <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">
                    {tForgot.title}
                  </h2>
                  <p className="text-slate-500 font-medium">
                    {tForgot.description}
                  </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest pl-1">{tLogin.emailLabel}</label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-red-500" />
                      <input
                        type="email"
                        required
                        placeholder={tLogin.emailPlaceholder}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-red-500/20 focus:bg-white focus:ring-4 focus:ring-red-500/5 transition-all outline-none font-medium"
                      />
                    </div>
                  </div>

                  <button className="w-full py-5 bg-red-500 hover:bg-red-600 text-white font-black text-lg rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-red-500/25 transition-all active:scale-[0.98]">
                    {tForgot.submitBtn}
                    <ArrowRight size={22} strokeWidth={3} />
                  </button>

                  <div className="flex justify-center pt-4">
                    <button 
                      onClick={() => setMode('login')}
                      className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-red-500 transition-colors group"
                    >
                      <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                      {tForgot.backToLogin}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
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
            <h3 className="text-4xl font-black mb-4 leading-none uppercase tracking-tighter">L'EXCELLENCE À PORTÉE DE MAIN</h3>
            <p className="text-lg font-medium opacity-90 leading-relaxed max-w-lg">
              {mode === 'login' && "Connectez-vous pour continuer votre ascension vers la maîtrise totale de l'Intelligence Artificielle."}
              {mode === 'signup' && "Rejoignez la communauté d'élite et accédez à des ressources exclusives conçues par des experts."}
              {mode === 'forgot' && "Récupérez votre accès en quelques secondes et reprenez votre formation sans interruption."}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${i + 20}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold tracking-widest uppercase opacity-80">+10,000 MEMBRES ACTIFS</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
