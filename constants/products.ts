import { Product } from "@/types";

// Non-alcoholic products data
export const NON_ALCOHOLIC_PRODUCTS: Product[] = [
  {
    id: "mezza",
    name: "Mezza",
    description:
      "Low-calorie, non-alcoholic malt beverage available in 6 different flavors. Round-the-clock refreshing beverage.",
    category: "non-alcoholic",
    launchYear: "2018",
    icon: "🥤",
    image: "/images/products/mezza.png",
    color: "var(--color-teal-100)",
    features: ["6 flavors", "Low-calorie", "24/7 refreshing"],
  },
  {
    id: "freez",
    name: "Freez",
    description:
      "Flavored, non-alcoholic carbonated drink with 14 different flavors. Available globally.",
    category: "non-alcoholic",
    launchYear: "2001",
    icon: "🧊",
    image: "/images/products/freez.png",
    color: "var(--color-pink-100)",
    features: ["14 flavors", "Global distribution", "Carbonated"],
  },
  {
    id: "fruitastic",
    name: "Fruitastic",
    description:
      "100% juices, nectar concentrates, and fruit drinks. Natural and flavored colorful range.",
    category: "non-alcoholic",
    launchYear: "1998",
    icon: "🍊",
    image: "/images/products/fruitastic.png",
    color: "var(--color-terracotta-100)",
    features: ["100% juice", "Natural flavors", "Colorful range"],
  },
  {
    id: "syrups",
    name: "Syrups",
    description:
      "The very first bottled Jallab for home preparation. Rose, Tamarind, Almond flavors.",
    category: "non-alcoholic",
    launchYear: "1974",
    icon: "🍯",
    image: "/images/products/syrups.png",
    color: "var(--color-burgundy-100)",
    features: [
      "First bottled Jallab",
      "Traditional flavors",
      "Home preparation",
    ],
  },
  {
    id: "jams",
    name: "Jams",
    description:
      "Wholesome fruity spreads and mini-jars. Perfect for snack breaks and sweet cravings.",
    category: "non-alcoholic",
    launchYear: "Traditional",
    icon: "🍓",
    image: "/images/products/jams.png",
    color: "var(--color-primary-100)",
    features: ["Fruit spreads", "Mini-jars", "Snack perfect"],
  },
];

// Alcoholic products data
export const ALCOHOLIC_PRODUCTS: Product[] = [
  {
    id: "beirut-beer",
    name: "Beirut Beer",
    description:
      "Authentic Pilsner beer following strict purity laws. Water, Barley, Hops, Yeast only.",
    category: "alcoholic",
    launchYear: "2014",
    icon: "🍺",
    image: "/images/products/beirut-beer.png",
    color: "var(--color-navy-100)",
    features: ["Authentic Pilsner", "Pure ingredients", "Strict laws"],
  },
  {
    id: "buzz",
    name: "Buzz",
    description:
      "Ready-to-drink vodka-mix beverage. Available in cans with or without energy ingredients.",
    category: "alcoholic",
    launchYear: "Popular",
    icon: "⚡",
    image: "/images/products/buzz.png",
    color: "var(--color-brand-accent)",
    features: ["Ready-to-drink", "Energy options", "Cans available"],
  },
  {
    id: "chateau-ka",
    name: "Chateau Ka",
    description:
      "Fine young wine with bold flavor and subtle notes. Internationally recognized with awards.",
    category: "alcoholic",
    launchYear: "2005",
    icon: "🍷",
    image: "/images/products/chateau-ka.png",
    color: "var(--color-burgundy-100)",
    features: ["Award-winning", "Bold flavor", "International recognition"],
  },
  {
    id: "liqueurs",
    name: "Liqueurs",
    description:
      "Fine selection of sweet and colorful liqueurs, including cream liqueurs like Irish Cream.",
    category: "alcoholic",
    launchYear: "Premium",
    icon: "🥃",
    image: "/images/products/liqueurs.png",
    color: "var(--color-lavender-100)",
    features: ["Premium selection", "Cream liqueurs", "Colorful range"],
  },
];

// All products combined
export const ALL_PRODUCTS = [...NON_ALCOHOLIC_PRODUCTS, ...ALCOHOLIC_PRODUCTS];
