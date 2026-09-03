import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { gallery } from "@/lib/restaurant";

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary/60 bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Uno sguardo"
            title="Gallery"
            subtitle="Photos coming soon — each slot below is a labelled placeholder, ready to swap one at a time."
          />
        </Reveal>

        {/* IMAGE PLACEHOLDERS: gallery grid — labels come from src/lib/restaurant.ts */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((label, i) => (
            <Reveal key={label} delay={i * 70}>
              <div className="rounded-2xl border border-border bg-card p-2 shadow-warm transition-all hover:-translate-y-1 hover:shadow-lift">
                <ImagePlaceholder label={label} className="rounded-xl" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
