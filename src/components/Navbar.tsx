"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Cpu, Mail, Menu, X } from "lucide-react";

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About Me", icon: User },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "capabilities", label: "Capabilities", icon: Cpu },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  // Monitor scroll positioning to update nav structural glass opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Header Bar (Brand Anchor) */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "bg-[#020712]/80 backdrop-blur-md border-b border-slate-900/40" : "bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-3 select-none pointer-events-none">
          <div className="h-7 w-7 rounded bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center text-[10px] font-black text-slate-950 tracking-tighter">
            YI
          </div>
          <span className="font-mono text-xs tracking-[0.25em] text-white font-bold uppercase">
            Y.IDRIS // PROTOCOL
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-2 bg-slate-950/40 border border-slate-900/60 px-3 py-1 rounded-md backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span className="font-mono text-[9px] tracking-widest text-slate-400 uppercase">SYS_STATUS: ONLINE</span>
        </div>
      </motion.header>

      {/* Floating Cinematic Control Deck (Bottom Navigation) */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-full px-4">
        <motion.div 
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="bg-slate-950/60 border border-slate-900 px-3 py-2 rounded-full backdrop-blur-xl shadow-[0_24px_50px_-12px_rgba(2,7,18,0.7)] flex items-center space-x-1 md:space-x-2"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="relative p-3 md:px-4 md:py-2.5 rounded-full text-slate-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group focus:outline-none"
              >
                {/* Visual Accent Spotlight (Sliding Hover Capsule) */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/20 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                
                <Icon size={16} className={`relative z-10 ${isActive ? "text-sky-400" : "group-hover:scale-105 transition-transform"}`} />
                <span className="hidden md:inline relative z-10 font-mono text-[11px] tracking-wider uppercase font-medium">
                  {item.label}
                </span>
              </button>
            );
          })}
        </motion.div>
      </nav>
    </>
  );
}