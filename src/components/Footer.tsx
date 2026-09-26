"use client";

import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { developer } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#05070a] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Note */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 font-extrabold text-white text-lg tracking-tight">
              <span>{developer.name}</span>
              <span className="text-blue-500 font-mono">•</span>
              <span className="text-slate-300 font-normal text-sm">Software Engineer (Web &amp; Mobile)</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Next.js 14 • React Native • Node.js • TypeScript • 3+ Years Experience
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold text-slate-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#students" className="hover:text-white transition-colors">Students (20+)</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-all hover:-translate-y-0.5"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <span>&copy; {new Date().getFullYear()} {developer.name}. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <a href={developer.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            <span>•</span>
            <a href={developer.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            <span>•</span>
            <a href={developer.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white">X</a>
            <span>•</span>
            <a href={developer.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
