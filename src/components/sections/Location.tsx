import { Clock, Facebook, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { restaurant } from "@/lib/restaurant";
import { useLanguage } from "@/hooks/useLanguage";

export function Location() {
  const { t } = useLanguage();

  return (
    <section id="location" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading eyebrow={t.location.eyebrow} title={t.location.title} />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* MAP PLACEHOLDER: replace with a Google Maps iframe embed */}
          <Reveal>
            <div
              role="img"
              aria-label="Map placeholder — Király u. 103, 1077 Budapest"
              className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-primary/30 bg-accent/60 bg-tablecloth text-center"
            >
              <iframe className="w-full h-full object-cover rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.130233069609!2d19.0716978!3d47.5068549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc7aa00f4189%3A0xab1ee2101269cae4!2zTGl0dGxlIEl0YWx5IHBpenrDqXJpYSAmIHPDtnLDtnrFkQ!5e0!3m2!1sen!2shu!4v1788449103665!5m2!1sen!2shu" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-6">
            {/* Split-hours callout — deliberately loud so guests don't miss it */}
            <div className="rounded-2xl border-2 border-primary bg-primary/10 p-6">
              <div className="flex items-center gap-2 text-primary">
                <Clock className="size-5" />
                <h3 className="text-lg font-bold">{t.location.splitHoursTitle}</h3>
              </div>
              <p className="mt-3 text-base font-semibold text-foreground">
                {t.location.splitHoursDesc}{" "}
                <span className="text-primary">3:00 pm</span>{" "}
                {t.location.splitHoursAnd}{" "}
                <span className="text-primary">6:00 pm</span>.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-card p-4 shadow-warm">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.location.daytime}</p>
                  <p className="font-display text-xl font-bold text-foreground">{t.location.daytimeHours}</p>
                </div>
                <div className="rounded-xl bg-card p-4 shadow-warm">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{t.location.evening}</p>
                  <p className="font-display text-xl font-bold text-foreground">{t.location.eveningHours}</p>
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
                    {t.hero.services[s as keyof typeof t.hero.services] ?? s}
                  </li>
                ))}
                <li className="rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground">
                  {t.location.cashFriendly}
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="hero">
                  <a href={restaurant.phoneHref}>
                    <Phone /> {t.location.callUs}
                  </a>
                </Button>
                <Button asChild variant="rustic">
                  <a href={restaurant.facebook} target="_blank" rel="noreferrer noopener">
                    <Facebook /> {t.location.facebookPage}
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
