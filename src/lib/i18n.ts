/**
 * i18n.ts — All English and Hungarian translations for the site.
 * Add new keys here and consume them with the `useLanguage` hook.
 */

export type Lang = "en" | "hu";

export const translations = {
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      menu: "Menu",
      reviews: "Reviews",
      gallery: "Gallery",
      location: "Location",
      order: "Order",
      callToOrder: "Call to Order",
    },

    // Hero
    hero: {
      reviewsFrom: "from",
      googleReviews: "Google reviews",
      script: "Benvenuti a Budapest",
      tagline: "Authentic Italian Pizza & Craft Beer in the Heart of Budapest",
      taglineSuffix:
        "Wood-fired dough, honest ingredients and a cold craft beer in a tiny, family-run trattoria on Király utca.",
      orderReserve: "Order / Reserve",
      closedNote: "Closed 3pm–6pm · see hours",
      services: {
        "Dine-in": "Dine-in",
        Takeaway: "Takeaway",
        Delivery: "Delivery",
      },
    },

    // About
    about: {
      eyebrow: "La nostra storia",
      title: "A small family kitchen, not a tourist trap",
      p1: "Walking through our door feels less like entering a restaurant and more like stepping into an Italian home. Two cozy rooms, six or seven tables, the smell of dough and basil, and whoever is behind the counter probably knows the regulars by name.",
      p2: "Everything is made the way it should be: slow-risen Neapolitan dough, real fior di latte, San Marzano tomatoes, desserts finished in-house, and a rotating craft beer list worthy of the word söröző.",
      p3: "A relief from the usual downtown tourist spots — and our guests keep saying so.",
    },

    // Menu Highlights
    menu: {
      eyebrow: "Dal forno",
      title: "Menu highlights",
      subtitle:
        "Our guests come back for the calzone and the tiramisu — but the Neapolitan pizza, cannoli and craft beer are favourites too.",
      viewFullMenu: "View Full Menu",
      items: {
        Tiramisu: {
          description:
            "Espresso-soaked savoiardi layered with mascarpone cream, dusted with cocoa.",
          tag: "Made in house",
        },
        "Casagrande Pizza": {
          description:
            "Slow-risen dough, blistered crust, simple honest toppings. A guest favourite.",
          tag: "Guest favourite",
        },
        Cannoli: {
          description:
            "Crisp shells piped to order with sweet ricotta and candied peel.",
          tag: "Guest favourite",
        },
      },
    },

    // Reviews
    reviews: {
      eyebrow: "Grazie mille",
      title: "4.8 stars from 1,635 reviews",
      subtitle:
        "That is an unusually high review count for a restaurant this small — the kind of trust you only earn one table at a time.",
      seeAll: "See all",
      reviewsOnGoogle: "reviews on Google",
    },

    // Gallery
    gallery: {
      eyebrow: "Uno sguardo",
      title: "Gallery",
      subtitle:
        "A glimpse into our food, atmosphere, and the moments around the table.",
      items: {
        "Gallery photo — Pizza": "Pizza",
        "Gallery photo — Calzone": "Calzone",
        "Gallery photo — Cannoli": "Cannoli",
        "Gallery photo — Tiramisu": "Tiramisu",
      },
    },

    // Location
    location: {
      eyebrow: "Ci trovi qui",
      title: "Location & hours",
      splitHoursTitle: "Split opening hours — please note",
      splitHoursDesc: "We close for a break at",
      splitHoursAnd: "and reopen at",
      daytime: "Daytime",
      daytimeHours: "until 3:00 pm",
      evening: "Evening",
      eveningHours: "from 6:00 pm",
      cashFriendly: "Cash friendly",
      callUs: "Call us",
      facebookPage: "Facebook page",
    },

    // Order
    order: {
      eyebrow: "Prenota un tavolo",
      title: "Order or reserve",
      subtitle:
        "Only 6–7 tables, so booking ahead is a good idea. Fastest of all: just give us a ring.",
      name: "Name",
      namePlaceholder: "Your name",
      date: "Date",
      time: "Time",
      partySize: "Party size",
      contact: "Phone or email",
      contactPlaceholder: "+36 ...",
      send: "Send reservation request",
      sent: "Request sent",
      disclaimer:
        "Requests are not confirmed automatically — we will ring you back, or call us directly.",
      ratherTalk: "Rather talk to us?",
      ratherTalkDesc:
        "Dine-in, takeaway and delivery orders all go through the phone or Facebook.",
      call: "Call",
      messageOnFacebook: "Message on Facebook",
      remember: "Remember!",
      rememberDesc: "Kitchen closes at 3:00 pm and reopens at 6:00 pm.",
    },

    // Footer
    footer: {
      script: "Pizza, birra, famiglia.",
      hours: "Daytime service until 3:00 pm · evening service from 6:00 pm",
    },
  },

  hu: {
    // Navbar
    nav: {
      home: "Főoldal",
      about: "Rólunk",
      menu: "Menü",
      reviews: "Értékelések",
      gallery: "Galéria",
      location: "Helyszín",
      order: "Rendelés",
      callToOrder: "Hívjon minket",
    },

    // Hero
    hero: {
      reviewsFrom: "",
      googleReviews: "Google értékelés",
      script: "Benvenuti a Budapest",
      tagline: "Autentikus olasz pizza és kézműves sör Budapest szívében",
      taglineSuffix:
        "Fatüzelésű tészta, becsületes alapanyagok és egy hideg kézműves sör egy kis, családi trattoriában a Király utcán.",
      orderReserve: "Rendelés / Foglalás",
      closedNote: "Zárva 15:00–18:00 · nyitvatartás",
      services: {
        "Dine-in": "Helyszínen",
        Takeaway: "Elvitel",
        Delivery: "Házhozszállítás",
      },
    },

    // About
    about: {
      eyebrow: "La nostra storia",
      title: "Egy kis családi konyha, nem turistacsapda",
      p1: "Nálunk belépni olyan, mintha nem egy étterembe, hanem egy olasz otthonba lépnél be. Két hangulatos szoba, hat-hét asztal, a tészta és a bazsalikom illata, és a pultnál álló személy valószínűleg névről ismeri a törzsvendégeket.",
      p2: "Mindent úgy készítünk, ahogyan kell: lassan kelt nápolyi tészta, igazi fior di latte, San Marzano paradicsom, házilag készített desszertek és egy folyamatosan változó kézműves sörválaszték, amely méltó a söröző névre.",
      p3: "Üdítő változás a belváros szokásos turistahelyeihez képest — és vendégeink újra meg újra ezt mondják.",
    },

    // Menu Highlights
    menu: {
      eyebrow: "Dal forno",
      title: "Menükiemelések",
      subtitle:
        "Vendégeink visszajárnak a calzone és a tiramisu miatt — de a nápolyi pizza, a cannoli és a kézműves sör is kedvenc.",
      viewFullMenu: "Teljes menü megtekintése",
      items: {
        Tiramisu: {
          description:
            "Espressóba áztatott savoiardi mascarpone krémmel rétegezve, kakaóval megszórva.",
          tag: "Házilag készítve",
        },
        "Casagrande Pizza": {
          description:
            "Lassan kelt tészta, hólyagos kéreg, egyszerű, becsületes feltétek. Vendégkedvenc.",
          tag: "Vendégkedvenc",
        },
        Cannoli: {
          description:
            "Ropogós tésztatölcsér rendelésre töltve édes ricottával és kandírozott héjjal.",
          tag: "Vendégkedvenc",
        },
      },
    },

    // Reviews
    reviews: {
      eyebrow: "Grazie mille",
      title: "4,8 csillag 1635 értékelés alapján",
      subtitle:
        "Ez szokatlanul magas értékelésszám egy ilyen kis étteremhez — olyan bizalom, amelyet csak asztalonként lehet kiérdemelni.",
      seeAll: "Összes",
      reviewsOnGoogle: "értékelés a Google-on",
    },

    // Gallery
    gallery: {
      eyebrow: "Uno sguardo",
      title: "Galéria",
      subtitle:
        "Egy pillantás ételünkre, hangulatunkra és az asztalnál töltött pillanatokra.",
      items: {
        "Gallery photo — Pizza": "Pizza",
        "Gallery photo — Calzone": "Calzone",
        "Gallery photo — Cannoli": "Cannoli",
        "Gallery photo — Tiramisu": "Tiramisu",
      },
    },

    // Location
    location: {
      eyebrow: "Ci trovi qui",
      title: "Helyszín és nyitvatartás",
      splitHoursTitle: "Osztott nyitvatartás — kérjük, vegye figyelembe",
      splitHoursDesc: "Szünetet tartunk",
      splitHoursAnd: "és újra nyitunk",
      daytime: "Délelőtt",
      daytimeHours: "15:00-ig",
      evening: "Este",
      eveningHours: "18:00-tól",
      cashFriendly: "Készpénz elfogadva",
      callUs: "Hívjon minket",
      facebookPage: "Facebook oldal",
    },

    // Order
    order: {
      eyebrow: "Prenota un tavolo",
      title: "Rendelés vagy foglalás",
      subtitle:
        "Csak 6–7 asztalunk van, ezért érdemes előre foglalni. A leggyorsabb megoldás: hívjon minket.",
      name: "Név",
      namePlaceholder: "Az Ön neve",
      date: "Dátum",
      time: "Időpont",
      partySize: "Vendégek száma",
      contact: "Telefon vagy e-mail",
      contactPlaceholder: "+36 ...",
      send: "Foglalási kérelem küldése",
      sent: "Kérelem elküldve",
      disclaimer:
        "A kérelmek nem kerülnek automatikusan visszaigazolásra — visszahívjuk, vagy hívjon minket közvetlenül.",
      ratherTalk: "Inkább velünk szeretne beszélni?",
      ratherTalkDesc:
        "Helyszíni, elviteles és házhozszállítási rendelések telefonon vagy Facebookon keresztül.",
      call: "Hívás",
      messageOnFacebook: "Üzenet Facebookon",
      remember: "Ne feledje!",
      rememberDesc: "A konyha 15:00-kor zár és 18:00-kor nyit újra.",
    },

    // Footer
    footer: {
      script: "Pizza, birra, famiglia.",
      hours: "Délelőtti szolgáltatás 15:00-ig · esti szolgáltatás 18:00-tól",
    },
  },
} as const;

export type Translations = (typeof translations)["en"];
