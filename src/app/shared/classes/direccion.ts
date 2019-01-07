export class Provincia {
  id: number;
  nombre: string;
  constructor(
    id?: number,
    nombre?: string) {
    this.id = id || 0;
    this.nombre = nombre || "";
  }
}

export class Localidad {
  id: number;
  nombre: string;
  codigopostal: string;
  provincia: Provincia;
  constructor(
    id?: number,
    nombre?: string,
    codigopostal?: string,
    provincia?: Provincia) {
    this.id = id || 0;
    this.nombre = nombre || "";
    this.codigopostal = codigopostal || "";
    this.provincia = provincia || new Provincia();
  }
}

export class Direccion {
  localidad: Localidad;
  zona: string;
  calle: string;
  numero: string;
  piso: string;
  departamento: string;
  lat: string;
  lng: string;
  constructor(
    localidad?: Localidad,
    zona?: string,
    calle?: string,
    numero?: string,
    piso?: string,
    departamento?: string,
    lat?: string,
    lng?: string) {
    this.localidad = localidad || new Localidad();
    this.zona = zona || "";
    this.calle = calle || "";
    this.numero = numero || "";
    this.piso = piso || "";
    this.departamento = departamento || "";
    this.lat = lat || "";
    this.lng = lng || "";
  }
}
