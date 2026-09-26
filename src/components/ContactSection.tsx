"use client";

import { useState } from "react";
import { Mail, Copy, Check, Send, Phone, MessageCircle, Github, Linkedin, Twitter } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function ContactSection() {
  const { developer } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developer.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#07090e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono font-semibold mb-3">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>Direct Communication</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Let&apos;s build your next web or mobile product.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-xl">
              I am available for contract builds, fast-turnaround product sprints, and engineering lead roles. Reach out via email, phone, or direct WhatsApp.
            </p>

            {/* Quick Action Badges: Phone, WhatsApp, Email */}
            <div className="mt-8 space-y-3 w-full max-w-md">
              
              {/* WhatsApp & Call */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={developer.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 text-xs font-bold transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={developer.phoneTel}
                  className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-bold transition-all"
                >
                  <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Call: {developer.phone}</span>
                </a>
              </div>

              {/* Direct Email Copy Box */}
              <div className="p-4 rounded-2xl bg-[#0d121c] border border-slate-700">
                <div className="text-xs text-slate-400 font-mono mb-1.5 font-medium">Direct Email</div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-bold text-white truncate font-mono">
                    {developer.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shrink-0 active:scale-95"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href={developer.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={developer.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 text-xs font-semibold transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4 text-sky-400" />
                <span>Twitter / X</span>
              </a>
            </div>

            {/* Location & Speed notice */}
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-300 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available globally for remote contracts &amp; on-site consultations</span>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-3xl bg-[#0d121c] border border-slate-700 p-6 sm:p-8 shadow-2xl">
              <h3 className="text-xl font-extrabold text-white mb-1.5">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-300 mb-6 font-normal">
                Have a project timeline or role requirement? Fill in your details below.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs text-slate-200">
                    Thank you for reaching out! Bolaji will reply promptly to your email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080b12] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080b12] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-200 mb-1.5">
                      Project or Role Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about the web or mobile app you are looking to build, timeline, or team role..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#080b12] border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/30 active:scale-98"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                        <span>Transmitting Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
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
