"use client";

import {
  Code2,
  Server,
  Cpu,
  Flame,
  Workflow,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const SERVICES = [
  {
    num: "01",
    title: "Web Development",
    icon: Code2,
    desc: "Building responsive, modern, high-performance web applications tailored to deliver seamless user experiences and drive business growth.",
    techs: [
      "Full-Stack Apps",
      "Responsive UI",
      "Custom Solutions",
      "High Performance",
      "Clean Code",
    ],
  },
  {
    num: "02",
    title: "SaaS Development",
    icon: Server,
    desc: "Architecting and building multi-tenant SaaS platforms with secure authentication, workspace isolation, subscription ready structures, and user analytics.",
    techs: [
      "Multi-Tenant Platforms",
      "User Workspaces",
      "Subscription Ready",
      "Access Control",
      "Cloud Scale",
    ],
  },
  {
    num: "03",
    title: "AI Integration & LLM Solutions",
    icon: Cpu,
    desc: "Integrating OpenAI GPT models, intelligent AI chatbots, automated content processing, and LLM API pipelines into modern web applications.",
    techs: [
      "OpenAI API",
      "AI Chatbots",
      "Prompt Engineering",
      "JSON Pipelines",
    ],
  },
  {
    num: "04",
    title: "n8n Workflow Automation",
    icon: Workflow,
    desc: "Designing end-to-end automated workflows, custom n8n webhooks, automated email systems, and multi-app data synchronization.",
    techs: [
      "n8n Workflows",
      "Custom Webhooks",
      "CRM Sync",
      "API Automation",
      "Data Pipelines",
    ],
  },
  {
    num: "05",
    title: "System Design & Architecture",
    icon: Server,
    desc: "Architecting multi-tenant databases, role-based access control (RBAC), authentication flows, and scalable cloud application structures.",
    techs: [
      "System Design",
      "Multi-Tenant DB",
      "RBAC",
      "JWT Auth",
      "Clean Architecture",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-white border-y border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight mt-1">
              Services &amp; Expertise
            </h2>
          </div>

          <p className="text-slate-600 text-sm max-w-md leading-relaxed">
            Full-stack engineering delivery — Web Development, SaaS Platforms,
            AI Integrations, n8n Automations, and System Design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.num}
                className="p-8 rounded-3xl bg-[#f8fafc] border border-slate-200/90 hover:border-slate-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono font-bold text-slate-400">
                      {service.num}
                    </span>
                    <div className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-950 group-hover:bg-slate-950 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                      {service.desc}
                    </p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="pt-6 mt-6 border-t border-slate-200/80 flex flex-wrap gap-1.5">
                  {service.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 font-mono text-[11px] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
