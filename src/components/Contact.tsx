"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Send, Terminal, ShieldAlert, Globe2, Mail, Phone, MessageSquare } from "lucide-react";
import { transmitMessageAction } from "@/app/actions";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "transmitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("transmitting");
    const formData = new FormData(formRef.current);
    
    const result = await transmitMessageAction(formData);
    
    if (result.success) {
      setStatus("success");
      formRef.current.reset();
    } else {
      setStatus("error");
      setErrorMessage(result.error || "An infrastructure error occurred.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#020712] px-6 md:px-16 lg:px-24 border-t border-slate-950 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left Column: Direct Communication Hub */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-slate-900/60 border border-sky-500/20 px-3 py-1 rounded-md">
                <Terminal size={12} className="text-sky-400" />
                <span className="font-mono text-[10px] tracking-widest text-sky-400 uppercase">SECURE_NODE // 04</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
                Initiate <br />Collaboration.
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed max-w-sm">
                Ready to construct reliable digital assets or scale software infrastructure? Use the form to stream a secure notification directly to my inbox, or reach out instantly via the channels below.
              </p>
            </div>

            {/* Direct Channels Array */}
            <div className="space-y-3 pt-4">
              <a 
                href="mailto:idrisyakubu816@gmail.com" 
                className="flex items-center space-x-4 p-3 bg-slate-950/40 border border-slate-900 rounded-xl hover:border-sky-500/20 hover:bg-slate-900/30 transition-all duration-300 group"
              >
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-sky-400 group-hover:text-white transition-colors">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-wider text-slate-500 uppercase">Secure Email</div>
                  <div className="text-xs md:text-sm font-medium text-slate-200">yakubuidris344@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+2348137215231" 
                className="flex items-center space-x-4 p-3 bg-slate-950/40 border border-slate-900 rounded-xl hover:border-sky-500/20 hover:bg-slate-900/30 transition-all duration-300 group"
              >
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-indigo-400 group-hover:text-white transition-colors">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-wider text-slate-500 uppercase">Voice Direct</div>
                  <div className="text-xs md:text-sm font-medium text-slate-200">+234 814 036 7355</div>
                </div>
              </a>

              <a 
                href="https://wa.me/2348137215231" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-4 p-3 bg-slate-950/40 border border-slate-900 rounded-xl hover:border-emerald-500/20 hover:bg-slate-900/30 transition-all duration-300 group"
              >
                <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-emerald-400 group-hover:text-white transition-colors">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <div className="font-mono text-[9px] tracking-wider text-slate-500 uppercase">WhatsApp Secure</div>
                  <div className="text-xs md:text-sm font-medium text-slate-200">Chat Instantly</div>
                </div>
              </a>
            </div>
          </div>

          {/* Infrastructure Health Badges */}
          <div className="space-y-2 font-mono text-[11px] text-slate-500 max-w-xs border-t border-slate-900/60 pt-6 hidden lg:block">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><Globe2 size={12} className="text-indigo-400" /> Current Node</span>
              <span className="text-slate-300">Kano, NG</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5"><ShieldAlert size={12} className="text-emerald-400" /> Availability Status</span>
              <span className="text-emerald-400">Active / Booking Q3</span>
            </div>
          </div>
        </div>

        {/* Right Column: Encrypted Terminal Form */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-slate-950/40 border border-slate-900 rounded-2xl p-6 md:p-10 backdrop-blur-md relative"
          >
            <div className="absolute top-3 right-3 font-mono text-[9px] text-slate-700 select-none">SYS_FORM_V1.3</div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              
              {/* Field 1: Identity */}
              <div className="space-y-2 relative">
                <label className="block font-mono text-[10px] tracking-widest text-slate-500 uppercase">01 // CLIENT IDENTITY</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Enter your name or enterprise name"
                  onFocus={() => setFocusedInput("name")}
                  onBlur={() => setFocusedInput(null)}
                  className="w-full bg-slate-950/60 border border-slate-900 rounded-lg px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/40 transition-colors duration-300"
                />
                {focusedInput === "name" && (
                  <motion.div layoutId="input-glow" className="absolute inset-0 border border-sky-400/20 rounded-lg pointer-events-none shadow-[0_0_15px_rgba(56,189,248,0.05)]" />
                )}
              </div>

              {/* Field 2: Signal Return Address */}
              <div className="space-y-2 relative">
                <label className="block font-mono text-[10px] tracking-widest text-slate-500 uppercase">02 // SIGNAL RETURN ADDRESS</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="name@company.com"
                  onFocus={() => setFocusedInput("email")}
                  onBlur={() => setFocusedInput(null)}
                  className="w-full bg-slate-950/60 border border-slate-900 rounded-lg px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/40 transition-colors duration-300"
                />
                {focusedInput === "email" && (
                  <motion.div layoutId="input-glow" className="absolute inset-0 border border-sky-400/20 rounded-lg pointer-events-none shadow-[0_0_15px_rgba(56,189,248,0.05)]" />
                )}
              </div>

              {/* Field 3: Scope Manifest */}
              <div className="space-y-2 relative">
                <label className="block font-mono text-[10px] tracking-widest text-slate-500 uppercase">03 // PROJECT SCOPE MANIFEST</label>
                <textarea 
                  name="message"
                  rows={4}
                  required
                  placeholder="Outline the technical parameters, system requirements, or objectives..."
                  onFocus={() => setFocusedInput("msg")}
                  onBlur={() => setFocusedInput(null)}
                  className="w-full bg-slate-950/60 border border-slate-900 rounded-lg px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/40 transition-colors duration-300 resize-none"
                />
                {focusedInput === "msg" && (
                  <motion.div layoutId="input-glow" className="absolute inset-0 border border-sky-400/20 rounded-lg pointer-events-none shadow-[0_0_15px_rgba(56,189,248,0.05)]" />
                )}
              </div>

              {/* Submit Trigger Node */}
              <button
                type="submit"
                disabled={status === "transmitting" || status === "success"}
                className="w-full group relative py-4 bg-sky-400 text-slate-950 font-bold text-xs tracking-widest uppercase rounded-lg overflow-hidden flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 font-mono"
              >
                {status === "idle" && (
                  <>
                    Transmit Protocol <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
                {status === "transmitting" && <span className="animate-pulse">Broadcasting Signal...</span>}
                {status === "success" && <span className="text-emerald-950 font-black">Transmission Acknowledged ✓</span>}
                {status === "error" && <span className="text-rose-950 font-black">Failed: {errorMessage}</span>}
              </button>

            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}