export interface BaseProps {
  size: string;
  children: React.ReactNode;
}

export interface ItemProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
  isDeleted: boolean;
}

export interface HookProps {
  [key: string]: number;
}
