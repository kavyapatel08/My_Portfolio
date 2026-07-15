import { SectionReveal } from "@/components/layout/SectionReveal";
import { Brain, Terminal, Library, Server, Cloud, Database } from "lucide-react";

const skillCategories = [
  {
    title: "AI & Generative AI",
    icon: Brain,
    skills: ["LLMs", "AI Agents", "LangGraph", "LangChain", "MCP", "RAG", "Prompt Engineering", "Vector Databases"]
  },
  {
    title: "Programming",
    icon: Terminal,
    skills: ["Python", "C", "SQL", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "AI/ML Libraries",
    icon: Library,
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV"]
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["FastAPI", "Flask", "REST APIs", "Gradio"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "Git", "GitHub", "Vercel", "Render"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Qdrant"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <SectionReveal>
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">EXPERTISE</h2>
          <h3 className="text-3xl font-bold text-slate-100">Technical Skills</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-card flex flex-col p-6 rounded-2xl bg-slate-900/40 border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] group h-full">
              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-slate-300 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-colors shadow-inner">
                  <category.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-100">{category.title}</h4>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-start items-start">
                {category.skills.map((skill) => (
                  <span key={skill} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 bg-slate-800/60 border border-white/5 transition-all duration-300 hover:text-cyan-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:scale-105 cursor-default group/pill shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 group-hover/pill:bg-cyan-400 group-hover/pill:shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
