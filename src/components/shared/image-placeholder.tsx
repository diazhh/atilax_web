import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label?: string;
  description?: string;
  className?: string;
  iconSize?: "sm" | "md" | "lg";
}

export function ImagePlaceholder({
  label,
  description,
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
      <div className="flex flex-col items-center gap-2 text-muted-foreground/60 px-4 text-center">
        <ImageIcon className={iconSizes[iconSize]} />
        {label && <span className="text-xs font-semibold">{label}</span>}
        {description && <span className="text-xs opacity-75 max-w-[200px]">{description}</span>}
      </div>
    </div>
  );
}
