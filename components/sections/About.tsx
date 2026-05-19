import Image from "next/image";
import { SectionReveal } from "@/components/layout/SectionReveal";
import { about } from "@/lib/data";
import { images } from "@/lib/images";

export function About() {
  return (
    <section id="about" className="section-padding">
      <SectionReveal>
        <h2 className="text-3xl font-bold text-gradient">{about.headline}</h2>
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-start">
          <div className="relative mx-auto shrink-0 md:mx-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/40 to-purple-500/40 blur-sm" />
            <div className="relative h-56 w-44 overflow-hidden rounded-2xl border border-white/15 bg-slate-900 shadow-xl md:h-64 md:w-52">
              <Image
                src={images.profile}
                alt="Kavya Patel"
                fill
                className="object-cover object-top brightness-95 contrast-105 saturate-90"
                sizes="(max-width: 768px) 176px, 208px"
                priority
              />
            </div>
          </div>
          <div className="glass-card flex-1 p-8 transition hover:border-cyan-400/30">
            <p className="text-slate-300">{about.education}</p>
            <p className="mt-2 text-cyan-400">
              GPA: {about.gpa} · {about.rank}
            </p>
            <ul className="mt-6 space-y-2 text-slate-400">
              {about.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
