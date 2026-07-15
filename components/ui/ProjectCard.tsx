"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { projects } from "@/lib/data/projects";

type Project = (typeof projects)[number] & { liveUrl?: string };

export function ProjectCard({ project }: { project: Project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.01 }}
      className="glass-card group relative flex flex-col overflow-hidden transition-shadow hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] h-full rounded-2xl bg-slate-900/60 border border-white/5"
    >
      <div className="relative h-[220px] w-full overflow-hidden shrink-0 rounded-t-2xl">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 mb-1">
          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Project</span>
        </div>
        <h3 className="text-xl font-bold text-white tracking-tight mb-4">{project.title}</h3>
        
        <ul className="flex-1 space-y-2.5 text-sm text-slate-300 mb-6">
          {project.description.slice(0, 3).map((line) => (
            <li key={line} className="flex gap-2.5 items-start leading-snug">
              <span className="text-cyan-400 mt-1 shrink-0 text-[10px]">●</span>
              <span className="opacity-90">{line}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-300 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 px-4 py-2 text-sm font-medium transition-colors border border-cyan-500/20 hover:border-cyan-500/40 w-full sm:flex-1"
            >
              <span>Live Demo</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 text-white px-4 py-2 text-sm font-medium transition-colors border border-white/10 hover:border-white/20 w-full sm:flex-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"/></svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
