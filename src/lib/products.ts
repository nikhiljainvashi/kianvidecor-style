export type CategoryLabel =
  | "Wardrobes"
  | "Sofas"
  | "Tables & Chairs"
  | "Beds";

export type Product = {
  id: string;
  name: string;
  category: CategoryLabel;
  price: number;
  image: string;
  description: string;
  details: string[];
};

export const products: Product[] = [
  // Wardrobes
  {
    id: "noir-armoire",
    name: "Noir Armoire",
    category: "Wardrobes",
    price: 3890,
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&q=80",
    description:
      "A floor-to-ceiling armoire in smoked oak with brushed brass hardware — generous storage that reads as architecture.",
    details: [
      "Smoked oak, hand-rubbed finish",
      "Brushed brass pulls",
      "Dimensions: 220 × 60 × 230 cm",
      "Lead time: 4–6 weeks",
    ],
  },
  {
    id: "atelier-wardrobe",
    name: "Atelier Wardrobe",
    category: "Wardrobes",
    price: 2640,
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1400&q=80",
    description:
      "Twin-door wardrobe with fluted detailing, cedar-lined interior, and a soft-close mechanism.",
    details: [
      "European oak with fluted fronts",
      "Cedar-lined interior",
      "Dimensions: 140 × 58 × 210 cm",
    ],
  },
  {
    id: "lumen-wardrobe",
    name: "Lumen Wardrobe",
    category: "Wardrobes",
    price: 4280,
    image:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1400&q=80",
    description:
      "Mirror-fronted wardrobe with an integrated dressing nook and warm internal lighting.",
    details: [
      "Beveled mirror fronts",
      "Integrated LED lighting",
      "Dimensions: 240 × 62 × 230 cm",
    ],
  },

  // Sofas
  {
    id: "marais-sofa",
    name: "Marais Sofa",
    category: "Sofas",
    price: 3450,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80",
    description:
      "Low, generous, and entirely unbothered. Down-wrapped cushions in a sand linen weave.",
    details: [
      "European linen, removable covers",
      "Kiln-dried hardwood frame",
      "Dimensions: 240 × 100 × 72 cm",
    ],
  },
  {
    id: "velvet-curve-sofa",
    name: "Velvet Curve Sofa",
    category: "Sofas",
    price: 4120,
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80",
    description:
      "A sculpted curved sofa upholstered in deep cocoa velvet — the centerpiece your living room has been waiting for.",
    details: [
      "Italian velvet upholstery",
      "Hand-tied spring base",
      "Dimensions: 260 × 95 × 78 cm",
    ],
  },
  {
    id: "lumen-lounge-chair",
    name: "Lumen Lounge Chair",
    category: "Sofas",
    price: 1240,
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=80",
    description:
      "A sculpted lounge chair upholstered in bouclé, designed for slow afternoons and considered conversation.",
    details: [
      "Solid oak frame, hand-finished",
      "Ivory bouclé upholstery",
      "Dimensions: 82 × 78 × 74 cm",
    ],
  },

  // Tables & Chairs
  {
    id: "atelier-dining-table",
    name: "Atelier Dining Table",
    category: "Tables & Chairs",
    price: 2890,
    image:
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1400&q=80",
    description:
      "A monolithic travertine top resting on a blackened steel base. Seats six in unhurried elegance.",
    details: [
      "Honed travertine top",
      "Blackened steel base",
      "Dimensions: 220 × 95 × 75 cm",
    ],
  },
  {
    id: "kintsu-side-table",
    name: "Kintsu Side Table",
    category: "Tables & Chairs",
    price: 620,
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=1400&q=80",
    description:
      "A petite walnut side table with a brass inlay detail — at home beside a reading chair.",
    details: ["Solid walnut", "Brass inlay", "Dimensions: 45 × 45 × 55 cm"],
  },
  {
    id: "noir-dining-chair",
    name: "Noir Dining Chair (Set of 2)",
    category: "Tables & Chairs",
    price: 980,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=80",
    description:
      "Spindle-back dining chair in blackened ash with a hand-woven rush seat. Sold in pairs.",
    details: [
      "Blackened ash frame",
      "Hand-woven rush seat",
      "Dimensions: 45 × 48 × 88 cm",
    ],
  },

  // Beds
  {
    id: "halcyon-bed",
    name: "Halcyon Bed",
    category: "Beds",
    price: 3260,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    description:
      "A low-profile platform bed with a sculpted bouclé headboard — quiet and enveloping.",
    details: [
      "Bouclé headboard, solid oak base",
      "King size: 200 × 210 cm",
      "Slatted support, no box spring needed",
    ],
  },
  {
    id: "velluto-bed",
    name: "Velluto Velvet Bed",
    category: "Beds",
    price: 3890,
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1400&q=80",
    description:
      "An arched velvet headboard with channel tufting, framed by a blackened brass base.",
    details: [
      "Italian velvet, channel-tufted",
      "Blackened brass base",
      "King size: 200 × 210 cm",
    ],
  },
  {
    id: "atelier-canopy-bed",
    name: "Atelier Canopy Bed",
    category: "Beds",
    price: 4480,
    image:
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1400&q=80",
    description:
      "Slim-profile four-poster in solid oak — architectural without ever feeling heavy.",
    details: [
      "Solid European oak",
      "King size: 200 × 210 cm",
      "Height: 215 cm",
    ],
  },
];

export type CategorySlug = "wardrobes" | "sofas" | "tables-chairs" | "beds";

export const categoryMeta: Record<
  CategorySlug,
  { label: CategoryLabel; tagline: string; image: string; description: string }
> = {
  wardrobes: {
    label: "Wardrobes",
    tagline: "Architecture for the bedroom.",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1600&q=80",
    description:
      "Floor-to-ceiling wardrobes in smoked oak, fluted veneers, and mirror — storage that doubles as architecture.",
  },
  sofas: {
    label: "Sofas",
    tagline: "The long quiet evening.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=80",
    description:
      "Down-wrapped linen, sculpted velvet curves, bouclé lounge chairs — seating made to slow the room down.",
  },
  "tables-chairs": {
    label: "Tables & Chairs",
    tagline: "Where the table makes the room.",
    image:
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1600&q=80",
    description:
      "Travertine tops, blackened steel bases, spindle-back chairs in rush and ash — a quietly opinionated dining language.",
  },
  beds: {
    label: "Beds",
    tagline: "Beds you don't get out of.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    description:
      "Low-profile platforms, channel-tufted velvet, and slim-line canopies — enveloping beds for the considered bedroom.",
  },
};

export const categorySlugs: CategorySlug[] = [
  "wardrobes",
  "sofas",
  "tables-chairs",
  "beds",
];

export const categories: Array<"All" | CategoryLabel> = [
  "All",
  "Wardrobes",
  "Sofas",
  "Tables & Chairs",
  "Beds",
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const slugForCategory = (label: CategoryLabel): CategorySlug => {
  const map: Record<CategoryLabel, CategorySlug> = {
    Wardrobes: "wardrobes",
    Sofas: "sofas",
    "Tables & Chairs": "tables-chairs",
    Beds: "beds",
  };
  return map[label];
};
