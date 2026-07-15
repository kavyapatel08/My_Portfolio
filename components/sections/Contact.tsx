import { SectionReveal } from "@/components/layout/SectionReveal";
import { contact } from "@/lib/data";
import { Mail, Phone } from "lucide-react";

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
  return (
    <a 
      href={href} 
      target={href.startsWith("mailto:") || href.startsWith("tel:") ? "_self" : "_blank"} 
      rel="noopener noreferrer"
      className="group flex items-center gap-5 sm:gap-6 p-4 rounded-2xl hover:bg-slate-800/30 transition-all duration-300"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-900/50 border border-white/5 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-400/30 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs sm:text-sm font-medium text-slate-500 mb-0.5 group-hover:text-cyan-400/80 transition-colors uppercase tracking-wider">{label}</p>
        <p className="text-sm sm:text-lg text-slate-200 font-medium group-hover:text-white transition-colors">{value}</p>
      </div>
    </a>
  );
}

const LinkedinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12"/>
  </svg>
);

export function Contact() {
  return (
    <section id="contact" className="section-padding pb-32 flex items-center min-h-[70vh]">
      <SectionReveal className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Let&apos;s Build Something Great <span className="text-cyan-400">Together</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Open to AI/ML internships, freelance opportunities, and full-time roles. I&apos;d love to connect.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <ContactRow 
              icon={<Mail className="w-6 h-6" />} 
              label="Email" 
              value={contact.email} 
              href={`mailto:${contact.email}`} 
            />
            <ContactRow 
              icon={<LinkedinIcon />} 
              label="LinkedIn" 
              value="linkedin.com/in/kavya-200o" 
              href={contact.linkedin} 
            />
            <ContactRow 
              icon={<GithubIcon />} 
              label="GitHub" 
              value="github.com/kavyapatel08" 
              href={contact.github} 
            />
            <ContactRow 
              icon={<Phone className="w-6 h-6" />} 
              label="Phone" 
              value={`+91 ${contact.phone}`} 
              href={`tel:+91${contact.phone}`} 
            />
          </div>

        </div>
      </SectionReveal>
    </section>
  );
}
