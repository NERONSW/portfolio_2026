"use client";

import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck } from "lucide-react";
import { ACADEMIC_CREDENTIALS } from "@/data/academics";
import { cn } from "@/lib/utils";

export interface AcademicCredentialsProps {
  className?: string;
}

export function AcademicCredentials({ className }: AcademicCredentialsProps) {
  return (
    <section
      id="academics"
      aria-label="Academic Credentials"
      className={cn(
        "relative py-12 sm:py-16 lg:py-20 border-b border-border-hairline",
        className
      )}
    >
      {/* Section Header: 05 // ACADEMIC CREDENTIALS (Left) | Formal Qualifications Badge (Right) */}
      <div className="flex items-center justify-between pb-6 sm:pb-8">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-widest text-accent font-semibold">
            05 //
          </span>
          <h2 className="font-mono text-xs tracking-widest text-text-primary uppercase font-medium">
            Academic Credentials
          </h2>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-accent/20 bg-accent/10 text-accent font-mono text-[11px] uppercase tracking-wider">
          <GraduationCap className="w-3.5 h-3.5 text-accent" />
          <span>Formal Qualifications</span>
        </div>
      </div>

      {/* 3-Column Modular Card Layout on Desktop / 1-Column Stack on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-2 items-stretch">
        {ACADEMIC_CREDENTIALS.map((cred, idx) => (
          <motion.div
            key={cred.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: Math.min(idx * 0.1, 0.3),
              ease: [0.25, 1, 0.5, 1],
            }}
            className="flex flex-col justify-between rounded-lg border border-border-hairline bg-surface p-5 sm:p-6 transition-colors duration-200 hover:border-border-subtle"
          >
            <div className="space-y-3.5">
              {/* Card Meta Row: Category tag (Left) + Active / Status badge (Right) */}
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                  {cred.category}
                </span>

                {cred.status?.isActive ? (
                  <span className="inline-flex items-center gap-1 rounded border border-status-available/30 bg-status-available/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-status-available">
                    <ShieldCheck className="h-3 w-3" />
                    <span>{cred.status.label}</span>
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded border border-border-hairline bg-canvas px-2 py-0.5 font-mono text-[10px] text-text-muted">
                    {cred.status?.label}
                  </span>
                )}
              </div>

              {/* Credential Title */}
              <h3 className="font-sans text-base sm:text-lg font-bold tracking-tight text-text-primary leading-snug">
                {cred.title}
              </h3>
            </div>

            {/* Institution & Timeline Footer */}
            <div className="mt-6 pt-4 border-t border-border-hairline/60 flex flex-col gap-1 font-mono text-xs text-text-secondary">
              <span className="text-text-primary font-medium">{cred.institution}</span>
              <span className="text-text-muted text-[11px]">{cred.timeline}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
