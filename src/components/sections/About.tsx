import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="La nostra storia"
            title="A small family kitchen, not a tourist trap"
          />
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Walking through our door feels less like entering a restaurant and more like
                stepping into an Italian home. Two cozy rooms, six or seven tables, the smell of
                dough and basil, and whoever is behind the counter probably knows the regulars by
                name.
              </p>
              <p>
                Everything is made the way it should be: slow-risen Neapolitan dough, real fior di
                latte, San Marzano tomatoes, desserts finished in-house, and a rotating craft beer
                list worthy of the word <em>söröző</em>.
              </p>
              <p className="text-script text-2xl text-primary">
                A relief from the usual downtown tourist spots — and our guests keep saying so.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {/* IMAGE PLACEHOLDERS: About section */}
              <ImagePlaceholder label="About photo — cozy dining room" aspect="aspect-square" />
              <ImagePlaceholder
                label="About photo — pizza in the oven"
                aspect="aspect-square"
                className="mt-8"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
