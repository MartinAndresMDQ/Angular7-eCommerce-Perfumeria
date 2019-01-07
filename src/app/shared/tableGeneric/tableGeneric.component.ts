import { GridDataResult, PageChangeEvent, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, CompositeFilterDescriptor, filterBy, process } from '@progress/kendo-data-query';

export class TableGeneric {
  public height: number = window.innerHeight - 350;
  public multiple: boolean = false;
  public cargando: boolean = false;
  public pageable: boolean = true;
  public allowUnsort: boolean = true;
  public filterable: boolean = true;
  public selectable: boolean = true;
  public pageSize: number = 25;
  public skip: number = 0;

  public sortable = {
    allowUnsort: this.allowUnsort,
    mode: this.multiple ? 'multiple' : 'single'
  };

  public sort: SortDescriptor[] = [];
  public datos: any[] = [];
  public gridView: GridDataResult;
  public filter: CompositeFilterDescriptor;

  public columns: any[] = [];
  public buscar: string = "";

  public pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    this.loadDatos();
  }

  public sliderChange(pageIndex: number): void {
    this.skip = (pageIndex - 1) * this.pageSize;
  }

  sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadDatos();
  }

  public loadDatos(): void {
    let filter = filterBy(this.datos, this.filter);

    if (this.buscar != "")
      filter = filterBy(this.props, this.filter);
    this.gridView = {
      data: orderBy(filter, this.sort).slice(this.skip, this.skip + this.pageSize),
      total: filter.length
    };
    this.cargando = true;
  }

  public dataStateChange({ skip, take, sort }: DataStateChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    this.sort = sort;

    this.gridView = process(this.datos, {
      skip: this.skip,
      take: this.pageSize,
      filter: this.filter
    });
  }

  private props = [];
  updateFilter() {
    this.skip = 0;
    const val = this.buscar.toString().toLowerCase();
    if (val != "") {
      this.props = [];
      for (let i of this.columns) {
        let ind = i.prop.toString().indexOf(".");
        if (ind == -1) {
          let name = i.prop.toString().toLowerCase();
          let temp = this.datos.filter(d => {
            let lala = false;
            if ((d[name]) != null) {
              let index = (d[name]).toString().toLowerCase().indexOf(val);
              if (index !== -1 && this.props.findIndex(e => e.id == d.id) < 0)
                lala = true;
            }
            return lala;
          });
          this.props.push(...temp);

        }
        else {
          let name1 = i.prop.toString().substring(0, ind);
          let name2 = i.prop.toString().substring(ind + 1, i.prop.toString().length);
          let ind2 = name2.toString().indexOf(".");;
          if (ind2 == -1) {
            let temp = this.datos.filter(d => {
              let lala = false;
              if ((d[name1][name2]) != null) {
                let index = (d[name1][name2]).toString().toLowerCase().indexOf(val);
                if (index !== -1 && this.props.findIndex(e => e.id == d.id) < 0)
                  lala = true;
              }
              return lala;
            });
            this.props.push(...temp);
          }
          else {
            let name2 = i.prop.toString().substring(ind + 1, ind + ind2+1);
            let name3 = i.prop.toString().substring(ind + ind2 + 2, i.prop.toString().length);
            let temp = this.datos.filter(d => {
              let lala = false;
              if ((d[name1][name2][name3]) != null) {
                let index = (d[name1][name2][name3]).toString().toLowerCase().indexOf(val);
                if (index !== -1 && this.props.findIndex(e => e.id == d.id) < 0)
                  lala = true;
              }
              return lala;
            });
            this.props.push(...temp);
          }

        }
      }
      this.gridView = {
        data: orderBy(filterBy(this.props, this.filter), this.sort).slice(this.skip, this.skip + this.pageSize),
        total: this.props.length
      };
    }
    else
      this.loadDatos();
  }
}
