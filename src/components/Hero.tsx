"use client";

import Image from "next/image";
import { ArrowRight, MessageCircle, Phone, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { developer, stats } = portfolioData;

  return (
    <section id="about" className="relative pt-32 pb-20 overflow-hidden bg-[#07090e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Clear, High-Converting Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 mb-6 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-100">
                {developer.availability}
              </span>
            </div>

            {/* Developer Name & Title */}
            <div className="space-y-1">
              <span className="text-sm sm:text-base font-mono font-semibold tracking-wider uppercase text-blue-400">
                Hi, I&apos;m {developer.name}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Software Engineer <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300">
                  (Web &amp; Mobile)
                </span>
              </h1>
            </div>

            {/* Client-Focused Pitch */}
            <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              I build fast, reliable web and mobile products that help clients launch with confidence and scale without bottlenecks. 
              From shipping full production platforms in a single day to leading engineering teams and mentoring over 20+ engineers, I turn your ambitious ideas into reality.
            </p>

            {/* High-Impact Proof Points */}
            <div className="mt-6 flex flex-wrap gap-2.5 text-xs text-slate-200">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700">
                <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Shipped Ecodite in 24 Hours</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Lead Engineer @ Biuda HQ</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Mentored 20+ Devs @ GoMyCode</span>
              </div>
            </div>

            {/* Direct CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-xl shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Hire Me / Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={developer.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp ({developer.phone})</span>
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white transition-colors"
              >
                <span>Explore Live Projects &darr;</span>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Profile Image & Bio Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Subtle Ambient Border */}
              <div className="relative rounded-3xl bg-[#0f1522] border border-slate-700/80 p-5 sm:p-6 shadow-2xl">
                
                {/* Profile Photo */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/60">
                  <Image
                    src={developer.avatar}
                    alt={developer.name}
                    fill
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1522] via-transparent to-transparent opacity-40"></div>
                </div>

                {/* Developer Info Bar */}
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {developer.name}
                    </h3>
                    <p className="text-xs text-blue-400 font-medium">
                      Software Engineer (Web &amp; Mobile)
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/30">
                    3+ Yrs Exp
                  </span>
                </div>

                {/* Quick Contact Chips */}
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <a
                    href={`tel:${developer.phone}`}
                    className="flex items-center gap-1.5 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>{developer.phone}</span>
                  </a>
                  <span className="text-slate-500">•</span>
                  <a
                    href={`mailto:${developer.email}`}
                    className="hover:text-white transition-colors truncate max-w-[170px]"
                  >
                    {developer.email}
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Metrics Grid — Clean, High-Contrast Cards */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0c1017] border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-300 mt-1">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
