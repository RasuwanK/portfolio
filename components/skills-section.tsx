"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Cpu, Zap, Star } from "lucide-react";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "AI & ML",
    "Engineering",
    "Design & Creative",
    "Tools & Cloud",
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? portfolioData.skills
      : portfolioData.skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="relative w-full py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Centered Heading matching reference image */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border-2 border-black rounded-full text-xs font-mono font-bold tracking-wider mb-4 shadow-[2px_2px_0_0_#000000]">
            <Cpu className="size-3.5" />
            CORE STACK &amp; CAPABILITIES
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-black">
            MY SKILLS
          </h2>
          <p className="mt-4 text-base sm:text-lg font-medium text-black/80 max-w-xl mx-auto">
            Technical competencies across deep learning, full-stack systems
            engineering, and creative technology.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border-2 border-black transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-black text-white shadow-[3px_3px_0_0_#000000] -translate-y-0.5"
                  : "bg-white text-black hover:bg-neutral-100 shadow-[2px_2px_0_0_#000000]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Badge Grid matching reference image pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex items-center justify-between p-5 bg-white border-2 border-black rounded-2xl shadow-[4px_4px_0_0_#000000] hover:shadow-[7px_7px_0_0_#000000] hover:-translate-y-1 active:translate-y-0 active:shadow-[2px_2px_0_0_#000000] transition-all duration-200 cursor-default"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#cffe00] border-2 border-black flex items-center justify-center text-black font-mono font-black text-sm group-hover:rotate-12 transition-transform">
                  <Zap className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-black tracking-tight text-black group-hover:text-neutral-900">
                    {skill.name}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-neutral-500 uppercase">
                    {skill.category}
                  </span>
                </div>
              </div>

              {skill.highlight && (
                <span
                  className="p-1 rounded-md bg-black text-[#cffe00]"
                  title="Core Focus"
                >
                  <Star className="size-3.5 fill-[#cffe00]" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
