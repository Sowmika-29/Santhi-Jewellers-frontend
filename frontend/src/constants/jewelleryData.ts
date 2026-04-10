export interface ShowcaseItem {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  image: string;
  description: string;
}

export const JEWELLERY_DATA: ShowcaseItem[] = [
  // GOLD RINGS (9 Items)
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: `gold-ring-${i + 1}`,
    name: `Exquisite Gold Ring ${i + 1}`,
    category: 'Gold',
    subcategory: 'Rings',
    image: `/images/showcase/gold_ring_1.webp`,
    description: `A masterfully crafted 22K gold ring featuring intricate traditional patterns.`
  })),
  
  // GOLD CHAINS (9 Items)
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: `gold-chain-${i + 1}`,
    name: `Luxury Gold Chain ${i + 1}`,
    category: 'Gold',
    subcategory: 'Chains',
    image: `/images/showcase/gold_chain_1.webp`,
    description: `Solid 22K gold chain with a premium rope twist design.`
  })),

  // SILVER ANKLETS (9 Items)
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: `silver-anklet-${i + 1}`,
    name: `Bridal Silver Anklet ${i + 1}`,
    category: 'Silver',
    subcategory: 'Anklets',
    image: `/images/showcase/silver_anklet_1.webp`,
    description: `Handcrafted sterling silver anklet with delicate jingling bells.`
  })),

  // DIAMOND RINGS (9 Items)
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: `diamond-ring-${i + 1}`,
    name: `Regal Diamond Ring ${i + 1}`,
    category: 'Diamond',
    subcategory: 'Rings',
    image: `/images/showcase/diamond_ring_1.webp`,
    description: `A stunning solitaire diamond set in a white gold band.`
  })),

  // PLATINUM CHAINS (9 Items)
  ...Array.from({ length: 9 }).map((_, i) => ({
    id: `platinum-chain-${i + 1}`,
    name: `Modern Platinum Chain ${i + 1}`,
    category: 'Platinum',
    subcategory: 'Chains',
    image: `/images/showcase/platinum_chain_1.webp`,
    description: `Durable and sleek platinum chain for a minimalist look.`
  })),
  
  // ADDITIONAL ITEMS FOR VARIETY
  { id: 'dp1', name: 'Heart Diamond Pendant', category: 'Diamond', subcategory: 'Pendants', image: '/images/showcase/diamond_pendant_1.webp', description: 'Graceful heart-shaped diamond pendant.' },
  { id: 'gb1', name: 'Temple Gold Bangles', category: 'Gold', subcategory: 'Bangles', image: '/images/showcase/gold_bangle_1.webp', description: 'Traditional gold bangles with matte finish.' },
  { id: 'sr1', name: 'Sapphire Silver Ring', category: 'Silver', subcategory: 'Rings', image: '/images/showcase/silver_ring_1.webp', description: 'Sterling silver ring with a deep blue sapphire.' },
];
