import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { restaurant } from "@/lib/restaurant";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";
import logo from "../../../public/images/logo.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, t, toggle } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.menu, href: "#menu" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.location, href: "#location" },
    { label: t.nav.order, href: "#order" },
  ];

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
        <a
          href="#home"
          aria-label="Little Italy Pizzéria & Söröző"
          className="relative z-10 flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Little Italy Pizzéria & Söröző"
            className="
              h-12
              w-auto
              max-w-[50px]
              object-contain
              transition-all
              duration-300

              sm:h-7
              sm:max-w-[70px]

              md:h-8
              md:max-w-[90px]

              lg:h-10
              lg:max-w-[120px]
            "
          />
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
          {/* Language toggle */}
          <button
            type="button"
            onClick={toggle}
            aria-label={lang === "hu" ? "Switch to English" : "Switch to Hungarian"}
            className="hidden rounded-full border border-border bg-card px-3 py-1 text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-accent hover:text-primary sm:inline-flex"
          >
            {lang === "en" ? "HUN" : "ENG"}
          </button>

          <Button asChild variant="hero" size="default" className="hidden sm:inline-flex">
            <a href={restaurant.phoneHref}>
              <Phone /> {t.nav.callToOrder}
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
            {/* Language toggle — mobile */}
            <li className="px-3 pt-2">
              <button
                type="button"
                onClick={toggle}
                className="w-full rounded-full border border-border bg-card py-2 text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:bg-accent hover:text-primary"
              >
                {lang === "en" ? "🇭🇺 Magyar" : "🇬🇧 English"}
              </button>
            </li>
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
