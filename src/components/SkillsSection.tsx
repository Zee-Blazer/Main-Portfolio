"use client";

import { Code2, Server, Smartphone, Users, Cpu, ArrowRight } from "lucide-react";
import { portfolioData, SkillCategory } from "@/data/portfolio";

export default function SkillsSection() {
  const { skillCategories } = portfolioData;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-emerald-400" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-indigo-400" />;
      case "Users":
        return <Users className="w-5 h-5 text-amber-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-3">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technical Capabilities</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Core Skills &amp; Stack
            </h2>

            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              Tested across fast-paced production builds and developer training cohorts.
            </p>
          </div>

          {/* Mobile Swipe Notice */}
          <div className="flex md:hidden items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1.5 rounded-lg border border-cyan-500/20 w-fit">
            <span>Swipe categories horizontally &rarr;</span>
          </div>
        </div>

        {/* Skills Track (Mobile horizontal swipe, desktop 4-col grid) */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-5 pb-6 md:pb-0 no-scrollbar">
          {skillCategories.map((cat: SkillCategory) => (
            <div
              key={cat.title}
              className="min-w-[75vw] sm:min-w-[320px] md:min-w-0 snap-center rounded-3xl bg-[#0d121c] border border-slate-700/80 hover:border-slate-500 p-6 flex flex-col justify-between transition-all shadow-xl"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-white tracking-tight">
                      {cat.title}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono font-medium">
                      {cat.skills.length} core skills
                    </span>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-2.5 rounded-xl border transition-all flex items-center justify-between ${
                        skill.highlight
                          ? "bg-slate-800/90 border-slate-700 text-white"
                          : "bg-transparent border-transparent text-slate-300 hover:bg-slate-800/40"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            skill.highlight ? "bg-blue-400" : "bg-slate-500"
                          }`}
                        />
                        <span className="text-xs font-semibold text-slate-100">{skill.name}</span>
                      </div>
                      <span className="text-[11px] font-mono font-medium text-blue-300">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-mono">
                ✓ Production Ready
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
