"use client";

import { SectionReveal } from "@/components/layout/SectionReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { contact } from "@/lib/data";
import { motion } from "framer-motion";

const socialLinks = [
  { label: "LinkedIn", href: contact.linkedin },
  { label: "GitHub", href: contact.github },
] as const;

export function Contact() {
  return (
    <section id="contact" className="section-padding pb-32">
      <SectionReveal>
        <h2 className="text-3xl font-bold text-gradient">Contact</h2>
        <div className="section-subtitle-scroll">
          <p className="section-subtitle min-w-max pr-4">
            Open to AI/ML internships and roles. Email or call, or connect on
            LinkedIn.
          </p>
        </div>
        <div className="mt-8 glass-card p-8">
          <div className="space-y-2 font-mono text-sm text-slate-400">
            <p className="whitespace-nowrap">
              <span className="text-slate-500">Email </span>
              <a
                href={`mailto:${contact.email}`}
                className="text-cyan-300 hover:underline"
              >
                {contact.email}
              </a>
            </p>
            <p className="whitespace-nowrap">
              <span className="text-slate-500">Phone </span>
              <a
                href={`tel:+91${contact.phone}`}
                className="text-cyan-300 hover:underline"
              >
                +91 {contact.phone}
              </a>
            </p>
          </div>
          <div className="mt-6 flex flex-nowrap gap-4">
            {socialLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="shrink-0"
              >
                <MagneticButton
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block whitespace-nowrap rounded-xl border border-white/10 px-6 py-3 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                >
                  {link.label}
                </MagneticButton>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
