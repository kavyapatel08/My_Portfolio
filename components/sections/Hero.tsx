"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { contact } from "@/lib/data";
import { HeroCssFallback } from "./HeroCssFallback";
import { useState, useEffect } from "react";
import { Bot, Brain, Sparkles, Workflow, BookOpen, Settings, Cloud, Cpu, Award, GraduationCap, FileText, ArrowRight } from "lucide-react";

const HeroCanvas = dynamic(
  () => import("@/components/canvas/HeroCanvas").then((m) => m.HeroCanvas),
  {
    ssr: false,
    loading: () => <HeroCssFallback />,
  }
);

const titles = [
  "AI/ML Engineer",
  "Generative AI Developer",
  "AI Agent Developer",
  "LLM Application Developer",
  "LangGraph & MCP Developer",
  "Building Intelligent AI Systems",
];

function Typewriter() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const fullText = titles[currentTitleIndex];

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000); // Pause briefly after each title
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex]);

  return (
    <div className="h-8 md:h-12 flex items-center justify-center mt-2 mb-6">
      <span className="text-xl md:text-3xl font-medium text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
        {currentText}
        <span className="animate-pulse border-r-2 border-cyan-400 ml-1 h-full" />
      </span>
    </div>
  );
}

const focusPills = [
  { label: "AI Agents", icon: Bot },
  { label: "Generative AI", icon: Brain },
  { label: "LLMs", icon: Sparkles },
  { label: "LangGraph", icon: Workflow },
  { label: "RAG", icon: BookOpen },
  { label: "MCP", icon: Settings },
  { label: "FastAPI", icon: Cloud },
  { label: "Machine Learning", icon: Cpu },
];

const stats = [
  { label: "6+ AI Agents Built", icon: Bot },
  { label: "10+ Certifications", icon: Award },
  { label: "9.04 GPA", icon: GraduationCap },
  { label: "Department Rank #1", icon: Award },
];

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-10">
      <div className="absolute inset-0 hidden md:block">
        <HeroCanvas />
      </div>
      <div className="absolute inset-0 md:hidden">
        <HeroCssFallback />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg md:text-xl font-medium text-slate-300 mb-2">Hello, I&apos;m</h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient leading-tight tracking-tight">
            Kavya Patel
          </h1>
        </motion.div>

        {/* Animated Typewriter */}
        <Typewriter />

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto max-w-2xl text-slate-400 text-base md:text-lg leading-relaxed mb-10"
        >
          Passionate about building intelligent AI systems using LLMs, AI Agents, RAG, LangGraph, and modern ML technologies. I enjoy turning complex AI ideas into scalable, production-ready applications.
        </motion.p>

        {/* AI Focus Pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto"
        >
          {focusPills.map((pill, i) => (
            <motion.div
              key={pill.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              className="flex items-center gap-1.5 rounded-full bg-slate-900/60 border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm transition-colors hover:border-cyan-400/50 hover:text-cyan-300"
            >
              <pill.icon className="w-3.5 h-3.5" />
              {pill.label}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-xl bg-cyan-500/20 px-6 py-3 text-sm font-semibold text-cyan-300 border border-cyan-500/30 transition-all hover:bg-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_24px_rgba(34,211,238,0.3)]"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-purple-500/10 px-6 py-3 text-sm font-medium text-purple-300 border border-purple-500/20 transition-all hover:bg-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_24px_rgba(168,85,247,0.25)]"
          >
            <FileText className="w-4 h-4" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-xl glass-card px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:border-white/20 hover:text-white"
          >
            Contact Me
          </a>
        </motion.div>

        {/* AI Stats Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-3xl mx-auto pt-8 border-t border-white/5"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-2 group">
              <stat.icon className="w-4 h-4 text-cyan-500/70 group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_5px_rgba(34,211,238,0.4)]" />
              <span className="text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mx-auto mt-16 flex h-10 w-6 justify-center rounded-full border border-white/20"
          aria-hidden
        >
          <span className="mt-2 block h-2 w-1 rounded-full bg-cyan-400" />
        </motion.div>

      </div>
    </section>
  );
}
