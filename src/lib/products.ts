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

const BH = "https://cdn11.bigcommerce.com/s-589pkbp2b4/images/stencil/1280x1280/products";

export const products: Product[] = [
  // Wardrobes (BH does not stock these — Unsplash editorial imagery used)
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
    id: "fae-charcoal-ls",
    name: "Fae Loveseat — Charcoal",
    category: "Sofas",
    price: 1890,
    image: `${BH}/874/3567/Fae_Sofa_Charcoal__64197.1769798563.jpg?c=2`,
    description:
      "A compact loveseat in deep charcoal weave with sculpted arms and a low, generous seat.",
    details: [
      "Performance fabric, charcoal",
      "Kiln-dried hardwood frame",
      "Dimensions: 178 × 92 × 82 cm",
    ],
  },
  {
    id: "hudson-smoke-sofa",
    name: "Hudson Smoke Extended Sofa",
    category: "Sofas",
    price: 3450,
    image:
      "https://cdn11.bigcommerce.com/s-589pkbp2b4/images/stencil/1280w/carousel/18/Hudson_Smoke_Ext_Sofa.jpg?c=2",
    description:
      "An extended three-seat sofa in smoke-toned linen — long, low, and unbothered.",
    details: [
      "Smoke linen upholstery",
      "Down-wrapped cushions",
      "Dimensions: 260 × 100 × 78 cm",
    ],
  },
  {
    id: "hendrix-sectional-ivory",
    name: "Hendrix Sectional — Ivory",
    category: "Sofas",
    price: 4280,
    image: `${BH}/855/3724/Hendrix_Ivory_Azure_Off_White_Sectional_Open__14557.1769800543.jpg?c=2`,
    description:
      "A generous L-shape sectional in off-white with hand-tied cushions and a soft channel back.",
    details: [
      "Italian off-white weave",
      "Hand-tied spring base",
      "Dimensions: 310 × 215 × 80 cm",
    ],
  },
  {
    id: "walker-sofa-mocha",
    name: "Walker Sofa — Mocha",
    category: "Sofas",
    price: 2480,
    image: `${BH}/867/3653/Walker_Mocha_2_angle__08525.1769799849.jpg?c=2`,
    description:
      "Mid-century silhouette in rich mocha — pillow-back comfort with a clean, tailored line.",
    details: [
      "Mocha performance velvet",
      "Solid wood legs",
      "Dimensions: 220 × 95 × 82 cm",
    ],
  },

  // Tables & Chairs
  {
    id: "oden-dining-table",
    name: "Oden Dining Table",
    category: "Tables & Chairs",
    price: 2890,
    image:
      "https://cdn11.bigcommerce.com/s-589pkbp2b4/images/stencil/1280w/carousel/15/Oden_Dining_Table.jpg?c=2",
    description:
      "Solid oak dining table with a hand-rubbed finish and a sculpted pedestal base. Seats six.",
    details: [
      "Solid white oak",
      "Hand-rubbed matte finish",
      "Dimensions: 220 × 95 × 75 cm",
    ],
  },
  {
    id: "wawa-dining-table",
    name: "Wawa Dining Table",
    category: "Tables & Chairs",
    price: 2140,
    image: `${BH}/870/4090/Wawa_DT_Front__84709.1770325404.jpg?c=2`,
    description:
      "A compact round dining table with a fluted column base — equally at home in a breakfast nook or studio.",
    details: [
      "Fluted oak base",
      "Stone-look composite top",
      "Diameter: 140 cm",
    ],
  },
  {
    id: "dt6344-dining-table",
    name: "DT6344 Sculpted Dining Table",
    category: "Tables & Chairs",
    price: 2640,
    image: `${BH}/856/4069/DT6344_Side__57920.1770324705.jpg?c=2`,
    description:
      "Architectural dining table with a sculpted twin-pedestal base and a warm-toned top.",
    details: [
      "Twin sculpted pedestals",
      "Warm walnut veneer top",
      "Dimensions: 200 × 100 × 75 cm",
    ],
  },
  {
    id: "leonard-chair-grey",
    name: "Leonard Lounge Chair — Grey",
    category: "Tables & Chairs",
    price: 980,
    image: `${BH}/863/3674/KM.601H._Montana_Light_Grey_2__11820.1769800209.jpg?c=2`,
    description:
      "A bouclé-style lounge chair in light Montana grey — generous, soft, and quietly sculptural.",
    details: [
      "Montana grey bouclé",
      "Solid hardwood frame",
      "Dimensions: 82 × 86 × 78 cm",
    ],
  },

  // Beds
  {
    id: "milan-bed-slate",
    name: "Milan Bed — Slate Blue",
    category: "Beds",
    price: 3260,
    image:
      "https://cdn11.bigcommerce.com/s-589pkbp2b4/images/stencil/1280w/carousel/16/Milan_Bed_Slate_Blue.jpg?c=2",
    description:
      "Low-profile platform bed with a channel-tufted slate-blue headboard. Enveloping and quiet.",
    details: [
      "Slate-blue performance velvet",
      "Solid oak base, slatted support",
      "King size: 200 × 210 cm",
    ],
  },
  {
    id: "halcyon-bed",
    name: "Halcyon Bouclé Bed",
    category: "Beds",
    price: 3490,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    description:
      "A low-profile platform bed with a sculpted bouclé headboard — quiet and enveloping.",
    details: [
      "Ivory bouclé headboard, oak base",
      "King size: 200 × 210 cm",
      "Slatted support, no box spring needed",
    ],
  },
  {
    id: "guily-sofabed",
    name: "Guily Sofabed — Light Grey",
    category: "Beds",
    price: 1480,
    image: `${BH}/853/3740/Guily_Front__58695.1769800639.jpg?c=2`,
    description:
      "A clean-lined sofabed in light grey weave — daytime sofa, overnight guest bed, no compromise.",
    details: [
      "Light grey performance weave",
      "Click-clack conversion",
      "Dimensions: 200 × 95 × 82 cm",
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
      "https://cdn11.bigcommerce.com/s-589pkbp2b4/images/stencil/1280w/carousel/14/Wonder_Sand_6PCS_Lifestyle_V2.jpg?c=2",
    description:
      "Sectionals, loveseats, and channel-back sofas in linen, velvet, and bouclé — seating made to slow the room down.",
  },
  "tables-chairs": {
    label: "Tables & Chairs",
    tagline: "Where the table makes the room.",
    image:
      "https://cdn11.bigcommerce.com/s-589pkbp2b4/images/stencil/1280w/carousel/15/Oden_Dining_Table.jpg?c=2",
    description:
      "Solid oak dining tables, sculpted pedestals, and bouclé lounge chairs — a quietly opinionated dining language.",
  },
  beds: {
    label: "Beds",
    tagline: "Beds you don't get out of.",
    image:
      "https://cdn11.bigcommerce.com/s-589pkbp2b4/images/stencil/1280w/carousel/16/Milan_Bed_Slate_Blue.jpg?c=2",
    description:
      "Low-profile platforms, channel-tufted velvet, and convertible sofabeds — enveloping beds for the considered bedroom.",
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
