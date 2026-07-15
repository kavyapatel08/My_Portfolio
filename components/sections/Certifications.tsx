import { SectionReveal } from "@/components/layout/SectionReveal";
import { certifications } from "@/lib/data";

function getIssuerIcon(issuer: string) {
  const name = issuer.toLowerCase();
  if (name.includes("google")) {
    return (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
      </svg>
    );
  }
  // Generic placeholder icon for others like Infosys, Accenture, Cognitive Class
  return (
    <svg className="w-6 h-6 text-cyan-400/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.836 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
    </svg>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <SectionReveal>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">ACHIEVEMENTS</h2>
            <h3 className="text-3xl font-bold text-slate-100">Certifications</h3>
          </div>
          
          <div className="flex flex-col gap-4">
            {certifications.map((cert) => (
              <a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group flex items-center justify-between p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] bg-slate-900/40 rounded-xl"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 shrink-0 text-slate-300 group-hover:text-cyan-400 transition-colors shadow-inner">
                    {getIssuerIcon(cert.issuer)}
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <h3 className="text-[15px] sm:text-base font-bold text-slate-100 group-hover:text-cyan-200 transition-colors leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <div className="pl-4 shrink-0">
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
