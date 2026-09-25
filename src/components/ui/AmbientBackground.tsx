"use client";

import * as React from "react";
import styles from "@/styles/components/_AmbientBackground.module.scss";
import { cn } from "@/lib/utils";

export interface AmbientBackgroundProps {
  className?: string;
}

export function AmbientBackground({ className }: AmbientBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(styles.ambientContainer, className)}
    >
      {/* Blob 1: Terracotta Primary Accent */}
      <div className={cn(styles.blob, styles.blob1)} />

      {/* Blob 2: Warm Sand / Walnut Depth */}
      <div className={cn(styles.blob, styles.blob2)} />

      {/* Blob 3: Subtle Lower Terracotta / Coffee Depth */}
      <div className={cn(styles.blob, styles.blob3)} />

      {/* Low-opacity Architectural Grid Overlay */}
      <div className={styles.gridOverlay} />
    </div>
  );
}
