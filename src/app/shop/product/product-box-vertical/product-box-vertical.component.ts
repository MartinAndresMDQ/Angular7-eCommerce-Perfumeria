import { Component, Input, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../../shared/classes/product';
import { CartItem } from '../../../shared/classes/cart-item';
import { ProductsService } from '../../../shared/services/products.service';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { CartService } from '../../../shared/services/cart.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-product-box-vertical',
  templateUrl: './product-box-vertical.component.html',
  styleUrls: ['./product-box-vertical.component.scss']
})
export class ProductBoxVerticalComponent implements OnInit {

  @Input() product: Product;

  public cartItems          :   Observable<CartItem[]> = of([]);
  public shoppingCartItems  :   CartItem[] = [];
  public variantImage       :   any = ''; 

  constructor(private router: Router, private toastrService: ToastrService, 
    @Inject(ProductsService) public productsService: ProductsService, private wishlistService: WishlistService,
    private cartService: CartService) { 
  }

  ngOnInit() { 
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

  // Add to compare
  public addToCompare(product: Product) {
     this.productsService.addToCompare(product);
  }

  // Add to wishlist
  public addToWishlist(product: Product) {
     this.wishlistService.addToWishlist(product);
  }

  // Change variant images
  public changeVariantImage(image) {
     this.variantImage = image;
  }  

}
