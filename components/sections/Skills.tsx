"use client";

import dynamic from "next/dynamic";
import { SectionReveal } from "@/components/layout/SectionReveal";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";

const SkillsOrbitCanvas = dynamic(
  () =>
    import("@/components/canvas/SkillsOrbitCanvas").then(
      (m) => m.SkillsOrbitCanvas
    ),
  { ssr: false, loading: () => <SkillsOrbitFallback /> }
);

function SkillsOrbitFallback() {
  return (
    <div className="relative flex h-full min-h-[320px] items-center justify-center overflow-x-auto px-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
        className="relative h-64 w-64 shrink-0 rounded-full border border-dashed border-cyan-400/30"
      >
        {skills.map((skill, i) => {
          const angle = (i / skills.length) * Math.PI * 2;
          const x = Math.cos(angle) * 110;
          const y = Math.sin(angle) * 110;
          return (
            <span
              key={skill.name}
              className="absolute left-1/2 top-1/2 whitespace-nowrap rounded-md border border-white/10 bg-slate-900/90 px-2 py-0.5 text-[9px] text-cyan-100 sm:text-[10px]"
              style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
            >
              {skill.name}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <SectionReveal>
        <h2 className="text-3xl font-bold text-gradient">Skills</h2>
        <div className="section-subtitle-scroll">
          <p className="section-subtitle min-w-max pr-4">
            ML pipelines, backends, data tools, LLMs, and agentic AI workflows.
          </p>
        </div>
        <div className="mt-10 h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 md:h-[520px]">
          <div className="hidden h-full md:block">
            <SkillsOrbitCanvas />
          </div>
          <div className="h-full md:hidden">
            <SkillsOrbitFallback />
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
