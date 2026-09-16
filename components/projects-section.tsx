"use client";

import React, { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { Layers } from "lucide-react";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "AI & Machine Learning",
    "Web & Full-Stack",
    "Creative Tech",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative w-full py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Centered Heading matching reference image */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border-2 border-black rounded-full text-xs font-mono font-bold tracking-wider mb-4 shadow-[2px_2px_0_0_#000000]">
            <Layers className="size-3.5" />
            SHOWCASE
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-black">
            MY PROJECTS
          </h2>
          <p className="mt-4 text-base sm:text-lg font-medium text-black/80 max-w-xl mx-auto">
            A curated selection of machine learning architectures, generative
            tools, and high-scale systems.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-bold border-2 border-black transition-all cursor-pointer ${
                  isActive
                    ? "bg-black text-white shadow-[4px_4px_0_0_#000000] -translate-y-0.5"
                    : "bg-white text-black hover:bg-neutral-100 shadow-[2px_2px_0_0_#000000]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 3-Column Responsive Grid matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

        {/* Modal for detailed project view */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
