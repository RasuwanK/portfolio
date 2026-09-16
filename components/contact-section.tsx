"use client";

import React, { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import {
  Mail,
  Copy,
  Check,
  Phone,
  MapPin,
  Send,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  DiscordIcon,
  YoutubeIcon,
} from "@/components/icons";

export function ContactSection() {
  const { personal, socials } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <GithubIcon className="size-5" />;
      case "linkedin":
        return <LinkedinIcon className="size-5" />;
      case "twitter":
        return <TwitterIcon className="size-5" />;
      case "discord":
        return <DiscordIcon className="size-5" />;
      case "youtube":
        return <YoutubeIcon className="size-5" />;
      default:
        return <Mail className="size-5" />;
    }
  };

  return (
    <section id="contact" className="relative w-full py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border-2 border-black rounded-full text-xs font-mono font-bold tracking-wider mb-4 shadow-[2px_2px_0_0_#000000]">
            <Sparkles className="size-3.5" />
            LET&apos;S CONNECT
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-black">
            CONTACT &amp; SOCIALS
          </h2>
          <p className="mt-4 text-base sm:text-lg font-medium text-black/80 max-w-xl mx-auto">
            Have a project in mind, an AI challenge to solve, or want to
            collaborate? Reach out anytime.
          </p>
        </div>

        {/* 2-Column Grid: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Column: Direct Details & Social Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 bg-white border-2 border-black rounded-[22px] shadow-[5px_5px_0_0_#000000]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-[#cffe00] border-2 border-black rounded-xl">
                  <Mail className="size-5 text-black" />
                </div>
                <h3 className="font-black text-xl text-black">Direct Email</h3>
              </div>
              <p className="text-sm text-neutral-600 mb-4 font-medium">
                Best way to get in touch for contracts, consultations, or direct
                queries.
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex-1 truncate font-mono text-sm sm:text-base font-bold text-black hover:underline"
                >
                  {personal.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-black text-[#cffe00] rounded-xl font-mono text-xs font-bold border-2 border-black hover:bg-neutral-900 active:scale-95 transition-all cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="size-3.5 text-[#cffe00]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Status Card */}
            <div className="p-6 bg-white border-2 border-black rounded-[22px] shadow-[5px_5px_0_0_#000000] space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-neutral-100 border-2 border-black rounded-xl shrink-0">
                  <MapPin className="size-5 text-black" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-neutral-500">
                    Location
                  </h4>
                  <p className="text-base font-bold text-black">
                    {personal.location}
                  </p>
                </div>
              </div>

              {personal.phone && (
                <div className="flex items-start gap-3 pt-3 border-t-2 border-neutral-100">
                  <div className="p-2.5 bg-neutral-100 border-2 border-black rounded-xl shrink-0">
                    <Phone className="size-5 text-black" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase text-neutral-500">
                      Phone
                    </h4>
                    <a
                      href={`tel:${personal.phone}`}
                      className="text-base font-bold text-black hover:underline"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Social Media Presence Card */}
            <div className="p-6 bg-white border-2 border-black rounded-[22px] shadow-[5px_5px_0_0_#000000]">
              <h3 className="font-black text-xl text-black mb-1">
                Find Me Online
              </h3>
              <p className="text-xs font-medium text-neutral-600 mb-4">
                Follow my work, open-source repos, and research logs:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-neutral-50 hover:bg-[#cffe00] border-2 border-black rounded-xl font-bold text-xs text-black shadow-[2px_2px_0_0_#000000] hover:shadow-[4px_4px_0_0_#000000] hover:-translate-y-0.5 active:translate-y-0 transition-all group"
                  >
                    <div className="flex items-center gap-2 truncate">
                      {getSocialIcon(social.icon)}
                      <span className="truncate">{social.name}</span>
                    </div>
                    <ArrowUpRight className="size-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 bg-white border-2 border-black rounded-[22px] shadow-[6px_6px_0_0_#000000]">
              <h3 className="text-2xl font-black text-black mb-2">
                Send a Message
              </h3>
              <p className="text-sm font-medium text-neutral-600 mb-6">
                Fill out the form below and I&apos;ll get back to you within 24
                hours.
              </p>

              {formSubmitted ? (
                <div className="p-6 bg-[#cffe00]/40 border-2 border-black rounded-2xl text-center animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 mx-auto mb-3 bg-black text-[#cffe00] rounded-full flex items-center justify-center">
                    <Check className="size-6" />
                  </div>
                  <h4 className="text-xl font-black text-black mb-1">
                    Message Sent!
                  </h4>
                  <p className="text-sm font-medium text-black/80">
                    Thank you for reaching out. I&apos;ve received your note and
                    will be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-black mb-1.5"
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Ada Lovelace"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-neutral-50 border-2 border-black rounded-xl text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-black shadow-inner"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono font-bold uppercase tracking-wider text-black mb-1.5"
                      >
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="ada@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-neutral-50 border-2 border-black rounded-xl text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-black shadow-inner"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-black mb-1.5"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      placeholder="Project Inquiry / AI Collaboration"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-neutral-50 border-2 border-black rounded-xl text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-black shadow-inner"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono font-bold uppercase tracking-wider text-black mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Tell me about your project, timeline, or what you'd like to build..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-neutral-50 border-2 border-black rounded-xl text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-black shadow-inner resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 px-8 bg-black text-[#cffe00] font-bold text-base uppercase tracking-wider rounded-xl border-2 border-black shadow-[4px_4px_0_0_#000000] hover:bg-neutral-900 hover:shadow-[6px_6px_0_0_#000000] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_0_#000000] transition-all duration-200 cursor-pointer"
                  >
                    <Send className="size-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
