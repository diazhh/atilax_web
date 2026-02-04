import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  iconSize?: "sm" | "md" | "lg";
}

export function ImagePlaceholder({
  label,
  className,
  iconSize = "md",
}: ImagePlaceholderProps) {
  const iconSizes = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-16 w-16",
  };

  return (
    <div
      className={cn(
        "img-placeholder w-full h-full min-h-[200px] rounded-lg",
        className
      )}
    >
      <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
        <ImageIcon className={iconSizes[iconSize]} />
        {label && <span className="text-xs font-medium">{label}</span>}
      </div>
    </div>
  );
}
