"use client";

import * as React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof HTMLMotionProps<"button">> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  children?: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-[#D97043] text-white hover:bg-[#C45D31] active:bg-[#B35229] border border-transparent shadow-sm",
  secondary:
    "bg-surface-card text-text-primary hover:bg-surface-hover active:bg-surface-muted border border-border-hairline hover:border-border-strong",
  outline:
    "bg-transparent text-text-primary border border-border-hairline hover:border-border-strong hover:bg-surface-subtle active:bg-surface-muted",
  ghost:
    "bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-hover active:bg-surface-muted border border-transparent",
};

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "h-8 px-3 text-xs tracking-tight gap-1.5",
  md: "h-9 px-4 text-sm font-medium tracking-tight gap-2",
  lg: "h-11 px-6 text-base font-medium tracking-tight gap-2.5",
  icon: "h-9 w-9 p-0 items-center justify-center",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      disabled = false,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled}
        whileHover={disabled ? undefined : { scale: 1.02 }}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base",
          "disabled:pointer-events-none disabled:opacity-50",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...(props as HTMLMotionProps<"button">)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
