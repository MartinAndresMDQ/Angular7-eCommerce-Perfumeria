import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../../../../shared/classes/product';
import { CartItem } from '../../../../shared/classes/cart-item';
import { ProductsService } from '../../../../shared/services/products.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { CartService } from '../../../../shared/services/cart.service';
import { Observable, of } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-product-accordian',
  templateUrl: './product-accordian.component.html',
  styleUrls: ['./product-accordian.component.scss']
})
export class ProductAccordianComponent implements OnInit {

  public product: Product;
  // public products: Product[] = [];
  public cartItems: Observable<CartItem[]> = of([]);
  public shoppingCartItems: CartItem[] = [];
  public counter: number = 1;
  public selectedSize: any = '';

  //Get Product By Id
  constructor(private route: ActivatedRoute, private router: Router, private toastrService: ToastrService,
    @Inject(ProductsService) public productsService: ProductsService, 
    private storage: AngularFireStorage,
    private wishlistService: WishlistService,
    private cartService: CartService) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.productsService.getProduct(id).subscribe(product => {
        this.product = product;
        // console.log(product)
        // for (let i in this.product.pictures) {
        //   (<any>this.product.pictures[i]) = this.getImage(this.product.pictures[i])
        // }
      })
    });
  }
  
  // getImage(image) {
  //   const ref = this.storage.ref(image);
  //   let profileUrl: Observable<string | null>;
  //   profileUrl = ref.getDownloadURL();
  //   return profileUrl;
  //   // this.imagenes.push(profileUrl);
  // }

  ngOnInit() {
    // this.productsService.getProducts().subscribe(product => this.products = product);
    this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(shoppingCartItems => this.shoppingCartItems = shoppingCartItems);
  }

  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
  };

  public slideNavConfig = {
    vertical: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slick',
    arrows: false,
    dots: false,
    focusOnSelect: true
  }

  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
      this.counter -= 1;
    }
  }

  // If item is aleready added
  public hasItem(product: Product): boolean {
    const item = this.shoppingCartItems.find(item => item.product.id === product.id);
    return item !== undefined;
  }

  // Add to cart
  public addToCart(product: Product, quantity) {
    if (quantity == 0) return false;
    if (this.hasItem(product)) {
      var item = this.shoppingCartItems.filter(item => item.product.id === product.id)[0];
      const index = this.shoppingCartItems.indexOf(item);
      let qty = this.shoppingCartItems[index].quantity + parseInt(quantity);
      let stock = this.shoppingCartItems[index].product.stock;
      if (stock < qty) {
        this.toastrService.error('You can not add more items than available. In stock ' + stock + ' items.'); // toasr services
      } else {
        this.cartService.addToCart(product, parseInt(quantity));
        this.toastrService.success('This product has been added to cart.');
      }
    } else {
      if (product.stock < quantity) {
        this.toastrService.error('You can not add more items than available. In stock ' + product.stock + ' items.'); // toasr services
      } else {
        this.cartService.addToCart(product, parseInt(quantity));
        this.toastrService.success('This product has been added to cart.');
      }
    }
  }

  // Add to cart
  public buyNow(product: Product, quantity) {
    if (quantity > 0)
      this.cartService.addToCart(product, parseInt(quantity));
    this.router.navigate(['/home/checkout']);
  }

  // Add to wishlist
  public addToWishlist(product: Product) {
    this.wishlistService.addToWishlist(product);
  }

  // Change variant
  public changeSizeVariant(variant) {
    this.selectedSize = variant;
  }



}
