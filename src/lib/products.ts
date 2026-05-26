export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  details: string[];
};

export const products: Product[] = [
  {
    id: "lumen-lounge-chair",
    name: "Lumen Lounge Chair",
    category: "Seating",
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
  {
    id: "noir-pendant",
    name: "Noir Pendant Light",
    category: "Lighting",
    price: 480,
    image:
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1400&q=80",
    description:
      "Brushed brass pendant with a matte black shade — quiet drama for dining rooms and entryways.",
    details: [
      "Brushed brass + powder-coated steel",
      "E27 socket, dimmable",
      "Drop length: 120 cm adjustable",
    ],
  },
  {
    id: "atelier-dining-table",
    name: "Atelier Dining Table",
    category: "Tables",
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
    id: "soft-vessel-vase",
    name: "Soft Vessel Vase",
    category: "Decor",
    price: 160,
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1400&q=80",
    description:
      "Hand-thrown stoneware in a warm pale glaze. Sold individually; pairs beautifully in trios.",
    details: ["Hand-thrown stoneware", "Matte glaze", "Height: 32 cm"],
  },
  {
    id: "marais-sofa",
    name: "Marais Sofa",
    category: "Seating",
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
    id: "kintsu-side-table",
    name: "Kintsu Side Table",
    category: "Tables",
    price: 620,
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80",
    description:
      "A petite walnut side table with a brass inlay detail — at home beside a reading chair.",
    details: ["Solid walnut", "Brass inlay", "Dimensions: 45 × 45 × 55 cm"],
  },
  {
    id: "halo-floor-lamp",
    name: "Halo Floor Lamp",
    category: "Lighting",
    price: 740,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=80",
    description:
      "An arched floor lamp with a linen drum shade, casting an unhurried glow across the room.",
    details: ["Brushed brass stem", "Natural linen shade", "Height: 168 cm"],
  },
  {
    id: "veiled-mirror",
    name: "Veiled Wall Mirror",
    category: "Decor",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=80",
    description:
      "A round mirror set in a slim blackened brass frame. Quiet enough for any wall.",
    details: ["Blackened brass frame", "Beveled glass", "Diameter: 90 cm"],
  },
];

export const categories = ["All", "Seating", "Tables", "Lighting", "Decor"];

export const getProduct = (id: string) => products.find((p) => p.id === id);
