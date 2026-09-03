import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * IMAGE PLACEHOLDER COMPONENT
 * ---------------------------
 * Every photo slot on the page uses this. To swap in a real photo:
 *   1. Import your image:  import calzone from "@/assets/calzone.jpg";
 *   2. Replace <ImagePlaceholder label="Dish photo — Calzone" />
 *      with     <img src={calzone} alt="Calzone" className="h-full w-full object-cover" />
 */
export function ImagePlaceholder({
  label,
  className,
  aspect = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border-2 border-dashed border-primary/30 bg-accent/60 bg-paper p-6 text-center",
        aspect,
        className,
      )}
    >
      <ImageIcon className="size-6 text-primary/60" aria-hidden="true" />
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
