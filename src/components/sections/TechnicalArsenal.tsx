"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { TECH_CATEGORIES, TOOLING_ITEMS } from "@/data/skills";
import { cn } from "@/lib/utils";

export interface TechnicalArsenalProps {
  className?: string;
}

export function TechnicalArsenal({ className }: TechnicalArsenalProps) {
  return (
    <section
      id="stack"
      aria-label="Technical Arsenal"
      className={cn(
        "relative py-12 sm:py-16 lg:py-20 border-b border-border-hairline",
        className
      )}
    >
      {/* Section Header: 02 // TECHNICAL ARSENAL (Left) | Spec Sheet Badge (Right) */}
      <div className="flex items-center justify-between pb-6 sm:pb-8">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-widest text-accent font-semibold">
            02 //
          </span>
          <h2 className="font-mono text-xs tracking-widest text-text-primary uppercase font-medium">
            Technical Arsenal
          </h2>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-accent/20 bg-accent/10 text-accent font-mono text-[11px] uppercase tracking-wider">
          <Cpu className="w-3 h-3 text-accent" />
          <span>Spec Sheet</span>
        </div>
      </div>

      {/* Category Spec Cards Grid: 4-Column Grid on Desktop / 1-Column on Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        {TECH_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: Math.min(idx * 0.08, 0.3),
              ease: [0.25, 1, 0.5, 1],
            }}
            className="flex flex-col justify-between rounded-lg border border-border-hairline bg-surface p-5 transition-colors duration-200 hover:border-border-subtle"
          >
            <div>
              {/* Card Header Row: Terracotta bullet indicator (■) + Monospace Category Title + Count */}
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-border-hairline/60">
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className="text-accent text-[10px] select-none shrink-0"
                    aria-hidden="true"
                  >
                    ■
                  </span>
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-text-primary truncate">
                    {category.title}
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-text-muted shrink-0">
                  {category.count}
                </span>
              </div>

              {/* Stack Pills Flex Wrap Container */}
              <div className="flex flex-wrap gap-2 pt-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-2.5 py-1 rounded border border-border-hairline bg-canvas font-mono text-xs text-text-primary transition-colors duration-150 hover:bg-surface-elevated hover:border-border-subtle select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI & Tooling Marquee / Strip */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay: 0.25, ease: [0.25, 1, 0.5, 1] }}
        className="mt-6 rounded-md border border-border-hairline bg-surface p-3.5 sm:p-4 transition-colors duration-200 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-xs"
      >
        <span className="font-semibold text-accent tracking-wider uppercase shrink-0">
          // AI &amp; TOOLING //
        </span>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-text-secondary">
          {TOOLING_ITEMS.map((item, idx) => (
            <span key={item} className="inline-flex items-center gap-2">
              <span className="hover:text-text-primary transition-colors duration-150">
                {item}
              </span>
              {idx < TOOLING_ITEMS.length - 1 && (
                <span className="text-accent select-none" aria-hidden="true">
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
