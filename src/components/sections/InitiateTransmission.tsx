"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Radio, ArrowUpRight, ArrowDown, Copy, Check } from "lucide-react";
import { CONTACT_DATA } from "@/data/contact";
import { cn } from "@/lib/utils";

export interface InitiateTransmissionProps {
  className?: string;
}

export function InitiateTransmission({ className }: InitiateTransmissionProps) {
  const [copied, setCopied] = React.useState(false);
  const [melbourneTime, setMelbourneTime] = React.useState<string>("--:--:--");

  // Real-time live Melbourne clock updating every 1000ms using Intl.DateTimeFormat
  React.useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-AU", {
          timeZone: CONTACT_DATA.timezone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setMelbourneTime(formatter.format(new Date()));
      } catch {
        const now = new Date();
        setMelbourneTime(now.toLocaleTimeString("en-GB"));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(CONTACT_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${CONTACT_DATA.email}`;
    }
  };

  return (
    <section
      id="contact"
      aria-label="Initiate Transmission"
      className={cn("relative pt-12 sm:pt-16 lg:pt-20 pb-4", className)}
    >
      {/* Section Header: 06 // INITIATE TRANSMISSION (Left) | Response Window Badge (Right) */}
      <div className="flex items-center justify-between pb-6 sm:pb-8">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-widest text-accent font-semibold">
            06 //
          </span>
          <h2 className="font-mono text-xs tracking-widest text-text-primary uppercase font-medium">
            Initiate Transmission
          </h2>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-accent/20 bg-accent/10 text-accent font-mono text-[11px] uppercase tracking-wider">
          <Radio className="w-3 h-3 text-accent animate-pulse" />
          <span>{CONTACT_DATA.responseWindow}</span>
        </div>
      </div>

      {/* Dispatch Terminal Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className="relative overflow-hidden rounded-2xl border border-border-hairline bg-surface p-6 sm:p-8 lg:p-10 transition-colors duration-200"
      >
        {/* Narrative & Headline */}
        <div className="pb-8 space-y-4 max-w-2xl">
          <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary leading-tight">
            {CONTACT_DATA.heading}
          </h3>
          <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            {CONTACT_DATA.subheading}
          </p>
        </div>

        {/* CTA Action Controls (Top Row): Horizontal flex layout */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
          {/* Primary Button (INITIATE DISPATCH ↗) */}
          <div className="inline-flex items-stretch rounded-xl bg-accent text-white shadow-sm transition-all duration-200 hover:bg-accent-hover active:scale-[0.99] group">
            <a
              href={`mailto:${CONTACT_DATA.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <span>INITIATE DISPATCH</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Integrated Copy Email Button with instant feedback */}
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label={
                copied
                  ? "Email copied to clipboard"
                  : `Copy ${CONTACT_DATA.email} to clipboard`
              }
              title={`Copy ${CONTACT_DATA.email}`}
              className="border-l border-white/20 px-3.5 flex items-center justify-center text-white/90 hover:text-white hover:bg-black/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-r-xl"
            >
              {copied ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Secondary Button (↓ DOWNLOAD RÉSUMÉ ↗) */}
          <a
            href={CONTACT_DATA.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl border border-border-hairline bg-surface hover:bg-surface-elevated hover:border-border-strong text-text-primary font-mono text-sm font-medium transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group"
          >
            <ArrowDown className="w-4 h-4 text-text-muted transition-transform duration-200 group-hover:translate-y-0.5" />
            <span>DOWNLOAD RÉSUMÉ</span>
            <ArrowUpRight className="w-4 h-4 text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Section Divider: Full-width horizontal hairline divider */}
        <hr className="my-6 border-0 border-t border-border-hairline" />

        {/* Footer Telemetry & Links Bar (Bottom Row): Horizontal space-between layout */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono">
          {/* Left Side — Social Links: Inline horizontal flex list */}
          <div className="flex flex-wrap items-center gap-5">
            {CONTACT_DATA.socials.map((social) => {
              // Ensure static PDF links render cleanly without triggering direct download
              const isPdf = social.href.endsWith(".pdf");
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...(isPdf ? { type: "application/pdf" } : {})}
                  className="group inline-flex items-center gap-1 text-text-secondary hover:text-accent transition-colors duration-200 font-mono text-xs"
                >
                  <span>{social.label}</span>
                  <span className="text-text-muted transition-transform duration-200 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              );
            })}
          </div>

          {/* Right Side — Live Telemetry Clock: Right-aligned with pulsing accent beacon */}
          <div className="flex items-center gap-2 text-text-secondary font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-available opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-status-available" />
            </span>
            <span className="text-text-secondary font-medium">
              {CONTACT_DATA.locationLabel}
            </span>
            <span className="text-border-strong">·</span>
            <span className="tracking-wider text-text-secondary font-semibold tabular-nums">
              {melbourneTime}
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
