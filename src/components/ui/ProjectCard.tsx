"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export interface ProjectCardProps {
  project: Project;
  className?: string;
  index?: number;
}

export function ProjectCard({ project, className, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.1, 0.4),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-lg border border-border-hairline bg-surface-card p-6 md:p-8 transition-colors duration-300 hover:border-border-strong hover:bg-surface-hover/60",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        {/* Top Meta Header: Year, Category & Status */}
        <div className="flex items-center justify-between text-xs font-mono text-text-tertiary">
          <div className="flex items-center gap-2">
            <span className="text-text-muted">{project.year}</span>
            <span className="text-border-strong">•</span>
            <span className="uppercase tracking-wider text-accent">{project.category}</span>
          </div>
          {project.featured && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-hairline bg-surface-subtle px-2 py-0.5 text-[11px] font-medium text-text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-status-available" />
              Featured
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <div className="space-y-1.5">
          <Link
            href={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-1.5 text-xl font-semibold tracking-tight text-text-primary transition-colors group-hover:text-accent focus-visible:outline-none focus-visible:underline"
          >
            <h3>{project.title}</h3>
            <ArrowUpRight className="h-4 w-4 text-text-tertiary transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover:text-accent" />
          </Link>
          <p className="text-sm font-medium text-text-secondary">
            {project.tagline}
          </p>
        </div>

        {/* Brief Description */}
        <p className="text-sm leading-relaxed text-text-tertiary line-clamp-3">
          {project.description}
        </p>

        {/* Highlights / Key Capabilities (if provided) */}
        {project.highlights && project.highlights.length > 0 && (
          <ul className="my-1 space-y-1 text-xs text-text-secondary">
            {project.highlights.slice(0, 2).map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span className="line-clamp-1">{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-2 rounded-md border border-border-hairline bg-surface-base/60 p-3 my-1">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted">
                  {m.label}
                </span>
                <span className="font-mono text-xs font-semibold text-text-primary">
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer: Tech Stack Badges & External Links */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border-hairline/60 pt-4">
        {/* Technologies badges */}
        <div className="flex flex-wrap items-center gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded border border-border-hairline bg-surface-subtle px-2 py-0.5 font-mono text-[11px] text-text-secondary"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="font-mono text-[11px] text-text-muted">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border-hairline text-text-secondary transition-colors hover:border-border-strong hover:bg-surface-hover hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <GitHubIcon className="h-3.5 w-3.5" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live site for ${project.title}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border-hairline text-text-secondary transition-colors hover:border-border-strong hover:bg-surface-hover hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
