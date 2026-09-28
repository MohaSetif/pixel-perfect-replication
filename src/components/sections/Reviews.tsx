import { Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading, Stars } from "@/components/Reveal";
import { restaurant, reviews } from "@/lib/restaurant";
import { useLanguage } from "@/hooks/useLanguage";

export function Reviews() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.reviews.eyebrow}
            title={t.reviews.title}
            subtitle={t.reviews.subtitle}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 100}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-warm transition-all hover:-translate-y-1 hover:shadow-lift">
                <Quote className="size-7 text-primary/40" aria-hidden="true" />
                <p className="mt-4 flex-1 text-base leading-relaxed text-foreground/90">
                  "{r.quote}"
                </p>
                <footer className="mt-6 border-t border-border pt-4">
                  <Stars count={r.stars} />
                  <p className="mt-1 font-bold text-foreground">{r.name}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{r.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <Button asChild variant="gold" size="xl">
            <a href={restaurant.mapsReviews} target="_blank" rel="noreferrer noopener">
              <Star /> {t.reviews.seeAll} {restaurant.reviewCount} {t.reviews.reviewsOnGoogle}
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
