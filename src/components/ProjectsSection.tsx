"use client";

import Image from "next/image";
import { ExternalLink, Zap, Globe, Check, ArrowRight } from "lucide-react";
import { portfolioData, Project } from "@/data/portfolio";

export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono font-semibold mb-3">
              <Zap className="w-3.5 h-3.5 text-blue-400" />
              <span>Flagship Production Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Featured Web &amp; Mobile Work
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Every project below is live in production. Browse the actual website previews, live links, and technical highlights.
            </p>
          </div>

          {/* Mobile swipe hint */}
          <div className="flex md:hidden items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20 w-fit">
            <span>Scroll or swipe projects &rarr;</span>
          </div>
        </div>

        {/* Projects Cards Container */}
        {/* On mobile: horizontal snap-scrollable list with full cards; On desktop: vertical stack of spacious cards */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 pb-6 md:pb-0 no-scrollbar">
          {projects.map((project: Project) => {
            const isEcodite = project.id === "ecodite-foundation";
            const isBiuda = project.id === "biuda-hq";

            return (
              <div
                key={project.id}
                className="min-w-[88vw] sm:min-w-[550px] md:min-w-0 snap-center rounded-3xl bg-[#0d121c] border border-slate-700/80 hover:border-slate-500 transition-all duration-300 overflow-hidden shadow-2xl flex flex-col"
              >
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Left Details Column */}
                    <div className="lg:col-span-6 flex flex-col items-start order-2 lg:order-1">
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        {project.turnaroundBadge && (
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
                              isEcodite
                                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                                : isBiuda
                                ? "bg-orange-500/20 text-orange-300 border border-orange-500/40"
                                : "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40"
                            }`}
                          >
                            {project.turnaroundBadge}
                          </span>
                        )}

                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-slate-200 border border-slate-700">
                          {project.role}
                        </span>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        {project.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-sm font-semibold text-blue-300 mt-1">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="mt-5 space-y-2.5 w-full">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30 text-emerald-400">
                              <Check className="w-3 h-3" />
                            </div>
                            <span className="leading-snug">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Pills */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-800 text-slate-200 border border-slate-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Visit Live Website Button */}
                      <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 hover:scale-102 active:scale-98"
                        >
                          <Globe className="w-4 h-4" />
                          <span>Visit Live Website</span>
                          <ExternalLink className="w-3.5 h-3.5 ml-1" />
                        </a>

                        {project.metrics && (
                          <span className="text-xs text-slate-300 font-mono">
                            {project.metrics}
                          </span>
                        )}
                      </div>

                    </div>

                    {/* Right Column: Actual Real Website Preview Screenshot */}
                    <div className="lg:col-span-6 order-1 lg:order-2 w-full">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/preview block rounded-2xl bg-[#090d14] border border-slate-700 hover:border-blue-400 transition-all overflow-hidden shadow-2xl"
                      >
                        {/* Browser Window Chrome */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800">
                          <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                          </div>
                          
                          {/* URL Bar */}
                          <div className="px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-[11px] font-mono text-slate-200 flex items-center gap-1.5 max-w-[240px] truncate">
                            <span className="text-emerald-400 text-xs">🔒</span>
                            <span>{project.liveUrl.replace("https://", "").replace("http://", "")}</span>
                          </div>

                          <div className="text-[11px] font-semibold text-blue-400 flex items-center gap-1 group-hover/preview:underline">
                            <span>Open</span>
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>

                        {/* Screenshot Image Container */}
                        <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                          <Image
                            src={project.previewImage}
                            alt={`${project.title} live website preview`}
                            fill
                            sizes="(max-width: 768px) 90vw, 50vw"
                            className="object-cover object-top group-hover/preview:scale-103 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-blue-600/0 group-hover/preview:bg-blue-600/5 transition-colors"></div>
                        </div>
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
