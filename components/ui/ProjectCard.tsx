"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { projects } from "@/lib/data/projects";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
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
      className="glass-card group relative flex min-h-[340px] flex-col overflow-hidden transition-shadow hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={project.thumbnail}
          alt=""
          fill
          className="object-cover opacity-[0.18] transition duration-500 group-hover:opacity-[0.24]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/92 to-[#050810]/75" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/15 bg-slate-900/50 px-2 py-0.5 text-xs text-slate-300 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-slate-300">
          {project.description.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="text-cyan-400/80">•</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400/20"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-purple-400/40 px-4 py-2 text-sm text-purple-300 transition hover:bg-purple-400/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
