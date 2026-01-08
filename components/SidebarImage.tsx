
import React from 'react';

export const SidebarImage: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-2xl">
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
        alt="Elite Training Environment"
        className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-red-600/80 via-red-500/20 to-transparent" />
      
      <div className="absolute bottom-10 left-10 right-10">
        <div className="backdrop-blur-xl bg-white/10 p-8 rounded-[2rem] border border-white/20 text-white shadow-2xl">
          <h3 className="text-3xl font-black tracking-tight mb-2">Devenez un Expert IA</h3>
          <p className="text-lg font-medium opacity-90 leading-relaxed">
            Standardisez vos processus et boostez votre productivité avec nos programmes certifiants.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <img key={i} className="w-10 h-10 rounded-full border-2 border-red-500 object-cover" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
              ))}
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-red-100">+10k Alumni</span>
          </div>
        </div>
      </div>
    </div>
  );
};
