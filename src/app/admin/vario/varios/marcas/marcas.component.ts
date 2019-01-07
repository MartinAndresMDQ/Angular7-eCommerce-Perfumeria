// import { NbMenuService } from '@nebular/theme';
import { Component, ViewChild, TemplateRef, Inject } from '@angular/core';

// import { LocalDataSource } from 'ng2-smart-table';
// import { MarcaService } from '../../../../@service/marca/marca.service';
// import { Make } from '../../../../@model/product';
// import { TableGeneric } from '../../../../@theme/components';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MarcaService } from 'src/app/shared/services/marca/marca.service';
import { TableGeneric } from 'src/app/shared/tableGeneric/tableGeneric.component';
import { Make } from 'src/app/shared/classes/product';


@Component({
  selector: 'ngx-marcas',
  styleUrls: ['./marcas.component.scss'],
  templateUrl: './marcas.component.html',
})
export class MarcasComponent extends TableGeneric {
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;

  constructor(
    @Inject(MarcaService) private marcaService: MarcaService) {
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
    // this.cargar();
    this.traerMarcas();
    this.sort = [{
      field: 'description',
      dir: 'asc'
    }];
    // 
  }

  traerMarcas() {
    this.marcaService.getMarcas().subscribe(
      (datas) => {
        console.log(datas);
        this.datos = [];
        for (let dat of datas) {
          this.datos.push(Object.assign({}, dat.payload.doc.data()));
        }
        this.loadDatos();
      })
  }

  cargar() {
    let marcas = [
      'SIN ESPECIFICAR',
      'ABERCROMBIE',
      'ACQUA DI PARMA',
      'ACQUA DI PORTOFINO',
      'ACQUA DI SELVA',
      'ADIDAS',
      'ADOLFO DOMINGUEZ',
      'AGENT PROVOCATEUR',
      'ALAÏA',
      "ALESSANDRO DELL' ACQU",
      'ALEXANDRE J.',
      'ALVAREZ GOMEZ',
      'ALYSSA ASHLEY',
      'AMERICAN CREW',
      'AMOUAGE',
      'ANGEL SCHLESSER',
      'ANNICK GOUTAL',
      'ARAMIS',
      'ARMAND BASI',
      'ARMANI',
      'ASTOR',
      'ATKINSONS',
      'AZZARO',

      'BABARIA',
      'BALENCIAGA',
      'BALMAIN',
      'BARBIE',
      'BAYLIS & HARDING',
      'BELLA AURORA',
      'BENETTON',
      'BERDOUES',
      'BIEN ETRE',
      'BIOTHERM',
      'BLOOD CONCEPT',
      'BOND Nº 9',
      'BOTTEGA VENETA',
      'BOUCHERON',
      'BRECOURT',
      'BRITNEY SPEARS',
      'BRUNO BANANI',
      'BURBERRY',
      'BVLGARI',
      'BYREDO',

      "CA'CHAREL",
      'CALVIN KLEIN',
      'CARITA',
      'CAROLINA HERRERA',
      'CARON',
      'CARTHUSIA',
      'CARTIER',
      'CHANSON',
      'CHEVIGNON',
      'CHLOE',
      'CHOPARD',
      'CLARINS',
      'CLINIQUE',
      'COMME DES GARÇONS',
      'COURREGES',
      'CREED',
      'CRISTIANO RONALDO',
      'CROSSMEN',
      'CUSTO',

      'DAVID MALLETT',
      'DAVIDOFF',
      'DEBORAH',
      'DECLEOR',
      'DESIGUAL',
      'DIESEL',
      'DIOR',
      'DIPTYQUE',
      'DOLCE & GABBANA',
      'DONNA KARAN',
      'DSQUARED',
      'DSQUARED2',
      'DUNHILL',

      'ELIE SAAB',
      'ELIZABETH ARDEN',
      'ELIZABETH TAYLOR',
      'ESCADA',
      'ESCENTRIC MOLECULES',
      'ESSENCE',
      'ESTEE LAUDER',
      "ETAT LIBRE D'ORANGE",
      'ETRO',

      'FABERGE',
      'FENDI',
      'FERRARI',
      'FROZEN',

      'GEOFFREY BEENE',
      'GIANFRANCO FERRE',
      'GIORGIO BEVERLY HILLS',
      'GIVENCHY',
      'GLORIA VANDERBILT',
      'GOUTAL',
      'GRES',
      'GUCCI',
      'GUERLAIN',
      'GUESS',
      'GUY LAROCHE',

      'HALLOWEEN',
      'HERMES',
      'HOLLISTER',
      'HOUBIGANT',
      'HUGH PARSONS',
      'HUGO BOSS',

      'ICEBERG',
      'IDC',
      'IL PROFVMO',
      'IMPERIO LUSSO',
      'ISSEY MIYAKE',

      'JACK BLACK',
      'JACOMO',
      'JACQUES BOGART',
      'JEAN COUTURIER',
      'JEAN LOUIS SCHERRER',
      'JEAN PATOU',
      'JEAN PAUL GAULTIER',
      'JEANNE PIAUBERT',
      'JEANPIERREMARNE',
      'JENNIFER LOPEZ',
      'JESUS DEL POZO',
      'JIMMY CHOO',
      'JO MALONE',
      'JOHN VARVATOS',
      'JOOP!',
      'JOVAN',
      'JUICY COUTURE',
      'JULIETTE HAS A GUN',
      'JUSTIN BIEBER',
      'JUVENA',

      'KANEBO',
      'KARL LAGERFELD',
      'KENZO',
      'KERASTASE',
      'KOSE',

      "L'ARTISAN",
      "L'ORAL MYTHIC OIL",
      "L'OREAL EXPERT",
      "L'OREAL PROFESSIONAL",
      "L'OREAL TECNI.ART",
      'LA PERLA',
      'LA PRAIRIE',
      'LAB SERIES',
      'LACOSTE',
      'LADY GAGA',
      'LALIQUE',
      'LANCASTER',
      'LANCOME',
      'LANVIN',
      'LAURA BIAGIOTTI',
      'LIU JO',
      'LOEWE',
      'LOEWE 001',
      'LOLITA LEMPICKA',
      'LUXE',

      'MACADAMIA',
      'MANCERA',
      'MANDARINA DUCK',
      'MARC JACOBS',
      'MARLIES MOLLER',
      'MAROUSSIA',
      'MASSIMO DUTTI',
      'MATRIX',
      'MAUBOUSSIN',
      'MICALLEF',
      'MICHAEL KORS',
      'MIU MIU',
      'MOLYNEUX',
      'MOMO',
      'MONTALE',
      'MONTANA',
      'MONTBLANC',
      'MONTLBANC',
      'MOSCHINO',
      'MUGLER',
      'MYTHIC OIL',

      'NAFNAF',
      'NAOMI CAMPBELL',
      'NARCISO RODRIGUEZ',
      'NASOMATTO',
      'NAUTICA',
      'NIKOS',
      'NINA RICCI',
      'NINO CERRUTI',

      'ONE DIRECTION',
      'OSCAR DE LA RENTA',

      'PACHA',
      'PACO RABANNE',
      'PALOMA PICASSO',
      'PANAMA 1924',
      'PARFUMS DE MARLY',
      'PARIS HILTON',
      'PASCAL MORABITO',
      'PAUL SMITH',
      "PENHALIGON'S",
      'PERFUMES MARLY',
      'PERRIS MONTECARLO',
      'PERRY ELLIS',
      'PIERRE CARDIN',
      'PLAYBOY',
      'POLICE',
      'PRADA',
      'PROFIBER',
      'PRORASO',
      'PUIG',
      'PUMA',

      'RALPH LAUREN',
      'RAMON MONEGAL',
      'REDKEN',
      'REMINISCENCE',
      'RENE FURTERER',
      'REPETTO',
      'REVLON',
      'REXONA',
      'RIHANNA',
      'RIMMEL',
      'ROBERTO CAVALLI',
      'ROBERTO VERINO',
      'ROC',
      'ROCHAS',
      'ROGER & GALLET',

      'SAINT TROPEZ',
      'SALERM',
      'SALVATORE FERRAGAMO',
      'SARAH JESSICA PARKER',
      'SCENTED GARDEN',
      'SCHWARZKOPF',
      'SEANERGY',
      'SEBASTIAN',
      'SENSAI',
      'SERGE LUTENS',
      'SERGIO SOLDANO',
      'SERRA & FONSECA',
      'SEX IN TOWN',
      'SHISEIDO',
      'SISLEY',
      'STARCK',
      'STENDHAL',

      'TABAC',
      'TARTINE & CHOCOLAT',
      'TED LAPIDUS',
      'THE DIFFERENT COMPANY',
      'The Nights Collection',
      'THIERRY MUGLER',
      'TIFFANY & CO.',
      'TIGI',
      'TOMMY HILFIGER',
      'TOUS',
      'TUSCAN',

      'UNGARO',

      'VALENTINO',
      'VALMONT',
      'VAN CLEEF & ARPELS',
      'VERA WANG',
      'VERSACE',
      'VICMARTIN',
      'VICTORIA S SECRET',
      'VICTORIO & LUCCHINO',
      'VIKTOR & ROLF',
      'VISCONTI DI MODRONE',
      'VIVIENNE WESTWOOD',

      'WELLA',

      'XERJOFF',
      'YACHT MAN',
      'YARDLEY',
      'YVES SAINT LAURENT',
      'ZADIG & VOLTAIRE'
    ]
    let i = 1;
    for (let dato of marcas) {
      i++
      this.marcaService.save({ id: '', description: dato }, true);
      if (i == marcas.length)
        console.log("FINISH");
    }

  }

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
    const product: Make = formGroup.value;
    // console.log(product)
    this.marcaService.save(product, isNew);

    sender.closeRow(rowIndex);
  }

  public removeHandler({ dataItem }) {
    this.marcaService.remove(dataItem);
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }

}
