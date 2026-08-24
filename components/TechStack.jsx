"use client";

import { Code2, Cpu, Workflow, Flame, Layers, Image as ImageIcon, Palette } from "lucide-react";

const STACK_ITEMS = [
  {
    name: "MERN Stack",
    icon: Code2,
    tag: "Full-Stack",
    desc: "MongoDB, Express.js, React, and Node.js for scalable web apps.",
  },
  {
    name: "Next.js",
    icon: Code2,
    tag: "Frontend",
    desc: "Modern SSR, App Router, Server Actions & fast responsive interfaces.",
  },
  {
    name: "n8n Automation",
    icon: Workflow,
    tag: "Automation",
    desc: "Custom webhooks, automated workflows & multi-app API sync.",
  },
  {
    name: "Firebase",
    icon: Flame,
    tag: "Cloud Services",
    desc: "Authentication, cloud databases, security rules & serverless infrastructure.",
  },
  {
    name: "AI Integration",
    icon: Cpu,
    tag: "AI & LLM",
    desc: "OpenAI GPT models, prompt engineering, lead scoring & AI chatbots.",
  },
  {
    name: "Cloudinary",
    icon: ImageIcon,
    tag: "Media CDN",
    desc: "Automated media optimization, cloud image transformations & CDN storage.",
  },
  {
    name: "Figma",
    icon: Palette,
    tag: "UI/UX Design",
    desc: "Interface prototyping, visual layouts, design systems & responsive wireframes.",
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-20 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-semibold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-blue-600" /> Engineering Stack
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            Skills &amp; Tech Stack
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Core technologies and design tools used to build modern web solutions and automated systems.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STACK_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="p-6 rounded-3xl bg-[#f8fafc] border border-slate-200/90 hover:border-slate-400 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-950 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-[11px] font-mono bg-white text-slate-600 px-2.5 py-0.5 rounded-full border border-slate-200 font-medium">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
