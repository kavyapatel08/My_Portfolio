import Image from "next/image";
import { SectionReveal } from "@/components/layout/SectionReveal";
import { about } from "@/lib/data";
import { images } from "@/lib/images";
import { GraduationCap, Brain, Bot, Cpu, Sparkles, Workflow, Rocket, Award } from "lucide-react";

function FeatureRow({ icon, text }: { icon: React.ReactNode, text: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/60 border border-white/5 text-cyan-400 shrink-0 shadow-inner group-hover:border-cyan-400/30 transition-colors">
        {icon}
      </div>
      <p className="text-slate-300 text-[15px] sm:text-base leading-relaxed pt-1.5">
        {text}
      </p>
    </li>
  );
}

function StatCard({ icon, number, label }: { icon: React.ReactNode, number: string, label: string }) {
  return (
    <div className="glass-card flex flex-col items-center justify-center p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] bg-slate-900/40 rounded-xl h-full">
      <div className="text-purple-400 mb-3 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
        {icon}
      </div>
      <div className="text-2xl sm:text-3xl font-bold text-slate-100 mb-1">{number}</div>
      <div className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider">{label}</div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <SectionReveal>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          
          <div className="relative mx-auto shrink-0 md:mx-0 lg:mt-16">
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

          <div className="flex-1 flex flex-col gap-10">
            
            <div>
              <h3 className="text-3xl font-bold text-slate-100 mb-8 tracking-tight">Who I Am</h3>
              <ul className="space-y-5">
                <FeatureRow 
                  icon={<GraduationCap className="w-5 h-5" />}
                  text={<>Final-year B.Tech Information Technology student at <strong>Ganpat University</strong></>}
                />
                <FeatureRow 
                  icon={<Brain className="w-5 h-5" />}
                  text={<>Passionate about <strong>Artificial Intelligence, Generative AI & LLMs</strong></>}
                />
                <FeatureRow 
                  icon={<Bot className="w-5 h-5" />}
                  text={<>Building AI Agents using <strong>LangGraph, LangChain, RAG and MCP</strong></>}
                />
                <FeatureRow 
                  icon={<Sparkles className="w-5 h-5" />}
                  text={<>Interested in solving real-world problems with intelligent automation</>}
                />
                <FeatureRow 
                  icon={<Rocket className="w-5 h-5" />}
                  text={<>Continuously learning modern AI technologies and deploying production-ready applications</>}
                />
                <FeatureRow 
                  icon={<Workflow className="w-5 h-5" />}
                  text={<>Exploring Multi-Agent Systems, AI Workflows and LLM Engineering</>}
                />
              </ul>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard 
                icon={<Bot className="w-6 h-6" />}
                number="6+"
                label="AI Agents Built"
              />
              <StatCard 
                icon={<Cpu className="w-6 h-6" />}
                number="4+"
                label="AI Projects"
              />
              <StatCard 
                icon={<Award className="w-6 h-6" />}
                number="10+"
                label="Certifications"
              />
              <StatCard 
                icon={<GraduationCap className="w-6 h-6" />}
                number="9.04"
                label="GPA / Rank #1"
              />
            </div>

          </div>

        </div>
      </SectionReveal>
    </section>
  );
}
