export interface Product {
  id: string;
  slug: string;
  name: string;
  origin: string;
  countryCode: string;
  harvestYear: string;
  harvesDate: string;
  polyphenols: number;
  price: number;
  images: string[];
  category: 'olive-oil' | 'balsamic' | 'gift-sets' | 'pantry' | 'accessories';
  intensity?: 'mild' | 'medium' | 'robust';
  description: string;
  tastingNotes: string[];
  pairings: string[];
  size: string;
  stock: number;
}

export interface Recipe {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  category: string;
}

export interface JournalEntry {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  author: string;
}
