import { Component, OnInit, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from '../../../shared/classes/cart-item';
import { Product } from '../../../shared/classes/product';
import { ProductsService } from '../../../shared/services/products.service';
import { CartService } from '../../../shared/services/cart.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-compare',
  templateUrl: './product-compare.component.html',
  styleUrls: ['./product-compare.component.scss']
})
export class ProductCompareComponent implements OnInit {

  public product            :   Observable<Product[]> = of([]);
  public products           :   Product[] = [];
  public cartItems          :   Observable<CartItem[]> = of([]);
  public shoppingCartItems  :   CartItem[] = [];

  constructor(private toastrService: ToastrService, 
    @Inject(ProductsService) private productsService: ProductsService,private cartService: CartService) { }

  ngOnInit() {
  	this.product = this.productsService.getComapreProducts();
    this.product.subscribe(products => this.products = products);
    this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  // If item is aleready added
  public hasItem(product: Product): boolean {
    const item = this.shoppingCartItems.find(item => item.product.id === product.id);
    return item !== undefined;
  }

  // Add to cart
  public addToCart(product: Product,  quantity: number = 1) {
    if (quantity == 0) return false;
    if (this.hasItem(product)) {
        var item = this.shoppingCartItems.filter(item => item.product.id === product.id)[0];
        const index = this.shoppingCartItems.indexOf(item);
        let qty = this.shoppingCartItems[index].quantity + quantity;
        let stock = this.shoppingCartItems[index].product.stock;
        if(stock < qty) {
           this.toastrService.error('You can not add more items than available. In stock '+ stock +' items.'); // toasr services
        } else {
           this.cartService.addToCart(product,quantity);
           this.toastrService.success('This product has been added to cart.');
        }
    } else {
      if(product.stock < quantity) {
        this.toastrService.error('You can not add more items than available. In stock '+ product.stock +' items.'); // toasr services
      } else {
        this.cartService.addToCart(product,quantity);
        this.toastrService.success('This product has been added to cart.');
      }
    }
  }
  
  // Remove from compare list
  public removeItem(product: Product) {
    this.productsService.removeFromCompare(product);
  }

}
