import { Component, OnInit, Input, Inject } from '@angular/core';
import { Product } from '../../../../shared/classes/product';
import { ProductsService } from '../../../../shared/services/products.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  // public products: Product[] = [];

  constructor(@Inject(ProductsService) public productsService: ProductsService, private storage: AngularFireStorage) { }

  ngOnInit() {
    // this.productsService.getProducts().subscribe(product => { this.products = product; for(let product of this.products){
    //   (<any>product).pictures[0]=this.getImage(product.pictures[0])
    // } });
  }

  // getImage(image) {
  //   const ref = this.storage.ref(image);
  //   let profileUrl: Observable<string | null>;
  //   profileUrl = ref.getDownloadURL();
  //   return profileUrl;
  //   // this.imagenes.push(profileUrl);
  // }

  // getImage(picture){
  //   console.log(picture)
  // }

}
