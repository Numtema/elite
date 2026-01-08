
import React from 'react';
import { X, MessageCircle, Mail, Phone, UserCheck } from 'lucide-react';
import { THEME } from '../theme';
import { motion } from 'framer-motion';

interface SupportMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportMenu: React.FC<SupportMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const options = [
    { name: 'Conseiller Elite', icon: <UserCheck className="w-6 h-6" />, color: THEME.colors.support.direct },
    { name: 'WhatsApp Live', icon: <MessageCircle className="w-6 h-6" />, color: THEME.colors.support.whatsapp },
    { name: 'Support Mail', icon: <Mail className="w-6 h-6" />, color: THEME.colors.support.mail },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div 
        initial={{ y: "100%" }} 
        animate={{ y: 0 }} 
        className="relative w-full max-w-lg bg-white rounded-t-[3rem] md:rounded-[3rem] shadow-2xl overflow-hidden"
      >
        <div className="bg-red-500 p-8 text-white">
          <button onClick={onClose} className="absolute top-8 right-8 hover:bg-white/20 p-2 rounded-full transition-all">
            <X size={24} />
          </button>
          <h2 className="text-2xl font-black uppercase tracking-tight">{THEME.content.support.headerTitle}</h2>
          <p className="opacity-80 font-medium">{THEME.content.support.headerSub}</p>
        </div>

        <div className="p-10">
          <h3 className="text-2xl font-black text-slate-900 mb-8 leading-tight">{THEME.content.support.mainQuestion}</h3>
          <div className="space-y-4">
            {options.map((opt) => (
              <button
                key={opt.name}
                style={{ backgroundColor: opt.color.bg }}
                className="w-full flex items-center gap-6 p-6 rounded-[2rem] border border-black/5 hover:scale-[1.02] transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  {opt.icon}
                </div>
                <span className="text-xl font-black text-slate-900">{opt.name}</span>
              </button>
            ))}
          </div>
          <p className="mt-10 text-center text-xs font-bold text-slate-400 uppercase tracking-widest italic">{THEME.content.support.availability}</p>
        </div>
      </motion.div>
    </div>
  );
};
