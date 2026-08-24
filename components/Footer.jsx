"use client";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-white border-t border-slate-200 text-xs font-mono text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-950 flex items-center justify-center font-bold text-white text-xs">
            AK
          </div>
          <div>
            <div className="text-slate-950 font-bold text-sm">
              Abdullah Kishwar
            </div>
            <div className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} Abdullah Kishwar. All rights
              reserved.
            </div>
          </div>
        </div>

        {/* Back to Top Pill Button */}
        <button
          onClick={scrollToTop}
          className="px-5 py-2.5 rounded-full bg-[#f8fafc] hover:bg-slate-950 hover:text-white border border-slate-200 text-slate-800 font-semibold text-xs transition-all flex items-center gap-1.5 shadow-sm"
          title="Scroll back to top"
        >
          <span>Top</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
