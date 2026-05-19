"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { experience } from "@/lib/data";
import { gsap, registerGsapPlugins } from "@/lib/gsap";

export function ExperienceTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsapPlugins();
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
      const nodes = gsap.utils.toArray<HTMLElement>(".timeline-node");

      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleY: 0,
          transformOrigin: "top",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });
      }

      items.forEach((item, i) => {
        gsap.from(item, {
          opacity: 0,
          x: -40,
          duration: 0.7,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });

      nodes.forEach((node, i) => {
        gsap.from(node, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.1,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: node,
            start: "top 88%",
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="experience" ref={sectionRef} className="section-padding">
      <h2 className="text-3xl font-bold text-gradient">Experience</h2>
      <div className="relative mt-12 md:mx-auto md:max-w-4xl">
        <div
          ref={lineRef}
          className="timeline-line absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-cyan-400 via-purple-500/50 to-transparent md:left-1/2 md:block md:-ml-px"
          aria-hidden
        />
        <div className="space-y-12">
          {experience.map((job, index) => (
            <article
              key={`${job.company}-${job.period}`}
              className={`timeline-item relative flex flex-col gap-4 pl-10 md:w-[calc(50%-2rem)] ${
                index % 2 === 0
                  ? "md:mr-[50%] md:pr-8 md:text-right"
                  : "md:ml-[50%] md:pl-8"
              }`}
            >
              <span
                className={`timeline-node absolute top-1 left-0 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#050810] shadow-[0_0_12px_rgba(34,211,238,0.6)] md:left-1/2 md:-ml-2 ${
                  index % 2 === 0 ? "md:-translate-x-1/2" : "md:-translate-x-1/2"
                }`}
                aria-hidden
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              </span>
              <div className="glass-card p-6 transition hover:border-cyan-400/30">
                <h3 className="text-lg font-semibold text-slate-100">
                  {job.role}
                </h3>
                <p className="mt-1 text-cyan-400">
                  {job.company} · {job.location}
                </p>
                <p className="mt-1 font-mono text-xs text-slate-500">
                  {job.period}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
