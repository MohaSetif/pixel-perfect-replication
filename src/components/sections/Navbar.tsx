import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, restaurant } from "@/lib/restaurant";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "border-b border-border bg-background/95 shadow-warm backdrop-blur"
          : "bg-background/60 backdrop-blur-sm",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="flex items-center gap-2 leading-tight">
          <span className="grid size-9 place-items-center rounded-full bg-primary text-lg text-primary-foreground">
            🍕
          </span>
          <span className="flex flex-col">
            <span className="font-display text-sm font-bold text-foreground sm:text-base">
              Little Italy
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
              Pizzéria &amp; Söröző
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="default" className="hidden sm:inline-flex">
            <a href={restaurant.phoneHref}>
              <Phone /> Call to Order
            </a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-md border border-border text-foreground transition-colors hover:bg-accent lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 font-semibold text-foreground transition-colors hover:bg-accent hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-3 pt-2">
              <Button asChild variant="hero" className="w-full">
                <a href={restaurant.phoneHref}>
                  <Phone /> {restaurant.phone}
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
