import { SectionReveal } from "@/components/layout/SectionReveal";
import { GraduationCap, Book, Library, Trophy, Star, MapPin } from "lucide-react";

const educationData = [
  {
    id: 1,
    institution: "Ganpat University",
    degree: "B.Tech Information Technology",
    score: "CGPA 9.04 / 10",
    rank: "Department Rank #1",
    duration: "2022 – 2026",
    location: "Mehsana, India",
    icon: GraduationCap,
  },
  {
    id: 2,
    institution: "Shree S.V. Shah Vidhya Vihar",
    degree: "Higher Secondary (PCM)",
    score: "Percentage 69%",
    duration: "2021 – 2022",
    location: "Mehsana, India",
    icon: Book,
  },
  {
    id: 3,
    institution: "K.D.S. High School",
    degree: "Secondary (10th)",
    score: "Percentage 79%",
    duration: "2019 – 2020",
    location: "Mehsana, India",
    icon: Library,
  },
];

export function Education() {
  return (
    <section id="education" className="section-padding">
      <SectionReveal>
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-2">ACADEMICS</h2>
          <h3 className="text-3xl font-bold text-slate-100">Education</h3>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-cyan-500/0 via-cyan-400/30 to-purple-500/0 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {educationData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="relative flex flex-col items-center z-10">
                  
                  {/* Timeline Node */}
                  <div className="flex flex-col items-center mb-6">
                    <span className="text-sm font-semibold text-cyan-400 mb-3">{item.duration}</span>
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-900 border border-cyan-400/30 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="glass-card w-full flex flex-col p-6 rounded-2xl bg-slate-900/40 border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] text-center h-full">
                    <h4 className="text-lg font-bold text-slate-100 mb-1">{item.institution}</h4>
                    <p className="text-sm font-medium text-slate-400 mb-5">{item.degree}</p>
                    
                    <div className="flex flex-col gap-2 mb-6 mt-auto items-center">
                      {item.rank && (
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/20">
                          <Trophy className="w-3.5 h-3.5" />
                          {item.rank}
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
                        <Star className="w-3.5 h-3.5" />
                        {item.score}
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-slate-500 mt-auto pt-4 border-t border-white/5">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
