/**
 * All restaurant content lives here so text/details are easy to update.
 */
export const restaurant = {
  name: "Little Italy Pizzéria & Söröző",
  tagline: "Authentic Italian Pizza & Craft Beer in the Heart of Budapest",
  address: "Király u. 103, 1077 Budapest",
  phone: "(06 1) 397 7710",
  phoneHref: "tel:+3613977710",
  facebook: "https://www.facebook.com/profile.php?id=100040746675717#",
  mapsReviews: "https://www.google.com/maps/place/Little+Italy+pizz%C3%A9ria+%26+s%C3%B6r%C3%B6z%C5%91/@47.5068585,19.0691229,17z/data=!3m2!4b1!5s0x4741dc7aa72a917d:0x18fb9bb7f7199070!4m6!3m5!1s0x4741dc7aa00f4189:0xab1ee2101269cae4!8m2!3d47.5068549!4d19.0716978!16s%2Fg%2F11cltg21kv?entry=ttu&g_ep=EgoyMDI2MDgzMS4wIKXMDSoASAFQAw%3D%3D",
  rating: 4.8,
  reviewCount: "1,635",
  priceRange: "2,000–4,000 Ft per person",
  services: ["Dine-in", "Takeaway", "Delivery"],
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
  { label: "Order", href: "#order" },
];

export const menuHighlights = [
  {
    name: "Tiramisu",
    /* IMAGE PLACEHOLDER: Dish photo — Tiramisu */
    placeholder: "Dish photo — Tiramisu",
    description: "Espresso-soaked savoiardi layered with mascarpone cream, dusted with cocoa.",
    tag: "Made in house",
    src: "/images/tiramisu.jpg"
  },
  {
    name: "Casagrande Pizza",
    /* IMAGE PLACEHOLDER: Dish photo — Pizza */
    placeholder: "Dish photo — Pizza",
    description: "Slow-risen dough, blistered crust, simple honest toppings. A guest favourite.",
    tag: "Guest favourite",
    src: "/images/Casagrande.jpg"
  },
  {
    name: "Cannoli",
    /* IMAGE PLACEHOLDER: Dish photo — Cannoli */
    placeholder: "Dish photo — Cannoli",
    description: "Crisp shells piped to order with sweet ricotta and candied peel.",
    tag: "Guest favourite",
    src: "/images/cannoli.jpg"
  },
];

export const reviews = [
  {
    name: "Marcell Funk",
    role: "Local Guide",
    stars: 5,
    quote:
      "Nice interior, feeling like at home. Family run business with really nice vibe. I had one of my best pizzas in my life with a matching craft beer.",
  },
  {
    name: "David A Gross",
    role: "Local Guide",
    stars: 5,
    quote:
      "Authentic great pizza, real fresh ingredients, very tasty — they know what they're doing. Friendly service and atmosphere. A relief to get away from the usual tourist places.",
  },
  {
    name: "Xoom Too",
    role: "Local Guide · 1,011 reviews",
    stars: 5,
    quote:
      "The restaurant is on the smaller side with about 6-7 tables, two cozy rooms. Prices are very decent too.",
  },
];

/* IMAGE PLACEHOLDERS: gallery grid — replace one at a time */
export const gallery = [
  {name: "Gallery photo — Pizza", src: "/images/pizza2.jpg"},
  {name: "Gallery photo — Calzone", src: "/images/calzone.jpg"},
  {name: "Gallery photo — Cannoli", src: "/images/cannoli2.jpg"},
  {name: "Gallery photo — Tiramisu", src: "/images/tiramisu2.jpg"},
];
