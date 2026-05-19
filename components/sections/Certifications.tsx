import { SectionReveal } from "@/components/layout/SectionReveal";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <SectionReveal>
        <h2 className="text-3xl font-bold text-gradient">Certifications</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group block p-5 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_28px_rgba(34,211,238,0.12)]"
            >
              <span className="mb-3 inline-block rounded-full bg-purple-500/20 px-2 py-1 text-xs text-purple-300">
                Certificate
              </span>
              <p className="text-sm font-medium text-slate-200 group-hover:text-cyan-200">
                {cert.title}
              </p>
              <p className="mt-1 text-xs text-slate-500">{cert.issuer}</p>
              <p className="mt-3 text-xs text-cyan-400/80">View credential →</p>
            </a>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
