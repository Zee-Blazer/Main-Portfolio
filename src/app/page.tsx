import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import StudentGallery from "@/components/StudentGallery";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Live Stats & Profile */}
      <Hero />

      {/* Featured Projects Showcase (Ecodite, Biuda, Remeda Studio) */}
      <ProjectsSection />

      {/* Experience History & Leadership (Biuda, GoMyCode, Urban Hive, UserCanDo) */}
      <ExperienceSection />

      {/* Student Mentorship & Hall of Fame Gallery (20+ Grads) */}
      <StudentGallery />

      {/* Core Engineering Disciplines & Skillsets */}
      <SkillsSection />

      {/* Direct Contact & Collaboration Inquiries */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
