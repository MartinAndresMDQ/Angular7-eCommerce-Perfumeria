import { Component, ViewChild, TemplateRef, Inject } from '@angular/core';

import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TableGeneric } from 'src/app/shared/tableGeneric/tableGeneric.component';
import { TipoService } from 'src/app/shared/services/tipo/tipo.service';
import { Type } from 'src/app/shared/classes/product';

@Component({
  selector: 'ngx-tipos',
  styleUrls: ['./tipos.component.scss'],
  templateUrl: './tipos.component.html',
})
export class TiposComponent extends TableGeneric {
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;

  constructor(
    @Inject(TipoService) private tipoService: TipoService) {
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
    this.traerTipos();
    this.sort = [{
      field: 'description',
      dir: 'asc'
    }];
  }

  traerTipos() {
    this.tipoService.getTipos().subscribe(
      (datas) => {
        console.log(datas);
        this.datos = [];
        for (let dat of datas) {
          this.datos.push(Object.assign({}, dat.payload.doc.data()));
        }
        this.loadDatos();
      })
  }

  // edit: Type;
  // idEdit: string;

  // onEdit(content, event) {
  //   console.log(event)
  //   this.edit = Object.assign({}, event.dataItem);
  //   this.idEdit = (<any>this.edit).id;
  // }

  // Guardar() {
  //   this.tipoService.addTipo(this.idEdit, this.edit).then(data => console.log(data))
  // }



  public formGroup: FormGroup;
  private editedRowIndex: number;

  public addHandler({ sender }) {
    this.closeEditor(sender);
    this.formGroup = new FormGroup({
      'id': new FormControl(''),
      'description': new FormControl('', Validators.required)
    });
    sender.addRow(this.formGroup);
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.formGroup = new FormGroup({
      'id': new FormControl(dataItem.id),
      'description': new FormControl(dataItem.description, Validators.required)
    });

    this.editedRowIndex = rowIndex;

    sender.editRow(rowIndex, this.formGroup);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, formGroup, isNew }) {
    const product: Type = formGroup.value;

    this.tipoService.save(product, isNew);

    sender.closeRow(rowIndex);
  }

  public removeHandler({ dataItem }) {
    this.tipoService.remove(dataItem);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }
}
