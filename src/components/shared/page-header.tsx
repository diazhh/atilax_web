"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  badge?: string;
  className?: string;
  variant?: "default" | "dark";
}

export function PageHeader({
  title,
  description,
  badge,
  className,
  variant = "default",
}: PageHeaderProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "pt-24 pb-16 md:pt-32 md:pb-20",
        isDark ? "bg-gradient-hero text-white" : "bg-muted",
        className
      )}
    >
      <div className="container-lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          {badge && (
            <span
              className={cn(
                "inline-block text-sm font-medium px-3 py-1 rounded-full mb-4",
                isDark
                  ? "bg-secondary/20 text-secondary"
                  : "bg-primary/10 text-primary"
              )}
            >
              {badge}
            </span>
          )}
          <h1
            className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4",
              isDark ? "text-white" : "text-foreground"
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "text-lg md:text-xl",
                isDark ? "text-white/70" : "text-muted-foreground"
              )}
            >
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
