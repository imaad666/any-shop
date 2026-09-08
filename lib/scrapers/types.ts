export type Brand = "ZARA" | "HM";

export interface Product {
  id: string;
  brand: Brand;
  name: string;
  price: string;
  currency?: string;
  imageUrl: string;
  productUrl: string;
}

export interface ScraperResult {
  brand: Brand;
  products: Product[];
  error?: string;
}

export interface Scraper {
  brand: Brand;
  search(term: string): Promise<ScraperResult>;
}
