import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../classes/product';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable()

export class ProductsService {

  public currency: string = 'ARS';
  public compareProducts: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public compareProduct: Product[] = [];

  // Initialize 
  // constructor(private http: Http,private toastrService: ToastrService) { 
  // }

  public itemsCollection: AngularFirestoreCollection<Product>;
  public items: Observable<Product[]>;
  constructor(
    // private http: Http,
    private storage: AngularFireStorage,
    private toastrService: ToastrService,
    public db: AngularFirestore
  ) {
    this.compareProducts.subscribe(products => this.compareProduct = products);
    this.itemsCollection = this.db.collection<Product>('Product');
    this.items = this.itemsCollection.valueChanges().pipe(map(data => {
      return this.cargarImagenes(data);
    }));
  }

  cargarImagenes(data){
    for (let i in data) {
      for (let u in data[i].pictures)
        (<any>data[i].pictures[u]) = this.getImage(data[i].pictures[u])
    }
    // console.log(data)
    return data;
  }

  getImage(image) {
    const ref = this.storage.ref(image);
    let profileUrl: Observable<string | null>;
    profileUrl = ref.getDownloadURL();
    return profileUrl;
    // this.imagenes.push(profileUrl);
  }
  // public getProducts(): Observable<any> {
  //   return this.itemsCollection.snapshotChanges()
  //     .pipe(
  //       map(actions => actions.map(a => {
  //         const data = a.payload.doc.data() as Product;
  //         const id = a.payload.doc.id;
  //         console.log({ id, ...data })
  //         return { id, ...data };
  //       }))
  //     );
  // }

  // Observable Product Array
  // private products(): Observable<Product[]> {
  //   return this.http.get('assets/data/products.json').map((res: any) => res.json())
  // }

  // Get Products
  // public getProducts(): Observable<Product[]> {
  //   return this.products();
  // }

  // Get Products By Id
  public getProduct(id: string): Observable<Product> {
    return this.itemsCollection.valueChanges().pipe(map(items => { return this.cargarImagenes([items.find((item: Product) => { return item.id === id; })])[0]; }));
  }

  // Get Products By category
  public getProductByCategory(category: string): Observable<Product[]> {
    return this.itemsCollection.valueChanges().pipe(map(items =>
      this.cargarImagenes(items.filter((item: Product) => {
        // console.log(item)
        if (category == 'all')
          return item
        else
          return item.gender === category || item.gender === 'Ambos';

      }))
    ));
  }

  // Get Products
  public getComapreProducts(): Observable<Product[]> {
    return this.compareProducts.asObservable();
  }

  // If item is aleready added In compare
  public hasProduct(product: Product): boolean {
    const item = this.compareProduct.find(item => item.id === product.id);
    return item !== undefined;
  }

  // Add to compare
  public addToCompare(product: Product): Product | boolean {
    var item: Product | boolean = false;
    if (this.hasProduct(product)) {
      item = this.compareProduct.filter(item => item.id === product.id)[0];
      const index = this.compareProduct.indexOf(item);
    } else {
      if (this.compareProduct.length < 4)
        this.compareProduct.push(product);
      else
        this.toastrService.warning('Maximum 4 products are in compare.'); // toasr services
    }
    return item;
  }

  // Removed Product
  public removeFromCompare(product: Product) {
    if (product === undefined) { return; }
    const index = this.compareProduct.indexOf(product);
    this.compareProduct.splice(index, 1);
  }


  public getProducts(): Observable<any> {
    return this.itemsCollection.snapshotChanges();
  }

  public addProduct(id: string, product: any): Promise<void> {
    if (id == null)
      id = this.db.createId();
    product.id = id;
    return this.itemsCollection.doc(id).set(Object.assign({}, JSON.parse(JSON.stringify(product))));
  }

}