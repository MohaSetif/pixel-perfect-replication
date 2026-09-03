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
            <Reveal key={item.name} delay={i * 90} className="h-full">
              <article className="group flex h-full min-h-[430px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-warm transition-all hover:-translate-y-1 hover:shadow-lift">
                
                {/* Image */}
                <div className="p-3 pb-0">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {item.name}
                    </h3>

                    <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-accent-foreground">
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
