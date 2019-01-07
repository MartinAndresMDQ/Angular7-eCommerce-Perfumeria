import { Component, ViewChild, TemplateRef, Inject } from '@angular/core';

import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TableGeneric } from 'src/app/shared/tableGeneric/tableGeneric.component';
import { PedidoService } from 'src/app/shared/services/pedido/pedido.service';
import { Order } from 'src/app/shared/classes/order';
import { Cliente } from 'src/app/shared/classes/cliente';
import { Direccion } from 'src/app/shared/classes/direccion';

// import { PedidoService } from '../../../@service/pedido/pedido.service';
// // import { Pedido } from '../../../@model/pedido';
// import { TableGeneric } from '../../../@theme/components';
// import { Order } from '../../../@model/order';
// import { Cliente } from '../../../@model/cliente';
// import { Direccion } from '../../../@model/direccion';

@Component({
  selector: 'ngx-pedidos',
  styleUrls: ['./pedidos.component.scss'],
  templateUrl: './pedidos.component.html',
})
export class PedidosComponent extends TableGeneric {
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;

  // public gridData: any[] = [];
  // public listGenero: Array<Genero> = [{ descripcion: "Hombre" }, { descripcion: "Mujer" }, { descripcion: "Ambos" }];
  // public listTipo: Array<Tipo> = [{ descripcion: "Sin Especificar" }, { descripcion: "NUEVO" }, { descripcion: "VIEJO" }];
  // public listMarca: Array<Marca> = [{ nombre: "Sin Especificar", descripcion: "Sin Especificar" }, { nombre: "TEST", descripcion: "TEST" }];
  public disabled = true;

  constructor(
    @Inject(PedidoService) private pedidoService: PedidoService,
    private modalService: NgbModal) {
    super();
  }

  public imagenes: Observable<string | null>[] = [];

  ngOnInit() {
    this.columns = [
      { name: 'Codigo', prop: 'codigo' },
      { name: 'Cliente', prop: 'cliente.nombre' },
      { name: 'Fecha', prop: 'fecha' },
      { name: 'estado', prop: 'estado.descripcion' },
      { name: 'Pago', prop: 'pago.descripcion' },
    ];
    this.traerPedidos();
  }

  traerPedidos() {
    this.pedidoService.getPedidos().subscribe(
      (datas) => {
        console.log(datas);
        this.datos = [];
        for (let dat of datas) {
          this.datos.push(Object.assign({}, dat.payload.doc.data()));
        }
        this.loadDatos();

      })
  }

  edit: Order;
  idEdit: string;

  onEdit(content, event) {
    console.log(event)
    this.edit = Object.assign({}, event.dataItem);
    this.idEdit = (<any>this.edit).id;

    this.modalService.open(content)
  }

  addHandler(content, event) {
    console.log(event)
    this.edit = {
      shippingDetails: '',
      products: [],
      orderId: '',
      totalAmount: 0,

      code: '',
      client: new Cliente(),
      discount: 0,
      date: new Date(),
      state: { description: '' },
      address: new Direccion(),
      payment: { description: '' },
      comment: ''
    };
    this.idEdit = null;
    // this.edit.marca = this.listMarca[0];
    // this.edit.tipo = this.listTipo[0];
    // this.edit.genero = this.listGenero[2];
    this.modalService.open(content)
  }

  Guardar() {
    this.pedidoService.addPedido(this.idEdit, this.edit).then(data => console.log(data))
  }

  // Disabled() {
  //   this.edit.mostrar = false;
  //   this.pedidoService.addPedido(this.idEdit, this.edit).then(data => console.log(data))
  // }

  // Enabled() {
  //   this.edit.mostrar = true;
  //   this.productService.addProduct(this.idEdit, this.edit).then(data => console.log(data))
  // }

  // uploadPercent: Observable<number>;
  // downloadURL: Observable<string>;
  // mostrar=false;


  // get status(){
  //   if (this.uploadPercent <= 25) {
  //     return 'danger';
  //   } else if (this.uploadPercent <= 50) {
  //     return 'warning';
  //   } else if (this.uploadPercent <= 75) {
  //     return 'info';
  //   } else {
  //     return 'success';
  //   }
  // }

  // uploadFile(event) {
  //   const file = event.target.files[0];
  //   const filePath = this.edit.id + '_' + this.edit.imagenes.length;
  //   const fileRef = this.storage.ref(filePath);
  //   const task = this.storage.upload(filePath, file);

  //   // observe percentage changes
  //   this.uploadPercent = task.percentageChanges();
  //   // get notified when the download URL is available
  //   task.snapshotChanges().pipe(
  //     finalize(() => {
  //       this.downloadURL = fileRef.getDownloadURL();
  //       this.edit.imagenes.push(new Image(filePath))
  //       this.addImage(filePath);
  //       this.mostrar=true;
  //     })
  //   )
  //     .subscribe()
  // }

}
