import { Reveal, SectionHeading } from "@/components/Reveal";
import { gallery } from "@/lib/restaurant";
import { useLanguage } from "@/hooks/useLanguage";

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section
      id="gallery"
      className="bg-secondary/60 bg-paper py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Heading */}
        <Reveal>
          <SectionHeading
            eyebrow={t.gallery.eyebrow}
            title={t.gallery.title}
            subtitle={t.gallery.subtitle}
          />
        </Reveal>

        {/* Gallery */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, i) => {
            const label =
              t.gallery.items[item.name as keyof typeof t.gallery.items] ??
              item.name;
            return (
              <Reveal
                key={item.name}
                delay={i * 70}
                className="h-full"
              >
                <article className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-card shadow-warm transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">

                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={item.src}
                      alt={label}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />

                    {/* Label */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                        <h3 className="text-lg font-semibold text-white drop-shadow-sm">
                          {label}
                        </h3>

                        <div className="mt-1 h-px w-0 bg-white/80 transition-all duration-500 group-hover:w-10" />
                      </div>
                    </div>

                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}