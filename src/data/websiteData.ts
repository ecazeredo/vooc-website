export interface Product {
  id: string;
  name: string;
  category: 'evoo' | 'flavored-oil' | 'white-balsamic' | 'dark-balsamic' | 'specialty';
  tastingNote: string;
  tastesLike: string[];
  pairings: string[];
  uses: string[];
  limited?: boolean;
}

export interface Pairing {
  id: string;
  oilId: string;
  balsamicId: string;
  note: string;
}

export const CATEGORY_INTROS = {
  evoo: "Our Extra Virgin Olive Oil selection rotates twice a year, strictly following the hemisphere harvest cycles. We currently source from the world's most awarded groves to ensure you are tasting oil at its peak life force.",
  'flavored-oil': "Crushed alongside fresh fruit and herbs at the mill, not infused after pressing. The flavor is locked into the oil, creating a seamless, bright, and authentic profile that never tastes artificial.",
  'white-balsamic': "Aged in wooden barrels but without the caramelization of the dark varieties. These are crisp, bright, and intensely fruity—perfect for lighter dressings, cocktails, and seafood.",
  'dark-balsamic': "Traditional, rich, and velvety. These vinegars are caramelized and aged in a sequence of wooden barrels (oak, chestnut, cherry, mulberry, ash) to create a complex, multi-layered sweetness.",
  'specialty': "Rare finds and high-intensity oils. These are our most exclusive selections, often produced in tiny quantities. Perfect for the collector or the connoisseur looking for that ultimate finish."
};

export const PRODUCTS: Product[] = [
  // EVOO Representative
  {
    id: 'current-evoo',
    name: 'Current Season Extra Virgin Olive Oils',
    category: 'evoo',
    tastingNote: 'Our selection rotates twice yearly between the Northern and Southern hemispheres. Depending on the current lot, expect ranges from buttery and delicate to herbaceous and robustly peppery.',
    tastesLike: ['fresh-grass', 'artichoke', 'green-almond', 'pepper-finish'],
    pairings: ['tuscan-herb', 'lemon-balsamic'],
    uses: ['finishing-drizzle', 'dipping-bread', 'salad-base'],
  },
  // Flavored Oils
  {
    id: 'baklouti-green-chili',
    name: 'Baklouti Green Chili',
    category: 'flavored-oil',
    tastingNote: 'A fiery Tunisian crush that delivers a slow, building heat followed by the bright, clean flavor of green chilies. Exceptional for those who love a clean spice.',
    tastesLike: ['spicy', 'bright', 'vibrant'],
    pairings: ['peach-white-balsamic'],
    uses: ['marinating-shrimp', 'drizzling-over-pizza', 'spicy-stir-fry'],
  },
  {
    id: 'basil-oil',
    name: 'Basil Olive Oil',
    category: 'flavored-oil',
    tastingNote: 'Like walking through a sun-drenched herb garden. Thousands of fresh basil leaves are crushed with the olives to create an oil that is pure, aromatic, and deeply green.',
    tastesLike: ['herbal', 'sweet-basil', 'lush'],
    pairings: ['strawberry-balsamic'],
    uses: ['caprese-salad', 'finishing-tomato-soup', 'pesto-enhancement'],
  },
  {
    id: 'blood-orange-oil',
    name: 'Blood Orange Olive Oil',
    category: 'flavored-oil',
    tastingNote: 'The peel of the blood orange is crushed with the olive, releasing essential oils that are incredibly fragrant. It is sweet, zesty, and surprisingly versatile.',
    tastesLike: ['citrus', 'zesty', 'sweet'],
    pairings: ['dark-chocolate-balsamic', 'cranberry-pear-balsamic', 'espresso-balsamic'],
    uses: ['baking-cakes', 'duck-confit', 'roasted-beets'],
  },
  {
    id: 'garlic-oil',
    name: 'Garlic Olive Oil',
    category: 'flavored-oil',
    tastingNote: 'A culinary essential. Savory, pungent (in the best way), and smooth. It tastes like slow-roasted garlic cloves without the bitterness.',
    tastesLike: ['savory', 'pungent', 'warm'],
    pairings: ['fig-balsamic', 'pomegranate-balsamic', 'butter-oil'],
    uses: ['garlic-bread', 'roasted-potatoes', 'steak-finisher'],
  },
  {
    id: 'lemon-oil',
    name: 'Lemon Olive Oil',
    category: 'flavored-oil',
    tastingNote: 'Bright, zesty, and refreshing. The essential oils from the lemon zest provide a clean citrus lift that pairs beautifully with almost any balsamic.',
    tastesLike: ['citrus', 'zesty', 'clean'],
    pairings: ['blueberry-balsamic', 'strawberry-balsamic', 'raspberry-balsamic', 'wild-mushroom-sage'],
    uses: ['grilled-salmon', 'steamed-asperagus', 'citrus-vinaigrette'],
  },
  {
    id: 'tuscan-herb',
    name: 'Tuscan Herb Olive Oil',
    category: 'flavored-oil',
    tastingNote: 'Our most popular flavored oil. A classic blend of dried basil, marjoram, garlic, and rosemary. It is the definitive Mediterranean flavor profile.',
    tastesLike: ['herbaceous', 'savory', 'earthy'],
    pairings: ['lemon-white-balsamic', 'peach-white-balsamic'],
    uses: ['bread-dipping', 'marinating-chicken', 'roasted-vegetables'],
  },
  // White Balsamics
  {
    id: 'honey-ginger-white',
    name: 'Honey Ginger White Balsamic',
    category: 'white-balsamic',
    tastingNote: 'A beautiful balance of sweet honey and the gentle, warming snap of ginger. It is bright, clean, and has a lovely floral finish.',
    tastesLike: ['sweet', 'gingery', 'floral'],
    pairings: ['persian-lime-oil', 'lemon-oil'],
    uses: ['asian-slaws', 'glazing-salmon', 'fruit-salads'],
  },
  {
    id: 'peach-white-balsamic',
    name: 'Peach White Balsamic',
    category: 'white-balsamic',
    tastingNote: 'Tastes like a sun-ripened orchard peach at the peak of summer. It is juicy, thick, and incredibly fragrant.',
    tastesLike: ['juicy', 'orchard-fresh', 'summery'],
    pairings: ['tuscan-herb', 'baklouti-green-chili'],
    uses: ['glazing-pork', 'summer-salads', 'sparkling-water-spritzer'],
  },
  {
    id: 'sicilian-lemon-white',
    name: 'Sicilian Lemon White Balsamic',
    category: 'white-balsamic',
    tastingNote: 'Crisp and sharp with a remarkably clean lemon finish. It is less sweet than many balsamics, making it ideal for those who love acidity.',
    tastesLike: ['crisp', 'tart', 'refreshing'],
    pairings: ['tuscan-herb', 'wild-mushroom-sage', 'basil-oil'],
    uses: ['seafood-marinades', 'kale-salad', 'macerating-berries'],
  },
  // Dark Balsamics
  {
    id: 'fig-balsamic',
    name: 'Fig Dark Balsamic',
    category: 'dark-balsamic',
    tastingNote: 'Rich, jammy, and incredibly dense. It tastes like fresh figs reduced to a thick, velvety syrup. A powerhouse of flavor.',
    tastesLike: ['jammy', 'dense', 'earthy'],
    pairings: ['garlic-oil', 'current-evoo'],
    uses: ['cheese-boards', 'prosciutto-wrapped-melons', 'roasted-pork'],
  },
  {
    id: 'strawberry-balsamic',
    name: 'Strawberry Dark Balsamic',
    category: 'dark-balsamic',
    tastingNote: 'Bright strawberry sweetness underpinned by the complexity of aged balsamic. It is like a gourmet fruit reduction in a bottle.',
    tastesLike: ['sweet', 'berry-forward', 'lush'],
    pairings: ['basil-oil', 'lemon-oil'],
    uses: ['spinach-salad-with-feta', 'drizzling-over-vanilla-ice-cream'],
  },
  {
    id: 'traditional-balsamic',
    name: 'Traditional Dark Balsamic',
    category: 'dark-balsamic',
    tastingNote: 'The gold standard. Aged up to 18 years, it is thick, syrupy, and perfectly balanced between sweetness and acidity.',
    tastesLike: ['velvety', 'balanced', 'classic'],
    pairings: ['any-evoo'],
    uses: ['everywhere', 'finishing-risotto', 'strawberry-pairing'],
  },
  {
    id: 'denissimo',
    name: 'Denissimo',
    category: 'dark-balsamic',
    tastingNote: 'Our most exclusive offering. Aged for over 25 years. It is incredibly thick, with notes of dried plum, raisins, and cherry wood.',
    tastesLike: ['antique-wood', 'dried-fruit', 'syrupy'],
    pairings: ['none-needed'],
    uses: ['one-drop-at-a-time', 'aged-parmesan', 'vanilla-bean-gelato'],
    limited: true,
  },
  // Specialty
  {
    id: 'white-truffle-oil',
    name: 'White Truffle Oil',
    category: 'specialty',
    tastingNote: 'Intense, earthy, and unmistakably aromatic. A tiny amount transforms a dish into a five-star experience.',
    tastesLike: ['earthy', 'musky', 'luxurious'],
    pairings: ['none'],
    uses: ['truffle-fries', 'mushroom-risotto', 'poached-eggs'],
    limited: true,
  },
];

export const PAIRINGS: Pairing[] = [
  { id: '1', oilId: 'tuscan-herb', balsamicId: 'sicilian-lemon-white', note: 'Bright citrus and herbal lift, ideal over grilled chicken or a crisp garden salad.' },
  { id: '2', oilId: 'persian-lime-oil', balsamicId: 'honey-ginger-white', note: 'A zesty, Asian-inspired punch that makes for an incredible salmon marinade.' },
  { id: '3', oilId: 'basil-oil', balsamicId: 'strawberry-balsamic', note: 'The sweetness of the berry meets the lush herb for a sophisticated salad profile.' },
  { id: '4', oilId: 'blood-orange-oil', balsamicId: 'dark-chocolate-balsamic', note: 'Tastes like a gourmet truffle. Incredible over vanilla bean gelato or fresh fruit.' },
  { id: '5', oilId: 'garlic-oil', balsamicId: 'fig-balsamic', note: 'Savory and sweet complexity. Perfect for glazing a pork tenderloin or finishing a roast.' },
];

export const REVIEWS = [
  { text: "The first time I tasted their Coratina, I realized I had never actually tasted real olive oil before. It’s a revelation.", author: "Sarah K.", city: "Kitsilano" },
  { text: "The staff here are so generous with their time and knowledge. It’s like a mini-vacation to the Mediterranean every time I visit.", author: "Michael T.", city: "Vancouver" },
  { text: "Their fig balsamic is liquid gold. I put it on everything from salads to ice cream.", author: "Elena R.", city: "North Vancouver" },
];

export const STORE_INFO = {
  address: "2571 West Broadway, Vancouver, BC",
  phone: "(604) 737-7171",
  phoneLink: "tel:6047377171",
  email: "info@vooc.ca",
  hours: [
    { days: "Tuesday – Saturday", time: "11:00 AM – 5:00 PM" },
    { days: "Sunday – Monday", time: "Closed" },
  ],
  holidayHours: [
    { date: "Dec 24", time: "11:00 AM – 3:00 PM" },
    { date: "Dec 25 – 29", time: "Closed" },
    { date: "Dec 30", time: "11:00 AM – 5:00 PM" },
    { date: "Dec 31", time: "11:00 AM – 3:00 PM" },
    { date: "Jan 1", time: "Closed" },
  ],
  press: [
    { source: "Vancouver Sun", quote: "How a Vancouver entrepreneur got a crush on olive oil.", url: "https://vancouversun.com" },
    { source: "The Globe and Mail", quote: "Five expert tips for discerning high-quality olive oils", url: "https://theglobeandmail.com" },
    { source: "Westender", quote: "Epicureans delight in olive oil co.", url: "#" },
    { source: "KitsConnect.com", quote: "The Vancouver Olive Oil Company and Tasting Room", url: "#" },
  ]
};
