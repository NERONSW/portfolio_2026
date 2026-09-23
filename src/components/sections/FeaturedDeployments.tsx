"use client";

import { motion } from "framer-motion";
import { Layers, ArrowUpRight, Lock } from "lucide-react";
import { FEATURED_DEPLOYMENTS } from "@/data/projects";
import { cn } from "@/lib/utils";

export interface FeaturedDeploymentsProps {
  className?: string;
}

export function FeaturedDeployments({ className }: FeaturedDeploymentsProps) {
  return (
    <section
      id="works"
      aria-label="Featured Deployments"
      className={cn(
        "relative py-12 sm:py-16 lg:py-20 border-b border-border-hairline",
        className
      )}
    >
      {/* Section Header: 04 // FEATURED DEPLOYMENTS (Left) | 03 Works Catalogued (Right) */}
      <div className="flex items-center justify-between pb-6 sm:pb-8">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-widest text-accent font-semibold">
            04 //
          </span>
          <h2 className="font-mono text-xs tracking-widest text-text-primary uppercase font-medium">
            Featured Deployments
          </h2>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-accent/20 bg-accent/10 text-accent font-mono text-[11px] uppercase tracking-wider">
          <Layers className="w-3 h-3 text-accent" />
          <span>03 Works Catalogued</span>
        </div>
      </div>

      {/* Stacked Wireframe Spec Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-2 items-stretch">
        {FEATURED_DEPLOYMENTS.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: Math.min(idx * 0.1, 0.3),
              ease: [0.25, 1, 0.5, 1],
            }}
            className="flex flex-col justify-between rounded-lg border border-border-hairline bg-surface p-5 sm:p-6 transition-all duration-200 hover:border-border-subtle"
          >
            <div className="flex flex-col gap-4">
              {/* Card Meta Header: Index Tag (Left) + Status / Telemetry Badge (Right) */}
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-semibold tracking-wider text-text-muted uppercase truncate">
                  {project.indexTag}
                </span>

                <span className="inline-flex items-center rounded border border-accent/20 bg-accent/10 px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-medium text-accent whitespace-nowrap">
                  {project.badge}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-text-primary">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills Row */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-2 py-0.5 rounded border border-border-hairline bg-canvas font-mono text-[11px] text-text-secondary transition-colors duration-150 select-none"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons: Full-width responsive button pair */}
            <div className="mt-6 flex flex-col gap-2 pt-4 border-t border-border-hairline/60">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group w-full h-11 px-4 rounded-md",
                    "bg-text-primary text-canvas font-mono text-xs font-medium tracking-wide uppercase",
                    "inline-flex items-center justify-center gap-1.5",
                    "transition-all duration-200 select-none",
                    "hover:bg-accent hover:text-white",
                    "active:scale-[0.99]",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  )}
                >
                  <span>Inspect Live Demo</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-accent group-hover:text-white transition-colors duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {project.isPrivateRepo ? (
                <div className="w-full h-11 px-4 rounded-md border border-border-hairline bg-canvas/60 font-mono text-xs text-text-muted inline-flex items-center justify-center gap-1.5 select-none cursor-not-allowed">
                  <Lock className="h-3.5 w-3.5 text-text-muted" />
                  <span>Private Repo // NDA</span>
                </div>
              ) : (
                project.sourceUrl && (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group w-full h-11 px-4 rounded-md",
                      "border border-border-hairline bg-surface text-text-primary font-mono text-xs tracking-wide uppercase",
                      "inline-flex items-center justify-center gap-1.5",
                      "transition-all duration-200 select-none",
                      "hover:border-border-subtle hover:bg-surface-elevated hover:text-text-primary",
                      "active:scale-[0.99]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    )}
                  >
                    <span>View Source Code</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
