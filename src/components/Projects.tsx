"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight, ShieldCheck, Layers, Box, BookOpen, CreditCard, Warehouse } from "lucide-react";

export default function Projects() {
  const premiumEase = [0.16, 1, 0.3, 1];

  const projectFeed = [
    {
      id: "PROJ-01",
      title: "Integrated Ministry Management System",
      category: "GovTech / Infrastructure",
      description: "Engineered an administrative framework and public digital data portal designed to centralize municipal operations and eliminate structural technical debt.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      icon: Layers,
    },
    {
      id: "PROJ-02",
      title: "SchoolPay Ecosystem",
      category: "FinTech / EdTech",
      description: "A secure institutional payment layer optimized for seamless educational transactions, automated fee tracking, and real-time ledger settlement.",
      tech: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
      icon: CreditCard,
    },
    {
      id: "PROJ-03",
      title: "African Quranic Reciters Platform",
      category: "Digital Archive / Media Infrastructure",
      description: "A high-performance digital content portal and streaming index dedicated to preserving, organizing, and serving high-fidelity Quranic audio streams across the continent.",
      tech: ["React.js", "PHP", "MySQL Systems", "Tailwind CSS"],
      icon: BookOpen,
    },
    {
      id: "PROJ-04",
      title: "Classic Inventory System",
      category: "Enterprise ERP / System Logic",
      description: "Developed a centralized inventory and resource tracking application focused on relational database integrity, strict stock monitoring, and automated restock workflows.",
      tech: ["React.js", "PHP", "MySQL Systems", "Tailwind CSS"],
      icon: Warehouse,
    },
    {
      id: "PROJ-05",
      title: "Global Freight & Import Tracker",
      category: "Logistics / Real-Time Data",
      description: "Designed a real-time transit telemetry platform allowing cross-border clients and administrators to track products across active maritime distribution channels.",
      tech: ["Next.js", "Node.js", "REST Architecture", "Prisma"],
      icon: Box,
    },
  ];

  return (
    <section id="projects" className="py-32 bg-[#020712] px-6 md:px-16 lg:px-24 border-t border-slate-950 relative overflow-hidden">
      
      {/* Background Matrix Sync */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/60 border border-sky-500/20 px-3 py-1 rounded-md">
            <Briefcase size={12} className="text-sky-400" />
            <span className="font-mono text-[10px] tracking-widest text-sky-400 uppercase">CASE_STUDIES // 02</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Selected Production Systems.
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
            A precise record of applications engineered to solve complex operational challenges, optimize data persistence, and ensure exceptional uptime.
          </p>
        </div>

        {/* Dynamic Project Layout Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {projectFeed.map((project, idx) => {
            const Icon = project.icon;
            
            // Grid pacing: First project spans full width (12 columns), rest sit perfectly side-by-side (6 columns)
            const isWide = idx === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: premiumEase, delay: idx * 0.05 }}
                className={`group relative bg-slate-950/40 border border-slate-900 rounded-2xl p-6 md:p-8 backdrop-blur-md overflow-hidden flex flex-col justify-between hover:border-sky-500/30 transition-all duration-500 hover:shadow-[0_20px_40px_-20px_rgba(56,189,248,0.15)] ${
                  isWide ? "lg:col-span-12" : "lg:col-span-6"
                }`}
              >
                {/* Micro Ambient Glow Field Behind Project Icon */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/0 group-hover:bg-sky-500/5 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />

                <div className="space-y-6">
                  {/* Metadata Track */}
                  <div className="flex items-center justify-between border-b border-slate-900/60 pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-slate-900/80 border border-slate-800 rounded-lg text-sky-400">
                        <Icon size={16} />
                      </div>
                      <div>
                        <span className="font-mono text-[9px] tracking-widest text-slate-500 block uppercase">{project.id}</span>
                        <span className="text-[11px] font-mono font-medium text-sky-400 tracking-wider uppercase">{project.category}</span>
                      </div>
                    </div>
                    
                    {/* Upper Right Action Reticle */}
                    <div className="w-8 h-8 rounded-full border border-slate-900 flex items-center justify-center text-slate-500 group-hover:text-white group-hover:border-sky-500/30 group-hover:bg-sky-500/10 transition-all duration-300">
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Core Information Block */}
                  <div className={`space-y-2 ${isWide ? "max-w-2xl" : ""}`}>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Built With Component Pills */}
                <div className="flex flex-wrap gap-2 pt-8">
                  {project.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-1 bg-slate-900/40 border border-slate-900 text-slate-400 font-mono text-[10px] rounded-md tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}