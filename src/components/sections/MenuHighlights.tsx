import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { menuHighlights } from "@/lib/restaurant";

export function MenuHighlights() {
  return (
    <section id="menu" className="bg-secondary/60 bg-woodgrain py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Dal forno"
            title="Menu highlights"
            subtitle="Our guests come back for the calzone and the tiramisu — but the Neapolitan pizza, cannoli and craft beer are favourites too."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuHighlights.map((item, i) => (
            <Reveal key={item.name} delay={i * 90}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-warm transition-all hover:-translate-y-1 hover:shadow-lift">
                {/* IMAGE PLACEHOLDER: {item.placeholder} */}
                <div className="p-3 pb-0">
                  <ImagePlaceholder label={item.placeholder} className="rounded-xl" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                    <span className="rounded-full bg-accent px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-accent-foreground">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          {/* Placeholder link — swap for the real full menu page or PDF */}
          <Button asChild variant="basil" size="xl">
            <a href="#order">
              View Full Menu <ArrowRight />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
