"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolio";
import { X, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border-4 border-black rounded-[24px] shadow-[10px_10px_0_0_#000000] p-6 sm:p-8 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-[#cffe00] border-2 border-black rounded-xl text-black shadow-[3px_3px_0_0_#000000] hover:bg-black hover:text-[#cffe00] active:translate-x-0.5 active:translate-y-0.5 transition-all"
          aria-label="Close modal"
        >
          <X className="size-6" />
        </button>

        {/* Category tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-black text-[#cffe00] rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <Sparkles className="size-3.5" />
          {project.category}
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-black mb-2">
          {project.title}
        </h2>
        {project.subtitle && (
          <p className="text-base sm:text-lg font-semibold text-neutral-700 mb-6">
            {project.subtitle}
          </p>
        )}

        {/* Image preview */}
        <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border-2 border-black bg-neutral-950 mb-6">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Metrics highlight if available */}
        {project.metrics && (
          <div className="flex items-center gap-2 p-3 bg-[#cffe00]/30 border-2 border-black rounded-xl mb-6 font-mono text-sm font-bold text-black">
            <CheckCircle2 className="size-4 text-black shrink-0" />
            <span>Key Metric: {project.metrics}</span>
          </div>
        )}

        {/* Detailed description */}
        <div className="space-y-4 text-neutral-800 text-base leading-relaxed mb-6 font-medium">
          <p>{project.longDescription || project.description}</p>
        </div>

        {/* Technology stack tags */}
        <div className="mb-8">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 mb-2">
            Technologies &amp; Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-neutral-100 border border-black rounded-lg text-xs font-mono font-bold text-black shadow-[2px_2px_0_0_#000000]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t-2 border-black/10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#cffe00] text-black font-bold rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000000] hover:bg-black hover:text-[#cffe00] active:translate-y-0.5 transition-all"
            >
              <ExternalLink className="size-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000000] hover:bg-neutral-100 active:translate-y-0.5 transition-all"
            >
              <GithubIcon className="size-4" />
              Source Code
            </a>
          )}
          <button
            onClick={onClose}
            className="ml-auto px-6 py-3 bg-neutral-200 text-black font-bold rounded-xl border-2 border-black hover:bg-neutral-300 transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
