"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ArchitecturalManifestoProps {
  className?: string;
}

const STATS = [
  {
    index: "01",
    label: "PRODUCTION EXP",
    value: "4+ Years",
    detail: "Full-Stack Systems",
  },
  {
    index: "02",
    label: "DOMAINS",
    value: "FinTech, MarTech & CMS",
    detail: "Production Deployed",
  },
  {
    index: "03",
    label: "CLOUD ARCHITECTURE",
    value: "AWS Certified",
    detail: "Cloud Practitioner",
  },
] as const;

export function ArchitecturalManifesto({ className }: ArchitecturalManifestoProps) {
  return (
    <section
      id="about"
      aria-label="Architectural Manifesto"
      className={cn(
        "relative py-12 sm:py-16 lg:py-20 border-b border-border-hairline",
        className
      )}
    >
      {/* Section Header: 01 // ARCHITECTURAL MANIFESTO (Left) | INVARIANTS Badge (Right) */}
      <div className="flex items-center justify-between pb-6 sm:pb-8">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-widest text-accent font-semibold">
            01 //
          </span>
          <h2 className="font-mono text-xs tracking-widest text-text-primary uppercase font-medium">
            Architectural Manifesto
          </h2>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-accent/20 bg-accent/10 text-accent font-mono text-[11px] uppercase tracking-wider">
          <ShieldCheck className="w-3 h-3 text-accent" />
          <span>Invariants</span>
        </div>
      </div>

      {/* Main Content Layout: Asymmetrical Grid (Desktop) / Vertical Stack (Mobile 390px) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-8 items-stretch">
        {/* Left Column (5 cols): Quote / Invariant Wireframe Spec Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="lg:col-span-5 flex flex-col justify-between rounded-lg border border-border-hairline bg-surface p-5 sm:p-6 shadow-sm transition-colors duration-200"
        >
          <div>
            {/* Quotation Mark Glyph */}
            <span
              className="block font-serif text-3xl sm:text-4xl text-accent select-none leading-none mb-3 opacity-90"
              aria-hidden="true"
            >
              “
            </span>

            {/* Serif Italic Invariant Statement */}
            <blockquote className="font-serif italic text-text-primary text-lg sm:text-xl lg:text-2xl leading-snug font-normal">
              Building systems centered on architectural clarity, strict data invariants, and defensive simplicity.
            </blockquote>
          </div>

          {/* Card Bottom Telemetry Strip */}
          <div className="mt-6 pt-4 border-t border-border-hairline/60 flex items-center justify-between font-mono text-[11px] text-text-muted uppercase tracking-wider">
            <span>DEFENSIVE SIMPLICITY</span>
            <span className="text-accent font-semibold">// CORE RULE</span>
          </div>
        </motion.div>

        {/* Right Column (7 cols): Narrative Prose & Telemetry Stat Cards */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-6">
          {/* Engineering Narrative Prose */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="space-y-4 text-text-secondary text-sm sm:text-[15px] leading-relaxed"
          >
            <p>
              Software engineering is fundamentally an exercise in governing state predictability and bounding complexity. I approach platform engineering with architectural rigor—establishing explicit domain boundaries, deterministic API contracts, and sub-50ms latency profiles while deliberately eradicating hidden assumptions across the execution lifecycle.
            </p>
            <p>
              Having architected and maintained customer-facing platforms across FinTech, MarTech, and enterprise CMS environments, I engineer for resilient telemetry, defensible failure domains, and modular decoupled topologies that sustain zero degradation during high-concurrency traffic spikes.
            </p>
          </motion.div>

          {/* Telemetry Stat Cards: 3-Column Responsive Grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2"
          >
            {STATS.map((stat) => (
              <div
                key={stat.index}
                className="flex flex-col justify-between rounded-md border border-border-hairline bg-surface p-3.5 sm:p-3 transition-colors duration-200 hover:border-border-subtle"
              >
                <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-text-muted uppercase pb-2">
                  <span>{stat.label}</span>
                  <span className="text-accent/80">{stat.index}</span>
                </div>
                <div className="font-sans text-base sm:text-sm lg:text-base font-bold text-text-primary tracking-tight">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] text-text-secondary pt-1 tracking-tight">
                  {stat.detail}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
