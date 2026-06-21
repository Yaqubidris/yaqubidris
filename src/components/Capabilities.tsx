"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Database, Code2, ShieldAlert, Terminal } from "lucide-react";

export default function Capabilities() {
  const premiumEase = [0.16, 1, 0.3, 1];

  const systemStacks = [
    {
      id: "STACK-01",
      title: "Backend & Systems Infrastructure",
      icon: Server,
      description: "Architecting reliable application engines, data ingestion pathways, and high-performance server logic.",
      tools: ["Node.js", "PHP Core", "RESTful Architecture", "API Engineering", "Next.js Server Actions"],
    },
    {
      id: "STACK-02",
      title: "Data Architecture & Persistence",
      icon: Database,
      description: "Designing optimized data schemas, handling complex query structures, and ensuring transactional durability.",
      tools: ["MySQL Systems", "PostgreSQL", "Prisma ORM", "Relational Modeling", "Query Optimization"],
    },
    {
      id: "STACK-03",
      title: "Client-Side Engineering",
      icon: Code2,
      description: "Developing highly fluid, responsive web systems using strict typing and motion design tokens.",
      tools: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion Matrix"],
    },
  ];

  return (
    <section id="capabilities" className="py-32 bg-[#020712] px-6 md:px-16 lg:px-24 border-t border-slate-950 relative overflow-hidden">
      
      {/* Background Matrix Sync */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      
      {/* Subtle Blue/Indigo Light Leak */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-slate-900/60 border border-sky-500/20 px-3 py-1 rounded-md">
            <Cpu size={12} className="text-sky-400" />
            <span className="font-mono text-[10px] tracking-widest text-sky-400 uppercase">ENGINEERING_STACK // 03</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            Technical Capabilities.
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-xl">
            A comprehensive breakdown of frameworks, core platforms, and architectural models utilized to bring systems from conceptual design to operational reality.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {systemStacks.map((stack, idx) => {
            const Icon = stack.icon;

            return (
              <motion.div
                key={stack.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: premiumEase, delay: idx * 0.1 }}
                className="group relative bg-slate-950/40 border border-slate-900 rounded-2xl p-6 md:p-8 backdrop-blur-md flex flex-col justify-between hover:border-sky-500/20 transition-all duration-300"
              >
                {/* Upper Deck Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-900/60 pb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-slate-900/80 border border-slate-800 rounded-lg text-sky-400 group-hover:text-white transition-colors">
                        <Icon size={16} />
                      </div>
                      <span className="font-mono text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                        {stack.id}
                      </span>
                    </div>
                    <ShieldAlert size={12} className="text-slate-800 group-hover:text-sky-500/30 transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors duration-300">
                      {stack.title}
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                      {stack.description}
                    </p>
                  </div>
                </div>

                {/* Registry Framework Badges */}
                <div className="pt-8 space-y-2">
                  <div className="font-mono text-[9px] text-slate-600 tracking-widest uppercase mb-3">DEPLOYED_MODULES</div>
                  <div className="flex flex-wrap gap-2">
                    {stack.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-slate-950 border border-slate-900 text-slate-300 font-mono text-[10px] rounded-md transition-colors duration-300 hover:border-sky-500/40 hover:text-sky-400"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}