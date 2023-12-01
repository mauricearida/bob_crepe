const appetizers = [
  {
    title: "Slat and Pepper Wings",
    price: "$12",
  },
  {
    title: "Buffalo Chicken wings",
    price: "$12",
  },
  {
    title: "Barbecue Chicken wings",
    price: "$12",
  },
  {
    title: "Lemon Pepper Wings",
    price: "$12",
    tags: "Lemon zest and black pepper",
  },
  {
    title: "Sweet Chili Wings",
    price: "$12",
  },
  {
    title: "Honey BBQ Wings",
    price: "$12",
  },
  {
    title: "Chicken tenders",
    price: "$12",
  },
  {
    title: "Buffalo Chicken tenders",
    price: "$12",
  },
  {
    title: "Chicken Quesadila",
    price: "$14",
    tags: "Sour cream and salsa",
  },
  {
    title: "Salsa and Chips",
    price: "$9",
    tags: "Pico de Gallo, tomato, onion, cilantro, salt, and pepper",
  },
  {
    title: "Mozarella Sticks",
    price: "$9",
  },
  {
    title: "Fried Calamari",
    price: "$14",
    tags: "Spicy mayo and marinara sauce",
  },
  {
    title: "Mussels",
    price: "$16",
    tags: "White wine, lemon and crostini",
  },
  {
    title: "Hummus",
    price: "$8",
  },
  {
    title: "Babba Ganoush",
    price: "$8",
  },
  {
    title: "Nachos",
    price: "$15",
    tags: "black beans, cheese, Pico da Gallo, pickled onions, jalapenos, sour cream, cilantro&queso fresco",
  },
  {
    title: "Grilled Chicken",
    price: "$19",
  },
  {
    title: "Braised brisket",
    price: "$19",
  },
];
const entrees = [
  {
    title: "Crab Bisque (Soup)",
    price: "$10",
  },
  {
    title: "Fettucine Alfredo",
    price: "$22",
  },
  {
    title: "Fettucine Alfredo With Shrimp",
    price: "$28",
  },
  {
    title: "Shrimp Scampi",
    price: "$28",
  },
  {
    title: "Mussel Angel Hair",
    price: "$24",
    tags: "White wine, lemon, garlic, crostini",
  },
  {
    title: "Filet Mignon",
    price: "$34",
  },
  {
    title: "Korean Beef Tacos(2)",
    price: "$14",
    tags: "Flour tortillas, red cabbage, carrots, avocado, and sriracha crema",
  },
  {
    title: "Sweet and Sour Salmon",
    price: "$30",
    tags: "Grilled salmon over rice topped with sweet chili sauce",
  },
  {
    title: "Grilled Lamb Shish Kebob Over Rice",
    price: "$28",
  },
  {
    title: "Grilled Chicken Kebob Over Rice",
    price: "$26",
  },
  {
    title: "Grilled Leg of Lamb",
    price: "$30",
    tags: "serves with mashed potatoes",
  },
  {
    title: "Marisco Catalan",
    price: "$34",
    tags: "Mussels, clams, salmon, shrimp, and scallops ina creamy saffron sauce",
  },
  {
    title: "Chicken & shrimp Alfredo",
    price: "$36",
  },
  {
    title: "Salmon Alfredo",
    price: "$35",
  },
  {
    title: "Lamb Chop",
    price: "$36",
  },
  {
    title: "Chicken Alfredo",
    price: "$26",
  },
];
const wrapsAndBurgersAndFries = [
  {
    title: "French Fries",
    price: "$7",
  },
  {
    title: "Spanish Fries",
    price: "$10",
    tag: "Fried onions and green peppers",
  },
  {
    title: "Buffalo Chicken Wrap",
    price: "$14",
    tag: "lettuce, chicken and buffalo sauce in tortilla wrap",
  },
  {
    title: "Chicken Caesar Wrap",
    price: "$14",
    tag: "lettuce, chicken, caesar dressing in tortilla wrap",
  },
  {
    title: "Chicken Steak Wrap",
    price: "$14",
    tag: "Steak, onions and American cheese in tortilla wrap",
  },
  {
    title: "Gourmet Cheeseburger",
    price: "$16",
    tag: "lettuce, tomato, pickles, onions American cheese",
  },
  {
    title: "Salmon Burger",
    price: "$16",
    tag: "lettuce, tomato, onion and lemon aioli",
  },
  {
    title: "BBQ Ranch Burger",
    price: "$12",
    tag: "Crispy onion, cheddar cheese and BBQ ranch sauce",
  },
];
const salads = [
  {
    title: "house Salad",
    price: "$14",
    tag: "spring mix, tomato, cucumber, onion, avocado, olives and sherry honey vinaigrette",
  },
  {
    title: "Ceasar Salad",
    price: "$12",
  },
  {
    title: "Chicken Ceasar Salad",
    price: "$16",
  },
  {
    title: "Falafel Salad",
    price: "$14",
    tag: "spring mix, tomato, cucumber, radish, pickled onion, feta and tahini lemon dressing",
  },
];
const desserts = [
  {
    title: "Chocolate Mousse",
    price: "$10",
  },
  {
    title: "Baklava",
    price: "$8",
    tags: "Served with vanilla ice cream",
  },
  {
    title: "Tiramisu",
    price: "$10",
  },
  {
    title: "Chocolate Mousse Cake",
    price: "$10",
  },
];
const softBeverages = [
  {
    title: "Soda",
    price: "$5",
  },
  {
    title: "Water",
    price: "$5",
  },
];
const vangoCocktails = [
  {
    title: "Strawberry Lemonade",
    price: "$13",
    tags: "strawberry vodka, triple sec, lime juice, cranberry juice",
  },
  {
    title: "Hennessy Sidecar",
    price: "$14",
  },
  {
    title: "D'usse Sidecar",
    price: "$16",
  },
  {
    title: "Casamigos Reposado Lemondrop",
    price: "$16",
    tags: "casamigos repasado, triple sec, sour",
  },
  {
    title: "Strawberry Patron Margarita",
    price: "$15",
    tags: "patron, triple sec, sour, lime juice, strawberry mix",
  },
  {
    title: "Incredible Hulk",
    price: "$16",
    tags: "hennessy, hypnotic, pineapple",
  },
  {
    title: "Ciroc Punch",
    price: "$12",
    tags: "ciroc berry, orange juice, pineapple, grenadine",
  },
  {
    title: "Byblostini",
    price: "$12",
    tags: "vodka, peach schnapps, pineapple, mango, blue curaçao",
  },
  {
    title: "Vangotini",
    price: "$12",
    tags: "peach ciroc, mango",
  },
];
const BeersIPAS = [
  {
    title: "Dog Fish 60 Minute",
    price: "$8",
  },
  {
    title: "Miller Light",
    price: "$6",
  },
  {
    title: "Corona",
    price: "$7",
  },
  {
    title: "Stella Artois",
    price: "$7",
  },
  {
    title: "Heineken",
    price: "$7",
  },
];
const whiteWine = [
  {
    title: "Moscato",
    price: "$11",
  },
  {
    title: "Pinot Grigio",
    price: "$11",
  },
  {
    title: "Chardonnay",
    price: "$11",
  },
  {
    title: "Riesling",
    price: "$11",
  },
  {
    title: "Champagne",
    price: "$14",
  },
];
const redWine = [
  {
    title: "Merlot",
    price: "$11",
  },
  {
    title: "Pinot Noir",
    price: "$11",
  },
  {
    title: "Cabernet",
    price: "$11",
  },
];
const bottleService = [
  {
    title: "Dom Perignon",
    price: "$600",
  },
  {
    title: "Veulve Clicquot",
    price: "$300",
  },
  {
    title: "Moet",
    price: "$300",
  },
  {
    title: "Belaire",
    price: "$300",
  },
  {
    title: "Aces of Spades",
    price: "$950",
  },
  {
    title: "Aces of Spades Rose",
    price: "$1200",
  },
  {
    title: "Kettle One",
    price: "$300",
  },
  {
    title: "Grey Goose",
    price: "$300",
  },
  {
    title: "Patron Silver",
    price: "$300",
  },
  {
    title: "Casamigos Blanco",
    price: "$350",
  },
  {
    title: "Casamigos Reposado",
    price: "$400",
  },
  {
    title: "Don Julio",
    price: "$350",
  },
  {
    title: "Don Julio Reposado",
    price: "$400",
  },
  {
    title: "Don Julio 1942",
    price: "$750",
  },
  {
    title: "Clase Azul",
    price: "$700",
  },
  {
    title: "Hennessy VS",
    price: "$300",
  },
  {
    title: "Hennessy XO",
    price: "$500",
  },
  {
    title: "Remy Martin Vsop",
    price: "$300",
  },
  {
    title: "D'Usse",
    price: "$350",
  },
  {
    title: "Courvoisier",
    price: "$300",
  },
  {
    title: "Johnnie Walker Black",
    price: "$300",
  },
  {
    title: "Jameson",
    price: "$300",
  },
  {
    title: "Crown Royale",
    price: "$300",
  },
  {
    title: "Jack Daniels",
    price: "$300",
  },
  {
    title: "Wine Bottle",
    price: "$300",
  },
];
const HookahAndFlavors = [
  {
    title: "Regular Hookah",
    price: "$39",
  },
  {
    title: "Grapefruit Head",
    price: "$49",
  },
  {
    title: "Pineapple Head",
    price: "$65",
  },
  {
    title: "Candy Tips",
    price: "$5",
  },
  {
    title: "Apple/Mint/Peach",
    price: "$0",
  },
  {
    title: "Lemon/Lemon Mint",
    price: "$0",
  },
  {
    title: "Blue Dragon",
    price: "$0",
  },
  {
    title: "Strawberry/Strawberry Margarita",
    price: "$0",
  },

  {
    title: "Watermelon",
    price: "$0",
  },
  {
    title: "Guava",
    price: "$0",
  },
  {
    title: "White Grape/Iced Grapefruit Mint",
    price: "$0",
  },
  {
    title: "Sex on the beach",
    price: "$0",
  },
  {
    title: "Mighty Freeze",
    price: "$0",
  },
  {
    title: "Ice Berry",
    price: "$0",
  },
  {
    title: "Tangerine",
    price: "$0",
  },
  {
    title: "Passion Fruit",
    price: "$0",
  },
  {
    title: "Code 69",
    price: "$0",
  },
  {
    title: "Cherry",
    price: "$0",
  },
  {
    title: "Orange/Orange Mint",
    price: "$0",
  },
  {
    title: "Mango",
    price: "$0",
  },
  {
    title: "Blue Mist",
    price: "$0",
  },
  {
    title: "Blue Orange",
    price: "$0",
  },
  {
    title: "Blueberry Mint",
    price: "$0",
  },
  {
    title: "Love 66",
    price: "$0",
  },
  {
    title: "Hawaii",
    price: "$0",
  },
];

export default {
  appetizers,
  entrees,
  wrapsAndBurgersAndFries,
  salads,
  desserts,
  softBeverages,
  vangoCocktails,
  BeersIPAS,
  whiteWine,
  redWine,
  bottleService,
  HookahAndFlavors,
};
