"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { contact, site } from "@/lib/data";
import { HeroCssFallback } from "./HeroCssFallback";

const HeroCanvas = dynamic(
  () => import("@/components/canvas/HeroCanvas").then((m) => m.HeroCanvas),
  {
    ssr: false,
    loading: () => <HeroCssFallback />,
  }
);

const ctaLinks = [
  { label: "View Projects", href: "#projects" },
  { label: "Resume", href: contact.resumeUrl },
  { label: "Contact", href: "#contact" },
] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 hidden md:block">
        <HeroCanvas />
      </div>
      <div className="absolute inset-0 md:hidden">
        <HeroCssFallback />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold md:text-7xl text-gradient"
        >
          {site.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-lg text-slate-300 md:text-xl"
        >
          {site.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-slate-400"
        >
          {site.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {ctaLinks.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              target={cta.label === "Resume" ? "_blank" : undefined}
              rel={cta.label === "Resume" ? "noopener noreferrer" : undefined}
              className="glass-card px-6 py-3 text-sm transition hover:border-cyan-400/50 hover:shadow-[0_0_24px_rgba(34,211,238,0.25)]"
            >
              {cta.label}
            </a>
          ))}
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mx-auto mt-16 flex h-10 w-6 justify-center rounded-full border border-white/20"
          aria-hidden
        >
          <span className="mt-2 block h-2 w-1 rounded-full bg-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
}
