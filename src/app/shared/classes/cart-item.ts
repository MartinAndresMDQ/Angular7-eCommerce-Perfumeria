import { Product } from './product';

// cart items
export interface CartItem {
    product?: Product;
    quantity?: number;
    price?: number;
    salePrice?: number;
    discount?: number;
}