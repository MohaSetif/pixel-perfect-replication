import { Facebook, MapPin, Phone } from "lucide-react";
import { navLinks, restaurant } from "@/lib/restaurant";

export function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-espresso py-14 text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="font-display text-2xl font-bold">{restaurant.name}</h2>
          <p className="text-script mt-1 text-xl text-gold">Pizza, birra, famiglia.</p>
          <p className="mt-4 text-sm opacity-80">{restaurant.priceRange}</p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="flex items-start gap-2 opacity-90">
            <MapPin className="mt-0.5 size-4 text-gold" /> {restaurant.address}
          </p>
          <p className="flex items-start gap-2">
            <Phone className="mt-0.5 size-4 text-gold" />
            <a href={restaurant.phoneHref} className="underline-offset-4 hover:underline">
              {restaurant.phone}
            </a>
          </p>
          <p className="opacity-80">
            Daytime service until 3:00 pm · evening service from 6:00 pm
          </p>
        </div>

        <div>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="opacity-85 underline-offset-4 hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={restaurant.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Facebook page"
              className="grid size-10 place-items-center rounded-full bg-cream/10 transition-colors hover:bg-primary"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl px-4 text-xs opacity-60 sm:px-6">
        © {new Date().getFullYear()} {restaurant.name} · Király u. 103, Budapest
      </p>
    </footer>
  );
}
