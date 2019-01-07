// Product Colors
export type ProductColor = 'white' | 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';

// Product Size
export type ProductSize = 'M' | 'L' | 'XL';

// Product Tag
export type ProductTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';

export type Category = 'Perfume' | 'Ropa' | 'Otro';

export type Gender = 'Hombre' | 'Mujer' | 'Ambos' ;
export interface Type {
  id?: string;
  description?: string;
};

export interface Make {
  id?: string;
  description?: string;
}

// Product
export interface Product {
  id?: string;
  name?: string;
  price?: number;
  salePrice?: number;
  discount?: number;
  pictures?: string[];
  shortDetails?: string;
  description?: string;
  stock?: number;
  new?: boolean;
  sale?: boolean;
  category?: Category;
  colors?: ProductColor[];
  size?: ProductTags[];
  tags?: ProductSize[];
  variants?: any[];
  
  code?: string;
  content?: number;
  show?: boolean;
  gender?: Gender;
  type?: Type;
  make?: Make;

}

// Color Filter
export interface ColorFilter {
  color?: ProductColor;
}

// Tag Filter
export interface TagFilter {
  tag?: ProductTags
}