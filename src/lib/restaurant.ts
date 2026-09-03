/**
 * All restaurant content lives here so text/details are easy to update.
 */
export const restaurant = {
  name: "Little Italy Pizzéria & Söröző",
  tagline: "Authentic Italian Pizza & Craft Beer in the Heart of Budapest",
  address: "Király u. 103, 1077 Budapest",
  phone: "(06 1) 397 7710",
  phoneHref: "tel:+3613977710",
  facebook: "https://m.facebook.com/",
  mapsReviews: "https://www.google.com/maps",
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
    name: "Calzone",
    /* IMAGE PLACEHOLDER: Dish photo — Calzone */
    placeholder: "Dish photo — Calzone",
    description:
      "Folded and baked until golden, stuffed with San Marzano tomato, fior di latte and cured ham.",
    tag: "Guest favourite",
  },
  {
    name: "Tiramisu",
    /* IMAGE PLACEHOLDER: Dish photo — Tiramisu */
    placeholder: "Dish photo — Tiramisu",
    description: "Espresso-soaked savoiardi layered with mascarpone cream, dusted with cocoa.",
    tag: "Made in house",
  },
  {
    name: "Neapolitan Pizza",
    /* IMAGE PLACEHOLDER: Dish photo — Pizza */
    placeholder: "Dish photo — Pizza",
    description: "Slow-risen dough, blistered crust, simple honest toppings. A guest favourite.",
    tag: "Guest favourite",
  },
  {
    name: "Cannoli",
    /* IMAGE PLACEHOLDER: Dish photo — Cannoli */
    placeholder: "Dish photo — Cannoli",
    description: "Crisp shells piped to order with sweet ricotta and candied peel.",
    tag: "Guest favourite",
  },
  {
    name: "Craft Beer",
    /* IMAGE PLACEHOLDER: Drink photo — Craft Beer */
    placeholder: "Drink photo — Craft Beer",
    description: "A rotating Hungarian craft selection — the söröző half of our name, taken seriously.",
    tag: "Guest favourite",
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
  "Gallery photo — Pizza",
  "Gallery photo — Calzone",
  "Gallery photo — Cannoli",
  "Gallery photo — Tiramisu",
  "Gallery photo — Craft Beer",
  "Gallery photo — Interior vibe",
];
