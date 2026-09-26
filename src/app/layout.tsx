import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bolaji Ganiyu | Software Engineer (Web & Mobile)",
  description:
    "Software Engineer (Web & Mobile) with 3+ years experience. Lead Engineer at Biuda HQ, Software Instructor at GoMyCode (20+ graduated developers), creator of Ecodite Foundation (shipped in 24 hours), Urban Hive, and UserCanDo.",
  keywords: [
    "Bolaji Ganiyu",
    "Software Engineer",
    "Web and Mobile Developer",
    "Fullstack Developer",
    "Lead Engineer",
    "Next.js",
    "React Native",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "GoMyCode Instructor",
    "Biuda",
    "Ecodite Foundation",
  ],
  authors: [{ name: "Bolaji Ganiyu" }],
  openGraph: {
    title: "Bolaji Ganiyu | Software Engineer (Web & Mobile)",
    description:
      "Software Engineer (Web & Mobile) with 3+ years experience. Lead Engineer at Biuda HQ, Software Instructor at GoMyCode (20+ graduated developers), creator of Ecodite Foundation & Remeda Studio.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="bg-[#07090e] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
