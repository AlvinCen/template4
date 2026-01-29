export enum ProductCategory {
  AYAM = 'Ayam',
  PUYUH = 'Puyuh',
  AVIARY = 'Burung/Aviary',
  SUGAR_GLIDER = 'Sugar Glider',
  KELINCI = 'Kelinci',
  AKSESORIS = 'Aksesoris'
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  priceRange: string;
  description: string;
  shopeeUrl: string; // If empty, disabled
  imagePlaceholder: string;
  isBestSeller?: boolean;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface FighterBrand {
  name: string;
  role: string;
  description: string;
}

export interface Partner {
  name: string;
  logoText: string;
  description: string;
  url: string | null;
  isAvailable: boolean;
  type: 'Marketplace' | 'Procurement' | 'Social';
}

export interface FaqItem {
  question: string;
  answer: string;
}