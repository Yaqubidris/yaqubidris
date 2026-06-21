"use client";

import { motion } from "framer-motion";
import { User, Terminal, Cpu, Award, Milestone } from "lucide-react";

export default function About() {
const premiumEase = [0.16, 1, 0.3, 1] as const;

  const coreMetrics = [
    { icon: Cpu, label: "Core Focus", value: "Enterprise Architecture" },
    { icon: Milestone, label: "Location Node", value: "Kano, Nigeria" },
    { icon: Award, label: "Execution Style", value: "Clean, Scalable, Typed" },
  ];

  return (
    <section id="about" className="py-32 bg-[#020712] px-6 md:px-16 lg:px-24 border-t border-slate-950 relative overflow-hidden">
      
      {/* Background Matrix Sync */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-center">
        
        {/* Left Column: Technical Identity Profile */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-slate-900/60 border border-sky-500/20 px-3 py-1 rounded-md">
            <User size={12} className="text-sky-400" />
            <span className="font-mono text-[10px] tracking-widest text-sky-400 uppercase">IDENTITY_MANIFEST // 01</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Engineering Software <br />
            With Absolute Intent.
          </h2>

          <div className="space-y-4 text-slate-400 text-sm md:text-base font-light leading-relaxed">
            <p>
              I am a software engineer dedicated to building high-performance web systems and robust digital infrastructure. I look at software development through an architectural lens—where front-end fluidity must match backend integrity perfectly.
            </p>
            <p>
              Whether parsing raw datasets into optimized relational databases or wiring high-speed APIs, my objective remains consistent: converting complex operational mechanics into clean, highly maintainable, and reliable user realities.
            </p>
          </div>
        </div>

        {/* Right Column: Diagnostic Technical Matrix Card */}
        <div className="lg:col-span-6 w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="w-full bg-slate-950/40 border border-slate-900 rounded-2xl p-6 md:p-8 backdrop-blur-md relative overflow-hidden group"
          >
            {/* Upper System Interface Bar */}
            <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <Terminal size={14} className="text-sky-400" />
                <span className="font-mono text-[10px] text-slate-500 tracking-wider">DIAGNOSTIC_METADATA.LOG</span>
              </div>
              <div className="flex space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <div className="w-2 h-2 rounded-full bg-slate-800" />
                <div className="w-2 h-2 rounded-full bg-slate-800" />
              </div>
            </div>

            {/* Diagnostic Fields */}
            <div className="space-y-4">
              {coreMetrics.map((metric, idx) => {
                const Icon = metric.icon;
                return (
                  <div key={idx} className="p-4 bg-slate-900/20 border border-slate-900/60 rounded-xl flex items-center space-x-4 hover:border-sky-500/10 transition-colors duration-300">
                    <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sky-400 group-hover:text-white transition-colors">
                      <Icon size={16} />
                    </div>
                    <div className="space-y-0.5">
                      <div className="font-mono text-[9px] tracking-wider text-slate-500 uppercase">{metric.label}</div>
                      <div className="text-sm font-semibold text-slate-200">{metric.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}