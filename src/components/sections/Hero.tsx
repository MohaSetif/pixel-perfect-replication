import { Phone, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Stars } from "@/components/Reveal";
import { restaurant } from "@/lib/restaurant";
import coverImage from "../../../public/images/caption.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-tablecloth pt-24 pb-16 sm:pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-card px-4 py-1.5 shadow-warm">
            <Stars />
            <span className="text-sm font-bold text-foreground">{restaurant.rating}</span>
            <span className="text-sm text-muted-foreground">
              from {restaurant.reviewCount} Google reviews
            </span>
          </div>

          <p className="text-script mt-6 text-3xl text-primary">Benvenuti a Budapest</p>
          <h1 className="mt-1 text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            Little Italy
            <span className="block text-primary">Pizzéria &amp; Söröző</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
            {restaurant.tagline}. Wood-fired dough, honest ingredients and a cold craft beer in a
            tiny, family-run trattoria on Király utca.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button asChild variant="hero" size="xl">
              <a href="#order">
                <Utensils /> Order / Reserve
              </a>
            </Button>
            <Button asChild variant="rustic" size="xl">
              <a href={restaurant.phoneHref}>
                <Phone /> {restaurant.phone}
              </a>
            </Button>
          </div>

          <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
            {restaurant.services.map((s) => (
              <li
                key={s}
                className="rounded-full bg-basil px-3 py-1 text-xs font-bold uppercase tracking-wider text-basil-foreground"
              >
                {s}
              </li>
            ))}
            <li className="rounded-full bg-card px-3 py-1 text-xs font-bold uppercase tracking-wider text-foreground shadow-warm">
              {restaurant.priceRange}
            </li>
          </ul>
        </div>

        {/* IMAGE PLACEHOLDER: Hero image — restaurant interior */}
        <div className="relative">
          <div className="rounded-3xl border border-border bg-card p-3 shadow-lift bg-cover">
            <img
              src={coverImage}
              alt="Hero image — restaurant interior"
              className="rounded-2xl h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-6 rotate-[-3deg] rounded-xl bg-primary px-4 py-2 shadow-lift">
            <span className="text-script text-xl text-primary-foreground">
              Closed 3pm–6pm · see hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
