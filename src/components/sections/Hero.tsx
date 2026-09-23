"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HeroProps {
  className?: string;
  projectCount?: number;
  cvUrl?: string;
}

export function Hero({
  className,
  projectCount = 3,
  cvUrl = "/Nipuna_Wasala_CV.pdf",
}: HeroProps) {
  const formattedCount = String(projectCount).padStart(2, "0");

  return (
    <section
      id="hero"
      aria-label="System Architecture & Engineering introduction"
      className={cn(
        "relative flex flex-col gap-8 pt-4 pb-14 border-b border-border-hairline",
        className,
      )}
    >
      {/* Index Tag / Section Indicator */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className="flex items-center gap-3"
      >
        <span
          className="w-8 h-0.5 bg-accent inline-block shrink-0"
          aria-hidden="true"
        />
        <span className="font-mono text-xs tracking-[0.15em] text-accent uppercase font-semibold">
          Index 00 // System Architecture &amp; Engineering
        </span>
      </motion.div>

      {/* Main Headline & Narrative Copy */}
      <div className="space-y-4 max-w-220">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
          className="text-3xl sm:text-5xl lg:text-[54px] leading-[1.12] tracking-tight font-sans font-medium text-text-primary"
        >
          Full-Stack Software Engineer specializing in{" "}
          <span className="italic font-serif font-normal text-accent">
            scalable web platforms
          </span>{" "}
          &amp; distributed systems.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
          className="text-base sm:text-lg text-text-secondary max-w-180 leading-relaxed pt-2 font-normal"
        >
          4+ years of experience designing and engineering scalable web
          applications, CRM platforms, and customer engagement solutions across
          FinTech, MarTech, and CMS domains.
        </motion.p>
      </div>

      {/* Action Pill Group & Geo/Work Authorization Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
        className="flex flex-wrap items-center gap-3 pt-2"
      >
        {/* Primary CTA: View Works */}
        <Link
          href="#works"
          className={cn(
            "group inline-flex items-center gap-2 px-5 py-2.5 rounded-full",
            "bg-text-primary text-surface-base text-[13px] font-mono",
            "transition-all duration-200 select-none",
            "hover:bg-accent hover:text-white",
            "active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base",
            "shadow-sm",
          )}
        >
          <span>View Works ({formattedCount})</span>
          <ArrowDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
        </Link>

        {/* Secondary CTA: Download CV */}
        <a
          href={cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="heroCvBtn"
          className={cn(
            "group inline-flex items-center gap-2 px-5 py-2.5 rounded-full",
            "bg-surface-card border border-border-hairline text-text-primary text-[13px] font-mono",
            "transition-all duration-200 select-none",
            "hover:border-accent hover:text-accent hover:bg-surface-hover/80",
            "active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base",
            "shadow-sm",
          )}
        >
          <FileText className="h-3.5 w-3.5 text-text-tertiary transition-colors duration-200 group-hover:text-accent" />
          <span>Download CV</span>
        </a>

        {/* Working Rights Annotation */}
        <span className="font-mono text-[11px] text-text-tertiary self-center pl-2 hidden sm:inline">
          Full Working Rights in Australia | MEL, AU
        </span>
      </motion.div>
    </section>
  );
}
