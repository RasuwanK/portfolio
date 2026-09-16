"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolio";
import { ArrowUpRight, Sparkles } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  // Interactive 3D Tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // Max 6 deg
    const rotateY = ((x - centerX) / centerX) * 6; // Max 6 deg

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2,
      )}deg) translateY(-6px)`,
    );
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
    );
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: isHovered
          ? "transform 0.1s ease-out, box-shadow 0.2s ease-out"
          : "transform 0.4s ease-out, box-shadow 0.4s ease-out",
      }}
      className="group relative flex flex-col bg-white border-2 border-black rounded-[22px] overflow-hidden shadow-[5px_5px_0_0_#000000] hover:shadow-[9px_9px_0_0_#000000] transition-shadow duration-200"
    >
      {/* Top Preview Image Screen matching reference image */}
      <div className="relative w-full h-56 bg-neutral-950 overflow-hidden border-b-2 border-black">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />

        {/* Subtle Category Pill Overlay */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 bg-black/85 backdrop-blur-sm text-[#cffe00] border border-black/50 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider shadow-sm">
          <Sparkles className="size-3 text-[#cffe00]" />
          {project.category}
        </div>

        {/* Live metric badge if available */}
        {project.metrics && (
          <div className="absolute bottom-3 right-3 px-2.5 py-0.5 bg-black/90 text-white rounded text-[10px] font-mono font-semibold">
            {project.metrics}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-6 justify-between">
        <div>
          {/* Project Title matching image */}
          <h3 className="text-2xl font-black tracking-tight text-black group-hover:text-neutral-900 mb-3">
            {project.title}
          </h3>

          {/* Project Description matching image */}
          <p className="text-sm font-medium text-neutral-700 leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Tech tags preview */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-neutral-100 border border-black/40 rounded-md text-[11px] font-mono font-semibold text-neutral-800"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-0.5 text-[11px] font-mono font-bold text-neutral-500 self-center">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Button matching reference image exactly:
            Neon lime pill button with black border and "See My Work" text */}
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-[#cffe00] hover:bg-black hover:text-[#cffe00] text-black font-bold text-sm uppercase tracking-wider rounded-xl border-2 border-black shadow-[3px_3px_0_0_#000000] active:translate-y-0.5 active:shadow-[1px_1px_0_0_#000000] transition-all duration-200 cursor-pointer"
        >
          <span>See My Work</span>
          <ArrowUpRight className="size-4" />
        </button>
      </div>
    </div>
  );
}
