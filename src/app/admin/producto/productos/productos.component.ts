// import { NbMenuService } from '@nebular/theme';
import { Component, ViewChild, TemplateRef, Inject } from '@angular/core';

// import { LocalDataSource } from 'ng2-smart-table';
// import { ProductoService } from '../../../@service/producto/producto.service';
// import { Product, Gender, Type, Make } from '../../../@model/product';
// import { TableGeneric } from '../../../@theme/components';
// import { NbDialogService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { Genero } from '../../../@model/genero';
// import { Marca } from '../../../@model/marca';
// import { Tipo } from '../../../@model/tipo';
// import { Image } from '../../../@model/image';
// import { UploadInput, UploadOutput } from 'ngx-uploader';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { TableGeneric } from 'src/app/shared/tableGeneric/tableGeneric.component';
import { Type, Make, Product } from 'src/app/shared/classes/product';
import { MarcaService } from 'src/app/shared/services/marca/marca.service';
import { TipoService } from 'src/app/shared/services/tipo/tipo.service';
import { ProductsService } from 'src/app/shared/services/products.service';
// import { MarcaService } from '../../../@service/marca/marca.service';
// import { TipoService } from '../../../@service/tipo/tipo.service';

@Component({
  selector: 'ngx-productos',
  styleUrls: ['./productos.component.scss'],
  templateUrl: './productos.component.html',
})
export class ProductosComponent extends TableGeneric {
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;

  // public gridData: any[] = [];
  public listGenero: Array<string> = ["Hombre", "Mujer", "Ambos"];
  public listTipo: Array<Type> = [];
  public listMarca: Array<Make> = [];

  constructor(@Inject(ProductsService) private productService: ProductsService,
    @Inject(MarcaService) private marcaService: MarcaService,
    @Inject(TipoService) private tipoService: TipoService,
    private storage: AngularFireStorage,
    private modalService: NgbModal) {
    super();
  }

  public imagenes: Observable<string | null>[] = [];

  ngOnInit() {
    this.columns = [
      { name: 'Codigo', prop: 'code' },
      { name: 'Nombre', prop: 'name' },
      { name: 'Descripcion', prop: 'description' },
      { name: 'Precio', prop: 'price' },
      { name: 'Precio de Venta', prop: 'salePrice' },
      { name: 'Descuento', prop: 'discount' },
    ];
    this.traerProductos();
    this.traerMarcas();
    this.traerTipos();
  }

  traerProductos() {
    this.productService.getProducts().subscribe(
      (datas) => {
        console.log(datas);
        this.datos = [];
        for (let dat of datas) {
          this.datos.push(Object.assign({}, dat.payload.doc.data()));
        }
        console.log(this.datos)
        this.loadDatos();

      })
  }

  traerMarcas() {
    this.marcaService.getMarcas().subscribe(
      (datas) => {
        console.log(datas);
        this.listMarca = [];
        for (let dat of datas) {
          this.listMarca.push(Object.assign({}, dat.payload.doc.data()));
        }
        this.listMarca.sort((n1, n2) => {
          if (n1.description > n2.description) {
            return 1;
          }

          if (n1.description < n2.description) {
            return -1;
          }

          return 0;
        })

      })
  }

  traerTipos() {
    this.tipoService.getTipos().subscribe(
      (datas) => {
        console.log(datas);
        this.listTipo = [];
        for (let dat of datas) {
          this.listTipo.push(Object.assign({}, dat.payload.doc.data()));
        }
      })
  }

  edit: Product;
  idEdit: string;

  addImage(image) {
    const ref = this.storage.ref(image);
    let profileUrl: Observable<string | null>;
    profileUrl = ref.getDownloadURL();
    this.imagenes.push(profileUrl);
  }

  onEdit(content, event) {
    console.log(event)
    this.edit = Object.assign({}, event.dataItem);
    this.idEdit = (<any>this.edit).id;
    this.imagenes = [];
    for (let image of this.edit.pictures) {
      this.addImage(image)
    }
    this.modalService.open(content)
  }

  addHandler(content, event) {
    console.log(event)
    this.imagenes = [];
    this.edit = {
      id: '', name: '', price: 0,
      salePrice: 0,
      discount: 0,
      pictures: [],
      shortDetails: '',
      description: '',
      stock: 0,
      new: true,
      sale: true,
      category: 'Perfume',
      colors: [],
      size: [],
      tags: [],
      variants: [],

      code: '',
      content: 0,
      show: true,
      gender: 'Ambos',
      type: this.listTipo[0],
      make: this.listMarca[0]
    };
    this.idEdit = null;
    // this.edit.make = 'Sin Especificar';
    // this.edit.type = 'Sin Especificar';
    // this.edit.gender = 'Ambos';
    this.modalService.open(content)
  }

  Guardar() {
    this.productService.addProduct(this.idEdit, this.edit).then(data => console.log(data))
  }

  Disabled() {
    this.edit.show = false;
    this.productService.addProduct(this.idEdit, this.edit).then(data => console.log(data))
  }

  Enabled() {
    this.edit.show = true;
    this.productService.addProduct(this.idEdit, this.edit).then(data => console.log(data))
  }

  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  mostrar = false;

  uploadFile(event) {
    if (this.idEdit == null) {
      this.edit.id = this.productService.db.createId();
      this.idEdit = this.edit.id;
    }
    const file = event.target.files[0];
    const filePath = this.edit.id + '_' + this.edit.pictures.length;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.edit.pictures.push(filePath)
        this.addImage(filePath);
        this.mostrar = true;
      })
    )
      .subscribe()
  }

}
