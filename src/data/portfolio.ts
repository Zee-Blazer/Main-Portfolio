export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  role: string;
  turnaroundBadge?: string;
  metrics?: string;
  tags: string[];
  liveUrl: string;
  previewImage: string;
  featured: boolean;
  accentColor: string;
  gradient: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  isLead?: boolean;
  bullets: string[];
  skills: string[];
}

export interface StudentMedia {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
  title: string;
  category: 'Classroom' | 'Mentorship' | 'Celebration' | 'Video Session';
  description: string;
  aspect?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: string; highlight?: boolean }[];
}

export const portfolioData = {
  developer: {
    name: "Bolaji Ganiyu",
    role: "Software Engineer — Web & Mobile",
    title: "Fullstack & Mobile Engineer | Tech Lead | Instructor",
    headline: "I build high-impact web & mobile products that move businesses forward.",
    hook: "Need a product shipped fast, or an engineering lead to guide your team to the finish line? I transform complex problems into sleek, lightning-fast digital solutions.",
    bio: "Software Engineer with 3+ years of experience engineering high-performance web and mobile products, leading cross-functional teams, and mentoring over 20+ thriving developers. Proven track record delivering production-grade platforms—from full-scale EdTech systems to delivering production portals in a single day.",
    experienceYears: "3+",
    graduatedStudents: "20+",
    flagshipProjects: "3+",
    fastestDelivery: "24 Hours",
    email: "ganiyu.bolaji.bo@gmail.com",
    phone: "08139077093",
    phoneTel: "tel:+2348139077093",
    whatsapp: "https://wa.me/2348139077093",
    github: "https://github.com/Zee-Blazer",
    linkedin: "https://www.linkedin.com/in/bolaji-ganiyu-27043a218",
    twitter: "https://x.com/G_Lyte",
    location: "Lagos, Nigeria • Remote / Global",
    avatar: "/images/profile.png",
    availability: "Available for Web & Mobile Projects",
  },

  projects: [
    {
      id: "ecodite-foundation",
      title: "Ecodite Foundation",
      tagline: "Create. Learn. Become. — Built & Shipped in a Single Day",
      description:
        "High-performance, beautifully designed web portal built for Ecodite Educational Foundation to empower youth through digital skills, robotics, and creative arts. Engineered, structured, and deployed into live production in a single day with fluid animations, accessibility, and high SEO score.",
      turnaroundBadge: "⚡ Shipped in 24 Hours",
      metrics: "1-Day Delivery • Production-Grade Next.js",
      role: "Lead Fullstack Developer",
      tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "SEO & Performance", "Responsive UI"],
      liveUrl: "https://www.ecoditefoundation.org/",
      previewImage: "/projects/ecodite.png",
      featured: true,
      accentColor: "#15803d",
      gradient: "from-emerald-600/20 via-green-600/10 to-transparent",
      highlights: [
        "Architected and deployed full production portal in a record 1-day turnaround",
        "Crafted responsive design system with custom typography, SVG motion, and structured schemas",
        "Implemented programs showcase, leadership messages, dynamic event streams, and donation flows",
        "Achieved near-perfect Google Lighthouse performance and semantic accessibility scores",
      ],
    },
    {
      id: "biuda-hq",
      title: "Biuda HQ",
      tagline: "Next-Gen EdTech Platform Grooming Tomorrow's Tech Leaders",
      description:
        "Comprehensive technology education platform making coding and creative skills fun for children and teenagers. As the Lead Fullstack Engineer, led the entire engineering team, mentored developers, and architected seamless experiences spanning web, real-time live classes, and cross-platform mobile apps.",
      turnaroundBadge: "⭐ Lead Engineer & Team Mentor",
      metrics: "Cross-Platform Ecosystem • iOS & Google Play Apps",
      role: "Lead Fullstack Engineer",
      tags: ["Next.js", "React", "Node.js", "React Native", "Tailwind CSS", "Gamification", "AI Tools"],
      liveUrl: "https://www.biudahq.com/",
      previewImage: "/projects/biuda.png",
      featured: true,
      accentColor: "#ff6d00",
      gradient: "from-orange-600/20 via-amber-600/10 to-transparent",
      highlights: [
        "Led the entire engineering team as Lead Engineer, establishing architectural standards and mentoring devs",
        "Engineered end-to-end platform features: live interactive classes, self-paced learning, and gamification loops",
        "Built AI-powered personality test system helping parents discover children's unique talents",
        "Integrated mobile ecosystems directing users to published apps on Apple App Store & Google Play",
      ],
    },
    {
      id: "remeda-studio",
      title: "Remeda Studio",
      tagline: "Pioneering Creative Excellence — Digital Agency & Design Studio",
      description:
        "Bespoke digital agency website engineered to showcase premium creative excellence. Features custom cursor tracking, interactive reveal animations, dynamic preloader choreography, and responsive grids tailored for immersive visual storytelling.",
      turnaroundBadge: "✨ Creative Agency Experience",
      metrics: "Fluid Motion Choreography • High-Converting Visual Showcase",
      role: "Fullstack / Frontend Engineer",
      tags: ["Next.js / Modern JS", "Motion Design", "Interactive Canvas", "CSS3 Animations", "Brand Identity"],
      liveUrl: "https://remeda.studio",
      previewImage: "/projects/remeda.png",
      featured: true,
      accentColor: "#6366f1",
      gradient: "from-indigo-600/20 via-purple-600/10 to-transparent",
      highlights: [
        "Crafted high-fidelity motion transitions with custom smooth scrollbar and cursor feedback",
        "Engineered brand showcase showcasing international creative work and client portfolios",
        "Optimized asset loading and layout shifts for seamless desktop and mobile rendering",
      ],
    },
  ] as Project[],

  experiences: [
    {
      company: "Biuda",
      role: "Lead Fullstack Developer",
      period: "2023 — Present",
      location: "Remote / Hybrid",
      isLead: true,
      description:
        "Lead engineer directing the technical team, overseeing system architecture, rapid sprint deliveries, and mentoring developers.",
      bullets: [
        "Architected and maintained the main web application and cross-platform infrastructure serving students, parents, and schools.",
        "Mentored and guided frontend and backend developers through code reviews, 1-on-1 pairing sessions, and architectural design docs.",
        "Spearheaded key product modules: AI personality quizzes, gamified student dashboards, live video tutoring workflows, and booking engines.",
        "Collaborated directly with executives and product managers to accelerate shipping cycles by 40%.",
      ],
      skills: ["Next.js", "TypeScript", "Node.js", "Team Leadership", "Code Reviews", "System Architecture", "React Native"],
    },
    {
      company: "GoMyCode",
      role: "Software Instructor",
      period: "2022 — 2024",
      location: "On-site / Hybrid",
      isLead: false,
      description:
        "Taught, coached, and graduated over 20+ software engineering students who transitioned into professional tech careers.",
      bullets: [
        "Designed and conducted immersive curriculum covering Fullstack Web Development (React, Node.js, JavaScript/TypeScript, Git).",
        "Taught and successfully graduated 20+ aspiring software engineers, fostering hands-on project building and real-world collaboration.",
        "Guided students from foundational programming to deploying production web apps, code reviews, and technical interview preparation.",
        "Recognized for top-tier student completion rates and practical, project-based teaching methodology.",
      ],
      skills: ["Teaching & Mentorship", "Fullstack Curriculum", "React", "Node.js", "Git / GitHub", "Career Coaching"],
    },
    {
      company: "Urban Hive",
      role: "Software Engineer (Web & Mobile)",
      period: "2022 — 2023",
      location: "Hybrid",
      isLead: false,
      description:
        "Built responsive web applications and cross-platform mobile features, engineering high-performance APIs and intuitive user interfaces.",
      bullets: [
        "Engineered scalable web and mobile user interfaces with focus on performance, low latency, and fluid interaction.",
        "Collaborated with cross-functional product and design teams to build user-centric features and automated workflows.",
        "Refactored legacy UI components into reusable, modular TypeScript components, reducing bug rates.",
      ],
      skills: ["Web Development", "Mobile Engineering", "React", "TypeScript", "REST APIs", "Tailwind CSS"],
    },
    {
      company: "UserCanDo",
      role: "Frontend Developer",
      period: "2021 — 2022",
      location: "Remote",
      isLead: false,
      description:
        "Developed accessible, fast-loading, pixel-perfect frontend experiences and interactive component libraries.",
      bullets: [
        "Transformed complex Figma prototypes into performant, standards-compliant web interfaces.",
        "Improved website page load metrics and cross-browser consistency across mobile and desktop devices.",
        "Implemented reactive state management and integrated RESTful endpoints with clean error boundaries.",
      ],
      skills: ["Frontend Development", "JavaScript", "HTML5/CSS3", "Responsive UI", "UI/UX Fidelity"],
    },
  ] as Experience[],

  studentsGallery: [
    {
      id: "media-video-session",
      type: "video",
      src: "/gallery/student-session.mp4",
      poster: "/gallery/student-session-poster.jpg",
      title: "Interactive Classroom & Live Coding Session",
      category: "Video Session",
      description: "Live recording of hands-on coding, live problem solving, and student engagement during our tech training cohort.",
      aspect: "video",
    },
    {
      id: "media-class-01",
      type: "image",
      src: "/gallery/student-01.jpg",
      title: "Cohort Collaboration & Live Lab",
      category: "Classroom",
      description: "Students actively pair-programming, building real-world software projects with hands-on instructor guidance.",
    },
    {
      id: "media-class-02",
      type: "image",
      src: "/gallery/student-02.jpg",
      title: "Hands-on Fullstack Mentorship",
      category: "Mentorship",
      description: "Breaking down complex data structures, API integrations, and modern frontend paradigms with students.",
    },
    {
      id: "media-class-03",
      type: "image",
      src: "/gallery/student-03.jpg",
      title: "Deep-Dive Code Review & Debugging",
      category: "Mentorship",
      description: "One-on-one code review sessions to cultivate industry-standard clean code habits and debugging resilience.",
    },
    {
      id: "media-class-04",
      type: "image",
      src: "/gallery/student-04.jpg",
      title: "Classroom Energy & Teamwork",
      category: "Classroom",
      description: "Fostering an inclusive, high-energy environment where students support each other through sprint blockers.",
    },
    {
      id: "media-class-05",
      type: "image",
      src: "/gallery/student-05.jpg",
      title: "Milestone Celebration & Recognition",
      category: "Celebration",
      description: "Celebrating student milestones, successful project deliveries, and certification accomplishments.",
    },
    {
      id: "media-class-06",
      type: "image",
      src: "/gallery/student-06.jpg",
      title: "Graduation Cohort & Career Launch",
      category: "Celebration",
      description: "Proud moment graduating ambitious developers prepared to contribute value to real-world engineering teams.",
    },
    {
      id: "media-class-07",
      type: "image",
      src: "/gallery/student-07.jpg",
      title: "Sprint Presentations & Project Demos",
      category: "Classroom",
      description: "Students showcasing capstone applications, pitching their solutions with pride and technical confidence.",
    },
    {
      id: "media-class-08",
      type: "image",
      src: "/gallery/student-08.jpg",
      title: "Tech Community & Lifelong Mentorship",
      category: "Mentorship",
      description: "Ongoing mentorship connections that continue even after graduation, helping alumni navigate the job market.",
    },
  ] as StudentMedia[],

  skillCategories: [
    {
      title: "Frontend & Web",
      iconName: "Layout",
      skills: [
        { name: "Next.js (App Router)", level: "Advanced", highlight: true },
        { name: "React 18 / 19", level: "Advanced", highlight: true },
        { name: "TypeScript", level: "Advanced", highlight: true },
        { name: "Tailwind CSS", level: "Expert", highlight: true },
        { name: "Responsive UI/UX", level: "Expert", highlight: true },
        { name: "Performance & SEO", level: "Advanced" },
      ],
    },
    {
      title: "Mobile Development",
      iconName: "Smartphone",
      skills: [
        { name: "React Native", level: "Advanced", highlight: true },
        { name: "Mobile Web & PWA", level: "Advanced", highlight: true },
        { name: "iOS & Android Layouts", level: "Proficient" },
        { name: "Offline & Native APIs", level: "Proficient" },
      ],
    },
    {
      title: "Backend & Cloud",
      iconName: "Server",
      skills: [
        { name: "Node.js & Express", level: "Advanced", highlight: true },
        { name: "RESTful APIs", level: "Advanced", highlight: true },
        { name: "Database Design (SQL/NoSQL)", level: "Proficient" },
        { name: "Auth & Security", level: "Proficient" },
      ],
    },
    {
      title: "Leadership & Delivery",
      iconName: "Users",
      skills: [
        { name: "Lead Engineering", level: "Expert", highlight: true },
        { name: "Mentoring (20+ Grads)", level: "Expert", highlight: true },
        { name: "1-Day Fast Turnaround", level: "Expert", highlight: true },
        { name: "Code Review & Standards", level: "Advanced" },
      ],
    },
  ] as SkillCategory[],

  stats: [
    { label: "Experience", value: "3+ Years", subtext: "Web & Mobile Engineering" },
    { label: "Graduated Students", value: "20+ Engineers", subtext: "Mentored into tech careers" },
    { label: "Flagship Platforms", value: "3+ Live Apps", subtext: "Active in production" },
    { label: "Fastest Delivery", value: "24 Hours", subtext: "Turnaround for Ecodite" },
  ],
};
