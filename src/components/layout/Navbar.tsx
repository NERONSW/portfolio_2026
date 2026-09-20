"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Stack", href: "#stack" },
  { num: "03", label: "Exp", href: "#experience" },
  { num: "04", label: "Works", href: "#works" },
  { num: "05", label: "Academics", href: "#academics" },
  { num: "06", label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border-hairline bg-surface-base/90 backdrop-blur-md"
          : "border-b border-border-hairline/40 bg-surface-base/80 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo + Status Descriptor */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="group flex items-center gap-2 font-mono text-xs font-semibold tracking-tight text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="text-text-primary transition-colors group-hover:text-accent">
              NW<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Status Descriptor from Variant 2 Design */}
          <div className="hidden items-center gap-2 border-l border-border-hairline pl-3 font-mono text-[11px] sm:flex text-text-tertiary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-available opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-status-available" />
            </span>
            <span className="text-text-secondary">Available for work</span>
            <span className="text-text-muted">— Melbourne, VIC</span>
          </div>
        </div>

        {/* Desktop Navigation Links (01 About, 02 Stack, 03 Exp, 04 Works, 05 Academics, 06 Contact) */}
        <nav className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-text-secondary transition-colors duration-200 hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="text-[10px] text-accent transition-colors group-hover:text-accent">
                {link.num}
              </span>
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Theme Toggle Controller */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation drawer" : "Open navigation drawer"}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border-hairline bg-surface-card text-text-secondary transition-colors hover:border-border-strong hover:bg-surface-hover hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            className="overflow-hidden border-b border-border-hairline bg-surface-base/95 backdrop-blur-xl md:hidden"
          >
            <div className="px-4 py-4 sm:px-6">
              {/* Drawer Subheader */}
              <div className="mb-3 flex items-center justify-between border-b border-border-hairline/60 pb-2 font-mono text-[10px] uppercase tracking-wider text-text-muted">
                <span>// Navigation Index</span>
                <span>06 Sections</span>
              </div>

              <nav className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-md px-3 py-2.5 font-mono text-xs uppercase tracking-wider text-text-secondary transition-colors hover:bg-surface-hover hover:text-text-primary"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[10px] text-accent">{link.num}</span>
                      <span>{link.label}</span>
                    </div>
                    <span className="text-border-strong transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                ))}
              </nav>

              {/* Status info & dispatch */}
              <div className="mt-4 flex items-center justify-between border-t border-border-hairline/60 pt-3 font-mono text-[11px] text-text-tertiary">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-status-available" />
                  <span>Available · MEL, AU</span>
                </div>
                <a
                  href="mailto:hello@nipuna.dev"
                  className="text-[11px] text-accent hover:underline"
                >
                  Direct Dispatch ↗
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
