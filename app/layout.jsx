import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Abdullah Kishwar — Senior MERN Stack Engineer & SaaS Architect",
  description: "Portfolio of Abdullah Kishwar — MERN Stack Specialist, SaaS Architect & AI Automation Engineer at Code 90. Building high-scale web systems & AI workflows.",
  keywords: [
    "Abdullah Kishwar",
    "MERN Stack Developer",
    "SaaS Architect",
    "AI Automation",
    "n8n Workflow Engineer",
    "React Specialist",
    "Node.js Engineer",
    "Code 90",
    "Full Stack Developer"
  ],
  authors: [{ name: "Abdullah Kishwar" }],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Abdullah Kishwar — MERN Stack Engineer & SaaS Architect",
    description: "Building production-grade web systems, multi-tenant SaaS platforms, and intelligent AI automation pipelines.",
    url: "https://abdullahkishwar.dev",
    siteName: "Abdullah Kishwar Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-[#07090e] text-slate-100 antialiased selection:bg-blue-600 selection:text-white min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
