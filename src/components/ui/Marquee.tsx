"use client";

import * as React from "react";
import styles from "@/styles/components/_Marquee.module.scss";
import { cn } from "@/lib/utils";

export interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // duration in seconds
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className,
  speed = 25,
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div
      className={cn(styles.marqueeContainer, className)}
      style={
        {
          "--marquee-duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      {/* Primary Track */}
      <div
        className={cn(
          styles.marqueeTrack,
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>

      {/* Duplicate Track for zero-jump, continuous loop */}
      <div
        aria-hidden="true"
        className={cn(
          styles.marqueeTrack,
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
