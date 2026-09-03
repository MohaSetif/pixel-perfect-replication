import { createFileRoute } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { MenuHighlights } from "@/components/sections/MenuHighlights";
import { Reviews } from "@/components/sections/Reviews";
import { Gallery } from "@/components/sections/Gallery";
import { Location } from "@/components/sections/Location";
import { OrderSection } from "@/components/sections/OrderSection";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/sonner";
import { restaurant } from "@/lib/restaurant";

const title = "Little Italy Pizzéria & Söröző — Neapolitan Pizza in Budapest";
const description =
  "Family-run Italian trattoria on Király u. 103, Budapest. Neapolitan pizza, calzone, cannoli, tiramisu and craft beer. 4.8★ from 1,635 reviews. Dine-in, takeaway, delivery.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuHighlights />
        <Reviews />
        <Gallery />
        <Location />
        <OrderSection />
      </main>
      <Footer />

      {/* Mobile-only floating call button — always reachable */}
      <a
        href={restaurant.phoneHref}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-bold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 sm:hidden"
      >
        <Phone className="size-4" /> Call to Order
      </a>

      <Toaster />

      {/* Local business structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: restaurant.name,
            servesCuisine: "Italian",
            priceRange: "2000-4000 HUF",
            telephone: "+3613977710",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Király u. 103",
              postalCode: "1077",
              addressLocality: "Budapest",
              addressCountry: "HU",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "1635",
            },
          }),
        }}
      />
    </div>
  );
}
