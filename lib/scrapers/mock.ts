import type { Product } from "./types";

// Phase A placeholder data — lets the whole cache/pending/UI pipeline be built
// and deployed before a ScrapingBee key exists. Replaced in Phase B by real
// scraped results (see lib/scrapers/index.ts).
const MOCK_PRODUCTS: Product[] = [
  {
    id: "zara-sweater-1",
    brand: "ZARA",
    name: "Ribbed Knit Sweater",
    price: "₹2,990",
    imageUrl: "https://picsum.photos/seed/zara-sweater-1/600/800",
    productUrl: "https://www.zara.com/in/en/",
  },
  {
    id: "zara-jeans-1",
    brand: "ZARA",
    name: "Straight Fit Jeans",
    price: "₹3,590",
    imageUrl: "https://picsum.photos/seed/zara-jeans-1/600/800",
    productUrl: "https://www.zara.com/in/en/",
  },
  {
    id: "zara-jacket-1",
    brand: "ZARA",
    name: "Oversized Denim Jacket",
    price: "₹4,990",
    imageUrl: "https://picsum.photos/seed/zara-jacket-1/600/800",
    productUrl: "https://www.zara.com/in/en/",
  },
  {
    id: "zara-dress-1",
    brand: "ZARA",
    name: "Satin Midi Dress",
    price: "₹4,290",
    imageUrl: "https://picsum.photos/seed/zara-dress-1/600/800",
    productUrl: "https://www.zara.com/in/en/",
  },
  {
    id: "zara-tshirt-1",
    brand: "ZARA",
    name: "Cotton T-Shirt",
    price: "₹1,290",
    imageUrl: "https://picsum.photos/seed/zara-tshirt-1/600/800",
    productUrl: "https://www.zara.com/in/en/",
  },
  {
    id: "hm-sweater-1",
    brand: "HM",
    name: "Chunky Knit Sweater",
    price: "₹2,499",
    imageUrl: "https://picsum.photos/seed/hm-sweater-1/600/800",
    productUrl: "https://www2.hm.com/en_in/",
  },
  {
    id: "hm-jeans-1",
    brand: "HM",
    name: "Slim Fit Jeans",
    price: "₹2,999",
    imageUrl: "https://picsum.photos/seed/hm-jeans-1/600/800",
    productUrl: "https://www2.hm.com/en_in/",
  },
  {
    id: "hm-jacket-1",
    brand: "HM",
    name: "Bomber Jacket",
    price: "₹3,999",
    imageUrl: "https://picsum.photos/seed/hm-jacket-1/600/800",
    productUrl: "https://www2.hm.com/en_in/",
  },
  {
    id: "hm-dress-1",
    brand: "HM",
    name: "Wrap Midi Dress",
    price: "₹2,799",
    imageUrl: "https://picsum.photos/seed/hm-dress-1/600/800",
    productUrl: "https://www2.hm.com/en_in/",
  },
  {
    id: "hm-tshirt-1",
    brand: "HM",
    name: "Relaxed Fit T-Shirt",
    price: "₹899",
    imageUrl: "https://picsum.photos/seed/hm-tshirt-1/600/800",
    productUrl: "https://www2.hm.com/en_in/",
  },
];

export function getMockProducts(term: string): Product[] {
  const needle = term.toLowerCase();
  return MOCK_PRODUCTS.filter((product) => product.name.toLowerCase().includes(needle));
}
