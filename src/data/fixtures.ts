import { Product, Recipe, JournalEntry } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'vooc-001',
    slug: 'coratina-evoo-2025',
    name: 'Coratina Extra Virgin Olive Oil',
    origin: 'Puglia, Italy',
    countryCode: 'IT',
    harvestYear: '2025',
    harvesDate: 'October 2024',
    polyphenols: 620,
    price: 32.00,
    images: ['https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800'],
    category: 'olive-oil',
    intensity: 'robust',
    description: 'Our award-winning Coratina is high in polyphenols and low in acidity. It offers notes of green almond, herbaceous tomato leaf, and a spicy, peppery finish typical of a robust Italian oil.',
    tastingNotes: ['Herbaceous', 'Green Almond', 'Spicy Finish'],
    pairings: ['Grilled Steaks', 'Bitter Greens', 'Roasted Tomatoes'],
    size: '375ml',
    stock: 50
  },
  {
    id: 'vooc-002',
    slug: 'traditional-dark-balsamic',
    name: '18-Year Aged Traditional Dark Balsamic',
    origin: 'Modena, Italy',
    countryCode: 'IT',
    harvestYear: 'N/A',
    harvesDate: 'N/A',
    polyphenols: 0,
    price: 28.00,
    images: ['https://images.unsplash.com/photo-1596431713028-eb761665a58d?auto=format&fit=crop&q=80&w=800'],
    category: 'balsamic',
    description: 'A rich, thick, and velvety balsamic aged in wood barrels in Modena. Perfectly balanced sweetness and acidity.',
    tastingNotes: ['Velvety', 'Oak', 'Caramel'],
    pairings: ['Strawberries', 'Aged Cheeses', 'Vanilla Gelato'],
    size: '375ml',
    stock: 120
  },
  {
    id: 'vooc-003',
    slug: 'arbiquina-evoo-2025',
    name: 'Arbequina Extra Virgin Olive Oil',
    origin: 'Seville, Spain',
    countryCode: 'ES',
    harvestYear: '2025',
    harvesDate: 'November 2024',
    polyphenols: 380,
    price: 30.00,
    images: ['https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800'],
    category: 'olive-oil',
    intensity: 'mild',
    description: 'A smooth, buttery, and approachable oil with notes of fresh apple and floral undertones. Ideal for baking and delicate dressings.',
    tastingNotes: ['Apple', 'Buttery', 'Floral'],
    pairings: ['White Fish', 'Leafy Salads', 'Lemon Cake'],
    size: '375ml',
    stock: 85
  },
  {
    id: 'vooc-004',
    slug: 'picual-evoo-2025',
    name: 'Picual Extra Virgin Olive Oil',
    origin: 'Jaén, Spain',
    countryCode: 'ES',
    harvestYear: '2025',
    harvesDate: 'October 2024',
    polyphenols: 540,
    price: 32.00,
    images: ['https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=800'],
    category: 'olive-oil',
    intensity: 'medium',
    description: 'The Picual variety is known for its stability and high polyphenol count. Expect notes of tomato leaf, artichoke, and a clean, peppery finish.',
    tastingNotes: ['Tomato Leaf', 'Artichoke', 'Clean Pepper'],
    pairings: ['Gazpacho', 'Roasted Chicken', 'Fresh Pasta'],
    size: '375ml',
    stock: 40
  }
];

export const RECIPES: Recipe[] = [
  {
    id: 'r1',
    slug: 'lemon-herb-roasted-chicken',
    title: 'Lemon Herb Roasted Chicken',
    description: 'A simple, classic roast chicken infused with the flavors of Arbequina olive oil and fresh rosemary.',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&q=80&w=800',
    prepTime: '15 min',
    cookTime: '1 hour',
    servings: 4,
    ingredients: ['1 whole chicken', '1/4 cup Arbequina EVOO', '2 lemons', 'Fresh rosemary', 'Sea salt'],
    instructions: ['Preheat oven to 400F.', 'Rub oil under the skin.', 'Roast until golden.'],
    category: 'Main Course'
  }
];

export const JOURNAL: JournalEntry[] = [
  {
    id: 'j1',
    slug: 'the-harvest-2025-report',
    title: 'The Harvest 2025 Report',
    excerpt: 'Deep dive into why this year\'s Italian harvest is the best we\'ve seen in a decade.',
    date: 'March 12, 2024',
    image: 'https://images.unsplash.com/photo-1464639351491-a172c2aa2911?auto=format&fit=crop&q=80&w=800',
    category: 'Harvest News',
    author: 'VOOC Team'
  }
];
