"use client";

import { useState, useEffect } from "react";
import { Briefcase, Calendar, MapPin, Building, ChevronRight } from "lucide-react";

export default function Experience() {
  const [code90Months, setCode90Months] = useState(5);

  useEffect(() => {
    // Dynamic calculation from Jan 20, 2026
    const start = new Date(2026, 0, 20);
    const now = new Date();
    let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    if (now.getDate() < start.getDate()) months -= 1;
    setCode90Months(Math.max(months, 1));
  }, []);

  return (
    <section id="experience" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-semibold uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" /> Career Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Work Experience &amp; Roles
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
            Hands-on experience building production SaaS platforms, Firebase backends, and AI automation pipelines.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          
          {/* Role 1: Code 90 */}
          <div className="relative group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-slate-950 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
              <div className="w-2 h-2 rounded-full bg-slate-950 animate-ping"></div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#f8fafc] border border-slate-200/90 hover:border-slate-400 transition-all duration-300 shadow-md space-y-4">
              
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <div>
                  <span className="text-xs font-mono text-blue-600 uppercase font-bold block">
                    Current Position
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                    MERN Stack &amp; SaaS Developer
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1 rounded-full bg-slate-950 text-white text-xs font-mono font-bold flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5" /> Code 90
                  </span>
                </div>
              </div>

              {/* Meta information */}
              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-700" /> Present ({code90Months} Months)
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-700" /> Software Engineering Team
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Engineering scalable, multi-tenant SaaS architectures and full-stack web platforms utilizing MongoDB, Express.js, React, Node.js, and Firebase. Establishing database schemas, integrating payment handling logic, creating user workspaces, and designing AI-assisted backend pipelines with n8n to automate recurring business processes.
              </p>

              {/* Bullet Points */}
              <div className="space-y-2 pt-1 text-xs text-slate-700">
                <div className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Architected multi-tenant database isolation models for tenant workspaces in MongoDB &amp; Firebase.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Integrated n8n backend workflow webhooks to automate lead routing &amp; AI prompt processing.</span>
                </div>
                <div className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Built responsive React/Next.js dashboard interfaces with real-time analytics widgets.</span>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {["MongoDB", "Express.js", "React.js", "Node.js", "Firebase", "SaaS Architecture", "n8n Automation", "AI Integration"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-[11px] font-mono font-medium">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* Role 2: Freelance SaaS Builder */}
          <div className="relative group">
            {/* Timeline Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-slate-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
              <div className="w-2 h-2 rounded-full bg-slate-400"></div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-[#f8fafc] border border-slate-200/90 hover:border-slate-400 transition-all duration-300 shadow-md space-y-4">
              
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <div>
                  <span className="text-xs font-mono text-slate-500 uppercase font-bold block">
                    Independent Consultant
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">
                    Freelance SaaS Builder &amp; AI Engineer
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-mono font-bold">
                    Self-Employed
                  </span>
                </div>
              </div>

              {/* Meta information */}
              <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-700" /> 2025 — Present
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-700" /> Remote Worldwide
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Partnering with startups and business clients to design and launch minimum viable SaaS products (MVPs). Handled full-stack MERN integrations, built structured REST APIs, connected external LLM engines, and leveraged Firebase &amp; n8n as a lightweight orchestrator for backend automation pipelines.
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {["MERN Stack", "Firebase", "SaaS MVPs", "REST APIs", "OpenAI LLM", "n8n Webhooks", "Vercel"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-[11px] font-mono font-medium">
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
