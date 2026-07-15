"use client";
import { useState, useEffect } from "react";
import { SectionReveal } from "@/components/layout/SectionReveal";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / cardsPerPage);

  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages - 1));
  const prevPage = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <section id="projects" className="section-padding">
      <SectionReveal>
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">FEATURED PROJECTS</h2>
          </div>
          <a href="https://github.com/kavyapatel08" target="_blank" rel="noreferrer" className="text-cyan-400 font-semibold text-sm hover:underline flex items-center gap-1">
            View All Projects <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        
        <div className="relative group w-full">
          {page > 0 && (
            <button 
              onClick={prevPage}
              className="absolute -left-4 lg:-left-6 top-[40%] -translate-y-1/2 z-20 bg-slate-900/90 border border-white/10 text-white w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md transition-all hover:bg-cyan-500/20 hover:text-cyan-400 hover:scale-110"
              aria-label="Previous projects"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
          )}

          <div className="overflow-hidden w-full px-1">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="w-full flex-shrink-0 px-3 pb-8"
                  style={{ width: `${100 / cardsPerPage}%` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {page < totalPages - 1 && (
            <button 
              onClick={nextPage}
              className="absolute -right-4 lg:-right-6 top-[40%] -translate-y-1/2 z-20 bg-slate-900/90 border border-white/10 text-white w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-md transition-all hover:bg-cyan-500/20 hover:text-cyan-400 hover:scale-110"
              aria-label="Next projects"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          )}
        </div>
      </SectionReveal>
    </section>
  );
}
