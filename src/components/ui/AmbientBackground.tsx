"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface AmbientBackgroundProps {
  className?: string;
}

type Palette = readonly [string, string, string, string];

// Light (Warm Editorial) — deep charcoal, walnut, terracotta ink, espresso motes on the cream canvas
const LIGHT_PALETTE: Palette = ["#221C18", "#382E27", "#8C3D2B", "#4A3B32"];

// Dark (Roasted Mocha) — cream, terracotta, amber, warm-white rising embers
const DARK_PALETTE: Palette = ["#F5E6D3", "#D97043", "#E6A15C", "#FFF8F0"];

interface Particle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  targetOpacity: number;
  speedX: number;
  speedY: number;
  twinkleSpeed: number;
  twinklePhase: number;
  colorIndex: number;
}

const PARTICLE_COUNT = 70;
const MAX_DPR = 2;
const PALETTE_LENGTH = LIGHT_PALETTE.length;

function resolveTheme(): "light" | "dark" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function rand(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

export function AmbientBackground({ className }: AmbientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let theme = resolveTheme();
    let particles: Particle[] = [];
    let rafId = 0;
    let width = 0;
    let height = 0;
    let reduced = false;

    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const spawn = (): Particle => {
      const dark = theme === "dark";
      const targetOpacity = dark ? rand(0.3, 0.85) : rand(0.25, 0.65);
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: dark ? rand(1.2, 3.0) : rand(1.4, 3.4),
        opacity: targetOpacity,
        targetOpacity,
        speedX: rand(-0.15, 0.15),
        // Light: gentle downward snow/dust | Dark: gentle upward ember float
        speedY: dark ? rand(-0.35, -0.15) : rand(0.15, 0.35),
        twinkleSpeed: rand(0.006, 0.026),
        twinklePhase: rand(0, Math.PI * 2),
        colorIndex: Math.floor(Math.random() * PALETTE_LENGTH),
      };
    };

    const resize = () => {
      // High-DPI / Retina sharpness via device-pixel-ratio scaling
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particles.length === 0) {
        particles = Array.from({ length: PARTICLE_COUNT }, spawn);
      }
    };

    const step = (p: Particle) => {
      p.x += p.speedX;
      p.y += p.speedY;

      // Oscillating opacity produces a "twinkle / breathing" pulse
      p.twinklePhase += p.twinkleSpeed;
      p.opacity = p.targetOpacity * (0.55 + 0.45 * Math.sin(p.twinklePhase));

      // Horizontal sway wrap across the viewport
      if (p.x < -p.radius) p.x = width + p.radius;
      else if (p.x > width + p.radius) p.x = -p.radius;

      // Directional vertical wrap: falling snow (light) vs rising embers (dark)
      if (theme === "dark") {
        if (p.y < -p.radius) {
          p.y = height + p.radius;
          p.x = Math.random() * width; // re-enter from the bottom
        }
      } else if (p.y > height + p.radius) {
        p.y = -p.radius;
        p.x = Math.random() * width; // re-enter from the top
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Dark mode only: soft radial terracotta glow at the horizon
      if (theme === "dark") {
        const glow = ctx.createRadialGradient(
          width / 2,
          height * 0.4,
          0,
          width / 2,
          height * 0.4,
          Math.max(width, height) * 0.6
        );
        glow.addColorStop(0, "rgba(217, 112, 67, 0.12)");
        glow.addColorStop(1, "rgba(217, 112, 67, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }

      const palette = theme === "dark" ? DARK_PALETTE : LIGHT_PALETTE;
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = palette[p.colorIndex];
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      if (reduced) return; // frozen while reduced motion is preferred
      for (const p of particles) step(p);
      draw();
    };

    const start = () => {
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
      draw(); // leave a crisp static frame instead of a blank void
    };

    const applyReduced = (value: boolean) => {
      reduced = value;
      if (value) stop();
      else start();
    };

    // React to next-themes toggling `.dark` on <html>: re-tint + reverse velocity in place
    const observer = new MutationObserver(() => {
      const next = resolveTheme();
      if (next === theme) return;
      theme = next;
      for (const p of particles) {
        p.colorIndex = Math.floor(Math.random() * PALETTE_LENGTH);
        p.radius = theme === "dark" ? rand(1.2, 3.0) : rand(1.4, 3.4);
        p.targetOpacity = theme === "dark" ? rand(0.3, 0.85) : rand(0.25, 0.65);
        p.speedX = rand(-0.15, 0.15);
        p.speedY = theme === "dark" ? rand(-0.35, -0.15) : rand(0.15, 0.35);
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Pause the loop in background tabs to avoid idle CPU/battery drain
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    const onReducedChange = (e: MediaQueryListEvent) => applyReduced(e.matches);

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    reducedQuery.addEventListener("change", onReducedChange);

    resize();
    applyReduced(reducedQuery.matches);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      reducedQuery.removeEventListener("change", onReducedChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 -z-10 pointer-events-none overflow-hidden",
        className
      )}
    >
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}