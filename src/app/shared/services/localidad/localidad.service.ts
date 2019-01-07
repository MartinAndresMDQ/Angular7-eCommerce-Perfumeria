import { Injectable, Inject } from '@angular/core';
import {throwError as observableThrowError,  Observable } from 'rxjs';

// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { Localidad } from '../../@model/direccion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError } from 'rxjs/operators';

@Injectable()
export class LocalidadService {

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
  
  // public itemsCollection: AngularFirestoreCollection<Localidad>;
  // items: Observable<Localidad[]>;
  constructor(@Inject(HttpClient) private http: HttpClient) {
    // this.itemsCollection = this.db.collection<Localidad>('Localidad');
    // this.items = this.itemsCollection.valueChanges();
  }
  
  private _UbicacionUrlJson = './assets/data/json/bsas.json';

  getLocalidades(id: number): Observable<any> {
    
    switch (id.toString()) {
      case "1":
        this._UbicacionUrlJson='./assets/data/json/bsas.json';
        break;
      case "2":
        this._UbicacionUrlJson='./assets/data/json/cf.json';
        break;
      case "3":
        this._UbicacionUrlJson='./assets/data/json/catamarca.json';
        break;
      case "4":
        this._UbicacionUrlJson='./assets/data/json/chaco.json';
        break;
      case "5":
        this._UbicacionUrlJson='./assets/data/json/chubut.json';
        break;
      case "6":
        this._UbicacionUrlJson='./assets/data/json/cordoba.json';
        break;
      case "7":
        this._UbicacionUrlJson='./assets/data/json/corrientes.json';
        break;
      case "8":
        this._UbicacionUrlJson='./assets/data/json/entrerios.json';
        break;
      case "9":
        this._UbicacionUrlJson='./assets/data/json/formosa.json';
        break;
      case "10":
        this._UbicacionUrlJson='./assets/data/json/jujuy.json';
        break;
      case "11":
        this._UbicacionUrlJson='./assets/data/json/lapampa.json';
        break;
      case "12":
        this._UbicacionUrlJson='./assets/data/json/larioja.json';
        break;
      case "13":
        this._UbicacionUrlJson='./assets/data/json/mendoza.json';
        break;
      case "14":
        this._UbicacionUrlJson='./assets/data/json/misiones.json';
        break;
      case "15":
        this._UbicacionUrlJson='./assets/data/json/neuquen.json';
        break;
      case "16":
        this._UbicacionUrlJson='./assets/data/json/rionegro.json';
        break;
      case "17":
        this._UbicacionUrlJson='./assets/data/json/salta.json';
        break;
      case "18":
        this._UbicacionUrlJson='./assets/data/json/sanjuan.json';
        break;
      case "19":
        this._UbicacionUrlJson='./assets/data/json/sanluis.json';
        break;
      case "20":
        this._UbicacionUrlJson='./assets/data/json/santacruz.json';
        break;
      case "21":
        this._UbicacionUrlJson='./assets/data/json/santafe.json';
        break;
      case "22":
        this._UbicacionUrlJson='./assets/data/json/santiago.json';
        break;
      case "23":
        this._UbicacionUrlJson='./assets/data/json/tierra.json';
        break;
      case "24":
        this._UbicacionUrlJson='./assets/data/json/tucuman.json';
        break;
    }
    // console.log(this._UbicacionUrlJson)
    return this.http.get(this._UbicacionUrlJson);
  }


  public extractData(res: Response) {

    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    //console.log(res);
    let body = res.json();
    return body;
  }
  

  public handleError(error: any) {
    console.error(error); // log to console instead
    let errMsg = error.error;
    // let errorHandler = new ErrorHandler(0, new Date(), error.message, error.status, error.error, error.statusText, error.url, error.name);
    //console.log("La Puta madre");
    return observableThrowError(errMsg);
  }
  // public addLocalidad(id: string, Localidad: Localidad): Promise<void> {
  //   if (id == null)
  //     id = this.db.createId();
  //     Localidad.id = id;
  //   return this.itemsCollection.doc(id).set(Object.assign({}, JSON.parse(JSON.stringify(Localidad))));
  // }

}
