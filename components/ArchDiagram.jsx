"use client";

import { useState } from "react";
import { Server, Database, Cpu, Layout, ArrowRight, ShieldCheck, Zap, Layers, Activity, Flame } from "lucide-react";

const NODES = [
  {
    id: "client",
    name: "Client Presentation Layer",
    category: "Frontend & UX",
    icon: Layout,
    color: "from-blue-600 to-cyan-500",
    badge: "Next.js / React",
    description: "Responsive, ultra-fast client interface with server-side rendering, optimized asset loading, and real-time state synchronization.",
    techs: ["Next.js App Router", "React 19", "Tailwind CSS", "JavaScript ES6+", "Redux Toolkit"],
    metrics: ["100 Lighthouse Performance", "<0.8s First Contentful Paint", "SEO & OpenGraph Ready"],
  },
  {
    id: "api",
    name: "REST API & Microservices Gateway",
    category: "Backend Engine",
    icon: Server,
    color: "from-slate-800 to-slate-950",
    badge: "Node.js / Express",
    description: "Centralized backend architecture handling routing, payload validation, JWT authentication, rate limiting, and standard REST endpoints.",
    techs: ["Node.js", "Express.js", "JWT Authentication", "Bcrypt Security", "Cors & Helmet"],
    metrics: ["99.9% API Availability", "<45ms Average Latency", "Strict Input Validation"],
  },
  {
    id: "db",
    name: "Database & Realtime Firebase Layer",
    category: "Data & Realtime",
    icon: Database,
    color: "from-amber-500 to-orange-600",
    badge: "MongoDB & Firebase",
    description: "Multi-tenant document database models paired with Firebase Realtime Database & Auth for instant live state updates and storage.",
    techs: ["MongoDB Atlas", "Firebase Realtime DB", "Firebase Auth", "Mongoose ORM", "Redis Caching"],
    metrics: ["Instant State Sync", "Multi-Tenant Schema Isolation", "Encrypted Data Security"],
  },
  {
    id: "ai",
    name: "AI & n8n Workflow Automation",
    category: "Orchestration",
    icon: Cpu,
    color: "from-purple-600 to-indigo-600",
    badge: "n8n & OpenAI API",
    description: "Asynchronous background orchestrator invoking OpenAI APIs, webhooks, and n8n pipelines to automate lead scoring, email summaries, and CRM sync.",
    techs: ["n8n Workflow Automation", "OpenAI API (GPT-4o)", "Custom Webhooks", "CRM Sync", "Async Queue"],
    metrics: ["100% Async Processing", "Zero Blocking Main Loop", "Automated Lead Routing"],
  },
];

export default function ArchDiagram() {
  const [selectedNode, setSelectedNode] = useState(NODES[0]);

  return (
    <section id="architecture" className="py-20 bg-[#f8fafc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-800 text-xs font-mono font-semibold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5 text-blue-600" /> SaaS Blueprint
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            End-to-End SaaS Architecture
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Click any layer in the node flow below to inspect implementation specs, data pipelines, and metrics.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Node Visual Pipeline Flow (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs font-mono text-slate-600 flex items-center justify-between">
              <span>Interactive Node Flow</span>
              <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                <Activity className="w-3.5 h-3.5 animate-pulse" /> Active Node Monitoring
              </span>
            </div>

            <div className="grid gap-4">
              {NODES.map((node, index) => {
                const Icon = node.icon;
                const isSelected = selectedNode.id === node.id;
                return (
                  <div key={node.id} className="relative">
                    <button
                      onClick={() => setSelectedNode(node)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                        isSelected
                          ? "bg-white border-slate-950 shadow-xl scale-[1.01]"
                          : "bg-white/80 border-slate-200 hover:border-slate-400"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${node.color} p-[1px] shadow-sm`}
                        >
                          <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-white">
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-slate-400 uppercase">
                              Layer 0{index + 1}
                            </span>
                            <span className="text-xs font-mono bg-slate-100 text-slate-800 px-2 py-0.5 rounded-full border border-slate-200 font-medium">
                              {node.badge}
                            </span>
                          </div>
                          <h3 className="text-base font-bold text-slate-950 group-hover:text-blue-600 transition-colors">
                            {node.name}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-950">
                        <span className="text-xs font-mono hidden sm:inline">Inspect</span>
                        <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? "translate-x-1 text-blue-600" : ""}`} />
                      </div>
                    </button>

                    {/* Connecting Connector Arrow */}
                    {index < NODES.length - 1 && (
                      <div className="flex justify-center my-1">
                        <div className="w-0.5 h-4 bg-slate-300"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Node Inspector Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-xl space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200 text-slate-950">
                    <selectedNode.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-blue-600 font-bold block uppercase">
                      {selectedNode.category}
                    </span>
                    <h4 className="text-lg font-extrabold text-slate-950">
                      {selectedNode.name}
                    </h4>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {selectedNode.description}
              </p>

              {/* Technologies Used */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block font-bold">
                  Tech Stack &amp; Protocols:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedNode.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-2 pt-2 border-t border-slate-200">
                <span className="text-xs font-mono text-emerald-600 uppercase tracking-wider block font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Performance &amp; SLA Specs:
                </span>
                <div className="space-y-1.5">
                  {selectedNode.metrics.map((metric) => (
                    <div key={metric} className="flex items-center gap-2 text-xs text-slate-700 font-mono">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
