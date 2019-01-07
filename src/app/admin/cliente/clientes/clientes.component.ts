import { Component, ViewChild, TemplateRef, Inject } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { TableGeneric } from 'src/app/shared/tableGeneric/tableGeneric.component';
import { ClienteService } from 'src/app/shared/services/cliente/cliente.service';
import { LocalidadService } from 'src/app/shared/services/localidad/localidad.service';
import { Cliente } from 'src/app/shared/classes/cliente';

// import { ClienteService } from '../../../@service/cliente/cliente.service';
// import { Cliente } from '../../../@model/cliente';
// import { TableGeneric } from '../../../@theme/components';
// import { LocalidadService } from '../../../@service/localidad/localidad.service';

@Component({
  selector: 'ngx-Clientes',
  styleUrls: ['./Clientes.component.scss'],
  templateUrl: './Clientes.component.html',
})
export class ClientesComponent extends TableGeneric {
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;
  public listLocalidad: Array<any> = []
  public listProvincia: Array<any> = [
    { id: 1, nombre: "Buenos Aires" }, { id: 2, nombre: "Capital Federal" },
    { id: 3, nombre: "Catamarca" }, { id: 4, nombre: "Chaco" },
    { id: 5, nombre: "Chubut" }, { id: 6, nombre: "Córdoba" },
    { id: 7, nombre: "Corrientes" }, { id: 8, nombre: "Entre Ríos" },
    { id: 9, nombre: "Formosa" }, { id: 10, nombre: "Jujuy" },
    { id: 11, nombre: "La Pampa" }, { id: 12, nombre: "La Rioja" },
    { id: 13, nombre: "Mendoza" }, { id: 14, nombre: "Misiones" },
    { id: 15, nombre: "Neuquén" }, { id: 16, nombre: "Río Negro" },
    { id: 17, nombre: "Salta" }, { id: 18, nombre: "San Juan" },
    { id: 19, nombre: "San Luis" }, { id: 20, nombre: "Santa Cruz" },
    { id: 21, nombre: "Santa Fé" }, { id: 22, nombre: "Santiago del Estero" },
    { id: 23, nombre: "Tierra del Fuego" }, { id: 24, nombre: "Tucumán" }
  ]

  public disabled = true;

  constructor(
    @Inject(ClienteService) private productService: ClienteService,
    @Inject(LocalidadService) private localidadService: LocalidadService,
    private modalService: NgbModal) {
    super();
  }

  // public imagenes: Observable<string | null>[] = [];

  ngOnInit() {
    this.columns = [
      { name: 'Nombre', prop: 'nombre' },
      { name: 'Email', prop: 'email' },
      { name: 'Localidad', prop: 'direccion.localidad.nombre' },
      { name: 'Direccion', prop: 'direccion.calle' },
      { name: 'Celular', prop: 'celular' },
    ];
    this.traerClientes();
  }

  traerClientes() {
    this.productService.getClientes().subscribe(
      (datas) => {
        console.log(datas);
        this.datos = [];
        for (let dat of datas) {
          this.datos.push(Object.assign({}, dat.payload.doc.data()));
        }
        this.loadDatos();

      })
  }

  edit: Cliente;
  idEdit: string;

  onEdit(content, event) {
    console.log(event)
    this.disabled = true;
    this.edit = Object.assign({}, event.dataItem);
    this.idEdit = (<any>this.edit).id;
    this.cargarlocalidades(this.edit.direccion.localidad.provincia.id)
    // for (let image of this.edit.imagenes) {
    //   this.addImage(image.imageUrl)
    // }
    this.modalService.open(content, { size: "lg" })
  }

  addHandler(content, event) {
    console.log(event)
    this.disabled = false;
    this.edit = new Cliente();
    this.idEdit = null;
    this.edit.direccion.localidad.provincia = this.listProvincia[0];
    this.cargarlocalidades(this.edit.direccion.localidad.provincia.id)
    console.log(this.edit)
    // this.edit.marca = this.listMarca[0];
    // this.edit.tipo = this.listTipo[0];
    // this.edit.genero = this.listGenero[2];
    this.modalService.open(content, { size: "lg" })
  }

  Guardar() {
    if (this.idEdit == null) {
      if (this.datos.findIndex(e => e.email === this.edit.email) == -1)
        this.productService.addCliente(this.idEdit, this.edit).then(data => console.log(data))
      else
        window.alert("YA HAY UN CLIENTE CON ESE EMAIL")
    }
    else
      this.productService.addCliente(this.idEdit, this.edit).then(data => console.log(data))
  }

  cargarlocalidades(id) {
    if (this.edit.direccion.localidad.provincia.id != id)
      this.edit.direccion.localidad.provincia = this.listProvincia.find(myObj => myObj.id == id);
    this.localidadService.getLocalidades(id)
      .subscribe(
        localidades => {
          this.listLocalidad = localidades;
          this.edit.direccion.localidad = Object.assign({}, this.listLocalidad[0]);
        },
        error => {
          console.log(<any>error);
        });
  }

  cambiarlocalidad(id) {
    this.edit.direccion.localidad = Object.assign({}, this.listLocalidad.find(myObj => myObj.id == id));
  }

  // Disabled() {
  //   this.edit.mostrar = false;
  //   this.productService.addCliente(this.idEdit, this.edit).then(data => console.log(data))
  // }

  // Enabled() {
  //   this.edit.mostrar = true;
  //   this.productService.addCliente(this.idEdit, this.edit).then(data => console.log(data))
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
