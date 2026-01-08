
import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Award, 
  Users, 
  Settings, 
  HelpCircle,
  ChevronRight,
  LogOut,
  Sparkles
} from 'lucide-react';
import { Logo } from '../Logo';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onLogout }) => {
  const menuItems = [
    { id: 'overview', icon: <LayoutDashboard size={20} />, label: "Tableau de bord" },
    { id: 'courses', icon: <BookOpen size={20} />, label: "Mes Formations" },
    { id: 'certificates', icon: <Award size={20} />, label: "Certifications" },
    { id: 'community', icon: <Users size={20} />, label: "Communauté" },
    { id: 'settings', icon: <Settings size={20} />, label: "Paramètres" },
  ];

  return (
    <aside className="w-72 h-screen border-r border-slate-200 dark:border-white/5 flex flex-col bg-white dark:bg-[#0B0B0F] sticky top-0 z-40 transition-colors duration-300">
      <div className="p-8">
        <Logo />
      </div>

      <nav className="flex-1 px-4 mt-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all group ${
              activeTab === item.id 
                ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-white/5 hover:text-red-500'
            }`}
          >
            <span className={`${activeTab === item.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
              {item.icon}
            </span>
            <span className="text-sm font-bold uppercase tracking-widest flex-1 text-left">
              {item.label}
            </span>
            {activeTab === item.id && <ChevronRight size={14} />}
          </button>
        ))}
      </nav>

      <div className="p-6 mt-auto">
        <div className="bg-slate-50 dark:bg-white/5 rounded-[2rem] p-6 mb-6 border border-slate-200 dark:border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 text-red-500/10 group-hover:scale-110 transition-transform">
            <Sparkles size={40} />
          </div>
          <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Pass Elite</p>
          <p className="text-xs font-bold text-slate-900 dark:text-white mb-3">Accès Illimité IA</p>
          <div className="w-full bg-slate-200 dark:bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div className="bg-red-500 h-full w-3/4 rounded-full" />
          </div>
        </div>

        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-slate-500 dark:text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all font-bold text-sm uppercase tracking-widest"
        >
          <LogOut size={20} />
          Déconnexion
        </button>
      </div>
    </aside>
  );
};
