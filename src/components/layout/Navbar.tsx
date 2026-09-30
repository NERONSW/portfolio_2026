"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { num: "01", label: "About", href: "#about", id: "about" },
  { num: "02", label: "Stack", href: "#stack", id: "stack" },
  { num: "03", label: "Exp", href: "#experience", id: "experience" },
  { num: "04", label: "Works", href: "#works", id: "works" },
  { num: "05", label: "Academics", href: "#academics", id: "academics" },
  { num: "06", label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("");

  // Handle header background styling on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic Scroll State Sync via IntersectionObserver
  React.useEffect(() => {
    // Include hero section plus all nav link target sections
    const sectionIds = ["hero", ...NAV_LINKS.map((link) => link.id)];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "hero") {
              // When user scrolls back to the top/hero, reset active section
              setActiveSection("");
            } else {
              setActiveSection(id);
            }
          }
        });
      },
      {
        root: null,
        // Trigger when section intersects top-to-middle viewing zone
        rootMargin: "-20% 0px -55% 0px",
        threshold: 0,
      },
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  // Lock body scroll while the mobile drawer is open; release it on close/unmount.
  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Auto-close when crossing into the desktop breakpoint, so the scroll lock never
  // leaks onto a `md:hidden` drawer that is no longer rendered.
  React.useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Unconditional Click Handler: closes drawer and always re-scrolls, even when
  // the active section already matches the target.
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    // Defer scroll execution until body lock releases and drawer begins closing
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `#${targetId}`);
        setActiveSection(targetId);
      }
    }, 100);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border-hairline bg-surface-base/90 backdrop-blur-md"
          : "border-b border-border-hairline/40 bg-surface-base/80 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo + Status Descriptor */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              const heroEl = document.getElementById("hero");
              if (heroEl) {
                heroEl.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.pushState(null, "", " ");
                setActiveSection("");
              }
            }}
            className="group flex items-center gap-2 font-mono text-xs font-semibold tracking-tight text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="text-text-primary transition-colors group-hover:text-accent">
              NW<span className="text-accent">.</span>
            </span>
          </a>

          {/* Status Descriptor */}
          <div className="hidden items-center gap-2 border-l border-border-hairline pl-3 font-mono text-[11px] sm:flex text-text-tertiary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-available opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-status-available" />
            </span>
            <span className="text-text-secondary">Available for work</span>
            <span className="text-text-muted">— Melbourne, VIC</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-5 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={cn(
                  "group flex items-center gap-1 font-mono text-xs uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive
                    ? "text-text-primary font-semibold"
                    : "text-text-secondary hover:text-text-primary",
                )}
              >
                <span
                  className={cn(
                    "text-[10px] transition-colors",
                    isActive ? "text-accent font-bold" : "text-accent",
                  )}
                >
                  {link.num}
                </span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Theme Toggle Controller */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border-hairline bg-surface-card text-text-secondary transition-colors hover:border-border-strong hover:bg-surface-hover hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (content-fit, no backdrop) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
            id="mobile-nav"
            className="absolute inset-x-0 top-full overflow-hidden border-b border-border-hairline bg-surface-base md:hidden"
          >
            <div className="px-4 pb-6 pt-4 sm:px-6">
              {/* Drawer header: label + close control */}
              <div className="mb-3 flex items-center justify-between border-b border-border-hairline/60 pb-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                  // Navigation Index
                </span>
                {/* <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border-hairline bg-surface-card text-text-secondary transition-colors hover:border-border-strong hover:bg-surface-hover hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <X className="h-4 w-4" />
                </button> */}
              </div>

              <nav className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className={cn(
                        "group flex items-center justify-between rounded-md px-3 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors hover:bg-surface-hover hover:text-text-primary",
                        isActive
                          ? "bg-surface-hover text-text-primary font-semibold"
                          : "text-text-secondary",
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-[10px] text-accent font-bold">
                          {link.num}
                        </span>
                        <span>{link.label}</span>
                      </div>
                      <span className="text-border-strong transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </a>
                  );
                })}
              </nav>

              {/* Status info & dispatch */}
              <div className="mt-4 flex items-center justify-between border-t border-border-hairline/60 pt-3 font-mono text-[11px] text-text-tertiary">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-status-available" />
                  <span>Available · MEL, AU</span>
                </div>
                <a
                  href="nipunas98@gmail.com"
                  onClick={closeMenu}
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
