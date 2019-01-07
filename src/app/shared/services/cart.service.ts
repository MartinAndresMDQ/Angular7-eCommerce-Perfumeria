import { Injectable } from '@angular/core';
import { Product } from '../classes/product';
import { CartItem } from '../classes/cart-item';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  
  // Array
  public cartItems  :  BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
  public observer   :  Subscriber<{}>;
  public product    :  CartItem[] = [];
  
  constructor(private toastrService: ToastrService) { 
      this.cartItems.subscribe(products => this.product = products);
  }
  
  // Get Products
  public getItems(): Observable<CartItem[]> {
    const itemsStream = new Observable(observer => {
      observer.next(this.product);
      observer.complete();
    });
    return <Observable<CartItem[]>>itemsStream;
  }
 
  // If item is aleready added
  public hasItem(product: Product): boolean {
    const item = this.product.find(item => item.product.id === product.id);
    return item !== undefined;
  }
  
  // Add to cart
  public addToCart(product: Product, quantity: number): CartItem | boolean {
    var item: CartItem | boolean = false;
    if (quantity === 0) return false;
    if (this.hasItem(product)) {
      item = this.product.filter(item => item.product.id === product.id)[0];
      const index = this.product.indexOf(item);
      let qty = this.product[index].quantity + quantity;
      let stock = this.product[index].product.stock;
      if(stock < qty) {
         return false
      } else {
         this.product[index].quantity = qty;
      }
    } else {
      if(product.stock < quantity) {
         return false
      } else {  
        item = {
          product: product,
          quantity: quantity
        };
        this.product.push(item);
      }
    }
    return item;
  }
  
  // Removed in cart
  public removeFromCart(item: CartItem) {
    if (item === undefined)  return false; 
      const index = this.product.indexOf(item);
      this.product.splice(index, 1);
  }
  
  // Total amount 
  public getTotalAmount(): Observable<number> {
    return this.cartItems.pipe(map((product: CartItem[]) => {
      return product.reduce((prev, curr: CartItem) => {
        return prev + curr.product.price * curr.quantity;
      }, 0);
    }));
  }


}