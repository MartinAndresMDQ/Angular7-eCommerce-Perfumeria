import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../classes/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  
  // wishlist array
  public wishlistProducts: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public wishlistProduct: Product[] = [];

  // Initialize 
  constructor(private toastrService: ToastrService) { 
       this.wishlistProducts.subscribe(products => this.wishlistProduct = products);
  }

  // Get  wishlist Products
  public getProducts(): Observable<Product[]> {
    return this.wishlistProducts.asObservable();
  }

  // If item is aleready added In wishlist
  public hasProduct(product: Product): boolean {
    const item = this.wishlistProduct.find(item => item.id === product.id);
    return item !== undefined;
  }

  // Add to wishlist
  public addToWishlist(product: Product): Product | boolean {
    var item: Product | boolean = false;
    if (this.hasProduct(product)) {
      item = this.wishlistProduct.filter(item => item.id === product.id)[0];
      const index = this.wishlistProduct.indexOf(item);
    } else {
      this.wishlistProduct.push(product);
    }
      this.toastrService.success('This product added to Wishlist.'); // toasr services
      return item;
  }

  // Removed Product
  public removeFromWishlist(product: Product) {
    if (product === undefined) { return; }
    const index = this.wishlistProduct.indexOf(product);
    this.wishlistProduct.splice(index, 1);
  }
  

}
