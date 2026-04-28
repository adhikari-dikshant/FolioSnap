"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-40 cursor-pointer select-none",
  {
    variants: {
      variant: {
        accent:
          "bg-[var(--color-accent)] text-[#0C0C11] hover:brightness-110 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(226,255,85,0.25)] active:translate-y-0",
        default:
          "bg-[var(--color-elevated)] text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-border-bright)] hover:bg-[var(--color-overlay)]",
        ghost:
          "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-elevated)]",
        outline:
          "border border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] bg-transparent",
        danger:
          "bg-[var(--color-danger)]/10 text-[var(--color-danger)] border border-[var(--color-danger)]/30 hover:bg-[var(--color-danger)]/20",
      },
      size: {
        sm:   "h-8  px-3 text-xs rounded-md",
        md:   "h-9  px-4",
        lg:   "h-11 px-6 text-base",
        icon: "h-9  w-9  rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
