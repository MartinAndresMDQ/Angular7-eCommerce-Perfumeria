import { Component, OnInit, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../../../shared/classes/product';
import { CartItem } from '../../../../shared/classes/cart-item';
import { ProductsService } from '../../../../shared/services/products.service';
import { CartService } from '../../../../shared/services/cart.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.scss']
})
export class QuickViewComponent implements OnInit {
  
  public products           :   Product[] = [];
  public cartItems          :   Observable<CartItem[]> = of([]);
  public shoppingCartItems  :   CartItem[] = [];
  public counter            :   number = 1;
  public variantImage       :   any = '';
  public selectedColor      :   any = '';
  public selectedSize       :   any = '';
  
  constructor(@Inject(ProductsService) public productsService: ProductsService, private toastrService: ToastrService,
  	private cartService: CartService) { }

  ngOnInit() {
  	this.productsService.items.subscribe(product => this.products = product);
    this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  public increment() { 
      this.counter += 1;
  }

  public decrement() {
      if(this.counter >1){
          this.counter -= 1;
      }
  }
  
   // Change variant images
  public changeVariantImage(image) {
     this.variantImage = image;
     this.selectedColor = image;
  }

  // Change variant
  public changeVariantSize(variant) {
     this.selectedSize = variant;
  }

   // If item is aleready added
  public hasItem(product: Product): boolean {
    const item = this.shoppingCartItems.find(item => item.product.id === product.id);
    return item !== undefined;
  }

   public addToCart(product: Product, quantity) {
    if (quantity == 0) return false;
    if (this.hasItem(product)) {
        var item = this.shoppingCartItems.filter(item => item.product.id === product.id)[0];
        const index = this.shoppingCartItems.indexOf(item);
        let qty = this.shoppingCartItems[index].quantity + parseInt(quantity);
        let stock = this.shoppingCartItems[index].product.stock;
        if(stock < qty) {
           this.toastrService.error('You can not add more items than available. In stock '+ stock +' items.'); // toasr services
        } else {
           this.cartService.addToCart(product, parseInt(quantity));
           this.toastrService.success('This product has been added to cart.');
        }
    } else {
      if(product.stock < quantity) {
        this.toastrService.error('You can not add more items than available. In stock '+ product.stock +' items.'); // toasr services
      } else {
        this.cartService.addToCart(product, parseInt(quantity));
        this.toastrService.success('This product has been added to cart.');
      }
    }
  }

}
