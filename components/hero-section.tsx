"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown, Download, Check, Sparkles, Code2, Bot } from "lucide-react";

export function HeroSection() {
  const [downloaded, setDownloaded] = useState(false);
  const { personal } = portfolioData;

  const handleDownloadCV = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
    // If a valid CV URL exists, trigger download/open
    if (personal.cvUrl && personal.cvUrl !== "#") {
      window.open(personal.cvUrl, "_blank");
    }
  };

  return (
    <section
      id="home"
      className="relative w-full pt-12 pb-24 sm:pt-20 sm:pb-32 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-[#cffe00] border-2 border-black text-xs font-mono font-semibold tracking-wide shadow-[3px_3px_0_0_#ffffff] mb-8 hover:scale-105 transition-transform cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cffe00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cffe00]"></span>
          </span>
          <span>{personal.availability}</span>
        </div>

        {/* Giant Typographic Headline matching image */}
        <div className="space-y-1 mb-8 select-none">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.88] text-black">
            {personal.headline.line1}
          </h1>
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.88] text-black flex items-baseline">
            {personal.headline.line2}
          </h1>
        </div>

        {/* Subtitle / Role description matching image */}
        <div className="mb-10 max-w-3xl">
          <p className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-wider text-black flex flex-wrap items-center gap-x-3 gap-y-2">
            {personal.roles.map((role, idx) => (
              <React.Fragment key={role}>
                <span className="inline-flex items-center gap-1.5 hover:text-neutral-700 transition-colors">
                  {idx === 0 && <Bot className="size-5 inline text-black" />}
                  {idx === 1 && (
                    <Sparkles className="size-5 inline text-black" />
                  )}
                  {idx === 2 && <Code2 className="size-5 inline text-black" />}
                  {role}
                </span>
                {idx < personal.roles.length - 1 && (
                  <span className="text-black font-black select-none text-xl">
                    •
                  </span>
                )}
              </React.Fragment>
            ))}
          </p>
          <p className="mt-4 text-base sm:text-lg text-black/80 font-medium max-w-2xl leading-relaxed">
            {personal.bio}
          </p>
        </div>

        {/* Dual CTA Buttons matching image */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
          {/* Download CV (Black button with white text) */}
          <button
            onClick={handleDownloadCV}
            className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-2xl font-bold text-base border-2 border-black shadow-[5px_5px_0_0_#000000] hover:shadow-[7px_7px_0_0_#000000] hover:-translate-y-1 active:translate-y-0.5 active:shadow-[2px_2px_0_0_#000000] transition-all duration-200 cursor-pointer"
          >
            {downloaded ? (
              <>
                <Check className="size-5 text-[#cffe00] animate-in zoom-in" />
                <span>Resume Ready!</span>
              </>
            ) : (
              <>
                <Download className="size-5 group-hover:translate-y-0.5 transition-transform" />
                <span>Download CV</span>
              </>
            )}
          </button>

          {/* See My Work (White button with black text) */}
          <a
            href="#projects"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-bold text-base border-2 border-black shadow-[5px_5px_0_0_#000000] hover:shadow-[7px_7px_0_0_#000000] hover:-translate-y-1 active:translate-y-0.5 active:shadow-[2px_2px_0_0_#000000] transition-all duration-200"
          >
            <span>See My Work</span>
            <ArrowDown className="size-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
