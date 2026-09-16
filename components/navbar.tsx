"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "projects", "skills", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#cffe00]/95 backdrop-blur-md py-3 shadow-[0_4px_0_0_#000000]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo / Domain */}
        <Link
          href="#home"
          className="group flex items-center gap-2 font-black text-2xl tracking-tight text-black transition-transform duration-200 active:scale-95"
        >
          <span className="font-mono bg-black text-[#cffe00] px-2 py-0.5 rounded text-sm group-hover:rotate-6 transition-transform inline-block">
            ⌘
          </span>
          <span className="underline decoration-2 underline-offset-4 decoration-transparent group-hover:decoration-black transition-all">
            {portfolioData.personal.domain}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-sm border-2 border-black rounded-full px-4 py-1.5 shadow-[3px_3px_0_0_#000000]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-sm font-bold tracking-tight rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-black text-white shadow-sm"
                    : "text-black hover:bg-neutral-100"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Status */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-black text-[#cffe00] px-4 py-2 rounded-full border-2 border-black shadow-[2px_2px_0_0_#000000] hover:bg-neutral-900 hover:scale-105 active:scale-95 transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cffe00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cffe00]"></span>
            </span>
            Let&apos;s Talk
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white border-2 border-black text-black shadow-[3px_3px_0_0_#000000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <X className="size-6" />
          ) : (
            <Menu className="size-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 mx-4 p-5 bg-white border-2 border-black rounded-2xl shadow-[6px_6px_0_0_#000000] animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-base font-black rounded-xl border-2 border-black transition-all ${
                  activeSection === link.id
                    ? "bg-[#cffe00] text-black shadow-[2px_2px_0_0_#000000]"
                    : "bg-neutral-50 text-black hover:bg-[#cffe00]/50"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 bg-black text-[#cffe00] rounded-xl font-bold border-2 border-black shadow-[3px_3px_0_0_#000000]"
            >
              <Sparkles className="size-4" />
              Get in Touch
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
