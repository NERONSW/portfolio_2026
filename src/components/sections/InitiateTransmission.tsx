"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Radio,
  ArrowUpRight,
  FileDown,
  Copy,
  Check,
  Clock,
  Sparkles,
} from "lucide-react";
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
        // Fallback in case of timezone lookup error
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
    try {
      await navigator.clipboard.writeText(CONTACT_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback: window.location href to mailto
      window.location.href = `mailto:${CONTACT_DATA.email}`;
    }
  };

  return (
    <section
      id="contact"
      aria-label="Initiate Transmission"
      className={cn(
        "relative py-12 sm:py-16 lg:py-20 border-b border-border-hairline",
        className,
      )}
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

      {/* Dispatch Terminal Box */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className="relative overflow-hidden rounded-lg border border-border-hairline bg-surface p-6 sm:p-8 lg:p-10 transition-colors duration-200"
      >
        {/* Wireframe Terminal Overline / Metadata strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border-hairline/60 font-mono text-[11px] text-text-muted">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-accent" />
            <span className="uppercase tracking-wider">
              DISPATCH TERMINAL // DIRECT PROTOCOL
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-text-secondary">ENCRYPTION:</span>
            <span className="text-text-primary">STANDARD TLS</span>
          </div>
        </div>

        {/* Narrative & Headline */}
        <div className="pt-6 sm:pt-8 space-y-4 max-w-2xl">
          <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary leading-tight">
            {CONTACT_DATA.heading}
          </h3>
          <p className="font-sans text-sm sm:text-base text-text-secondary leading-relaxed font-normal">
            {CONTACT_DATA.subheading}
          </p>
        </div>

        {/* Action Controls Group: Primary Dispatch CTA + View CV CTA */}
        <div className="pt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
          {/* Primary Action Button: INITIATE DISPATCH ↗ (hello@nipuna.dev) with Copy Icon */}
          <div className="flex items-stretch rounded-md bg-accent text-white shadow-sm transition-all duration-200 hover:bg-accent-hover active:scale-[0.99] group">
            <a
              href={`mailto:${CONTACT_DATA.email}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 font-mono text-xs sm:text-sm font-semibold tracking-wide uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <span>INITIATE DISPATCH</span>
              <span className="opacity-90 font-normal">
                ({CONTACT_DATA.email})
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Quick Copy to Clipboard Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label={
                copied ? "Email copied to clipboard" : "Copy email address"
              }
              title="Copy email to clipboard"
              className="border-l border-white/20 px-3.5 flex items-center justify-center text-white/90 hover:text-white hover:bg-black/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-r-md"
            >
              {copied ? (
                <Check className="w-4 h-4 text-white" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Secondary Action Button: VIEW CV / RÉSUMÉ ⤓ */}
          <a
            href={CONTACT_DATA.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-border-hairline bg-surface hover:bg-surface-elevated hover:border-border-strong text-text-primary font-mono text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <FileDown className="w-4 h-4 text-text-muted" />
            <span>VIEW CV / RÉSUMÉ</span>
            <span className="text-text-muted">⤓</span>
          </a>
        </div>

        {/* Social Links Wireframe Grid */}
        <div className="pt-8">
          <div className="mb-3 font-mono text-[11px] uppercase tracking-wider text-text-muted">
            // External Networks & Profiles
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {CONTACT_DATA.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-md border border-border-hairline bg-canvas p-3 font-mono text-xs text-text-primary transition-all duration-200 hover:border-accent hover:bg-surface-elevated"
              >
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {social.label}
                  </span>
                  {social.username && (
                    <span className="text-[10px] text-text-muted truncate max-w-25 sm:max-w-30">
                      {social.username}
                    </span>
                  )}
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Live Telemetry Bar: Pulsing Green Dot + Real-time Melbourne Clock */}
        <div className="mt-8 pt-5 border-t border-border-hairline/60 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-text-secondary">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-available opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-status-available" />
            </span>
            <span className="text-text-primary font-medium">
              {CONTACT_DATA.locationLabel}
            </span>
            <span className="text-border-strong">·</span>
            <span className="font-mono text-text-primary tracking-wider font-semibold">
              {melbourneTime}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-text-muted">
            <Clock className="w-3 h-3 text-text-muted" />
            <span>UTC+10 / UTC+11 (DST)</span>
            <span className="hidden sm:inline text-border-strong">|</span>
            <span className="hidden sm:inline flex items-center gap-1 text-accent">
              <Sparkles className="w-3 h-3" />
              High Availability
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
