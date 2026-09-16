"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black text-[#cffe00] border-t-4 border-black py-12 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-mono text-xl font-black bg-[#cffe00] text-black px-3 py-0.5 rounded-md">
            {portfolioData.personal.domain}
          </span>
          <span className="text-xs text-neutral-400 font-mono">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All
            rights reserved.
          </span>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 bg-[#cffe00] text-black rounded-xl font-mono text-xs font-bold border-2 border-black hover:bg-white active:scale-95 transition-all shadow-[2px_2px_0_0_#ffffff] cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="size-3.5" />
        </button>
      </div>
    </footer>
  );
}
