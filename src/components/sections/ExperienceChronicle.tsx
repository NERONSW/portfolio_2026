"use client";

import { motion } from "framer-motion";
import { History } from "lucide-react";
import { EXPERIENCES } from "@/data/experience";
import { cn } from "@/lib/utils";

export interface ExperienceChronicleProps {
  className?: string;
}

export function ExperienceChronicle({ className }: ExperienceChronicleProps) {
  return (
    <section
      id="experience"
      aria-label="Experience Chronicle"
      className={cn(
        "relative py-12 sm:py-16 lg:py-20 border-b border-border-hairline",
        className
      )}
    >
      {/* Section Header: 03 // EXPERIENCE CHRONICLE (Left) | 2021 — 2025 Badge (Right) */}
      <div className="flex items-center justify-between pb-6 sm:pb-8">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-widest text-accent font-semibold">
            03 //
          </span>
          <h2 className="font-mono text-xs tracking-widest text-text-primary uppercase font-medium">
            Experience Chronicle
          </h2>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-accent/20 bg-accent/10 text-accent font-mono text-[11px] uppercase tracking-wider">
          <History className="w-3 h-3 text-accent" />
          <span>2021 — 2025</span>
        </div>
      </div>

      {/* Ledger Entries List */}
      <div className="flex flex-col divide-y divide-border-hairline/60 pt-2">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: Math.min(idx * 0.1, 0.3),
              ease: [0.25, 1, 0.5, 1],
            }}
            className={cn(
              "py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start",
              idx === 0 && "pt-4 sm:pt-6"
            )}
          >
            {/* Left Ledger Column (Desktop: 4 cols / Mobile: stacked header) */}
            <div className="md:col-span-4 flex flex-col gap-1">
              {/* Period & Tenure */}
              <div className="flex flex-wrap items-center justify-between md:flex-col md:items-start gap-1">
                <span className="font-mono text-xs font-semibold tracking-wider text-accent uppercase">
                  {exp.period}
                </span>
                <span className="font-mono text-[11px] text-text-muted">
                  {exp.tenure}
                </span>
              </div>
              <span className="font-mono text-[11px] text-text-secondary mt-0.5">
                {exp.location}
              </span>
            </div>

            {/* Right Details Column (Desktop: 8 cols) */}
            <div className="md:col-span-8 flex flex-col gap-3">
              {/* Role & Company Header */}
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-sans text-base sm:text-lg font-bold text-text-primary tracking-tight">
                  {exp.role}
                </h3>
                <span className="text-border-strong text-sm select-none" aria-hidden="true">
                  —
                </span>
                <span className="font-sans text-sm sm:text-base font-semibold text-accent">
                  {exp.company}
                </span>
              </div>

              {/* Deliverables Bullet Points with Terracotta ↳ Glyphs */}
              <ul className="space-y-2.5 pt-1">
                {exp.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed"
                  >
                    <span
                      className="text-accent text-sm font-bold shrink-0 select-none leading-tight"
                      aria-hidden="true"
                    >
                      ↳
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
