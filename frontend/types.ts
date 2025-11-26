export interface Product {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  category: string;
  rating: number;
  image: string;
  isNew?: boolean;
  discount?: number;
  description?: string;
  sku?: string;
  stock?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating';