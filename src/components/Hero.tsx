"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Code2, Terminal, ShieldCheck } from "lucide-react";

export default function Hero() {
  const premiumEase = [0.16, 1, 0.3, 1];
  const sectionRef = useRef<HTMLDivElement>(null);

  // ==========================================
  // UNBOUNDED 3D MOUSE PARALLAX MATRIX
  // ==========================================
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 35, stiffness: 220, mass: 0.5 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  // Separate spatial translation vectors for depth disparity
  const portraitX = useTransform(xSpring, [-0.5, 0.5], [-25, 25]);
  const portraitY = useTransform(ySpring, [-0.5, 0.5], [-15, 15]);
  
  const auraX = useTransform(xSpring, [-0.5, 0.5], [40, -40]);
  const auraY = useTransform(ySpring, [-0.5, 0.5], [25, -25]);

  const handleGlobalMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const { width, height } = sectionRef.current.getBoundingClientRect();
    
    const mouseX = e.clientX / width - 0.5;
    const mouseY = e.clientY / height - 0.5;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleGlobalMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // ==========================================
  // CTA BUTTON MAGNETISM ENGINE
  // ==========================================
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleButtonMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const bx = e.clientX - (rect.left + rect.width / 2);
    const by = e.clientY - (rect.top + rect.height / 2);
    setBtnPos({ x: bx * 0.35, y: by * 0.35 });
  };

  const handleButtonLeave = () => {
    setBtnPos({ x: 0, y: 0 });
  };

  // ==========================================
  // ENTRY STAGGERING
  // ==========================================
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.85, ease: premiumEase },
    },
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleGlobalMouseMove}
      onMouseLeave={handleGlobalMouseLeave}
      className="relative min-h-screen w-full flex items-center bg-[#020712] text-[#f4f4f5] px-6 md:px-16 lg:px-24 overflow-hidden pt-32 lg:pt-0"
    >
      {/* Deep Cyber Technical Grid Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-950/20 rounded-full blur-[160px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center z-10 relative">
        
        {/* Left Column: Cyber-Tailored Profile */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 space-y-6 md:space-y-8 relative z-20"
        >
          {/* Cyber Status Badge */}
          <motion.div variants={textVariants} className="inline-flex items-center space-x-2 bg-slate-900/50 border border-sky-500/20 px-4 py-1.5 rounded-full backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest text-sky-400 uppercase">
              Full-Stack Software Engineer // Available for Global Infrastructure
            </span>
          </motion.div>

          {/* Electric Cyan Name & Typography */}
          <div className="space-y-3">
            <motion.p variants={textVariants} className="font-mono text-xs md:text-sm tracking-widest text-sky-400 uppercase font-bold drop-shadow-[0_0_12px_rgba(56,189,248,0.3)]">
              YAKUBU IDRIS
            </motion.p>
            <motion.h1 
              variants={textVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.04] bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-500"
            >
              Architecting High-Performance Full-Stack Systems.
            </motion.h1>
          </div>

          {/* Core Strategic Narrative */}
          <motion.p 
            variants={textVariants}
            className="text-sm md:text-base text-slate-400 max-w-xl font-light leading-relaxed"
          >
            I engineer reliable software solutions and web infrastructure. Specializing in highly responsive frontends, robust server layouts, and optimized relational databases—turning complex operational requirements into fluid user experiences.
          </motion.p>

          {/* Blueprinted Tech Stack Anchor */}
          <motion.div variants={textVariants} className="flex items-center space-x-6 text-[11px] font-mono text-slate-500 border-y border-slate-900 py-3 max-w-md">
            <span className="flex items-center gap-1.5"><Terminal size={12} className="text-sky-400" /> Next.js / React</span>
            <span className="flex items-center gap-1.5"><Code2 size={12} className="text-indigo-400" /> TypeScript / PHP</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-emerald-400" /> MySQL Systems</span>
          </motion.div>

          {/* Actions */}
          <motion.div variants={textVariants} className="flex flex-wrap gap-4 pt-2">
            
            {/* Magnetic White-Hot Core Button */}
            <motion.a 
              ref={buttonRef}
              onMouseMove={handleButtonMove}
              onMouseLeave={handleButtonLeave}
              animate={{ x: btnPos.x, y: btnPos.y }}
              transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
              href="#projects" 
              className="group relative px-6 py-3.5 bg-sky-400 text-slate-950 font-bold text-xs tracking-wider uppercase rounded-md overflow-hidden block shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-shadow duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Case Studies <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </motion.a>

            <a 
              href="#contact"
              onClick={handleScrollToContact}
              className="px-6 py-3.5 bg-slate-950/60 border border-slate-800 text-slate-300 font-semibold text-xs tracking-wider uppercase rounded-md hover:bg-slate-900 hover:text-sky-400 hover:border-sky-500/40 transition-all duration-300 flex items-center"
            >
              Initiate Collaboration
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Frameless Cutout on Cyber Aura Layout */}
        <div className="lg:col-span-6 h-full flex flex-col justify-end items-center lg:items-end relative min-h-[450px] lg:min-h-screen">
          
          {/* Cyber Halo Light Field Array */}
          <motion.div 
            style={{ x: auraX, y: auraY }}
            className="absolute top-1/2 lg:top-1/2 left-1/2 lg:left-2/3 -translate-x-1/2 -translate-y-1/2 w-[380px] md:w-[500px] lg:w-[650px] aspect-square pointer-events-none z-0"
          >
            <div className="absolute inset-0 bg-radial-gradient from-sky-500/20 via-indigo-500/15 to-transparent blur-3xl rounded-full mix-blend-screen" />
            <div className="absolute top-4 right-12 w-72 h-72 bg-sky-400/10 blur-3xl rounded-full mix-blend-screen animate-pulse" />
            
            <div className="absolute inset-0 border border-sky-500/5 rounded-full scale-90" />
            <div className="absolute inset-0 border border-indigo-500/5 rounded-full scale-75" />
          </motion.div>

          {/* Frameless Portrait Cutout Container */}
          <motion.div
            style={{ x: portraitX, y: portraitY }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: premiumEase, delay: 0.2 }}
            className="relative w-[95%] sm:w-[85%] lg:w-[110%] xl:w-[125%] h-[400px] sm:h-[500px] lg:h-[85vh] xl:h-[90vh] z-10 lg:absolute lg:bottom-0 lg:-right-16 select-none pointer-events-none"
          >
            <Image
              src="/portrait-2.png" 
              alt="Yakubu Idris"
              fill
              priority
              className="object-contain object-bottom transition-all duration-1000 ease-out grayscale group-hover:grayscale-0"
              sizes="(max-w-1024px) 100vw, 900px"
            />
            
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020712] via-[#020712]/40 to-transparent z-20" />
          </motion.div>

        </div>

      </div>

      {/* Cyber Technical Track */}
      <div className="absolute bottom-8 left-6 md:left-16 lg:left-24 hidden md:flex items-center space-x-3 text-slate-700 font-mono text-[10px] tracking-widest uppercase pointer-events-none">
        <span className="text-slate-600 animate-pulse">SYS_READY // SCROLL EXPERIENCE</span>
        <div className="w-12 h-[1px] bg-slate-900" />
      </div>
    </section>
  );
}