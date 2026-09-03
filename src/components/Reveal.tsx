import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Fades + lifts children into view on scroll. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "reveal-visible", className)}
    >
      {children}
    </div>
  );
}

/** Small reusable section heading with script eyebrow. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow && <p className="text-script text-2xl text-primary">{eyebrow}</p>}
      <h2 className="mt-1 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 flex items-center justify-center gap-2">
        <span className="h-1 w-8 rounded-full bg-primary" />
        <span className="h-1 w-8 rounded-full bg-cream" />
        <span className="h-1 w-8 rounded-full bg-basil" />
      </div>
      {subtitle && <p className="mt-5 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

/** Star row. */
export function Stars({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <span className={cn("inline-flex text-gold", className)} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </span>
  );
}
