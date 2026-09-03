import { Clock, Facebook, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { restaurant } from "@/lib/restaurant";

export function Location() {
  return (
    <section id="location" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow="Ci trovi qui" title="Location & hours" />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* MAP PLACEHOLDER: replace with a Google Maps iframe embed */}
          <Reveal>
            <div
              role="img"
              aria-label="Map placeholder — Király u. 103, 1077 Budapest"
              className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-primary/30 bg-accent/60 bg-tablecloth text-center"
            >
              <MapPin className="size-7 text-primary/70" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Map placeholder — Király u. 103
              </span>
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            {/* Split-hours callout — deliberately loud so guests don't miss it */}
            <div className="rounded-2xl border-2 border-primary bg-primary/10 p-6">
              <div className="flex items-center gap-2 text-primary">
                <Clock className="size-5" />
                <h3 className="text-lg font-bold">Split opening hours — please note</h3>
              </div>
              <p className="mt-3 text-base font-semibold text-foreground">
                We close for a break at <span className="text-primary">3:00 pm</span> and reopen at{" "}
                <span className="text-primary">6:00 pm</span>.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-card p-4 shadow-warm">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Daytime</p>
                  <p className="font-display text-xl font-bold text-foreground">until 3:00 pm</p>
                </div>
                <div className="rounded-xl bg-card p-4 shadow-warm">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Evening</p>
                  <p className="font-display text-xl font-bold text-foreground">from 6:00 pm</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-warm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 text-primary" />
                <p className="font-semibold text-foreground">{restaurant.address}</p>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Phone className="mt-0.5 size-5 text-primary" />
                <a
                  href={restaurant.phoneHref}
                  className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                >
                  {restaurant.phone}
                </a>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {restaurant.services.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-basil px-3 py-1 text-xs font-bold uppercase tracking-wider text-basil-foreground"
                  >
                    {s}
                  </li>
                ))}
                <li className="rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground">
                  Cash friendly
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="hero">
                  <a href={restaurant.phoneHref}>
                    <Phone /> Call us
                  </a>
                </Button>
                <Button asChild variant="rustic">
                  <a href={restaurant.facebook} target="_blank" rel="noreferrer noopener">
                    <Facebook /> Facebook page
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
