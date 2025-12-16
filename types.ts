export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  weight?: string;
  purity?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isLowStock?: boolean;
  rating?: number;
  reviews?: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

export interface FilterState {
  category: string[];
  priceRange: [number, number];
  purity: string[];
}
