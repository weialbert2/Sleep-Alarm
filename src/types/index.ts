export type BadgeColor = "brand" | "dark" | "alert" | "outline";

export interface ProductVariant {
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number | null;
  sku?: string;
  available: boolean;
  color?: string;
}

export interface Product {
  id: string;
  name: string;
  handle: string;
  sku?: string;
  price: number;
  compareAtPrice: number | null;
  badge?: string;
  badgeColor?: BadgeColor;
  shortDescription: string;
  description?: string;
  images: string[];
  features?: string[];
  tags?: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  category: "alarm" | "accessory" | "bundle" | "digital" | "addon";
  variants?: ProductVariant[];
  includes?: string[];
  weight?: string;
}

export interface Review {
  id: string;
  author: string;
  location?: string;
  rating: number;
  title?: string;
  body: string;
  date: string;
  verified: boolean;
  photo?: string;
}

export interface CartItem {
  product: Product;
  variantId?: string;
  quantity: number;
  price: number;
}

export interface FAQ {
  question: string;
  answer: string;
}
