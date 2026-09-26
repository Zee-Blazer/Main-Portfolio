"use client";

import { Briefcase, Calendar, MapPin, CheckCircle, Award, Users, ChevronRight } from "lucide-react";
import { portfolioData, Experience } from "@/data/portfolio";

export default function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono font-semibold mb-3">
              <Briefcase className="w-3.5 h-3.5 text-blue-400" />
              <span>Proven Career Track Record</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Work Experience &amp; Leadership
            </h2>

            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              3+ years engineering scalable systems, directing technical squads, and mentoring developers.
            </p>
          </div>

          {/* Mobile Swipe Notice */}
          <div className="flex md:hidden items-center gap-2 text-xs font-semibold text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20 w-fit">
            <span>Swipe roles horizontally &rarr;</span>
          </div>
        </div>

        {/* Experience Cards */}
        {/* Mobile: Horizontal swipeable carousel | Desktop: Vertical timeline with generous spacing */}
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 pb-6 md:pb-0 no-scrollbar md:border-l md:border-slate-800 md:ml-6 md:space-y-10">
          {experiences.map((exp: Experience, index: number) => {
            return (
              <div
                key={exp.company}
                className="min-w-[85vw] sm:min-w-[480px] md:min-w-0 snap-center relative md:pl-10 group"
              >
                {/* Desktop Node Indicator */}
                <div
                  className={`hidden md:flex absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 items-center justify-center transition-all ${
                    exp.isLead
                      ? "bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-500/40"
                      : "bg-[#0d121c] border-slate-700 text-slate-300 group-hover:border-blue-400 group-hover:text-blue-300"
                  }`}
                >
                  {exp.isLead ? <Award className="w-4 h-4" /> : <Briefcase className="w-3.5 h-3.5" />}
                </div>

                {/* Card Container */}
                <div className="rounded-3xl bg-[#0d121c] border border-slate-700/80 hover:border-slate-500 p-6 sm:p-8 transition-all shadow-xl flex flex-col justify-between h-full">
                  
                  {/* Top Header */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        {/* Company & Role */}
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                            {exp.role}
                          </h3>
                          <span className="text-blue-400 font-extrabold text-lg">
                            @ {exp.company}
                          </span>
                        </div>

                        {/* Special Badges */}
                        <div className="flex flex-wrap gap-2 mt-2">
                          {exp.isLead && (
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                              ★ Lead Engineer &amp; Dev Mentor
                            </span>
                          )}
                          {exp.company === "GoMyCode" && (
                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                              🎓 Graduated 20+ Students
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Period & Location Badge */}
                      <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1.5 text-xs text-slate-300 shrink-0 font-mono">
                        <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1 rounded-lg border border-slate-700">
                          <Calendar className="w-3.5 h-3.5 text-blue-400" />
                          <span className="font-semibold text-white">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-400">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Summary Description */}
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mt-3">
                      {exp.description}
                    </p>

                    {/* Bullet Points */}
                    <div className="mt-5 space-y-2.5">
                      {exp.bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                          <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3" />
                          </div>
                          <span className="leading-snug">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Pills */}
                  <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-1 font-semibold">Tech:</span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800 text-slate-200 border border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
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
