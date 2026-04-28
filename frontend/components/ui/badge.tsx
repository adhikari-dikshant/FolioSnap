import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:  "bg-[var(--color-overlay)] text-[var(--color-text-secondary)] border border-[var(--color-border)]",
        accent:   "bg-[var(--color-accent-muted)] text-[var(--color-accent)] border border-[var(--color-accent)]/20",
        success:  "bg-[var(--color-success)]/10 text-[var(--color-success)] border border-[var(--color-success)]/20",
        danger:   "bg-[var(--color-danger)]/10  text-[var(--color-danger)]  border border-[var(--color-danger)]/20",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
