
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Award, 
  Zap, 
  Users, 
  ShieldCheck, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  Sparkles,
  Database,
  Terminal,
  UserRound,
  Bell,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { CONFIG } from './config';
import { THEME } from './theme';
import { AuthView } from './components/AuthView';
import { SupportMenu } from './components/SupportMenu';

type PresetKey = keyof typeof CONFIG.presets;

// Animations
// Fix: Cast ease to a tuple [number, number, number, number] to satisfy framer-motion Easing types
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
};

const InfiniteMarquee = ({ theme, items }: { theme: any; items: string[] }) => (
  <div className="w-full border-y py-6 overflow-hidden select-none bg-white dark:bg-[#12121A]" style={{ borderColor: theme.border }}>
    <div className="animate-marquee whitespace-nowrap flex items-center">
      {[...items, ...items, ...items].map((item, i) => (
        <div key={i} className="flex items-center mx-12">
          <span className="text-[11px] font-black uppercase tracking-[0.5em] flex items-center gap-4 text-slate-400 dark:text-slate-500">
            <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_#EF4444]" />
            {item}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const RotatingText = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % words.length), 3000);
    return () => clearInterval(timer);
  }, [words]);
  return (
    <div className="h-[1.2em] overflow-hidden inline-flex items-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -25, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 italic block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<'landing' | 'auth'>('landing');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activePreset, setActivePreset] = useState<PresetKey>("people");
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  
  const currentTheme = isDarkMode ? CONFIG.theme.modes.dark : CONFIG.theme.modes.light;
  const currentData = CONFIG.presets[activePreset];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const SectionHeader = ({ title, highlight, subtitle }: { title: string; highlight: string; subtitle?: string }) => (
    <div className="text-center mb-20 max-w-4xl mx-auto px-4">
      <motion.div {...fadeInUp} className="inline-block px-5 py-2 rounded-full bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-red-500/20 shadow-sm">
        {highlight}
      </motion.div>
      <motion.h2 {...fadeInUp} transition={{ delay: 0.1 }} className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-[0.95]" style={{ color: currentTheme.text }}>
        {title}
      </motion.h2>
      {subtitle && <motion.p {...fadeInUp} transition={{ delay: 0.2 }} className="text-base md:text-xl font-medium opacity-60 max-w-2xl mx-auto leading-relaxed" style={{ color: currentTheme.muted }}>{subtitle}</motion.p>}
    </div>
  );

  return (
    <div className={`min-h-screen selection:bg-red-500 selection:text-white transition-colors duration-500 ${isDarkMode ? 'dark' : ''}`} style={{ backgroundColor: currentTheme.bg, color: currentTheme.text }}>
      <AnimatePresence mode="wait">
        {view === 'auth' ? (
          <AuthView key="auth" onBack={() => setView('landing')} />
        ) : (
          <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-red-500 z-[60] origin-left" style={{ scaleX }} />
            
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 flex justify-center">
              <div className="glass-dark rounded-[2rem] flex items-center justify-between px-6 md:px-10 py-4 w-full max-w-[1240px] border border-white/5 shadow-2xl transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center rotate-3 shadow-lg shadow-red-500/20">
                    <span className="text-white font-black text-xl -rotate-3">E</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-xl tracking-tighter leading-none uppercase">ELITE <span className="text-red-500">TRAINING</span></span>
                    <span className="text-[9px] uppercase tracking-widest font-black opacity-40 mt-1" style={{ color: currentTheme.muted }}>AI EXCELLENCE</span>
                  </div>
                </div>
                
                <div className="hidden lg:flex items-center gap-10">
                  {['Accueil', 'Expertises', 'Programme', 'FAQ'].map((link) => (
                    <a key={link} href={`#${link.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.25em] relative group opacity-60 hover:opacity-100 transition-all" style={{ color: currentTheme.text }}>
                      {link}
                      <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full" />
                    </a>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-3 rounded-xl hover:bg-white/5 transition-colors">
                    {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                  <button onClick={() => setView('auth')} className="hidden sm:block text-[10px] font-black uppercase tracking-widest px-4 py-2 hover:text-red-500 transition-colors">
                    Connexion
                  </button>
                  <button onClick={() => setView('auth')} className="px-8 py-3 rounded-xl bg-red-500 text-white text-[11px] font-black shadow-xl shadow-red-500/30 hover:bg-red-600 hover:scale-105 transition-all uppercase tracking-widest">
                    S'inscrire
                  </button>
                </div>
              </div>
            </nav>

            {/* Hero Section */}
            <section id="accueil" className="relative min-h-screen flex items-center pt-32 pb-20 px-4 md:px-6 overflow-hidden">
              <div className="absolute inset-0 hero-grid pointer-events-none -z-10" style={{ color: currentTheme.text, opacity: currentTheme.gridOpacity }} />
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-[600px] bg-red-500/10 rounded-full blur-[160px] -z-10" />
              
              <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-500 text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] mb-12 shadow-sm shadow-red-500/10">
                  <Award size={16} className="animate-pulse" />
                  {currentData.badge}
                </motion.div>
                
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl sm:text-7xl md:text-8xl lg:text-[115px] font-black tracking-tighter leading-[0.82] mb-14" style={{ color: currentTheme.text }}>
                  {currentData.heroTitle} <br />
                  <RotatingText words={currentData.rotatingWords} />
                </motion.h1>
                
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg md:text-2xl font-medium max-w-3xl mb-14 opacity-70 leading-relaxed" style={{ color: currentTheme.muted }}>
                  {currentData.description}
                </motion.p>
                
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center gap-6">
                  <button onClick={() => setView('auth')} className="w-full sm:w-auto px-14 py-7 bg-red-500 text-white rounded-[2rem] font-black text-lg md:text-2xl shadow-2xl shadow-red-500/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-5 group">
                    {currentData.ctaPrimary} <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                  <button onClick={() => setView('auth')} className="w-full sm:w-auto px-14 py-7 glass-dark border border-white/10 rounded-[2rem] font-black text-lg md:text-2xl hover:border-red-500/40 transition-all text-center" style={{ color: currentTheme.text }}>
                    {currentData.ctaSecondary}
                  </button>
                </motion.div>
              </div>
            </section>

            <InfiniteMarquee theme={currentTheme} items={currentData.marquee} />

            {/* Expertises (Skills) */}
            <section id="expertises" className="py-40 px-4 md:px-6">
              <div className="max-w-7xl mx-auto">
                <SectionHeader title="Expertises Clés" highlight="Syllabus" subtitle="Maîtrisez les outils les plus recherchés du marché." />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {currentData.skills.map((skill, i) => (
                    <motion.div key={skill} {...fadeInUp} transition={{ delay: i * 0.1 }} className="p-10 rounded-[3rem] glass-dark border text-center group hover:border-red-500/50 transition-all shadow-xl" style={{ borderColor: currentTheme.border }}>
                      <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mb-8 mx-auto group-hover:scale-110 transition-transform group-hover:rotate-6">
                        {i % 4 === 0 && <Zap size={32} />}
                        {i % 4 === 1 && <Terminal size={32} />}
                        {i % 4 === 2 && <Database size={32} />}
                        {i % 4 === 3 && <Sparkles size={32} />}
                      </div>
                      <h3 className="font-black text-sm md:text-xl uppercase tracking-tighter">{skill}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Learn Section */}
            <section className="py-40 px-4 md:px-6 bg-slate-50 dark:bg-[#07070D]">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <motion.div {...fadeInUp}>
                  <SectionHeader title="Ce que vous apprendrez" highlight="Objectifs" subtitle="Un parcours conçu par des experts Google." />
                  <div className="space-y-6">
                    {currentData.learn.map((item, i) => (
                      <div key={i} className="flex items-start gap-6 p-8 rounded-[2.5rem] glass-dark border hover:border-red-500/20 transition-all" style={{ borderColor: currentTheme.border }}>
                        <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0 font-black shadow-lg shadow-red-500/20">{i + 1}</div>
                        <p className="text-xl font-bold leading-snug">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div {...fadeInUp} className="relative group">
                   <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl">
                      <img src={`https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80`} alt="Training" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                   </div>
                   <div className="absolute -bottom-10 -right-10 glass-dark p-10 rounded-[3rem] border border-red-500/30 hidden md:block shadow-2xl">
                      <p className="text-5xl font-black text-red-500 leading-none mb-2">98%</p>
                      <p className="text-[12px] font-black uppercase tracking-[0.3em] opacity-60">Satisfaction</p>
                   </div>
                </motion.div>
              </div>
            </section>

            {/* Programme (Syllabus) */}
            <section id="programme" className="py-40 px-4 md:px-6">
              <div className="max-w-7xl mx-auto">
                <SectionHeader title="Structure du Programme" highlight="Modules" subtitle="Une progression logique pour une maîtrise totale." />
                <div className="max-w-4xl mx-auto space-y-6">
                  {CONFIG.syllabus.map((m, i) => (
                    <motion.div key={i} {...fadeInUp} className="p-10 rounded-[3rem] glass-dark border flex flex-col md:flex-row justify-between items-center gap-8 hover:border-red-500/40 transition-all shadow-lg group" style={{ borderColor: currentTheme.border }}>
                      <div className="flex gap-8 items-center w-full">
                        <span className="text-xs font-black uppercase tracking-[0.4em] text-red-500/60 shrink-0 group-hover:text-red-500 transition-colors">{m.module}</span>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2 leading-none">{m.title}</h3>
                          <p className="opacity-60 text-base md:text-lg font-medium">{m.desc}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-[11px] font-black uppercase tracking-widest bg-white/5" style={{ color: currentTheme.muted }}>
                        <Clock size={16} className="text-red-500" /> {m.duration}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-40 px-4 md:px-6 bg-slate-50 dark:bg-[#07070D]">
              <div className="max-w-4xl mx-auto">
                <SectionHeader title="Questions Fréquentes" highlight="FAQ" />
                <div className="space-y-6">
                  {CONFIG.faq.map((item, i) => (
                    <details key={i} className="group p-10 rounded-[3rem] glass-dark border border-white/5 cursor-pointer hover:border-red-500/20 transition-all">
                      <summary className="list-none flex justify-between items-center">
                        <span className="text-xl md:text-2xl font-black tracking-tight">{item.q}</span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-open:rotate-45 transition-transform bg-white/5">
                          <X size={20} />
                        </div>
                      </summary>
                      <p className="mt-8 text-lg md:text-xl leading-relaxed opacity-60 font-medium" style={{ color: currentTheme.muted }}>{item.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-32 pb-16 px-6 border-t" style={{ borderColor: currentTheme.border }}>
              <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="max-w-2xl text-center mb-20">
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center rotate-3 shadow-lg">
                      <span className="text-white font-black text-2xl -rotate-3">E</span>
                    </div>
                    <span className="font-black text-4xl md:text-6xl tracking-tighter uppercase">ELITE <span className="text-red-500">TRAINING</span></span>
                  </div>
                  <p className="text-xl opacity-60 font-medium mb-12">Clarté, précision, excellence. Définissez le futur avec l'IA.</p>
                  <div className="flex justify-center gap-6">
                    {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                      <a key={i} href="#" className="w-14 h-14 rounded-full glass-dark border border-white/10 flex items-center justify-center hover:border-red-500/50 hover:text-red-500 transition-all">
                        <Icon size={24} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="w-full pt-16 border-t flex flex-col md:flex-row justify-between items-center gap-10 opacity-40 text-[10px] font-black uppercase tracking-[0.4em]" style={{ borderColor: currentTheme.border }}>
                  <p>© 2025 ELITE TRAINING — RED EDITION.</p>
                  <div className="flex gap-10">
                    <a href="#" className="hover:text-red-500 transition-colors">Mentions Légales</a>
                    <a href="#" className="hover:text-red-500 transition-colors">Confidentialité</a>
                  </div>
                </div>
              </div>
            </footer>

            {/* Support Trigger */}
            <button
              onClick={() => setIsSupportOpen(true)}
              className="fixed bottom-12 right-12 w-20 h-20 bg-red-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-red-500/40 hover:scale-110 active:scale-95 transition-all z-[70] group border-4 border-white dark:border-[#0B0B0F]"
            >
              <Bell size={36} className="group-hover:animate-bounce" />
              <span className="absolute right-24 bg-white dark:bg-[#12121A] text-slate-900 dark:text-white px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-widest shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
                AIDE EXPERTE
              </span>
            </button>

            {/* Preset Switcher (Mobile/Desktop) */}
            <div className="fixed bottom-12 left-12 z-[50] flex flex-col gap-3 scale-90 md:scale-100 origin-bottom-left">
              {(Object.keys(CONFIG.presets) as PresetKey[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setActivePreset(p)}
                  className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all border shadow-2xl ${activePreset === p ? 'bg-red-500 text-white border-red-500 scale-105' : 'glass-dark border-white/10 hover:border-red-500/50'}`}
                >
                  {p}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {isSupportOpen && <SupportMenu isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
