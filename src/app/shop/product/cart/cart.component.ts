import { Component, OnInit, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../../shared/classes/product';
import { CartItem } from '../../../shared/classes/cart-item';
import { ProductsService } from '../../../shared/services/products.service';
import { CartService } from '../../../shared/services/cart.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public cartItems          :   Observable<CartItem[]> = of([]);
  public shoppingCartItems  :   CartItem[] = [];
 
  constructor(private toastrService: ToastrService, 
    @Inject(ProductsService) public productsService: ProductsService, private cartService: CartService) {}

  ngOnInit() {
  	this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  // If item is aleready added
  public hasItem(product: Product): boolean {
    const item = this.shoppingCartItems.find(item => item.product.id === product.id);
    return item !== undefined;
  }
 
  // Increase Product Quantity
  public increment(product: any, quantity: number = 1) {
    if (this.hasItem(product)) {
        var item = this.shoppingCartItems.filter(item => item.product.id === product.id)[0];
        const index = this.shoppingCartItems.indexOf(item);
        let qty = this.shoppingCartItems[index].quantity + quantity;
        let stock = this.shoppingCartItems[index].product.stock;
        if (qty == 0) return false;
        if(stock < qty) {
           this.toastrService.error('You can not add more items than available. In stock '+ stock +' items.'); // toasr services
        } else {
           this.cartService.addToCart(product, quantity);
        }
    }
  }
  
  // Decrease Product Quantity
  public decrement(product: any, quantity: number = -1) {
    if (this.hasItem(product)) {
        var item = this.shoppingCartItems.filter(item => item.product.id === product.id)[0];
        const index = this.shoppingCartItems.indexOf(item);
        let qty = this.shoppingCartItems[index].quantity + quantity;
        let stock = this.shoppingCartItems[index].product.stock;
        if (qty == 0) return false;
        if(stock < qty) {
           this.toastrService.error('You can not add more items than available. In stock '+ stock +' items.'); // toasr services
        } else {
           this.cartService.addToCart(product, quantity);
        }
    }
  }
  
  // Get Total
  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }
  
  // Remove cart items
  public removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

}
