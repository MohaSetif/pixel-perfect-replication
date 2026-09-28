import { Reveal, SectionHeading } from "@/components/Reveal";
import { useLanguage } from "@/hooks/useLanguage";
import Pizza from "../../../public/images/pizza.jpg";
import Dessert from "../../../public/images/dessert.jpg";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow={t.about.eyebrow}
            title={t.about.title}
          />
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p className="text-script text-2xl text-primary">{t.about.p3}</p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {/* IMAGE PLACEHOLDERS: About section */}
              <img src={Pizza} className="rounded-2xl h-full w-full object-cover border-4 border-lime-900/50" />
              <img
                src={Dessert}
                className="mt-8 rounded-2xl h-full w-full object-cover border-4 border-lime-900/50"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
