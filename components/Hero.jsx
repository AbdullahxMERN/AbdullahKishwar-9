"use client";

import { ArrowUpRight, Code2, Cpu, Workflow, Flame } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-24 pb-16 md:pt-24 lg:pt-16 xl:pt-14 md:pb-24 overflow-hidden bg-[#f8fafc]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* GIANT NAME HEADLINE BACKGROUND */}
        <div className="text-center select-none pt-2 pb-2 sm:pb-6">
          <h1 className="text-[12vw] sm:text-[11vw] leading-none font-black tracking-tight flex items-center justify-center flex-wrap gap-x-[0.2em] font-sans">
            <span className="text-stroke uppercase">ABDULLAH</span>
            <span className="text-slate-950 uppercase">KISHWAR</span>
          </h1>
        </div>

        {/* CENTER PORTRAIT & TWO-COLUMN SUB-HERO LAYOUT */}
        <div className="relative -mt-4 sm:-mt-8 md:-mt-16 lg:-mt-32 xl:-mt-30 z-10 grid lg:grid-cols-12 gap-8 items-end">
          {/* Left Column: Role & Bio */}
          <div className="lg:col-span-4 space-y-6 order-2 lg:order-1 text-center lg:text-left pb-4">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold block">
                Software Engineer @ Code 90
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Full-Stack Developer
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
                Building Business Solutions with AI Integration & n8n Automation
                | MERN Stack & Next.js
              </p>
            </div>

            {/* Let's Collaborate CTA Button */}
            <div className="pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-950 text-white font-bold text-xs sm:text-sm shadow-xl hover:bg-slate-800 hover:scale-[1.03] active:scale-[0.97] transition-all"
              >
                <span>Let's collaborate</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Tech Badges List */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-mono font-medium shadow-sm flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-blue-600" /> MERN
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-mono font-medium shadow-sm flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-cyan-600" /> Next.js
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-mono font-medium shadow-sm flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-500" /> Firebase
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-mono font-medium shadow-sm flex items-center gap-1.5">
                <Workflow className="w-3.5 h-3.5 text-purple-600" /> n8n
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[11px] font-mono font-medium shadow-sm flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-emerald-600" /> AI Integration
              </span>
            </div>
          </div>

          {/* Center Column: Portrait Image */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center items-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[560px] group flex justify-center">
              <img
                src="/profile_transparent.png?v=6"
                alt="Abdullah Kishwar"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-all duration-500 relative z-20"
              />
            </div>
          </div>

          {/* Right Column: Vertical Social Pill Cards */}
          <div className="lg:col-span-4 order-3 flex flex-col items-center lg:items-end space-y-2.5 sm:space-y-3 pb-4">
            <a
              href="https://www.linkedin.com/in/abdullah-khan-1619383a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-44 sm:w-48 px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-400 hover:scale-[1.02] transition-all flex items-center justify-between text-xs font-semibold text-slate-800"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 fill-slate-800" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>LinkedIn</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href="mailto:abdullahkishwar80@gmail.com"
              className="w-44 sm:w-48 px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-400 hover:scale-[1.02] transition-all flex items-center justify-between text-xs font-semibold text-slate-800"
            >
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 stroke-slate-800 fill-none stroke-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>Email Direct</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href="#projects"
              className="w-44 sm:w-48 px-5 py-3 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-400 hover:scale-[1.02] transition-all flex items-center justify-between text-xs font-semibold text-slate-800"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>Live Projects</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <div className="w-44 sm:w-48 px-5 py-3 rounded-full bg-slate-950 text-white shadow-sm flex items-center justify-between text-xs font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Code 90 Dev</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                Present
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
