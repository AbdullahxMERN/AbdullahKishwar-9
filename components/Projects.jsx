"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ExternalLink,
  CheckCircle2,
  Search,
  Stethoscope,
  Baby,
  Video,
} from "lucide-react";

/* ─── Project Data ─────────────────────────────────────────── */
const PROJECTS = [
  {
    id: "leveltube",
    title: "LevelTube",
    subtitle: "Premium Video Sharing Platform",
    tag: "Full-Stack App · Video Platform",
    liveUrl: "https://level-tube.vercel.app/",
    urlLabel: "level-tube.vercel.app",
    description:
      "A full-featured, dark-themed video sharing and microblogging platform — a YouTube-class application built from scratch. Browse trending content, manage subscriptions, publish microblog posts, and manage your channel via a creator Studio Dashboard.",
    features: [
      "Video feed with Trending, Subscriptions, and personalized Home tabs",
      "Tweets Feed for creator short-form posts alongside videos",
      "Studio Dashboard for channel management, video upload, and analytics",
      "Watch history, liked videos, and custom playlist organization",
      "Comments on videos, along with replies and likes on those comments",
    ],
    techs: [
      "Next js",
      "rest api",
      "React",
      "express js",
      "Node js",
      "MongoDB",
      "cloudinary",
      "Railway",
    ],
    screenshots: [
      { src: "/screenshots/leveltube-home.png", label: "Home Feed" },
      { src: "/screenshots/leveltube-watch.png", label: "Watch Page" },
      { src: "/screenshots/leveltube-channel.png", label: "Channel Page" },
      { src: "/screenshots/leveltube-studio.png", label: "Studio Dashboard" },
    ],
    rawScreenshot: true,
    accent: "#6366f1",
    Icon: Video,
  },
  {
    id: "business-finder",
    title: "BusinessFinder",
    subtitle: "Real-Time Lead Discovery Engine",
    tag: "AI Tool · Lead Generation",
    liveUrl: "https://business-finder-gules.vercel.app/",
    urlLabel: "business-finder-gules.vercel.app",
    description:
      "A real-time business discovery tool. Search any niche and location worldwide — the backend scrapes live listings and returns only businesses with no website but active phone/WhatsApp contacts. Powered by n8n automation pipelines for live data.",
    features: [
      "Live business scraping on every search — no stale databases, always fresh",
      "Smart no-website filter: only businesses reachable by phone or WhatsApp",
      "Global reach — any city, country, or specialty worldwide",
      "Auto-formats phone numbers into clickable WhatsApp URLs for instant outreach",
      "Zero-friction: no account, no login, no paywalls — search and act",
    ],
    techs: ["Next Js", "React Js", "n8n Automation", "figma", "WhatsApp"],
    screenshots: [
      { src: "/screenshots/businessfinder-home.png", label: "Search Leads" },
      { src: "/screenshots/businessfinder-results.png", label: "Results View" },
      {
        src: "/screenshots/businessfinder-features.png",
        label: "Platform Architecture",
      },
      {
        src: "/screenshots/businessfinder-howitworks.png",
        label: "Workflow details",
      },
    ],
    rawScreenshot: true,
    accent: "#3b82f6",
    Icon: Search,
  },
  {
    id: "dr-amjad",
    title: "Dr. Amjad Saleem",
    subtitle: "Urologist & Andrologist · Specialist Portfolio",
    tag: "Medical Practice Website · Client Project",
    liveUrl: "https://dr-amjad-saleem-urologist-andrologi.vercel.app/",
    urlLabel: "dr-amjad-saleem-urologist-andrologi.vercel.app",
    description:
      "A professional medical portfolio for Dr. Amjad Saleem — Urologist, Andrologist & Sexual Health Specialist at Capital Diagnostic Centre, G-8 Markaz, Islamabad. Features confidential online/on-site booking, gallery lightbox, and WhatsApp integration.",
    features: [
      "Book Consultation modal: online (video/audio) or on-site clinic location picker",
      "WhatsApp & direct call CTAs for instant, confidential patient contact",
      "Services: Urology, Andrology, Stone Disease, Prostate Care, Sexual Health",
      "Pro media gallery with full lightbox viewer for clinic photos and videos",
      "Animated scroll-reveal cards, floating action buttons, mobile-first layout",
    ],
    techs: [
      "Next Js",
      "Tailwind CSS",
      "React JS",
      "figma",
      "Google Map",
      "Vercel",
    ],
    screenshots: [
      { src: "/screenshots/dramjad-home.png", label: "Home Page" },
      { src: "/screenshots/dramjad-services.png", label: "Services Page" },
      {
        src: "/screenshots/dramjad-appointment.png",
        label: "Appointment Page",
      },
      { src: "/screenshots/dramjad-gallery.png", label: "Surgery Gallery" },
      { src: "/screenshots/dramjad-reviews.png", label: "Patient Reviews" },
    ],
    rawScreenshot: true,
    accent: "#0f172a",
    Icon: Stethoscope,
  },
  {
    id: "dr-zahid",
    title: "Dr. Zahid Ullah",
    subtitle: "Child Specialist & Pediatric Endocrinologist",
    tag: "Medical Practice Website · Client Project",
    liveUrl: "https://dr-zahid-ullah-child-specialist.vercel.app/",
    urlLabel: "dr-zahid-ullah-child-specialist.vercel.app",
    description:
      "A modern Next.js portfolio for Dr. Zahid Ullah — FCPS Paediatrician & Fellow Paediatrics Endocrinology at PIMS Islamabad. Serving two clinics in G-8 Markaz. 5000+ patients treated with a 4.9-star Google rating.",
    features: [
      "Specialty cards: Growth Disorders, Diabetes (CGM/insulin pump), Neonatal Care, Paediatrics",
      "Testimonials carousel with real verified Google patient reviews",
      "Animated hero with floating stat badges and smooth page transitions",
      "Embedded Google Maps for both clinic locations with get-directions CTA",
      "WhatsApp booking, multi-page routing: About, Qualifications, Services, FAQ",
    ],
    techs: ["Next.js", "React", "Tailwind CSS", "Google Map", "figma"],
    screenshots: [
      { src: "/screenshots/drzahid-home.png", label: "Home Page" },
      { src: "/screenshots/drzahid-services.png", label: "Services Page" },
      { src: "/screenshots/drzahid-academic.png", label: "Academic Info" },
      { src: "/screenshots/drzahid-about.png", label: "About Doctor" },
    ],
    rawScreenshot: true,
    accent: "#0d9488",
    Icon: Baby,
  },
  {
    id: "dr-tariq",
    title: "Dr. Muhammad Tariq",
    subtitle: "Pediatric Specialist & GI Fellow",
    tag: "Medical Practice Website · Client Project",
    liveUrl: "https://dr-tariq-khan-child-specialist.vercel.app/",
    urlLabel: "dr-tariq-khan-child-specialist.vercel.app",
    description:
      "A polished medical website for Dr. Muhammad Tariq — Pediatric & Gastroenterology specialist. Built with premium Manrope & Playfair Display typography, spring-bounce scroll animations, and a clean blue clinical palette engineered to convert visitors into booked consultations.",
    features: [
      "Hero section with doctor portrait, credentials, and dual CTA buttons",
      "Pediatric & GI specialty showcase with animated card reveal on scroll",
      "Patient consultation booking form with WhatsApp routing",
      "Spring-bounce scroll animations and tactile micro-interactions on mobile",
      "Fully responsive with floating WhatsApp button and mobile hamburger menu",
    ],
    techs: ["Next.js", "React", "Tailwind CSS", "Google Map", "figma"],
    screenshots: [
      { src: "/screenshots/drtariq-home.png", label: "Home Page" },
      { src: "/screenshots/drtariq-services.png", label: "Services Page" },
      { src: "/screenshots/drtariq-appointment.png", label: "Booking Page" },
      {
        src: "/screenshots/drtariq-achievements.png",
        label: "Clinic Location",
      },
    ],
    rawScreenshot: true,
    accent: "#1a6bba",
    Icon: Stethoscope,
  },
];

/* ─── Browser Frame Mockup ─────────────────────────────────── */
function BrowserFrame({ urlLabel, style, children, onClick }) {
  return (
    <div
      className="absolute rounded-xl overflow-hidden  transition-all duration-500 bg-white"
      style={{
        boxShadow:
          "0 20px 50px -10px rgba(15, 23, 42, 0.15), 0 0 0 1px rgba(15, 23, 42, 0.06)",
        ...style,
      }}
      onClick={onClick}
    >
      {/* Content Area — no browser chrome bar */}
      <div className="relative w-full aspect-[1024/484] overflow-hidden bg-white">
        {children}
      </div>
    </div>
  );
}

/* ─── High-Fidelity Custom CSS Mockup Pages ────────────────── */
function CSSMockupPage({ projectId, slideIndex }) {
  // BusinessFinder Mockup Pages
  if (projectId === "business-finder") {
    if (slideIndex === 0) {
      return (
        <div className="w-full h-full bg-slate-900 text-slate-100 flex flex-col p-3 sm:p-4 font-sans text-[10px] select-none">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2 sm:mb-3">
            <div className="flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[9px]">BusinessFinder</span>
            </div>
            <span className="text-[7px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded font-mono">
              Lead Engine v1.0
            </span>
          </div>
          {/* Search Box */}
          <div className="bg-slate-950 p-2 sm:p-2.5 rounded-lg border border-slate-800 space-y-1.5 sm:space-y-2 mb-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-[6px] text-slate-500 font-mono block mb-0.5">
                  NICHE
                </label>
                <div className="bg-slate-900 border border-slate-800 rounded px-1.5 py-0.5 text-slate-300 text-[8px]">
                  plumbing
                </div>
              </div>
              <div>
                <label className="text-[6px] text-slate-500 font-mono block mb-0.5">
                  LOCATION
                </label>
                <div className="bg-slate-900 border border-slate-800 rounded px-1.5 py-0.5 text-slate-300 text-[8px]">
                  Manchester, UK
                </div>
              </div>
            </div>
            <button className="w-full py-1 rounded bg-blue-650 hover:bg-blue-600 text-white font-bold text-center text-[8px] transition-colors shadow">
              Discover Lead Sources
            </button>
          </div>
          {/* Results Preview */}
          <div className="space-y-1.5 overflow-hidden flex-1">
            <div className="bg-slate-950 p-2 rounded border border-slate-800/80 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-200 text-[8px]">
                  MCR Plumbing & Gas Ltd
                </p>
                <p className="text-[7px] text-slate-500">
                  Manchester • Phone Verified
                </p>
              </div>
              <div className="flex flex-col items-end gap-0.5">
                <span className="text-[6px] bg-red-500/10 text-red-400 px-1 rounded border border-red-500/10">
                  No Website
                </span>
                <span className="text-[6px] text-emerald-400 font-semibold">
                  WhatsApp Ready
                </span>
              </div>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-850 flex items-center justify-between opacity-50">
              <div>
                <p className="font-bold text-slate-300 text-[8px]">
                  Apex Heating Solutions
                </p>
                <p className="text-[7px] text-slate-500">
                  Salford • Phone Verified
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[6px] bg-red-500/10 text-red-400 px-1 rounded border border-red-500/10">
                  No Website
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (slideIndex === 1) {
      return (
        <div className="w-full h-full bg-slate-900 text-slate-100 flex flex-col p-3 sm:p-4 font-sans text-[10px] select-none">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div className="font-bold text-slate-300 text-[9px]">
              Analytics Dashboard
            </div>
            <span className="text-[7px] text-slate-500 font-mono">
              Real-Time Tracker
            </span>
          </div>
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="bg-slate-950 p-2 rounded border border-slate-800/80">
              <span className="text-[6px] text-slate-500 block uppercase font-mono">
                Scraped
              </span>
              <span className="text-xs font-black text-slate-200">1,240</span>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-800/80">
              <span className="text-[6px] text-slate-500 block uppercase font-mono">
                No Site
              </span>
              <span className="text-xs font-black text-blue-450">89.2%</span>
            </div>
            <div className="bg-slate-950 p-2 rounded border border-slate-800/80">
              <span className="text-[6px] text-slate-500 block uppercase font-mono">
                WhatsApp
              </span>
              <span className="text-xs font-black text-emerald-450">412</span>
            </div>
          </div>
          {/* Mock Graph */}
          <div className="flex-1 bg-slate-950 border border-slate-800 rounded-lg p-2 flex flex-col justify-between overflow-hidden">
            <div className="flex items-center justify-between text-[7px] text-slate-500">
              <span>Hourly Leads Rate</span>
              <span className="text-emerald-400 font-bold font-mono">
                +18.5%
              </span>
            </div>
            <div className="flex-1 flex items-end gap-1.5 pt-3 pb-0.5 px-1.5 border-b border-l border-slate-800/60 h-10">
              <div className="w-full h-[25%] bg-blue-500/10 border-t border-blue-500/60 rounded-t" />
              <div className="w-full h-[45%] bg-blue-500/10 border-t border-blue-500/60 rounded-t" />
              <div className="w-full h-[35%] bg-blue-500/10 border-t border-blue-500/60 rounded-t" />
              <div className="w-full h-[70%] bg-blue-500/10 border-t border-blue-500/60 rounded-t" />
              <div className="w-full h-[85%] bg-emerald-500/10 border-t border-emerald-500/60 rounded-t animate-pulse" />
            </div>
            <div className="flex justify-between text-[5.5px] text-slate-600 font-mono mt-0.5">
              <span>09:00</span>
              <span>10:00</span>
              <span>11:00</span>
              <span>12:00</span>
              <span>Now</span>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="w-full h-full bg-slate-900 text-slate-100 flex flex-col p-3 sm:p-4 font-sans text-[10px] select-none">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
          <div className="font-bold text-slate-300 text-[9px]">
            WhatsApp Outreach Template
          </div>
          <span className="text-[7px] text-slate-500 font-mono">
            Campaign: Plumbers
          </span>
        </div>
        {/* Mock Chat Window */}
        <div className="flex-1 bg-slate-950 border border-slate-800 rounded-lg p-2 flex flex-col justify-between">
          <div className="bg-slate-900 p-1.5 rounded flex items-center gap-2 border border-slate-800 mb-1.5">
            <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center font-bold text-slate-300 text-[7px]">
              MP
            </div>
            <div>
              <p className="font-bold text-slate-350 text-[7px] leading-none">
                MCR Plumbing & Gas
              </p>
              <p className="text-[5.5px] text-slate-500 mt-0.5">
                Active Lead Target
              </p>
            </div>
          </div>
          {/* Chat Bubble */}
          <div className="space-y-1.5 flex-1 flex flex-col justify-end mb-1.5">
            <div className="max-w-[90%] bg-emerald-600 text-white rounded-lg p-2 text-[7px] self-end ml-auto shadow-sm">
              <p className="font-medium leading-normal">
                Hello! I noticed you are listed on Google Maps in Manchester but
                don't have a website yet. We specialize in building fast-loading
                landing pages that double local bookings. Would you be open to a
                2-minute chat?
              </p>
              <span className="text-[5px] text-emerald-100 block text-right mt-0.5 font-mono">
                Sent 10:12 AM
              </span>
            </div>
          </div>
          {/* Send Area */}
          <div className="flex items-center gap-1">
            <div className="flex-1 bg-slate-900 border border-slate-800 rounded px-1.5 py-0.5 text-[6.5px] text-slate-500">
              Message template loaded...
            </div>
            <button className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold text-[7px] shadow transition-transform hover:scale-[1.02]">
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Dr. Amjad Saleem Mockup Pages
  if (projectId === "dr-amjad") {
    if (slideIndex === 0) {
      return (
        <div className="w-full h-full bg-[#f0f9ff]/60 text-slate-800 flex flex-col p-3 sm:p-4 font-sans text-[10px] select-none">
          <div className="flex items-center justify-between border-b border-sky-100 pb-2 mb-3">
            <div className="flex items-center gap-1 font-bold text-sky-900">
              <span className="text-sky-600 font-bold text-[10px]">🩺</span>
              <span className="text-[8.5px]">Dr. Amjad Saleem</span>
            </div>
            <span className="text-[6.5px] bg-emerald-500/10 text-emerald-700 px-1.5 py-0.5 rounded font-bold font-mono">
              CDC G-8 Markaz
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center p-1">
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center mb-2 border border-sky-200 shadow-sm text-base">
              👨‍⚕️
            </div>
            <h4 className="text-[11px] font-black text-slate-900 leading-tight">
              Urologist & Andrologist Specialist
            </h4>
            <p className="text-slate-500 text-[7.5px] mt-1 max-w-[210px] leading-normal">
              Specialized treatment for kidneys, stone disease, and sexual
              health. Personal, confidential medical portfolio.
            </p>
            <div className="mt-3.5 flex gap-2">
              <button className="px-3 py-1 bg-sky-650 text-white font-bold rounded-full text-[7.5px] shadow-sm hover:bg-sky-700 transition-colors">
                Book Consultation
              </button>
              <button className="px-3 py-1 bg-white border border-slate-200 text-slate-600 font-semibold rounded-full text-[7.5px] shadow-sm hover:bg-slate-50 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        </div>
      );
    }
    if (slideIndex === 1) {
      return (
        <div className="w-full h-full bg-[#f0f9ff]/60 text-slate-800 flex flex-col p-3 sm:p-4 font-sans text-[10px] select-none">
          <div className="border-b border-sky-100 pb-2 mb-2.5">
            <h4 className="font-black text-slate-900 text-[8.5px]">
              Specialty Medical Treatments
            </h4>
            <p className="text-slate-500 text-[6.5px]">
              Confidential diagnostics and laser surgery
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 flex-1 items-center">
            <div className="bg-white p-2 rounded-lg border border-sky-100 text-center shadow-sm">
              <span className="text-base block mb-0.5">💧</span>
              <p className="font-bold text-slate-900 text-[7.5px]">Urology</p>
              <p className="text-[5.5px] text-slate-500 mt-0.5 leading-none">
                Kidney & tract care
              </p>
            </div>
            <div className="bg-white p-2 rounded-lg border border-sky-100 text-center shadow-sm">
              <span className="text-base block mb-0.5">🧬</span>
              <p className="font-bold text-slate-900 text-[7.5px]">Andrology</p>
              <p className="text-[5.5px] text-slate-500 mt-0.5 leading-none">
                Male fertility issues
              </p>
            </div>
            <div className="bg-white p-2 rounded-lg border border-sky-100 text-center shadow-sm">
              <span className="text-base block mb-0.5">💎</span>
              <p className="font-bold text-slate-900 text-[7.5px]">
                Stone Surgery
              </p>
              <p className="text-[5.5px] text-slate-500 mt-0.5 leading-none">
                Laser Lithotripsy
              </p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="w-full h-full bg-[#f0f9ff]/60 text-slate-800 flex flex-col p-3 sm:p-4 font-sans text-[10px] select-none">
        <div className="border-b border-sky-100 pb-2 mb-2">
          <h4 className="font-black text-slate-900 text-[8.5px]">
            Appointment booking system
          </h4>
          <p className="text-slate-500 text-[6.5px]">
            Secure a consultation slot instantly
          </p>
        </div>
        <div className="flex-1 bg-white p-2.5 rounded-lg border border-sky-100/60 flex flex-col justify-between shadow-sm">
          <div className="space-y-1.5">
            <div>
              <label className="text-[5.5px] text-slate-400 font-bold uppercase block">
                Consultation Mode
              </label>
              <div className="flex gap-1.5 mt-0.5">
                <span className="flex-1 py-0.5 rounded bg-sky-50 text-sky-700 font-bold text-center border border-sky-200 text-[7px]">
                  🏥 CDC Clinic
                </span>
                <span className="flex-1 py-0.5 rounded bg-slate-50 text-slate-500 font-semibold text-center border border-slate-200 text-[7px]">
                  💻 Online Video
                </span>
              </div>
            </div>
            <div>
              <label className="text-[5.5px] text-slate-400 font-bold uppercase block">
                Select Time Slot
              </label>
              <div className="grid grid-cols-3 gap-1 mt-0.5">
                <span className="py-0.5 text-center bg-slate-50 border border-slate-100 rounded text-[6.5px]">
                  04:00 PM
                </span>
                <span className="py-0.5 text-center bg-sky-100 border border-sky-300 rounded text-[6.5px] text-sky-850 font-bold">
                  05:30 PM
                </span>
                <span className="py-0.5 text-center bg-slate-50 border border-slate-100 rounded text-[6.5px] opacity-40 line-through">
                  07:00 PM
                </span>
              </div>
            </div>
          </div>
          <button className="w-full py-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-center rounded text-[7px] transition-colors flex items-center justify-center gap-1 shadow-sm mt-1">
            💬 Consult via WhatsApp
          </button>
        </div>
      </div>
    );
  }

  // Dr. Zahid Ullah Mockup Pages
  if (projectId === "dr-zahid") {
    if (slideIndex === 0) {
      return (
        <div className="w-full h-full bg-[#f0fdf4]/50 text-slate-800 flex flex-col p-3 sm:p-4 font-sans text-[10px] select-none">
          <div className="flex items-center justify-between border-b border-teal-100 pb-2 mb-3">
            <div className="flex items-center gap-1 font-bold text-teal-900">
              <span className="text-teal-600 text-[10px]">👶</span>
              <span className="text-[8.5px]">Dr. Zahid Ullah</span>
            </div>
            <span className="text-[6.5px] bg-teal-500/10 text-teal-700 px-1.5 py-0.5 rounded font-bold font-mono">
              PIMS Fellow
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center p-1">
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mb-2 border border-teal-200 shadow-sm text-base">
              🩺
            </div>
            <h4 className="text-[11px] font-black text-slate-900 leading-tight">
              Child Specialist & Pediatric Endocrinologist
            </h4>
            <p className="text-slate-500 text-[7.5px] mt-1 max-w-[210px] leading-normal">
              Specialized child hormonal care, growth tracking, and type 1
              diabetes management in Islamabad.
            </p>
            <div className="mt-3 flex gap-2 justify-center w-full">
              <div className="bg-white border border-teal-100/80 px-2 py-0.5 rounded shadow-sm text-center">
                <span className="block font-black text-teal-700 text-[8px] leading-none">
                  5,000+
                </span>
                <span className="text-[5px] text-slate-400 font-semibold uppercase">
                  Patients
                </span>
              </div>
              <div className="bg-white border border-teal-100/80 px-2 py-0.5 rounded shadow-sm text-center">
                <span className="block font-black text-teal-700 text-[8px] leading-none">
                  4.9★
                </span>
                <span className="text-[5px] text-slate-400 font-semibold uppercase">
                  Google Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (slideIndex === 1) {
      return (
        <div className="w-full h-full bg-[#f0fdf4]/50 text-slate-800 flex flex-col p-3 sm:p-4 font-sans text-[10px] select-none">
          <div className="border-b border-teal-100 pb-2 mb-2.5">
            <h4 className="font-black text-slate-900 text-[8.5px]">
              Specialist Pediatrics & Hormonal Care
            </h4>
            <p className="text-slate-500 text-[6.5px]">
              Hormone diagnostics and modern growth therapy
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 flex-1 items-center text-[7px]">
            <div className="bg-white p-2 rounded-lg border border-teal-100 shadow-sm flex items-start gap-1.5">
              <span className="text-base leading-none">📈</span>
              <div>
                <p className="font-bold text-slate-900 text-[7.5px]">
                  Growth Disorders
                </p>
                <p className="text-[5.5px] text-slate-500 leading-tight">
                  Short height, pubertal diagnostics
                </p>
              </div>
            </div>
            <div className="bg-white p-2 rounded-lg border border-teal-100 shadow-sm flex items-start gap-1.5">
              <span className="text-base leading-none">🩸</span>
              <div>
                <p className="font-bold text-slate-900 text-[7.5px]">
                  Childhood Diabetes
                </p>
                <p className="text-[5.5px] text-slate-500 leading-tight">
                  CGM & insulin pump monitors
                </p>
              </div>
            </div>
            <div className="bg-white p-2 rounded-lg border border-teal-100 shadow-sm flex items-start gap-1.5">
              <span className="text-base leading-none">🧸</span>
              <div>
                <p className="font-bold text-slate-900 text-[7.5px]">
                  General Pediatrics
                </p>
                <p className="text-[5.5px] text-slate-500 leading-tight">
                  Infant care & immunizations
                </p>
              </div>
            </div>
            <div className="bg-white p-2 rounded-lg border border-teal-100 shadow-sm flex items-start gap-1.5">
              <span className="text-base leading-none">⚡</span>
              <div>
                <p className="font-bold text-slate-900 text-[7.5px]">
                  Thyroid Care
                </p>
                <p className="text-[5.5px] text-slate-500 leading-tight">
                  Childhood thyroid management
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="w-full h-full bg-[#f0fdf4]/50 text-slate-800 flex flex-col p-3 sm:p-4 font-sans text-[10px] select-none">
        <div className="border-b border-teal-100 pb-2 mb-2">
          <h4 className="font-black text-slate-900 text-[8.5px]">
            Patient Feedback & Reviews
          </h4>
          <p className="text-slate-500 text-[6.5px]">
            Verified child specialist testimonials
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-between">
          <div className="bg-white p-2.5 rounded-lg border border-teal-100/60 shadow-sm relative">
            <span className="absolute right-2 top-1 text-[16px] opacity-10 text-teal-850 font-serif">
              “
            </span>
            <div className="flex items-center text-amber-400 text-[6px] mb-1">
              ★★★★★
            </div>
            <p className="text-[7px] text-slate-600 italic leading-normal">
              "Dr. Zahid is extremely professional and polite with children. He
              explained the growth chart parameters very clearly and started the
              treatment plan. Highly recommended."
            </p>
            <p className="text-[5.5px] text-slate-400 font-bold mt-1.5">
              — Ayesha Khan, Google Review
            </p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-[6px] text-teal-600 font-bold">
              ✓ 240+ Verified Reviews
            </span>
            <button className="px-2 py-0.5 bg-teal-600 text-white rounded text-[7px] hover:bg-teal-700 transition-colors">
              Visit Google Profile
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Dr. Muhammad Tariq Mockup Pages
  if (projectId === "dr-tariq") {
    if (slideIndex === 0) {
      return (
        <div className="w-full h-full bg-[#f0f4ff]/50 text-slate-800 flex flex-col p-3 sm:p-4 font-sans text-[10px] select-none">
          <div className="flex items-center justify-between border-b border-blue-100 pb-2 mb-3">
            <div className="flex items-center gap-1 font-bold text-blue-900">
              <span className="text-blue-600 text-[10px]">👶</span>
              <span className="text-[8.5px]">Dr. Muhammad Tariq</span>
            </div>
            <span className="text-[6.5px] bg-blue-500/10 text-blue-700 px-1.5 py-0.5 rounded font-bold font-mono">
              GI Specialist
            </span>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center text-center p-1">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2 border border-blue-200 shadow-sm text-base">
              🩺
            </div>
            <h4 className="text-[11px] font-black text-slate-900 leading-tight">
              Pediatric Specialist & GI Fellow
            </h4>
            <p className="text-slate-550 text-[7.5px] mt-1 max-w-[210px] leading-normal">
              Specialized treatment for children's digestive, stomach, and
              nutritional issues. Direct WhatsApp booking dashboard.
            </p>
            <div className="mt-3.5 flex gap-2">
              <button className="px-3 py-1 bg-blue-650 text-white font-bold rounded text-[7.5px] shadow-sm hover:bg-blue-750 transition-colors">
                Book Consultation
              </button>
              <button className="px-3 py-1 bg-white border border-slate-200 text-slate-650 font-semibold rounded text-[7.5px] shadow-sm hover:bg-slate-50 transition-colors">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      );
    }
    if (slideIndex === 1) {
      return (
        <div className="w-full h-full bg-[#f0f4ff]/50 text-slate-800 flex flex-col p-3 sm:p-4 font-sans text-[10px] select-none">
          <div className="border-b border-blue-100 pb-2 mb-2.5">
            <h4 className="font-black text-slate-900 text-[8.5px]">
              Digestive, Stomach & Liver Care
            </h4>
            <p className="text-slate-500 text-[6.5px]">
              Clinical diagnostics for pediatric gastroenterology
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 flex-1 items-center">
            <div className="bg-white p-2 rounded-lg border border-blue-100 text-center shadow-sm">
              <span className="text-base block mb-0.5">🍼</span>
              <p className="font-bold text-slate-900 text-[7.5px] leading-none">
                Reflux & Colic
              </p>
              <p className="text-[5.5px] text-slate-500 mt-1 leading-none">
                Infant feeding care
              </p>
            </div>
            <div className="bg-white p-2 rounded-lg border border-blue-100 text-center shadow-sm">
              <span className="text-base block mb-0.5">🍏</span>
              <p className="font-bold text-slate-900 text-[7.5px] leading-none">
                Celiac Allergy
              </p>
              <p className="text-[5.5px] text-slate-500 mt-1 leading-none">
                Gluten free guidance
              </p>
            </div>
            <div className="bg-white p-2 rounded-lg border border-blue-100 text-center shadow-sm">
              <span className="text-base block mb-0.5">🏥</span>
              <p className="font-bold text-slate-900 text-[7.5px] leading-none">
                Liver Clinic
              </p>
              <p className="text-[5.5px] text-slate-500 mt-1 leading-none">
                Jaundice evaluation
              </p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="w-full h-full bg-[#f0f4ff]/50 text-slate-800 flex flex-col p-3 sm:p-4 font-sans text-[10px] select-none">
        <div className="border-b border-blue-100 pb-2 mb-2">
          <h4 className="font-black text-slate-900 text-[8.5px]">
            Clinic Timings & Venues
          </h4>
          <p className="text-slate-500 text-[6.5px]">
            Visit Dr. Tariq at his private consulting chambers
          </p>
        </div>
        <div className="flex-1 bg-white p-2 rounded-lg border border-blue-100/60 flex flex-col justify-between shadow-sm">
          <div className="space-y-1.5 text-[6.5px] leading-tight">
            <div className="p-1 rounded bg-blue-50/50 border border-blue-100">
              <p className="font-bold text-slate-900">
                🏥 IDC G-8 Markaz Clinic
              </p>
              <p className="text-slate-500">Mon, Wed • 02:00 PM - 04:00 PM</p>
            </div>
            <div className="p-1 rounded bg-slate-50 border border-slate-150">
              <p className="font-bold text-slate-900">🏥 G-8 Medical Complex</p>
              <p className="text-slate-500">Tue, Thu • 05:00 PM - 07:00 PM</p>
            </div>
          </div>
          <button className="w-full py-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-center rounded text-[7px] transition-colors flex items-center justify-center gap-1 shadow-sm mt-1">
            💬 Request Appointment via WhatsApp
          </button>
        </div>
      </div>
    );
  }

  return null;
}

/* ─── Stacked 3D Interactive Screenshot Showcase ──────────────── */
function InteractiveShowcase({ project, textOnLeft }) {
  const [activeSlide, setActiveSlide] = useState(0); // Default to first slide
  const [isMobile, setIsMobile] = useState(false);
  const screenshots = project.screenshots || [];
  const hasShots = screenshots.length > 0;
  const totalSlides = hasShots ? screenshots.length : 3;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  // Helper to convert hex accent to rgb for radial gradient background opacity
  const hexToRgb = (hex) => {
    const defaultColor = "59, 130, 246"; // default blue
    if (!hex || typeof hex !== "string" || !hex.startsWith("#"))
      return defaultColor;
    try {
      const cleanHex = hex.replace("#", "");
      const r = parseInt(cleanHex.substring(0, 2), 16);
      const g = parseInt(cleanHex.substring(2, 4), 16);
      const b = parseInt(cleanHex.substring(4, 6), 16);
      return `${r}, ${g}, ${b}`;
    } catch {
      return defaultColor;
    }
  };
  const accentRgb = hexToRgb(project.accent);

  const getSlotStyle = (slideIndex) => {
    const diff = (slideIndex - activeSlide + totalSlides) % totalSlides;

    if (diff === 0) {
      // Active Center Front
      return {
        transform: "translate(0px, 0px) scale(1) rotate(0deg)",
        zIndex: 10,
        opacity: 1,
        pointerEvents: "auto",
        cursor: "default",
        filter: "none",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      };
    } else if (diff === 1) {
      // Right Back — clickable
      // On mobile: use 18% translation and 78% base width to fan out nicely within mobile viewport bounds
      // On desktop: fan out more on screen edges (32%) and less on text sides (14%)
      const xRight = isMobile ? "18%" : textOnLeft ? "32%" : "14%";
      const scaleVal = isMobile ? 0.8 : 0.8;
      const rotateVal = isMobile ? 5 : 6;
      const yVal = isMobile ? "16px" : "24px";
      return {
        transform: `translate(${xRight}, ${yVal}) scale(${scaleVal}) rotate(${rotateVal}deg)`,
        zIndex: 5,
        opacity: 0.98,
        pointerEvents: "auto",
        cursor: "pointer",
        filter: "none",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      };
    } else {
      // Left Back — clickable
      // On mobile: use -18% translation and 78% base width to fan out nicely within mobile viewport bounds
      // On desktop: fan out more on screen edges (-32%) and less on text sides (-14%)
      const xLeft = isMobile ? "-18%" : textOnLeft ? "-14%" : "-32%";
      const scaleVal = isMobile ? 0.8 : 0.8;
      const rotateVal = isMobile ? -5 : -6;
      const yVal = isMobile ? "16px" : "24px";
      return {
        transform: `translate(${xLeft}, ${yVal}) scale(${scaleVal}) rotate(${rotateVal}deg)`,
        zIndex: 5,
        opacity: 0.98,
        pointerEvents: "auto",
        cursor: "pointer",
        filter: "none",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      };
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Mockup Frame Container - Free floating without borders/box */}
      <div
        className="relative w-full"
        style={{
          paddingBottom: "72%",
        }}
      >
        {/* Dynamic ambient background glow (free floating behind screenshots) */}
        <div
          className="absolute rounded-full blur-3xl pointer-events-none transition-all duration-700"
          style={{
            width: "60%",
            height: "60%",
            top: "20%",
            left: "20%",
            background: project.accent,
            opacity: 0.08,
          }}
        />

        {/* Viewport frames */}
        <div className="absolute inset-0 flex items-center justify-center">
          {Array.from({ length: totalSlides }, (_, i) => {
            const slotStyle = getSlotStyle(i);
            const isActive =
              (i - activeSlide + totalSlides) % totalSlides === 0;
            const shot = screenshots[i % screenshots.length];

            if (project.rawScreenshot && hasShots) {
              // Raw screenshot mode: render clean rounded image cards in standard aspect ratio
              return (
                <div
                  key={i}
                  className="absolute rounded-xl overflow-hidden shadow-2xl"
                  style={{
                    width: isMobile ? "78%" : "85%",
                    transition: "all 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
                    ...slotStyle,
                    boxShadow:
                      "0 20px 50px -10px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(255,255,255,0.08)",
                  }}
                  onClick={!isActive ? () => handleDotClick(i) : undefined}
                >
                  {/* Outer: aspect ratio container */}
                  <div
                    className="relative w-full overflow-hidden"
                    style={{ paddingBottom: "45%" }}
                  >
                    {/* Inner container: centered full-bleed */}
                    <div className="absolute left-0 right-0 top-0 bottom-0">
                      <Image
                        src={shot.src}
                        alt={shot.label}
                        fill
                        quality={100}
                        unoptimized
                        className="object-cover"
                        sizes="(max-width: 768px) 90vw, 800px"
                        priority={i === 0}
                      />
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <BrowserFrame
                key={i}
                urlLabel={project.urlLabel}
                style={{
                  width: isMobile ? "78%" : "85%",
                  transition: "all 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
                  ...slotStyle,
                }}
                onClick={!isActive ? () => handleDotClick(i) : undefined}
              >
                {hasShots ? (
                  <Image
                    src={shot.src}
                    alt={shot.label}
                    fill
                    quality={100}
                    unoptimized
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 90vw, 800px"
                    priority={i === 1}
                  />
                ) : (
                  <CSSMockupPage projectId={project.id} slideIndex={i} />
                )}
              </BrowserFrame>
            );
          })}
        </div>
      </div>

      {/* Pagination indicators (rounded active pill, circular inactive dots) */}
      <div className="flex justify-center items-center gap-1.5 mt-5">
        {Array.from({ length: totalSlides }, (_, i) => {
          const isActive = i === activeSlide;
          return (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className="h-2 transition-all duration-300 focus:outline-none cursor-pointer"
              style={{
                width: isActive ? "20px" : "8px",
                borderRadius: "9999px",
                backgroundColor: isActive
                  ? project.accent
                  : "rgba(15, 23, 42, 0.15)",
              }}
              aria-label={`Show page ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ─── Individual Project Card ──────────────────────────────── */
function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;
  // isEven: text left / mockup right → inner-bleed side is LEFT of mockup
  // isOdd:  mockup left / text right → inner-bleed side is RIGHT of mockup
  return (
    <div className="py-12 lg:py-16 grid lg:grid-cols-12 gap-8 lg:gap-14 items-center group">
      {/* ── Project info side (alternates left/right) ── */}
      <div
        className={`lg:col-span-5 space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}
      >
        {/* Number + tag */}
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-black font-mono tabular-nums px-2 py-0.5 rounded"
            style={{ background: project.accent + "18", color: project.accent }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">
            {project.tag}
          </span>
        </div>

        {/* Title */}
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="text-slate-500 text-sm font-semibold mt-1">
            {project.subtitle}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-3">
            {project.description}
          </p>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {project.features.map((feat, i) => (
            <div
              key={i}
              className="flex items-start gap-2.5 text-sm text-slate-700"
            >
              <CheckCircle2
                className="w-4 h-4 shrink-0 mt-0.5 animate-pulse"
                style={{ color: project.accent }}
              />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono font-medium shadow-sm transition-colors hover:bg-slate-50 hover:border-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-950 hover:bg-slate-800 text-white rounded-full font-semibold text-xs sm:text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
        >
          <span>Visit Live Website</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* ── Interactive 3D Mockup side (alternates right/left) ── */}
      <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        {/* textOnLeft=isEven: when text is left, inner-facing frame is the left-back one */}
        <InteractiveShowcase project={project} textOnLeft={isEven} />
      </div>
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────── */
export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest block mb-1">
              Selected Work [05]
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
            Production-deployed platforms — video apps, AI lead tools, and
            medical websites for real clients.
          </p>
        </div>

        {/* Cards */}
        <div className="divide-y divide-slate-200/60">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
