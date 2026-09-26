"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  GraduationCap,
  Play,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Users,
  Award,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { portfolioData, StudentMedia } from "@/data/portfolio";

export default function StudentGallery() {
  const { studentsGallery } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedMedia, setSelectedMedia] = useState<StudentMedia | null>(null);

  const categories = ["All", "Video Session", "Classroom", "Mentorship", "Celebration"];

  const filteredMedia =
    activeCategory === "All"
      ? studentsGallery
      : studentsGallery.filter((item) => item.category === activeCategory);

  const currentIndex = selectedMedia
    ? filteredMedia.findIndex((m) => m.id === selectedMedia.id)
    : -1;

  const handleNext = useCallback(() => {
    if (currentIndex >= 0 && currentIndex < filteredMedia.length - 1) {
      setSelectedMedia(filteredMedia[currentIndex + 1]);
    } else {
      setSelectedMedia(filteredMedia[0]);
    }
  }, [currentIndex, filteredMedia]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedMedia(filteredMedia[currentIndex - 1]);
    } else {
      setSelectedMedia(filteredMedia[filteredMedia.length - 1]);
    }
  }, [currentIndex, filteredMedia]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMedia) return;
      if (e.key === "Escape") setSelectedMedia(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMedia, handleNext, handlePrev]);

  return (
    <section id="students" className="py-24 relative overflow-hidden bg-[#0a0e17]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold mb-3">
            <GraduationCap className="w-4 h-4 text-indigo-400" />
            <span>Dedicated Mentorship &amp; Student Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            20+ Developers Mentored &amp; Graduated
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Teaching and graduating over 20+ students who are now building real software in the industry is one of my greatest accomplishments. Tap any photo or video below to view full-screen moments from our cohorts.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200">
              <Users className="w-4 h-4 text-blue-400" />
              <strong className="text-white font-bold">20+ Graduates</strong> in tech roles
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              <strong className="text-white font-bold">Hands-On</strong> Fullstack Labs &amp; Reviews
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200">
              <Award className="w-4 h-4 text-emerald-400" />
              <strong className="text-white font-bold">100%</strong> Project Completion Rate
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-102"
                  : "bg-slate-900 text-slate-300 hover:text-white border border-slate-700"
              }`}
            >
              {cat === "All" ? "All Media (Photos & Video)" : cat}
            </button>
          ))}
        </div>

        {/* Mobile Swipe Notice */}
        <div className="flex sm:hidden items-center justify-between text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-3.5 py-2 rounded-xl border border-indigo-500/20 mb-4">
          <span>Swipe photos &amp; video &rarr;</span>
          <span className="text-[11px] text-slate-400">Tap to expand</span>
        </div>

        {/* Gallery Grid (Mobile swipeable row or touch cards) */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 overflow-x-auto sm:overflow-visible snap-x snap-mandatory gap-5 pb-6 sm:pb-0 no-scrollbar">
          {filteredMedia.map((item) => {
            const isVideo = item.type === "video";

            return (
              <div
                key={item.id}
                onClick={() => setSelectedMedia(item)}
                className={`min-w-[80vw] sm:min-w-0 snap-center group relative rounded-2xl bg-[#0f1523] border border-slate-700/80 overflow-hidden cursor-pointer hover:border-indigo-400 transition-all duration-300 hover:-translate-y-1 shadow-xl ${
                  isVideo ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                {/* Media Image / Video Poster */}
                <Image
                  src={isVideo ? (item.poster || "/gallery/student-01.jpg") : item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Video Play Button Indicator */}
                {isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-white translate-x-0.5" />
                    </div>
                  </div>
                )}

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      isVideo
                        ? "bg-red-600 text-white shadow-md shadow-red-600/30"
                        : "bg-slate-900/90 text-indigo-300 border border-indigo-500/40"
                    }`}
                  >
                    {isVideo ? "▶ Watch Live Session" : item.category}
                  </span>
                </div>

                {/* Bottom Details Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <Maximize2 className="w-4 h-4 text-slate-300 group-hover:text-white shrink-0 ml-2" />
                  </div>
                  <p className="mt-1 text-xs text-slate-200 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedMedia(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 transition-all hover:scale-110 hidden sm:flex"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 transition-all hover:scale-110 hidden sm:flex"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-4xl w-full max-h-[92vh] bg-[#0c1017] rounded-3xl border border-slate-700 overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Media Canvas */}
            <div className="relative w-full bg-black flex items-center justify-center min-h-[300px] max-h-[68vh] overflow-hidden">
              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.src}
                  poster={selectedMedia.poster}
                  controls
                  autoPlay
                  playsInline
                  className="w-full max-h-[68vh] object-contain"
                />
              ) : (
                <div className="relative w-full h-[62vh]">
                  <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Modal Caption */}
            <div className="p-6 bg-[#0c1017] border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    {selectedMedia.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {currentIndex + 1} of {filteredMedia.length}
                  </span>
                </div>
                <h4 className="text-lg font-extrabold text-white">
                  {selectedMedia.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  {selectedMedia.description}
                </p>
              </div>

              {/* Mobile next/prev controls */}
              <div className="flex sm:hidden items-center gap-2 w-full justify-between pt-2 border-t border-slate-800">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-white flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Prev
                </button>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-xs font-bold text-white flex items-center gap-1"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
